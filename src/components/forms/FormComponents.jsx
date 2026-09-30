import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Form Building Blocks
 * Accessible, keyboard-navigable, with inline error feedback & live counters.
 */

export function FormShell({ title, intro, children, onSubmit, error, isSubmitting }) {
  return (
    <div className="dedicated-form-wrapper">
      <div className="dedicated-form-card">
        <div className="dedicated-form-header">
          <h2 className="dedicated-form-title">{title}</h2>
          {intro && <p className="dedicated-form-intro">{intro}</p>}
        </div>

        {error && (
          <div className="form-alert-error" role="alert">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={onSubmit} noValidate className="dedicated-form-body">
          {children}
        </form>
      </div>
    </div>
  );
}

export function TextField({
  id,
  label,
  value = '',
  onChange,
  onBlur,
  error,
  placeholder,
  type = 'text',
  required = false,
  helpText
}) {
  return (
    <div className={`form-field-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-field-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        className="form-input"
        required={required}
      />
      {helpText && !error && (
        <span id={`${id}-help`} className="form-field-help">
          {helpText}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function TextArea({
  id,
  label,
  value = '',
  onChange,
  onBlur,
  error,
  placeholder,
  rows = 4,
  maxLength,
  required = false,
  helpText
}) {
  const currentLength = (value || '').length;

  return (
    <div className={`form-field-group ${error ? 'has-error' : ''}`}>
      <div className="form-label-row">
        <label htmlFor={id} className="form-field-label">
          {label} {required && <span className="required-star" aria-hidden="true">*</span>}
        </label>
        {maxLength && (
          <span className={`form-live-counter ${currentLength > maxLength ? 'over-limit' : ''}`}>
            {currentLength} / {maxLength}
          </span>
        )}
      </div>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength ? maxLength + 10 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        className="form-textarea"
        required={required}
      />
      {helpText && !error && (
        <span id={`${id}-help`} className="form-field-help">
          {helpText}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function SelectField({
  id,
  label,
  value = '',
  onChange,
  onBlur,
  error,
  options = [],
  placeholder = 'Select an option...',
  required = false,
  helpText
}) {
  return (
    <div className={`form-field-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-field-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>
      <div className="form-select-wrapper">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
          className="form-select"
          required={required}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
        <span className="form-select-caret" aria-hidden="true">▼</span>
      </div>
      {helpText && !error && (
        <span id={`${id}-help`} className="form-field-help">
          {helpText}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function CheckboxGroup({
  id,
  label,
  values = [],
  onChange,
  options = [],
  error,
  required = false,
  helpText
}) {
  const handleToggle = (val) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  return (
    <fieldset className={`form-fieldset ${error ? 'has-error' : ''}`}>
      <legend className="form-field-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </legend>
      {helpText && <span className="form-field-help">{helpText}</span>}

      <div className="form-checkbox-grid">
        {options.map((opt) => {
          const val = opt.value ?? opt;
          const optLabel = opt.label ?? opt;
          const isChecked = values.includes(val);
          const optionId = `${id}-${val.replace(/[^a-zA-Z0-9]/g, '-')}`;

          return (
            <label key={val} htmlFor={optionId} className={`form-choice-item ${isChecked ? 'is-selected' : ''}`}>
              <input
                type="checkbox"
                id={optionId}
                name={id}
                value={val}
                checked={isChecked}
                onChange={() => handleToggle(val)}
                className="form-checkbox-input"
              />
              <span className="form-choice-text">{optLabel}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}

export function RadioGroup({
  id,
  label,
  value = '',
  onChange,
  options = [],
  error,
  required = false,
  helpText
}) {
  return (
    <fieldset className={`form-fieldset ${error ? 'has-error' : ''}`}>
      <legend className="form-field-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </legend>
      {helpText && <span className="form-field-help">{helpText}</span>}

      <div className="form-radio-grid">
        {options.map((opt) => {
          const val = opt.value ?? opt;
          const optLabel = opt.label ?? opt;
          const isChecked = value === val;
          const optionId = `${id}-${val.replace(/[^a-zA-Z0-9]/g, '-')}`;

          return (
            <label key={val} htmlFor={optionId} className={`form-choice-item ${isChecked ? 'is-selected' : ''}`}>
              <input
                type="radio"
                id={optionId}
                name={id}
                value={val}
                checked={isChecked}
                onChange={() => onChange(val)}
                className="form-radio-input"
              />
              <span className="form-choice-text">{optLabel}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}

export function FileField({
  id,
  label,
  onChange,
  error,
  helpText = 'PDF only, max 5 MB',
  required = false
}) {
  const [fileName, setFileName] = React.useState('');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        onChange(null, 'Only PDF documents are accepted.');
        setFileName('');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        onChange(null, 'File size must be under 5 MB.');
        setFileName('');
        return;
      }
      setFileName(file.name);
      onChange(file, null);
    } else {
      setFileName('');
      onChange(null, null);
    }
  };

  return (
    <div className={`form-field-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-field-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>
      <div className="form-file-box">
        <input
          id={id}
          name={id}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : `${id}-help`}
          className="form-file-input"
        />
        <div className="form-file-visual">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span className="form-file-name">{fileName || 'Choose PDF file or drag & drop'}</span>
        </div>
      </div>
      <span id={`${id}-help`} className="form-field-help">{helpText}</span>
      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function ConsentCheckbox({
  id = 'consent',
  checked,
  onChange,
  error,
  label = 'I agree to KSLI contacting me about this request.'
}) {
  return (
    <div className={`form-field-group form-consent-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-consent-label">
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="form-checkbox-input"
        />
        <span className="form-consent-text">
          {label} <span className="required-star" aria-hidden="true">*</span>
        </span>
      </label>
      {error && (
        <span id={`${id}-error`} className="form-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function SubmitButton({ isSubmitting, label = 'Submit Request' }) {
  return (
    <div className="form-submit-row">
      <button
        type="submit"
        disabled={isSubmitting}
        className="form-submit-button"
      >
        {isSubmitting ? (
          <span className="form-submit-loading">
            <span className="form-spinner" aria-hidden="true" />
            <span>Sending submission...</span>
          </span>
        ) : (
          <span>{label} →</span>
        )}
      </button>
    </div>
  );
}

export function FormSuccess({ title, message, onReset }) {
  return (
    <div className="dedicated-form-wrapper">
      <div className="dedicated-form-card form-success-card">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h2 className="form-success-title">{title || 'Submission Received!'}</h2>
        <p className="form-success-text">
          {message || 'Thank you for reaching out to KSLI. A member of our team will review your details and connect with you within 2 working days.'}
        </p>
        <div className="form-success-actions">
          <Link to="/get-involved" className="btn-primary">
            ← Return to Get Involved
          </Link>
          {onReset && (
            <button type="button" onClick={onReset} className="btn-secondary">
              Submit Another Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
