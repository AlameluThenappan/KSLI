/**
 * KSLI Navigation Configuration
 * Data-driven structure for top-level navbar and floating mega-menu panels.
 * High-resolution imagery (>= 1400px) and brand-aligned copy.
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
    to: '/about',
    layoutType: 'list-preview',
    groupLabel: 'About KSLI',
    items: [
      {
        id: 'vision',
        label: 'Vision',
        to: '/about#vision',
        title: 'Vision',
        desc: 'Advancing sustainability and rural livelihoods through integrated research and action.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&auto=format&fit=crop&q=85'
      },
      {
        id: 'mission',
        label: 'Mission',
        to: '/about#mission',
        title: 'Mission',
        desc: 'Designing integrated solutions combining education, entrepreneurship, and field practice.',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=1400&auto=format&fit=crop&q=85'
      },
      {
        id: 'purpose',
        label: 'Purpose',
        to: '/about#purpose',
        title: 'Purpose',
        desc: 'A strategic platform uniting research, partnerships, and community engagement.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&auto=format&fit=crop&q=85'
      },
      {
        id: 'team',
        label: 'Team members',
        to: '/about#team',
        title: 'Team Members',
        desc: 'Meet the researchers, fellows, and agronomists leading KSLI initiatives.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=85'
      }
    ]
  },
  {
    id: 'domains',
    label: 'Sustainability & Livelihood',
    to: '/domains',
    activeCheck: (path) => path.startsWith('/domains') || path.startsWith('/sustainability') || path.startsWith('/livelihood'),
    layoutType: 'two-level',
    groupLabel: 'Domains',
    items: [
      {
        id: 'sustainability',
        label: 'Sustainability',
        to: '/domains/sustainability',
        title: 'Sustainability',
        desc: 'Advancing clean energy, resource efficiency, and ecological living laboratories.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Kumaraguru Microcosm', to: '/domains/sustainability#microcosm' },
          { label: 'Projects', to: '/domains/sustainability#projects' },
          { label: 'Research', to: '/domains/sustainability#research' },
          { label: 'Events', to: '/domains/sustainability#events' }
        ]
      },
      {
        id: 'livelihood',
        label: 'Livelihood',
        to: '/domains/livelihood',
        title: 'Livelihood',
        desc: 'Strengthening rural incomes through dairy, sugarcane, and agro-enterprises.',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Projects', to: '/domains/livelihood#projects' },
          { label: 'Research', to: '/domains/livelihood#research' },
          { label: 'Events', to: '/domains/livelihood#events' }
        ]
      }
    ]
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
    isCta: true,
    layoutType: 'list-preview',
    groupLabel: 'Get involved',
    items: [
      {
        id: 'volunteer',
        label: 'Volunteer',
        to: '/get-involved/volunteer',
        title: 'Volunteer',
        desc: 'Engage in habitat cleanups, wetland bird counts, and rural outreach drives.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Volunteer', to: '/get-involved/volunteer' },
          { label: 'Student Internship', to: '/get-involved/student-internship' },
          { label: 'Academic Collaboration', to: '/get-involved/academic-collaboration' },
          { label: 'Industry & CSR', to: '/get-involved/industry-csr-partnership' },
          { label: 'Contact KSLI', to: '/get-involved/contact' }
        ]
      },
      {
        id: 'student-internship',
        label: 'Student internship',
        to: '/get-involved/student-internship',
        title: 'Student Internship',
        desc: 'Hands-on field research and climate action for undergraduate and PG scholars.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Volunteer', to: '/get-involved/volunteer' },
          { label: 'Student Internship', to: '/get-involved/student-internship' },
          { label: 'Academic Collaboration', to: '/get-involved/academic-collaboration' },
          { label: 'Industry & CSR', to: '/get-involved/industry-csr-partnership' },
          { label: 'Contact KSLI', to: '/get-involved/contact' }
        ]
      },
      {
        id: 'academic-collaboration',
        label: 'Academic collaboration',
        to: '/get-involved/academic-collaboration',
        title: 'Academic Collaboration',
        desc: 'Joint curriculum development, research symposia, and academic mobility.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Volunteer', to: '/get-involved/volunteer' },
          { label: 'Student Internship', to: '/get-involved/student-internship' },
          { label: 'Academic Collaboration', to: '/get-involved/academic-collaboration' },
          { label: 'Industry & CSR', to: '/get-involved/industry-csr-partnership' },
          { label: 'Contact KSLI', to: '/get-involved/contact' }
        ]
      },
      {
        id: 'industry-csr',
        label: 'Industry and CSR partnership',
        to: '/get-involved/industry-csr-partnership',
        title: 'Industry & CSR Partnership',
        desc: 'Co-create CSR community projects, circular economy pilots, and CoEs.',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Volunteer', to: '/get-involved/volunteer' },
          { label: 'Student Internship', to: '/get-involved/student-internship' },
          { label: 'Academic Collaboration', to: '/get-involved/academic-collaboration' },
          { label: 'Industry & CSR', to: '/get-involved/industry-csr-partnership' },
          { label: 'Contact KSLI', to: '/get-involved/contact' }
        ]
      },
      {
        id: 'contact',
        label: 'Contact KSLI',
        to: '/get-involved/contact',
        title: 'Contact KSLI',
        desc: 'Reach out to the KSLI secretariat for queries, visits, and collaboration.',
        image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&auto=format&fit=crop&q=85',
        chips: [
          { label: 'Volunteer', to: '/get-involved/volunteer' },
          { label: 'Student Internship', to: '/get-involved/student-internship' },
          { label: 'Academic Collaboration', to: '/get-involved/academic-collaboration' },
          { label: 'Industry & CSR', to: '/get-involved/industry-csr-partnership' },
          { label: 'Contact KSLI', to: '/get-involved/contact' }
        ]
      }
    ]
  }
];
