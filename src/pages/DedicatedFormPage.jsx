import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formConfigs } from '../data/formConfigs.js';
import { submitForm } from '../services/formService.js';
import {
  FormShell,
  TextField,
  TextArea,
  SelectField,
  CheckboxGroup,
  RadioGroup,
  FileField,
  ConsentCheckbox,
  SubmitButton,
  FormSuccess
} from '../components/forms/FormComponents.jsx';
import '../styles/DedicatedForms.css';

export default function DedicatedFormPage({ formKey: propFormKey }) {
  const { type: paramType } = useParams();
  const formKey = propFormKey || paramType;
  const config = formConfigs[formKey] || formConfigs['volunteer'];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const formLoadTimeRef = useRef(Date.now());

  // Reset form when switching between form pages
  useEffect(() => {
    formLoadTimeRef.current = Date.now();
    setFormData({
      consent: false,
      honeypot_website: ''
    });
    setErrors({});
    setTouched({});
    setSubmitError(null);
    setSubmitted(false);
  }, [formKey]);


  // Field validation function
  const validateField = (field, value) => {
    if (field.required) {
      if (field.type === 'checkboxGroup') {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return `Please select at least one ${field.label.toLowerCase()}.`;
        }
      } else if (!value || (typeof value === 'string' && !value.trim())) {
        return `${field.label} is required.`;
      }
    }

    if (value && typeof value === 'string') {
      if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
      }

      if (field.type === 'tel') {
        const phoneRegex = /^[\d\s+\-()]{8,15}$/;
        if (!phoneRegex.test(value.trim())) {
          return 'Please enter a valid phone number (8–15 digits).';
        }
      }

      if (field.maxLength && value.length > field.maxLength) {
        return `${field.label} cannot exceed ${field.maxLength} characters.`;
      }
    }

    return null;
  };

  // Change handler
  const handleFieldChange = (fieldId, val) => {
    setFormData((prev) => ({ ...prev, [fieldId]: val }));
    if (touched[fieldId]) {
      const fieldDef = config.fields.find((f) => f.id === fieldId);
      if (fieldDef) {
        const err = validateField(fieldDef, val);
        setErrors((prev) => ({ ...prev, [fieldId]: err }));
      }
    }
  };

  // Blur handler for real-time validation
  const handleFieldBlur = (fieldDef) => {
    setTouched((prev) => ({ ...prev, [fieldDef.id]: true }));
    const val = formData[fieldDef.id];
    const err = validateField(fieldDef, val);
    setErrors((prev) => ({ ...prev, [fieldDef.id]: err }));
  };

  // Submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors = {};
    let firstErrorFieldId = null;

    config.fields.forEach((field) => {
      const val = formData[field.id];
      const err = validateField(field, val);
      if (err) {
        newErrors[field.id] = err;
        if (!firstErrorFieldId) firstErrorFieldId = field.id;
      }
    });

    // Validate consent checkbox
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted to submit this form.';
      if (!firstErrorFieldId) firstErrorFieldId = 'consent';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Mark all as touched
      const allTouched = {};
      config.fields.forEach((f) => { allTouched[f.id] = true; });
      allTouched.consent = true;
      setTouched(allTouched);

      // Focus the first invalid field
      if (firstErrorFieldId) {
        const el = document.getElementById(firstErrorFieldId);
        el?.focus?.();
      }
      return;
    }

    // Submit payload
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        _formLoadTime: formLoadTimeRef.current
      };

      await submitForm(config.id, payload);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dedicated-form-page" style={{ paddingTop: '86px' }}>
      {/* Page Header */}
      <section className="dedicated-form-hero">
        <div className="shell">
          <span className="dedicated-form-badge">{config.badge || 'Get Involved'}</span>
          <h1>{config.title}</h1>
          <p>{config.intro}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="dedicated-form-main">
        <div className="shell">
          {submitted ? (
            <FormSuccess
              title={`${config.title} Request Received!`}
              message="Thank you for submitting your details to KSLI. Our team will review your submission and contact you within 2 working days."
              onReset={() => {
                setSubmitted(false);
                setFormData({ consent: false, honeypot_website: '' });
                formLoadTimeRef.current = Date.now();
              }}
            />
          ) : (
            <FormShell
              title={config.title}
              intro={config.intro}
              onSubmit={handleSubmit}
              error={submitError}
              isSubmitting={isSubmitting}
            >
              {/* Spam Honeypot Field (Hidden from normal users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="honeypot_website">Leave this field blank</label>
                <input
                  id="honeypot_website"
                  type="text"
                  name="honeypot_website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot_website || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, honeypot_website: e.target.value }))}
                />
              </div>

              {/* Dynamic Field Generator */}
              {config.fields.map((field) => {
                const val = formData[field.id];
                const err = touched[field.id] ? errors[field.id] : null;

                switch (field.type) {
                  case 'textarea':
                    return (
                      <TextArea
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        value={val || ''}
                        onChange={(v) => handleFieldChange(field.id, v)}
                        onBlur={() => handleFieldBlur(field)}
                        error={err}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        required={field.required}
                        helpText={field.helpText}
                      />
                    );

                  case 'select':
                    return (
                      <SelectField
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        value={val || ''}
                        onChange={(v) => handleFieldChange(field.id, v)}
                        onBlur={() => handleFieldBlur(field)}
                        error={err}
                        options={field.options}
                        placeholder={field.placeholder}
                        required={field.required}
                        helpText={field.helpText}
                      />
                    );

                  case 'checkboxGroup':
                    return (
                      <CheckboxGroup
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        values={val || []}
                        onChange={(v) => handleFieldChange(field.id, v)}
                        error={err}
                        options={field.options}
                        required={field.required}
                        helpText={field.helpText}
                      />
                    );

                  case 'radioGroup':
                    return (
                      <RadioGroup
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        value={val || ''}
                        onChange={(v) => handleFieldChange(field.id, v)}
                        error={err}
                        options={field.options}
                        required={field.required}
                        helpText={field.helpText}
                      />
                    );

                  case 'file':
                    return (
                      <FileField
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        onChange={(file, fileError) => {
                          setFormData((prev) => ({ ...prev, [field.id]: file }));
                          setErrors((prev) => ({ ...prev, [field.id]: fileError }));
                        }}
                        error={err}
                        helpText={field.helpText}
                        required={field.required}
                      />
                    );

                  default: // text, email, tel
                    return (
                      <TextField
                        key={field.id}
                        id={field.id}
                        type={field.type}
                        label={field.label}
                        value={val || ''}
                        onChange={(v) => handleFieldChange(field.id, v)}
                        onBlur={() => handleFieldBlur(field)}
                        error={err}
                        placeholder={field.placeholder}
                        required={field.required}
                        helpText={field.helpText}
                      />
                    );
                }
              })}

              {/* Consent Checkbox */}
              <ConsentCheckbox
                id="consent"
                checked={Boolean(formData.consent)}
                onChange={(checked) => {
                  setFormData((prev) => ({ ...prev, consent: checked }));
                  if (touched.consent) {
                    setErrors((prev) => ({
                      ...prev,
                      consent: checked ? null : 'You must agree to be contacted to submit this form.'
                    }));
                  }
                }}
                error={touched.consent ? errors.consent : null}
              />

              {/* Submit Button */}
              <SubmitButton
                isSubmitting={isSubmitting}
                label={config.submitLabel || 'Submit'}
              />
            </FormShell>
          )}
        </div>
      </main>
    </div>
  );
}
