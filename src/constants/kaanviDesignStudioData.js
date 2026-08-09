const GOOGLE_PROJECT_IMG_1 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_2 = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_4 = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_5 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_6 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_7 = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80";

export const SITE_BRAND = {
  name: "Kaaन्वी Design Studio",
  fullName: "Kaaन्वी Design Studio",
  tagline: "Blending traditional craftsmanship with contemporary quiet luxury.",
  category: "Architecture & Interior Studio",
  city: "Palanpur",
  logoText: "Kaaन्वी design studio",
  logoImage: "/Kaanvi_logo.png",
  address: "205, Imperial Complex, Highway, Opp. Bihari Baug, Palanpur, Gujarat 385001",
  phone: "+91 98980 12345",
  email: "hello@kaanvidesignstudio.com",
  instagram: "@kaanvidesignstudio",
  meta: {
    title: "Kaaन्वी Design Studio — Architecture & Interior Design | Gujarat",
    description: "Kaaन्वी Design Studio creates bespoke residential interiors, modern villa architecture, and commercial environments with timeless warmth and precision craft."
  }
};

export const HERO_DATA = {
  subtitle: "Kaaन्वी DESIGN STUDIO • PALANPUR",
  title: "Crafting Spaces with Modern Elegance & Architectural Harmony",
  description: "Great interior design isn't just seen — it's felt. We transform residential villas, penthouses, and commercial environments into serene, light-filled sanctuaries.",
  bgImage: GOOGLE_PROJECT_IMG_1,
  primaryCta: { text: "Book a Consultation", href: "#contact" },
  secondaryCta: { text: "View Portfolio", href: "#projects" }
};

export const ABOUT_DATA = {
  subtitle: "ABOUT THE STUDIO",
  headline: "At Kaaन्वी Design Studio, we believe architecture and interior design should seamlessly connect human flow, tactile natural materials, and quiet architectural luxury.",
  teamImage: GOOGLE_PROJECT_IMG_2,
  principalImage: "/Kaanvi_founder.jpg",
  principalName: "Kaaन्वी Design Team",
  principalTitle: "Principal Architect & Founder",
  quote: "Design is not just arranging forms — it's curating how life flows through a space."
};

export const SERVICES_DATA = [
  {
    id: "residential-architecture",
    number: "01",
    subtitle: "OUR SERVICE",
    title: "Residential Architecture & Interior Styling",
    description: "Crafting modern villas and luxury homes. We curate earthy material palettes, soft natural illumination, and tailored spatial layouts suited to contemporary living.",
    image: GOOGLE_PROJECT_IMG_1,
    ctaText: "Service Detail"
  },
  {
    id: "space-planning-villas",
    number: "02",
    subtitle: "OUR SERVICE",
    title: "Spatial Planning & Layout Architecture",
    description: "Optimizing interior layout flow, daylight penetration, and structural harmony. Stripping away unnecessary clutter to emphasize openness and function.",
    image: GOOGLE_PROJECT_IMG_2,
    ctaText: "Service Detail"
  },
  {
    id: "bespoke-joinery-furniture",
    number: "03",
    subtitle: "OUR SERVICE",
    title: "Bespoke Furniture & Integrated Joinery",
    description: "Designing custom storage solutions, integrated wall paneling, and handcrafted timber furniture tailored to elevate functionality with minimalist elegance.",
    image: GOOGLE_PROJECT_IMG_3,
    ctaText: "Service Detail"
  },
  {
    id: "commercial-retail-spaces",
    number: "04",
    subtitle: "OUR SERVICE",
    title: "Commercial Spaces & Retail Design",
    description: "Designing high-end commercial interiors, executive office suites, and retail showrooms that embody brand identity through refined architectural forms.",
    image: GOOGLE_PROJECT_IMG_4,
    ctaText: "Service Detail"
  }
];

export const PILLARS_DATA = {
  subtitle: "WHY CHOOSE US",
  headline: "We design environments with architectural balance, tactile warmth, and uncompromising execution quality.",
  items: [
    {
      number: "01",
      title: "Depth & Character",
      description: "Infusing unique stone, warm wood textures, and bespoke shadow lines into every space.",
      image: GOOGLE_PROJECT_IMG_1
    },
    {
      number: "02",
      title: "Tactile Warmth",
      description: "Selecting serene color palettes, soft drapery, and warm indirect lighting that invite calm.",
      image: GOOGLE_PROJECT_IMG_3
    },
    {
      number: "03",
      title: "Clutter-Free Flow",
      description: "Integrating concealed storage and seamless joinery so your space stays effortlessly orderly.",
      image: GOOGLE_PROJECT_IMG_5
    },
    {
      number: "04",
      title: "Timeless Quality",
      description: "Combining precision engineering with durable, luxury materials for lasting beauty.",
      image: GOOGLE_PROJECT_IMG_7
    }
  ]
};

