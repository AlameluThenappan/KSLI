/**
 * KSLI Thrust Areas Data (How We Work)
 * Strictly sourced from KSLI_Pitch.pdf.
 * Each item includes its assigned Domain ('Sustainability' or 'Livelihood'),
 * background image, and navigation link for TallImageCard rendering.
 */

export const thrustAreasData = {
  'research-field-innovation': {
    id: 'research',
    slug: 'research-field-innovation',
    title: 'Research & Field Innovation',
    subtitle: 'Integrated research and digital, evidence-based extension models.',
    overview: 'KSLI conducts applied research combining scientific inquiry and field extension to enhance productivity and climate resilience for farmers and regional ecosystems.',
    research: [
      {
        title: 'Fertilizer Optimization (N-Balancing) Program in Sugarcane',
        domain: 'Livelihood',
        partner: 'University of Hohenheim & Sakthi Sugars',
        location: 'Sakthi Nagar & Erode',
        desc: 'Integrated research and extension model supporting 5,000 farmers supplying to Sakthi Sugars through scientific nitrogen balancing and soil testing.',
        image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood'
      },
      {
        title: 'Climate Smart Dairy Digital Extension Model',
        domain: 'Livelihood',
        partner: 'NITARA & Aavin',
        location: 'Coimbatore & Tiruppur',
        desc: 'Digital, evidence-based extension optimizing smallholder dairy productivity, animal nutrition, and cattle health monitoring.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood'
      },
      {
        title: 'Dutch Fund for Climate Action (DFCD) Watershed Study',
        domain: 'Sustainability',
        partner: 'WWF India & DFCD',
        location: 'Western Ghats & Bhavani Basin',
        desc: 'A ~₹5 crore climate adaptation grant implemented by WWF India focusing on scalable nature-based solutions and watershed resilience.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability'
      }
    ],
    projects: [
      {
        title: 'Farmer 360 Initiative',
        domain: 'Livelihood',
        partner: 'Kisan Konnect',
        location: 'Regional Clusters',
        desc: 'Holistic agricultural advisory model providing continuous soil testing, credit guidance, and crop health advisory to smallholder farmers.',
        image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Campus Sustainability Energy & Water Audits',
        domain: 'Sustainability',
        partner: 'Kumaraguru Microcosm',
        location: 'Kumaraguru Campus, Coimbatore',
        desc: 'Real-time energy monitoring and comprehensive water audit quality reports across institutional facilities.',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#microcosm'
      }
    ],
    events: [
      {
        title: 'Sugarcane Innovation & Sustainability Conference',
        domain: 'Livelihood',
        location: 'Sakthi Nagar',
        desc: 'Gathering sugarcane researchers, mill leaders, agronomists, and growers around soil health and fertilizer optimization.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        title: 'Livestock Hackathon',
        domain: 'Livelihood',
        location: 'Coimbatore',
        desc: 'Innovation challenge developing digital and technological solutions for dairy and animal husbandry productivity.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      }
    ]
  },

  'development-projects': {
    id: 'projects',
    slug: 'development-projects',
    title: 'Development Projects',
    subtitle: 'Place-based development initiatives translating research into sustained community impact.',
    overview: 'KSLI implements place-based projects in decentralized campus sustainability, community water management, and rural institution building.',
    projects: [
      {
        title: 'Campus Sustainability — Kumaraguru Microcosm',
        domain: 'Sustainability',
        partner: 'Kumaraguru Campus Operations',
        location: 'Kumaraguru Campus, Coimbatore',
        desc: 'Campus living lab featuring 250 KW solar operations, sewage treatment plant (STP), biogas installation, rainwater harvesting, and native tree nursery.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#microcosm'
      },
      {
        title: 'Pariyur Farmer Producer Organization (FPO)',
        domain: 'Livelihood',
        partner: 'StartupTN & NABARD',
        location: 'Gobichettipalayam',
        desc: 'Farmer-owned collective providing shared post-harvest facilities, value-addition processing, and direct market access.',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Uzhavan Foundation Community Project',
        domain: 'Livelihood',
        partner: 'Uzhavan Foundation',
        location: 'Manapparai, Tiruchirappalli',
        desc: 'CSR-funded initiative revitalizing rainfed agrarian communities through farm pond networks and watershed restoration.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Armour Steel Buildings Vocational Project',
        domain: 'Livelihood',
        partner: 'Armour Steel Buildings',
        location: 'Salem',
        desc: 'CSR-supported technical skills training in precision fabrication and rural industrial enterprise development.',
        image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      }
    ],
    research: [
      {
        title: 'Dutch Fund for Climate Action (DFCD)',
        domain: 'Sustainability',
        partner: 'WWF India & DFCD',
        location: 'Western Ghats Landscape',
        desc: 'Climate adaptation grant (~₹5 crore) implemented by WWF India focusing on scalable nature-based solutions.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability'
      }
    ],
    events: [
      {
        title: 'Kongunadu Velan Matrum Kaalnadai Thiruvizha',
        domain: 'Livelihood',
        location: 'Tiruppur',
        desc: 'Regional farmer and livestock festival celebrating indigenous breeds, sustainable agriculture, and local farming heritage.',
        image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        title: 'Western Ghats Festival',
        domain: 'Sustainability',
        location: 'Anaimalai Foothills',
        desc: 'Field festival celebrating the ecological, indigenous, and botanical heritage of the Western Ghats landscape.',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#events'
      }
    ]
  },

  'education-capacity-building': {
    id: 'education',
    slug: 'education-capacity-building',
    title: 'Education & Capacity Building',
    subtitle: 'Practice-oriented education, workshops, and immersive field learning.',
    overview: 'KSLI equips students, farmers, and youth through academic pathways, certificate courses, and immersive traveling yatras.',
    projects: [
      {
        title: 'Dairy Farm Management & Value Addition Trainings',
        domain: 'Livelihood',
        partner: 'Aavin & ABT Foods',
        location: 'Western Tamil Nadu',
        desc: 'Specialized training modules and exposure visits in dairy value-addition, hygienic milk production, and cattle nutrition.',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
        to: '/learning'
      },
      {
        title: 'Workshops & Certificate Programs',
        domain: 'Sustainability',
        partner: 'Kumaraguru Institutions',
        location: 'Kumaraguru Campus, Coimbatore',
        desc: 'Practice-oriented courses in Goat & Sheep Management, Mushroom Cultivation, and Equine Management.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
        to: '/learning'
      },
      {
        title: 'Sustainability Immersion & Capstone Projects',
        domain: 'Sustainability',
        partner: 'Forge & Academic Departments',
        location: 'Higher Education Network',
        desc: 'Project-based learning, 20-week prototyping semester with Forge, and Edge/Edge+ professional sustainability certifications.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
        to: '/learning'
      }
    ],
    research: [
      {
        title: 'Academic Programs Integration',
        domain: 'Sustainability',
        partner: 'KSLI Faculty',
        location: 'Kumaraguru Campus',
        desc: 'Curriculum development for MBA Agri Business, MSW, M.E Environmental Engineering, and MBA Sustainability Management.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
        to: '/learning'
      }
    ],
    events: [
      {
        title: 'Dairy Yatra',
        domain: 'Livelihood',
        location: 'Western Tamil Nadu Dairy Corridor',
        desc: 'Traveling field immersion visiting modern chilling centres, automated milking yards, and value-addition units.',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        title: 'Agri Yatra',
        domain: 'Sustainability',
        location: 'Western Tamil Nadu',
        desc: 'Traveling exhibition and field walk taking farmers and students through regenerative agricultural practices.',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#events'
      },
      {
        title: 'Student Conclave for Climate Action (SCCA)',
        domain: 'Sustainability',
        location: 'Coimbatore',
        desc: 'Statewide convention gathering over 600 students to propose and pitch campus climate and decarbonization solutions.',
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability#events'
      }
    ]
  },

  'entrepreneurship-development': {
    id: 'entrepreneurship',
    slug: 'entrepreneurship-development',
    title: 'Entrepreneurship Development',
    subtitle: 'Incubating farmer producer organizations, dairy ventures, and youth-led enterprises.',
    overview: 'KSLI supports rural enterprise creation through business mentoring, farmer collective governance, and market linkages.',
    projects: [
      {
        title: 'Climate Smart Dairy Entrepreneurship Program',
        domain: 'Livelihood',
        partner: 'ABT Foods & Aavin',
        location: 'Western Tamil Nadu',
        desc: 'Building farmer-led dairy enterprises with modern milking infrastructure, silage preservation, and direct offtake.',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Pariyur Farmer Producer Organization (FPO)',
        domain: 'Livelihood',
        partner: 'StartupTN & NABARD',
        location: 'Gobichettipalayam',
        desc: 'Incubating a farmer-owned collective with post-harvest sorting, value-addition processing, and direct market access.',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Young Farmers Forum',
        domain: 'Livelihood',
        partner: 'Kumaraguru AgTech Hub',
        location: 'Kongu Region',
        desc: 'Equipping emerging farmers with modern agricultural tools, entrepreneurship skills, and collaborative business networks.',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#projects'
      },
      {
        title: 'Centres of Excellence (CoE Network)',
        domain: 'Sustainability',
        partner: 'Sakthi Sugars, Ashok Leyland & KSLI',
        location: 'Coimbatore & Erode',
        desc: 'Dedicated CoEs for Dairy, Sugarcane, and Social Development driving entrepreneurship and sector capacity building.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        to: '/domains/sustainability'
      }
    ],
    research: [
      {
        title: 'Fertilizer Optimization in Sugarcane (Entrepreneurship & Capacity)',
        domain: 'Livelihood',
        partner: 'Sakthi Sugars & Hohenheim',
        location: 'Sakthi Nagar',
        desc: 'Productivity enhancement through farmer capacity building and micro-enterprise development across 5,000 sugarcane growers.',
        image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood'
      }
    ],
    events: [
      {
        title: 'Young Farmers Conclave',
        domain: 'Livelihood',
        location: 'Coimbatore',
        desc: 'Statewide platform connecting emerging farmers, agri-entrepreneurs, and technical researchers.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      },
      {
        title: 'Livestock Hackathon',
        domain: 'Livelihood',
        location: 'Coimbatore',
        desc: 'Open innovation hackathon solving dairy and livestock enterprise challenges.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
        to: '/domains/livelihood#events'
      }
    ]
  }
};
