const INSTAGRAM_IMG_1 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";
const INSTAGRAM_IMG_2 = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
const INSTAGRAM_IMG_3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";
const INSTAGRAM_IMG_4 = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";
const INSTAGRAM_IMG_5 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80";
const INSTAGRAM_IMG_6 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

const GOOGLE_PROJECT_IMG_1 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_2 = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_4 = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_5 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_6 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const GOOGLE_PROJECT_IMG_7 = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80";

export const SITE_BRAND = {
  name: "Rudra Atelier",
  fullName: "Rudra Atelier Studio",
  tagline: "Creating spaces with depth, warmth, and timeless character.",
  category: "Boutique Interior Studio",
  city: "Mumbai",
  logoText: "rudra atelier",
  logoImage: "/Rudra_Atelliar.png",
  address: "Lower Parel & Bandra West, Mumbai, Maharashtra 400050",
  phone: "+91 98200 12345",
  email: "hello@rudraatelier.com",
  instagram: "@rudraateliier",
  meta: {
    title: "Rudra Atelier — Boutique Interior Design Studio | Mumbai",
    description: "Rudra Atelier crafts modern residential interiors, minimalist spatial planning, and commercial environments with depth, warmth, and timeless character."
  }
};

export const HERO_DATA = {
  subtitle: "RUDRA ATELIER • MUMBAI",
  title: "Creating Spaces with Depth, Warmth & Timeless Character",
  description: "Luxury isn't just seen — it's felt. Every corner tells a story. We transform modern residential and commercial environments into serene, curated sanctuaries.",
  bgImage: GOOGLE_PROJECT_IMG_1,
  primaryCta: { text: "Book a Consultation", href: "#contact" },
  secondaryCta: { text: "View Portfolio", href: "#projects" }
};

export const ABOUT_DATA = {
  subtitle: "ABOUT THE STUDIO",
  headline: "At Rudra Atelier, we believe great interior design is an art of quiet luxury. We blend spatial clarity, custom architectural styling, and tactile materials to create spaces that evoke calm, warmth, and enduring character.",
  teamImage: GOOGLE_PROJECT_IMG_2,
  principalImage: "/Rudra_founder.jpg",
  principalName: "Devanshi Gada",
  principalTitle: "Founder & Lead Interior Designer",
  quote: "Luxury isn't just seen — it's felt. Every corner tells a story."
};

export const SERVICES_DATA = [
  {
    id: "residential-interiors",
    number: "01",
    subtitle: "OUR SERVICE",
    title: "Residential Interiors & Styling",
    description: "Creating warm, functional, and balanced living spaces. We curate natural material palettes, soft lighting, and bespoke spatial layouts tailored to your lifestyle.",
    image: GOOGLE_PROJECT_IMG_1,
    ctaText: "Service Detail"
  },
  {
    id: "space-planning",
    number: "02",
    subtitle: "OUR SERVICE",
    title: "Space Planning & Layout Architecture",
    description: "Refining room layouts, human traffic flow, and visual balance. We strip away spatial clutter to enhance natural light and spatial efficiency.",
    image: GOOGLE_PROJECT_IMG_2,
    ctaText: "Service Detail"
  },
  {
    id: "custom-furniture-storage",
    number: "03",
    subtitle: "OUR SERVICE",
    title: "Custom Furniture & Integrated Storage",
    description: "Designing seamless hidden storage solutions, bespoke cabinetry, and tailored organic furniture pieces that elevate functionality while keeping rooms clutter-free.",
    image: GOOGLE_PROJECT_IMG_3,
    ctaText: "Service Detail"
  },
  {
    id: "commercial-interiors",
    number: "04",
    subtitle: "OUR SERVICE",
    title: "Commercial Interiors & Boutique Studios",
    description: "Designing immersive commercial spaces, boutique wellness centers, and creative studios that express brand identity through materials, light, and architectural form.",
    image: GOOGLE_PROJECT_IMG_4,
    ctaText: "Service Detail"
  }
];