export const PROCESS_DATA = {
  subtitle: "OUR PROCESS",
  headline: "From Vision to Living Reality",
  steps: [
    {
      number: "01",
      title: "Discovery & Visioning",
      description: "Understanding your lifestyle, architectural preferences, and functional needs."
    },
    {
      number: "02",
      title: "Spatial & 3D Design",
      description: "Developing custom floor plans, material palettes, and 3D architectural renders."
    },
    {
      number: "03",
      title: "Technical Detailing",
      description: "Creating precise joinery blueprints, lighting schematics, and material schedules."
    },
    {
      number: "04",
      title: "Turnkey Execution",
      description: "Managing site craftsmen and delivering a white-glove finished space ready to occupy."
    }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "the-palanpur-villa",
    subtitle: "Luxury Villa • Palanpur",
    title: "The Palanpur Residence",
    description: "A private residential villa in Palanpur featuring expansive glass facades, custom travertine stone cladding, and warm teak wood joinery.",
    image: GOOGLE_PROJECT_IMG_1,
    category: "Residential Villa",
    year: "2024",
    area: "380 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_1,
      GOOGLE_PROJECT_IMG_2,
      GOOGLE_PROJECT_IMG_3
    ]
  },
  {
    id: "imperial-penthouse",
    subtitle: "Penthouse Suite • Gujarat",
    title: "Imperial Penthouse",
    description: "Designed with an open-plan living layout, custom hidden storage wall units, and soft ambient lighting that creates a tranquil elevated home.",
    image: GOOGLE_PROJECT_IMG_4,
    category: "Penthouse",
    year: "2024",
    area: "310 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_4,
      GOOGLE_PROJECT_IMG_5,
      GOOGLE_PROJECT_IMG_6
    ]
  },
  {
    id: "modernist-executive-hub",
    subtitle: "Commercial Office • Gujarat",
    title: "Modernist Studio Hub",
    description: "An architectural workspace highlighting acoustic wood paneling, floor-to-ceiling glass partitions, and ergonomic executive cabins.",
    image: GOOGLE_PROJECT_IMG_5,
    category: "Commercial Office",
    year: "2023",
    area: "450 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_5,
      GOOGLE_PROJECT_IMG_7,
      GOOGLE_PROJECT_IMG_1
    ]
  },
  {
    id: "sanctuary-residence",
    subtitle: "Private Residence • Ahmedabad",
    title: "Sanctuary Home",
    description: "A serene urban sanctuary blending natural stone flooring, linen textures, and custom brass accents across all interior spaces.",
    image: GOOGLE_PROJECT_IMG_6,
    category: "Residential",
    year: "2023",
    area: "290 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_6,
      GOOGLE_PROJECT_IMG_2,
      GOOGLE_PROJECT_IMG_4
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Kaaन्वी Design Studio transformed our villa into an absolute masterpiece. The spatial flow, hidden joinery, and lighting feel luxurious and effortless.",
    client: "Rohan & Meera Patel",
    role: "Palanpur Villa Owners • 5★ Client Review"
  },
  {
    quote: "Working with the Kaaन्वी team for our corporate studio was smooth and highly professional. Their architectural vision and material choices were top tier.",
    client: "Jayesh Shah",
    role: "Director, Imperial Enterprise • Gujarat"
  },
  {
    quote: "Their commitment to quiet luxury and quality execution made our penthouse renovation a wonderful experience.",
    client: "Ananya Desai",
    role: "Penthouse Owner • Palanpur"
  }
];

export const CTA_DATA = {
  subtitle: "START YOUR PROJECT",
  title: "Ready to Create a Space with Character?",
  description: "Collaborate with Kaaन्वी Design Studio to turn your residential or commercial vision into a refined architectural sanctuary.",
  primaryCta: { text: "Book a Consultation", href: "#contact" },
  secondaryCta: { text: "Explore Services", href: "#services" }
};

export const FAQ_DATA = [
  {
    question: "What services does Kaaन्वी Design Studio provide?",
    answer: "We specialize in residential architecture, luxury villa interiors, space planning, custom furniture joinery, and commercial studio design."
  },
  {
    question: "Where is Kaaन्वी Design Studio located?",
    answer: "Our studio is located at 205, Imperial Complex, Highway, Opp. Bihari Baug, Palanpur, Gujarat."
  },
  {
    question: "Do you offer complete turnkey execution?",
    answer: "Yes. We manage turnkey execution, material procurement, custom carpentry, and project supervision from concept to completion."
  },
  {
    question: "How do we start a design project with Kaaन्वी?",
    answer: "You can book an initial consultation through our website form or contact our Palanpur studio directly."
  }
];

export const CONTACT_DATA = {
  subtitle: "CONTACT US",
  title: "Let's Craft Your Space",
  description: "Connect with our Palanpur studio or send your project details below to discuss your upcoming architecture or interior design project.",
  address: "205, Imperial Complex, Highway, Opp. Bihari Baug, Palanpur, Gujarat 385001",
  phone: "+91 98980 12345",
  instagram: "@kaanvidesignstudio",
  images: [
    GOOGLE_PROJECT_IMG_1,
    GOOGLE_PROJECT_IMG_2,
    GOOGLE_PROJECT_IMG_4,
    GOOGLE_PROJECT_IMG_5,
    GOOGLE_PROJECT_IMG_6,
    GOOGLE_PROJECT_IMG_7
  ]
};
