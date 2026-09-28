/**
 * Dedicated Form Configurations
 * Declarative schemas for all 5 subsections under Get Involved.
 */

export const formConfigs = {
  'volunteer': {
    id: 'volunteer',
    title: 'Volunteer',
    badge: 'Volunteer Pathway',
    intro: 'Join community field actions, habitat restoration, and living lab initiatives.',
    submitLabel: 'Submit Volunteer Application',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'e.g. Priyadarshini Sundaram',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'e.g. priya@example.com',
        required: true
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+91 98765 43210',
        required: false,
        helpText: 'Include country code if outside India (8–15 digits).'
      },
      {
        id: 'city',
        type: 'text',
        label: 'City / Area',
        placeholder: 'e.g. Coimbatore, Pollachi, Erode',
        required: true
      },
      {
        id: 'areasOfInterest',
        type: 'checkboxGroup',
        label: 'Areas of Interest',
        required: true,
        helpText: 'Select at least one area where you wish to contribute.',
        options: [
          'Urban Wetland Restoration (Singanallur Lake)',
          'Native Species Arboretum Maintenance (Microcosm Campus)',
          'Community Farmer Outreach & Event Support (Velan Thiruvizha)',
          'Western Ghats Habitat Cleanups & Bird Censuses',
          'Other'
        ]
      },
      {
        id: 'availability',
        type: 'radioGroup',
        label: 'Availability',
        required: true,
        options: [
          'Weekdays',
          'Weekends',
          'Both Weekdays and Weekends',
          'Specific Events Only'
        ]
      },
      {
        id: 'institution',
        type: 'text',
        label: 'Institution or Organization',
        placeholder: 'College, company, or NGO (optional)',
        required: false
      },
      {
        id: 'experience',
        type: 'textarea',
        label: 'Relevant Experience',
        placeholder: 'Briefly mention any prior volunteering, environmental work, or skills...',
        maxLength: 500,
        required: false
      },
      {
        id: 'whyVolunteer',
        type: 'textarea',
        label: 'Why do you want to volunteer?',
        placeholder: 'Share your motivation for joining KSLI initiatives...',
        maxLength: 500,
        required: true
      }
    ]
  },

  'student-internship': {
    id: 'student-internship',
    title: 'Student Internship',
    badge: 'Student Research Track',
    intro: 'Hands-on practical research, field labs, and climate action for undergraduate and PG scholars.',
    submitLabel: 'Submit Internship Application',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'e.g. R. Karthik',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'e.g. karthik@university.edu',
        required: true
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+91 98765 43210',
        required: false
      },
      {
        id: 'institution',
        type: 'text',
        label: 'Institution / University',
        placeholder: 'e.g. Tamil Nadu Agricultural University / Kumaraguru College of Tech',
        required: true
      },
      {
        id: 'programAndYear',
        type: 'text',
        label: 'Program and Year of Study',
        placeholder: 'e.g. M.Sc. Agronomy (2nd Year) or B.Tech Environmental Engg (3rd Year)',
        required: true
      },
      {
        id: 'areaOfInterest',
        type: 'select',
        label: 'Area of Interest / Focus Track',
        required: true,
        placeholder: 'Select a research / program area...',
        options: [
          'Dairy Centre of Excellence (Agri-Tech & Extension)',
          'Sugarcane Centre of Excellence (Soil Organic Carbon & Agronomy)',
          'Microcosm Campus Living Laboratory (Clean Energy & Water Stewardship)',
          'Western Ghats Nature Conservation & Hydrological Resilience',
          'Rural Enterprise Incubation & Community Development'
        ]
      },
      {
        id: 'preferredDuration',
        type: 'select',
        label: 'Preferred Duration',
        required: true,
        options: [
          '2–4 weeks',
          '1–2 months',
          '3–6 months',
          'Full semester'
        ]
      },
      {
        id: 'preferredStartMonth',
        type: 'select',
        label: 'Preferred Start Month',
        required: true,
        options: [
          'Immediate (Within 2 weeks)',
          'Next Month',
          'May – July (Summer Term)',
          'August – October',
          'November – January (Winter Term)'
        ]
      },
      {
        id: 'resumeFile',
        type: 'file',
        label: 'Resume / CV Document (PDF)',
        required: false,
        helpText: 'Upload PDF format, maximum 5 MB.'
      },
      {
        id: 'portfolioLink',
        type: 'text',
        label: 'LinkedIn Profile or Portfolio Link',
        placeholder: 'https://linkedin.com/in/username or portfolio link',
        required: false,
        helpText: 'Provide your profile link if not uploading a resume above.'
      },
      {
        id: 'statementOfInterest',
        type: 'textarea',
        label: 'Statement of Interest',
        placeholder: 'Explain what research questions, field problems, or practical learnings you aim to address at KSLI...',
        maxLength: 800,
        required: true
      }
    ]
  },

  'academic-collaboration': {
    id: 'academic-collaboration',
    title: 'Academic Collaboration',
    badge: 'Institutional & Faculty Track',
    intro: 'Joint research proposals, faculty exchanges, technical monographs, and experiential learning.',
    submitLabel: 'Propose Academic Collaboration',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Principal Investigator / Contact Name',
        placeholder: 'e.g. Dr. Meenakshi Ramanathan',
        required: true
      },
      {
        id: 'designation',
        type: 'text',
        label: 'Designation / Academic Title',
        placeholder: 'e.g. Associate Professor & Department Head',
        required: true
      },
      {
        id: 'institution',
        type: 'text',
        label: 'Institution and Department',
        placeholder: 'e.g. Department of Agricultural Economics, University of Madras',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Official Email Address',
        placeholder: 'e.g. meenakshi@univ.ac.in',
        required: true
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone / Office Extension',
        placeholder: '+91 422 1234567',
        required: false
      },
      {
        id: 'collaborationType',
        type: 'checkboxGroup',
        label: 'Type of Collaboration',
        required: true,
        helpText: 'Select all applicable collaboration formats.',
        options: [
          'Joint research proposals (DST, SERB, International Grants)',
          'Data sharing & empirical field studies',
          'Student / faculty exchange immersions',
          'Workshops, symposiums & technical training',
          'Other'
        ]
      },
      {
        id: 'proposedTopic',
        type: 'text',
        label: 'Proposed Topic / Working Title',
        placeholder: 'e.g. Micro-climate assessment of urban agrarian corridors in Tamil Nadu',
        required: true
      },
      {
        id: 'briefProposal',
        type: 'textarea',
        label: 'Brief Proposal & Objectives',
        placeholder: 'Outline the core research hypothesis, methodology, required fieldwork, or deliverables...',
        maxLength: 1000,
        required: true
      },
      {
        id: 'supportingLink',
        type: 'text',
        label: 'Supporting Link / Faculty Profile URL',
        placeholder: 'https://university.edu/faculty/profile (optional)',
        required: false
      }
    ]
  },

  'industry-csr-partnership': {
    id: 'industry-csr-partnership',
    title: 'Industry and CSR Partnership',
    badge: 'Enterprise & CSR Track',
    intro: 'Deploy CSR capital and industrial innovation into verified high-impact sustainability programs.',
    submitLabel: 'Initiate Partnership Inquiry',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: "Contact Person's Full Name",
        placeholder: 'e.g. Rajeshwaran Balasubramanian',
        required: true
      },
      {
        id: 'designation',
        type: 'text',
        label: "Contact Person's Designation",
        placeholder: 'e.g. Head of CSR & Sustainability Programs',
        required: true
      },
      {
        id: 'organizationName',
        type: 'text',
        label: 'Organization / Company Name',
        placeholder: 'e.g. TexVentures Infrastructure Pvt. Ltd.',
        required: true
      },
      {
        id: 'sector',
        type: 'text',
        label: 'Sector / Industry',
        placeholder: 'e.g. Textile Manufacturing, Renewable Energy, Financial Services',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Corporate Email Address',
        placeholder: 'e.g. rajesh@company.com',
        required: true
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Contact Phone Number',
        placeholder: '+91 98400 12345',
        required: false
      },
      {
        id: 'partnershipType',
        type: 'checkboxGroup',
        label: 'Partnership Type',
        required: true,
        helpText: 'Select one or more partnership avenues.',
        options: [
          'CSR community project (Farmer FPO incubation, livelihoods)',
          'Circular economy & industrial decarbonization pilot',
          'Centre of Excellence (CoE) endowment or co-creation',
          'Funding / sponsorship for research fellowships',
          'Technology, sensors, or tools deployment',
          'Other'
        ]
      },
      {
        id: 'regionOrCommunity',
        type: 'text',
        label: 'Region or Community of Interest',
        placeholder: 'e.g. Western Tamil Nadu, Bhavani River Basin, Siruvani Catchment (optional)',
        required: false
      },
      {
        id: 'indicativeTimeline',
        type: 'select',
        label: 'Indicative Timeline',
        required: true,
        options: [
          'Immediate (FY current quarter deployment)',
          'Within 3 months',
          'Within 6 months',
          'Exploring / strategic consultation phase'
        ]
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message & Partnership Objectives',
        placeholder: 'Describe your organization’s mandate, target geographic footprint, and envisioned outcomes...',
        maxLength: 1000,
        required: true
      }
    ]
  },

  'contact': {
    id: 'contact',
    title: 'Contact KSLI',
    badge: 'Secretariat Direct',
    intro: 'Reach out to the KSLI institutional secretariat, leadership, or program offices directly.',
    submitLabel: 'Send Inquiry to Secretariat',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'e.g. S. Venkatesh',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'e.g. venkatesh@example.com',
        required: true
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+91 98765 43210 (optional)',
        required: false
      },
      {
        id: 'subject',
        type: 'select',
        label: 'Subject',
        required: true,
        options: [
          'General Enquiry',
          'Media & Press Inquiry',
          'Campus Living Lab Visit Request',
          'Feedback & Suggestions',
          'Other'
        ]
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        placeholder: 'Write your message or inquiry in detail...',
        maxLength: 1000,
        required: true
      }
    ]
  }
};
