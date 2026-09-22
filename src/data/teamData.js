import netajiPhoto from '../assets/Team/Netaji.jpeg';
import thanammalPhoto from '../assets/Team/Thanammal.jpeg';

export const advisoryCouncil = [
  {
    id: 'advisory-one',
    name: 'Dr. Advisory Member One',
    role: 'Sustainability Advisor',
    description: 'Advisory guidance on ecological systems, environmental metrics, and long-term sustainability policy.',
    focusArea: 'Sustainability & Resource Efficiency'
  },
  {
    id: 'advisory-two',
    name: 'Dr. Advisory Member Two',
    role: 'Livelihood & Rural Development Advisor',
    description: 'Strategic advice on agrarian value chains, rural micro-enterprises, and smallholder farmer empowerment.',
    focusArea: 'Rural Livelihoods & Enterprise'
  },
  {
    id: 'advisory-three',
    name: 'Dr. Advisory Member Three',
    role: 'Research & Innovation Advisor',
    description: 'Advisory oversight on applied field research methodologies, institutional grants, and scientific partnerships.',
    focusArea: 'Applied Field Research'
  },
  {
    id: 'advisory-four',
    name: 'Dr. Advisory Member Four',
    role: 'Community & Partnerships Advisor',
    description: 'Guidance on grassroots community mobilization, public-private sector alliances, and institutional governance.',
    focusArea: 'Community & Institutional Partnerships'
  }
];

