/**
 * KSLI Navigation Configuration
 * Exact top-level navigation required:
 * 1. Home
 * 2. Our Work (dropdown: Research, Projects, Events, Initiatives)
 * 3. Education (dropdown: Academic Programs, Workshops, Training, Sustainability Pathway)
 * 4. Outreach
 * 5. Get Involved (distinct CTA button)
 */

export const navConfig = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    exact: true
  },
  {
    id: 'our-work',
    label: 'Our Work',
    to: '/our-work/research',
    hasDropdown: true,
    activeCheck: (path) => path.startsWith('/our-work'),
    items: [
      {
        id: 'research',
        label: 'Research',
        to: '/our-work/research',
        desc: 'Scientific inquiry and field extension models.'
      },
      {
        id: 'projects',
        label: 'Projects',
        to: '/our-work/projects',
        desc: 'Place-based development & living labs.'
      },
      {
        id: 'events',
        label: 'Events',
        to: '/our-work/events',
        desc: 'Conclaves, yatras, festivals & workshops.'
      },
      {
        id: 'initiatives',
        label: 'Initiatives',
        to: '/our-work/initiatives',
        desc: 'Strategic platforms and Centres of Excellence.'
      }
    ]
  },
  {
    id: 'education',
    label: 'Education',
    to: '/education#academic-programs',
    hasDropdown: true,
    activeCheck: (path) => path.startsWith('/education') || path.startsWith('/learning') || path.startsWith('/academic-programs'),
    items: [
      {
        id: 'academic-programs',
        label: 'Academic Programs',
        to: '/education#academic-programs',
        desc: 'Degree programs in sustainability and agriculture.'
      },
      {
        id: 'workshops',
        label: 'Workshops',
        to: '/education#workshops',
        desc: 'Short-term diplomas, exposure visits & intensives.'
      },
      {
        id: 'training',
        label: 'Training',
        to: '/education#training',
        desc: 'Industry-aligned certificate courses & skill tracks.'
      },
      {
        id: 'sustainability-pathway',
        label: 'Sustainability Pathway',
        to: '/education#sustainability-pathway',
        desc: '8-phase progressive student learning continuum.'
      }
    ]
  },
  {
    id: 'outreach',
    label: 'Outreach',
    to: '/outreach',
    activeCheck: (path) => path.startsWith('/outreach')
  },
  {
    id: 'get-involved',
    label: 'Get Involved',
    to: '/get-involved',
    isCta: true,
    activeCheck: (path) => path.startsWith('/get-involved')
  }
];
