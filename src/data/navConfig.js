/**
 * KSLI Navigation Configuration
 * Clean direct navigation structure for top-level navbar.
 */

export const navConfig = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    exact: true
  },
  {
    id: 'about',
    label: 'About KSLI',
    to: '/about'
  },
  {
    id: 'domains',
    label: 'Domains',
    to: '/domains',
    hasPanel: true,
    isTriggerOnly: false,
    activeCheck: (path) => path === '/domains' || path.startsWith('/domains') || path.startsWith('/thrust-areas') || path.startsWith('/sustainability') || path.startsWith('/livelihood')
  },
  {
    id: 'learning',
    label: 'Learning',
    to: '/learning',
    activeCheck: (path) => path.startsWith('/learning') || path.startsWith('/academic-programs')
  },
  {
    id: 'research-realities',
    label: 'Research & Realities',
    to: '/research-realities'
  },
  {
    id: 'get-involved',
    label: 'Get Involved',
    to: '/get-involved',
    isCta: true
  }
];