export const teamMembers = [
  // Dairy CoE
  {
    id: 'dr-thanammal',
    name: 'Dr. Thanammal',
    role: 'Lead Scientist & CoE Head',
    category: 'Dairy',
    photo: thanammalPhoto,
    intro: 'Leading productivity enhancement, clean milk hygiene protocols, and climate-smart dairy research across smallholder farming clusters.',
    about: 'Dr. Thanammal anchors research initiatives at the Centre of Excellence – Dairy, focusing on livestock welfare, automated clean milking techniques, and nutritional optimization for local indigenous cattle breeds.',
    responsibilities: [
      'Directing research protocols for the Climate Smart Dairy initiative',
      'Overseeing digital extension biomarker deployment across rural milk collection centers',
      'Collaborating with dairy federations and veterinary scientists on animal nutrition'
    ],
    projects: [
      {
        title: 'Climate Smart Dairy Entrepreneurship Program',
        domain: 'Livelihood',
        focus: 'Farm-Based Livelihood',
        location: 'Western Tamil Nadu',
        description: 'Building farmer-led dairy enterprises with climate-resilient practices, hygienic milking machines, and collective chilling infrastructure.',
        partner: 'ABT Foods & Aavin',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: [
      {
        title: 'Smallholder Dairy Innovation: Digital Extension Protocols & IoT Biomarkers',
        domain: 'Livelihood',
        focus: 'Farm-Based Livelihood',
        summary: 'Field manual and empirical analysis evaluating automated heat detection, clean milk handling benchmarks, and community chilling optimization across smallholder cooperatives.',
        partner: 'Centre of Excellence – Dairy & NITARA Research',
        year: '2025',
        link: '/resources'
      }
    ]
  },
  {
    id: 'nethaji-subash',
    name: 'Nethaji Subash',
    role: 'Program Management',
    category: 'Dairy',
    photo: netajiPhoto,
    intro: 'Managing dairy field immersions, student exposure journeys, and operational coordination with milk producers.',
    about: 'Nethaji coordinates field operations and educational outreach for KSLI dairy interventions, ensuring seamless translation of academic curriculum into hands-on farmer engagement.',
    responsibilities: [
      'Managing logistics and curriculum for Dairy Yatra field immersions',
      'Coordinating field trials with smallholder dairy cooperatives',
      'Interfacing between student researchers and community livestock owners'
    ],
    projects: [
      {
        title: 'Dairy Yatra: Value Addition Field Immersion',
        domain: 'Livelihood',
        focus: 'Education & Capacity Building',
        location: 'Western Tamil Nadu',
        description: '72-hour experiential journey connecting agriculture scholars with automated milking sheds, silage fermenters, and cooperative chilling centers.',
        partner: 'Aavin & Kongu Dairy Clusters',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: [
      {
        title: 'Techno-Economic Study of Indigenous Dairy By-Products',
        domain: 'Livelihood',
        focus: 'Off-Farm Livelihood',
        summary: 'Market analysis assessing smallholder bio-slurry packaging, organic manures, and value-added dairy derivatives for secondary rural income.',
        partner: 'NDDB Mrida & KSLI',
        year: '2024',
        link: '/resources'
      }
    ]
  },
  {
    id: 'kavin',
    name: 'Kavin',
    role: 'Program Associate',
    category: 'Dairy',
    photo: null,
    intro: 'Assisting in dairy data logging, milk hygiene monitoring, and smallholder cohort tracking.',
    about: 'Kavin supports program administration and field data gathering for dairy extension programs, working closely with milk societies.',
    responsibilities: [
      'Collecting milk quality and chilling temperature logs across cluster units',
      'Assisting veterinary checkups and livestock vaccination drives',
      'Maintaining beneficiary registries for dairy technology training'
    ],
    projects: [
      {
        title: 'Clean Milk Handling Pilot',
        domain: 'Livelihood',
        focus: 'Farm-Based Livelihood',
        location: 'Tiruppur District',
        description: 'Demonstration trials of automated single-bucket milking units and stainless steel cans for micro-dairies.',
        partner: 'Centre of Excellence – Dairy',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: []
  },
  {
    id: 'arun-kumar',
    name: 'Arun Kumar',
    role: 'Field Coordinator',
    category: 'Dairy',
    photo: null,
    intro: 'Direct field liaison connecting rural dairy farmers with chilling infrastructure and advisory services.',
    about: 'Arun works on the ground across rural habitations in Western Tamil Nadu, conducting regular farm visits and diagnostic support.',
    responsibilities: [
      'Conducting village-level farmer orientation sessions',
      'Monitoring fodder plot demonstration patches and silage preparation',
      'Assisting in grievance redressal for participating farmers'
    ],
    projects: [
      {
        title: 'Community Silage Preservation Network',
        domain: 'Livelihood',
        focus: 'Farm-Based Livelihood',
        location: 'Pollachi & Udumalpet',
        description: 'Promoting green fodder preservation in airtight bales to maintain milk output during dry summer seasons.',
        partner: 'KSLI & Dairy CoE',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: []
  },
  {
    id: 'bharani',
    name: 'Bharani',
    role: 'Admin Support',
    category: 'Dairy',
    photo: null,
    intro: 'Anchoring administrative coordination, procurement, and documentation for dairy projects.',
    about: 'Bharani oversees administrative operations, event documentation, and logistics for the Centre of Excellence – Dairy.',
    responsibilities: [
      'Managing procurement schedules for field test kits and consumables',
      'Coordinating travel and venue arrangements for farmer workshops',
      'Maintaining administrative records and vendor contracts'
    ],
    projects: [],
    research: []
  },

  // Sugarcane CoE
  {
    id: 'dr-hemalatha',
    name: 'Dr. Hemalatha',
    role: 'Lead Agronomist & Research Head',
    category: 'Sugarcane',
    photo: null,
    intro: 'Pioneering precision nitrogen balancing and soil organic carbon enrichment in tropical sugarcane systems.',
    about: 'Dr. Hemalatha directs agronomic field research at the Sugarcane Centre of Excellence, partnering with Sakthi Sugars and international institutes to scale regenerative soil practices.',
    responsibilities: [
      'Leading scientific protocols for fertilizer reduction and soil biology restoration',
      'Analyzing multi-season field trial data from 5,000+ farmer plots',
      'Liaising with institutional agronomy research partners and sugar mill federations'
    ],
    projects: [
      {
        title: 'Precision Nitrogen Balancing & Soil Health in Sugarcane',
        domain: 'Sustainability & Livelihood',
        focus: 'Sustainable Agriculture',
        location: 'Sakthi Nagar, Erode',
        description: 'Comprehensive farmer-engaged initiative cutting synthetic fertilizer use while boosting brix sugar percentage and grower net margins.',
        partner: 'Sakthi Sugars & Univ. of Hohenheim',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=sustainability'
      }
    ],
    research: [
      {
        title: 'Precision Nitrogen Balancing & Soil Organic Carbon in Tropical Sugarcane Agro-Ecosystems',
        domain: 'Livelihood & Sustainability',
        focus: 'Sustainable Agriculture',
        summary: 'Quantitative study of 5,000+ farmer plots in Western Tamil Nadu evaluating reduced synthetic fertilizer usage, yield stabilization, and soil carbon retention.',
        partner: 'KSLI Sugarcane CoE & University of Hohenheim',
        year: '2025',
        link: '/resources'
      }
    ]
  },
  {
    id: 'boopathy',
    name: 'Boopathy',
    role: 'Junior Research Fellow (JRF)',
    category: 'Sugarcane',
    photo: null,
    intro: 'Conducting soil core sampling, chlorophyll meter tracking, and micro-nutrient assessments in cane agro-ecosystems.',
    about: 'Boopathy is a researcher analyzing the biochemical impacts of balanced fertilizer applications on soil microbiology and cane biomass.',
    responsibilities: [
      'Conducting SPAD chlorophyll meter readings and leaf tissue diagnostics',
      'Processing soil organic carbon samples in the institute lab',
      'Assisting in the publication of field trial empirical datasets'
    ],
    projects: [
      {
        title: 'Soil Carbon Baselines in Cane Tracts',
        domain: 'Sustainability',
        focus: 'Sustainable Agriculture',
        location: 'Bhavani River Basin',
        description: 'Benchmarking topsoil organic matter across irrigated cane belts to quantify carbon sequestration.',
        partner: 'Sugarcane CoE',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=sustainability'
      }
    ],
    research: []
  },
  {
    id: 'bhuvaneshwari',
    name: 'Bhuvaneshwari',
    role: 'Junior Research Fellow (JRF)',
    category: 'Sugarcane',
    photo: null,
    intro: 'Investigating microbial bio-inoculants and bio-composting techniques for sugarcane trash recycling.',
    about: 'Bhuvaneshwari focuses on circular waste conversion, researching in-situ degradation of sugarcane crop residues to avoid field burning.',
    responsibilities: [
      'Testing microbial consortia for rapid trash decomposition',
      'Monitoring soil moisture retention under mulch regimes',
      'Assisting farmer field schools on zero-burning practices'
    ],
    projects: [
      {
        title: 'In-Situ Cane Trash Decomposition Trials',
        domain: 'Sustainability',
        focus: 'Resource Efficiency',
        location: 'Appakudal Cluster',
        description: 'Evaluating microbial sprays that accelerate residue decomposition into humus without open-field burning.',
        partner: 'Sugarcane CoE',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=sustainability'
      }
    ],
    research: []
  },
  {
    id: 'sujeeth',
    name: 'Sujeeth',
    role: 'Field Coordinator',
    category: 'Sugarcane',
    photo: null,
    intro: 'Coordinating farmer trial plots, fertilizer dosage scheduling, and mill harvest schedules.',
    about: 'Sujeeth manages day-to-day coordination with registered cane growers supplying local mills, overseeing plot inspections.',
    responsibilities: [
      'Enrolling farmers in the precision fertilizer advisory program',
      'Distributing leaf chlorophyll test cards to cluster leaders',
      'Recording harvest yield and cane weight data at mill weighbridges'
    ],
    projects: [],
    research: []
  },
  {
    id: 'gokulraj',
    name: 'Gokulraj',
    role: 'Field Coordinator',
    category: 'Sugarcane',
    photo: null,
    intro: 'Facilitating village-level farmer producer meetings and precision irrigation demonstrations.',
    about: 'Gokulraj supports agronomy field extensions, organizing grower demonstrations on micro-irrigation and soil testing.',
    responsibilities: [
      'Organizing field demonstration days across cane panchayats',
      'Liaising with drip irrigation suppliers for subsidy facilitation',
      'Assisting farmers with soil health report interpretation'
    ],
    projects: [],
    research: []
  },

  // Farmer 360
  {
    id: 'mr-sezhian',
    name: 'Mr. Sezhian',
    role: 'Lead Strategist – Farmer 360',
    category: 'Farmer 360',
    photo: null,
    intro: 'Spearheading comprehensive farmer advisory networks, farm economics modeling, and digital extension.',
    about: 'Mr. Sezhian anchors Farmer 360, designing systemic support frameworks that connect smallholders to soil health analytics, market intelligence, and institutional schemes.',
    responsibilities: [
      'Architecting the holistic Farmer 360 advisory framework',
      'Forging institutional partnerships with state agri departments and NABARD',
      'Guiding young agrarian fellows in community diagnostics'
    ],
    projects: [
      {
        title: 'Farmer 360 Holistic Advisory System',
        domain: 'Livelihood',
        focus: 'Farm-Based Livelihood',
        location: 'Erode & Tiruppur Districts',
        description: 'End-to-end smallholder advisory combining agronomy guidance, weather forecasting, input cost audits, and institutional credit linkages.',
        partner: 'Uzhavan Foundation & KSLI',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: []
  },
  {
    id: 'dr-gopi',
    name: 'Dr. Gopi',
    role: 'Senior Agronomy Specialist',
    category: 'Farmer 360',
    photo: null,
    intro: 'Specializing in cropping pattern optimization, pest management, and dryland agricultural resilience.',
    about: 'Dr. Gopi provides expert technical oversight on integrated crop management, IPM protocols, and climate adaptation strategies for marginal farmers.',
    responsibilities: [
      'Formulating biological pest management recommendations',
      'Advising on climate-resilient millet and pulse crop rotations',
      'Conducting diagnostic field visits for crop disease mitigation'
    ],
    projects: [],
    research: []
  },
  {
    id: 'dr-sudhakar',
    name: 'Dr. Sudhakar',
    role: 'Soil & Water Specialist',
    category: 'Farmer 360',
    photo: null,
    intro: 'Expertise in watershed hydrology, farm pond design, and groundwater conservation.',
    about: 'Dr. Sudhakar advises communities on water budget calculations, percolation pit maintenance, and micro-watershed development.',
    responsibilities: [
      'Conducting village water budgeting and groundwater depth surveys',
      'Designing catchment interventions for rain-shadow agro-ecologies',
      'Evaluating soil moisture conservation across dryland plots'
    ],
    projects: [],
    research: []
  },
  {
    id: 'mr-amarendran',
    name: 'Mr. Amarendran',
    role: 'Community Engagement Lead',
    category: 'Farmer 360',
    photo: null,
    intro: 'Connecting community self-help groups and youth agrarian clubs with institute resources.',
    about: 'Mr. Amarendran leads village-level outreach, organizing participatory rural appraisals and youth farmer collectives.',
    responsibilities: [
      'Mobilizing community participation for local soil testing camps',
      'Coordinating youth exposure tours to regenerative model farms',
      'Facilitating linkage between farmers and formal banking institutions'
    ],
    projects: [],
    research: []
  },
  {
    id: 'ms-sangeetha',
    name: 'Ms. Sangeetha',
    role: 'Program Coordinator',
    category: 'Farmer 360',
    photo: null,
    intro: 'Managing data reporting, impact metrics, and farmer service helplines.',
    about: 'Ms. Sangeetha tracks farmer cohorts, monitors query resolutions, and compiles impact evaluation metrics.',
    responsibilities: [
      'Managing the Farmer 360 support desk and call query records',
      'Compiling seasonal impact metrics and farmer feedback reports',
      'Coordinating publication of monthly advisory bulletins'
    ],
    projects: [],
    research: []
  },

  // Campus Sustainability
  {
    id: 'keerthana',
    name: 'Keerthana',
    role: 'Lead – Campus Living Lab',
    category: 'Campus Sustainability',
    photo: null,
    intro: 'Managing Kumaraguru Microcosm living lab operations, campus resource auditing, and zero-waste initiatives.',
    about: 'Keerthana coordinates the living laboratory across the Kumaraguru campus, directing student audits of energy, water, and solid waste streams.',
    responsibilities: [
      'Directing the Microcosm Zero-Waste Mess and composting protocol',
      'Managing campus biodiversity surveys and endemic arboretum records',
      'Coordinating student green internships and carbon accounting projects'
    ],
    projects: [
      {
        title: 'Kumaraguru Microcosm Living Lab',
        domain: 'Sustainability',
        focus: 'Sustainable Human Settlements',
        location: 'Kumaraguru Campus, Coimbatore',
        description: 'Using the 150-acre educational campus as an empirical test-bed for circular water treatment, rooftop solar arrays, and organic composting.',
        partner: 'IGBC & KSLI',
        image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=sustainability'
      }
    ],
    research: [
      {
        title: 'Kumaraguru Microcosm: Annual Decarbonization & Resource Neutrality Audit',
        domain: 'Sustainability',
        focus: 'Human Settlements',
        summary: 'Institutional review recording 1.2 MLD wastewater recycling efficiency, rooftop PV generation metrics, and endemic tree biodiversity census.',
        partner: 'KSLI Campus Living Lab & IGBC Working Group',
        year: '2025',
        link: '/resources'
      }
    ]
  },
  {
    id: 'jeevesh',
    name: 'Jeevesh',
    role: 'Energy & Resource Associate',
    category: 'Campus Sustainability',
    photo: null,
    intro: 'Overseeing renewable solar data monitoring and electrical energy efficiency diagnostics.',
    about: 'Jeevesh tracks campus electrical consumption, solar generation profiles, and micro-grid performance.',
    responsibilities: [
      'Logging rooftop photovoltaic generation and inverter efficiency',
      'Conducting building-level energy audits for academic blocks',
      'Assisting undergraduate students with renewable energy prototypes'
    ],
    projects: [],
    research: []
  },
  {
    id: 'paramaguru',
    name: 'Paramaguru',
    role: 'Ecology & Flora Specialist',
    category: 'Campus Sustainability',
    photo: null,
    intro: 'Curating native tree plantations, urban wildlife corridors, and organic composting yards.',
    about: 'Paramaguru maintains campus green belts, native botanical collections, and organic decentralized compost converters.',
    responsibilities: [
      'Managing the endemic tree nursery and seed collection drives',
      'Monitoring water quality in campus recharge pits and bio-swales',
      'Guiding nature walks and bird counts for university students'
    ],
    projects: [],
    research: []
  },

  // Farmer Producer Organization
  {
    id: 'shanthra',
    name: 'Shanthra',
    role: 'Chief Executive Officer (CEO)',
    category: 'Farmer Producer Organization',
    photo: null,
    intro: 'Leading collective market aggregation, turmeric processing, and institutional procurement for 400+ smallholder shareholders.',
    about: 'Shanthra heads the Pariyur Farmer Producer Company, driving business strategy, collective bargaining power, and direct value-addition infrastructure.',
    responsibilities: [
      'Directing commercial strategy and institutional supply agreements',
      'Overseeing post-harvest sorting, cleaning, and turmeric processing units',
      'Reporting to the farmer shareholder board and NABARD facilitators'
    ],
    projects: [
      {
        title: 'Pariyur Farmer Producer Organization (FPO)',
        domain: 'Livelihood',
        focus: 'Off-Farm Livelihood',
        location: 'Gobichettipalayam, Erode',
        description: 'A 400-farmer collective strengthening market access, bargaining power, bulk input procurement, and turmeric value addition.',
        partner: 'StartupTN & NABARD',
        image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&auto=format&fit=crop&q=80',
        link: '/domains?domain=livelihood'
      }
    ],
    research: [
      {
        title: 'Farmer Producer Organizations as Catalysts for Climate Adaptation in Rainfed Tracts',
        domain: 'Livelihood',
        focus: 'Off-Farm Livelihood',
        summary: 'Econometric case study of the Pariyur FPO model evaluating aggregation margins, input price resilience, and post-harvest grain storage economics.',
        partner: 'KSLI Livelihood Vertical & StartupTN',
        year: '2024',
        link: '/resources'
      }
    ]
  },
  {
    id: 'gowsika',
    name: 'Gowsika',
    role: 'Accountant',
    category: 'Farmer Producer Organization',
    photo: null,
    intro: 'Managing cooperative accounting, shareholder equity ledgers, and transaction audits.',
    about: 'Gowsika maintains financial compliance, member share registers, and input-output invoicing for the producer collective.',
    responsibilities: [
      'Maintaining statutory accounting records and annual audit documentation',
      'Processing member farmer payments for crop produce procurement',
      'Managing working capital accounts and bank reconciliation'
    ],
    projects: [],
    research: []
  },
  {
    id: 'karthika',
    name: 'Karthika',
    role: 'Extension Officer',
    category: 'Farmer Producer Organization',
    photo: null,
    intro: 'Field extension liaison connecting cluster farming groups with collective sorting and grading centers.',
    about: 'Karthika coordinates harvest schedules, quality standards, and farmer member registration across villages.',
    responsibilities: [
      'Enrolling new smallholder shareholders across target panchayats',
      'Training farmers on pre-harvest hygiene and moisture standards',
      'Coordinating transport logistics from farm gates to processing sheds'
    ],
    projects: [],
    research: []
  },
  {
    id: 'nithya',
    name: 'Nithya',
    role: 'Business Executive',
    category: 'Farmer Producer Organization',
    photo: null,
    intro: 'Developing institutional buyer relationships, retail packaging, and brand outreach for collective farm produce.',
    about: 'Nithya drives marketing initiatives, retail distribution channels, and e-market linkages for FPO-branded agri products.',
    responsibilities: [
      'Negotiating purchase agreements with institutional buyers and processors',
      'Managing inventory, retail packaging design, and barcode traceability',
      'Representing the FPO at regional agricultural expos and trade fairs'
    ],
    projects: [],
    research: []
  }
];

export const teamFilters = [
  'All',
  'Dairy',
  'Sugarcane',
  'Farmer 360',
  'Campus Sustainability',
  'Farmer Producer Organization',
];