export const PILLARS_DATA = {
  subtitle: "WHY CHOOSE US",
  headline: "We craft spaces with depth, warmth, and meticulous attention to how luxury feels in everyday living.",
  items: [
    {
      number: "01",
      title: "Depth & Character",
      description: "Infusing unique texture, natural stone, and warm organic elements into every layout.",
      image: GOOGLE_PROJECT_IMG_1
    },
    {
      number: "02",
      title: "Tactile Warmth",
      description: "Selecting earthy palettes, soft textiles, and layered lighting that invite relaxation.",
      image: GOOGLE_PROJECT_IMG_3
    },
    {
      number: "03",
      title: "Clutter-Free Flow",
      description: "Prioritizing intelligent integrated storage so your home stays effortlessly serene.",
      image: GOOGLE_PROJECT_IMG_5
    },
    {
      number: "04",
      title: "Timeless Quality",
      description: "Combining high-precision craftsmanship with durable, sustainable luxury finishes.",
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
      title: "Discovery & Immersion",
      description: "Understanding your lifestyle, spatial needs, design aspirations, and material preferences."
    },
    {
      number: "02",
      title: "Conceptual Design",
      description: "Creating spatial layouts, moodboards, material palettes, and 3D architectural visualizations."
    },
    {
      number: "03",
      title: "Bespoke Detailing",
      description: "Finalizing custom joinery drawings, lighting schematics, and material specifications."
    },
    {
      number: "04",
      title: "Turnkey Execution",
      description: "Supervising site craftsmen and delivering a refined, white-glove finish ready to enjoy."
    }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "the-raw-stage",
    subtitle: "Commercial Studio • Mumbai",
    title: "The Raw Stage",
    description: "A boutique commercial interior crafted for a high-end movement and Pilates studio in Mumbai. Stripping away artificial ornament, the design highlights raw concrete textures, warm oak timber, and soft diffuse lighting.",
    image: GOOGLE_PROJECT_IMG_1,
    category: "Commercial Studio",
    year: "2024",
    area: "320 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_1,
      GOOGLE_PROJECT_IMG_2,
      GOOGLE_PROJECT_IMG_3,
      INSTAGRAM_IMG_1
    ]
  },
  {
    id: "residence-no-04",
    subtitle: "Bandra West, Mumbai",
    title: "Residence No. 04",
    description: "Designed for a luxury sea-view apartment in Bandra, this residence focuses on spatial depth and warm minimalist tones. Seamless floor-to-ceiling storage and soft organic curves create an airy, tranquil home environment.",
    image: GOOGLE_PROJECT_IMG_4,
    category: "Residential",
    year: "2024",
    area: "280 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_4,
      GOOGLE_PROJECT_IMG_5,
      GOOGLE_PROJECT_IMG_6,
      INSTAGRAM_IMG_2
    ]
  },
  {
    id: "the-minimalist-loft",
    subtitle: "Juhu, Mumbai",
    title: "The Minimalist Loft",
    description: "A complete spatial overhaul of a penthouse suite in Juhu. Opening up partition walls maximized daylight, while custom travertine stone accents and linen drapery lend tactile warmth to the skyline view.",
    image: GOOGLE_PROJECT_IMG_5,
    category: "Penthouse",
    year: "2023",
    area: "420 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_5,
      GOOGLE_PROJECT_IMG_7,
      GOOGLE_PROJECT_IMG_1,
      INSTAGRAM_IMG_3
    ]
  },
  {
    id: "monolith-workspace",
    subtitle: "Lower Parel, Mumbai",
    title: "Monolith Creative Hub",
    description: "An architectural office suite combining warm wood paneling, acoustic felt, and integrated greenery. Built to offer a serene workspace that inspires focus and creative collaboration.",
    image: GOOGLE_PROJECT_IMG_6,
    category: "Commercial Workspace",
    year: "2023",
    area: "350 sqm",
    gallery: [
      GOOGLE_PROJECT_IMG_6,
      GOOGLE_PROJECT_IMG_2,
      GOOGLE_PROJECT_IMG_4,
      INSTAGRAM_IMG_4
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Rudra Atelier transformed our Bandra home into a sanctuary. The depth, warmth, and attention to hidden storage made the space look stunning and feel completely effortless to live in.",
    client: "Aarav & Riya Kapoor",
    role: "Residence No. 04, Bandra Mumbai • 5★ Client Review"
  },
  {
    quote: "Working with Devanshi Gada and the Rudra Atelier team for 'The Raw Stage' studio design was an absolute delight. They executed our vision with architectural precision and timeless character.",
    client: "Natasha Mehta",
    role: "Founder, The Raw Stage Studio • Mumbai"
  },
  {
    quote: "Their philosophy that 'Luxury Isn't Just Seen — It's Felt' is 100% accurate. Every corner of our Juhu penthouse has a story and custom warmth.",
    client: "Karan Oberoi",
    role: "Penthouse Owner, Juhu Mumbai"
  }
];

export const CTA_DATA = {
  subtitle: "START YOUR PROJECT",
  title: "Ready to Create a Space with Character?",
  description: "Collaborate with Rudra Atelier to transform your residential or commercial space into a warm, refined sanctuary.",
  primaryCta: { text: "Book a Consultation", href: "#contact" },
  secondaryCta: { text: "Explore Services", href: "#services" }
};

export const FAQ_DATA = [
  {
    question: "What services does Rudra Atelier provide?",
    answer: "We offer residential interior design, spatial planning & layout architecture, custom furniture with integrated storage, and boutique commercial studio interiors."
  },
  {
    question: "Where is the Rudra Atelier studio located?",
    answer: "Our studio operates across Mumbai, with project consultations in Lower Parel and Bandra West."
  },
  {
    question: "How do you approach residential space planning?",
    answer: "We analyze daily living flow, natural light orientation, and storage requirements to create open, clutter-free layouts with warmth and depth."
  },
  {
    question: "Do you handle full turnkey project execution?",
    answer: "Yes. We manage turnkey execution, material sourcing, custom joinery, and site supervision from concept through white-glove handover."
  }
];

export const CONTACT_DATA = {
  subtitle: "CONTACT US",
  title: "Let's Craft Your Space",
  description: "Connect with our Mumbai studio or share your project details below to discuss your upcoming residential or commercial interior project.",
  address: "Lower Parel & Bandra West, Mumbai, Maharashtra 400050",
  phone: "+91 98200 12345",
  instagram: "@rudraateliier",
  images: [
    GOOGLE_PROJECT_IMG_1,
    GOOGLE_PROJECT_IMG_2,
    GOOGLE_PROJECT_IMG_4,
    GOOGLE_PROJECT_IMG_5,
    GOOGLE_PROJECT_IMG_6,
    GOOGLE_PROJECT_IMG_7
  ]
};
