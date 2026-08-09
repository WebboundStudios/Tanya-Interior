// TT Interiors Data Constant File
// Created from data.md for TT Interiors website

const H1 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80";
const H2 = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80";
const H3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80";

const V1 = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";
const V2 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80";
const V3 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

const HERO_BG = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85";

export const SITE_BRAND = {
  name: "TT Interiors",
  fullName: "TT Interiors",
  tagline: "Luxury In Every Detail. Crafting Spaces That Inspire.",
  category: "Turnkey Residential & Commercial Interior Studio",
  city: "Agra",
  logoText: "TT Interiors",
  logoImage: "/Tanya_Interiors_logo.jpg",
  address: "First Floor, Friends Center, Sanjay Place, Agra, Uttar Pradesh, India",
  phone: "+91 8630278318",
  email: "tandolia18@gmail.com",
  instagram: "@tanya.interiors",
  meta: {
    title: "TT Interiors — Luxury Residential & Commercial Interior Design | Agra, Delhi & Noida",
    description: "Founded by Principal Designer Tanya Tandolia, TT Interiors crafts turnkey residential sanctuaries and high-performance commercial spaces across Agra, Delhi, and Noida."
  }
};

export const HERO_DATA = {
  subtitle: "TT INTERIORS • AGRA, DELHI & NOIDA",
  title: "Luxury In Every Detail. Crafting Spaces That Inspire.",
  description: "We seamlessly blend bespoke textures, organic curves, and flawless functionality to create high-end residential and commercial spaces tailored to your lifestyle.",
  bgImage: HERO_BG,
  primaryCta: { text: "Explore Our Portfolio", href: "#projects" },
  secondaryCta: { text: "Book a Consultation", href: "#contact" }
};

export const ABOUT_DATA = {
  subtitle: "WHERE LUXURY MEETS PURPOSE",
  headline: "At TT Interiors, we believe exceptional interiors are about more than beautiful materials and striking aesthetics. True luxury lies in creating spaces that feel personal, purposeful, and effortless to experience.",
  teamImage: H1,
  principalImage: "/Tanya_Interiors_founders.jpg",
  principalName: "Tanya Tandolia",
  principalTitle: "Principal Designer & Founder (IIFA Alumna)",
  quote: "We don't simply design spaces. We create environments that reflect the people who experience them.",
  locationCity: "Agra & NCR",
  studioLocation: "Sanjay Place, Agra"
};

export const SERVICES_DATA = [
  {
    id: "concept-3d-visualization",
    number: "01",
    subtitle: "OUR SERVICE",
    title: "Concept & 3D Visualization",
    description: "Space planning, structural architectural detailing, interior layout development, and immersive 3D walkthroughs that let you experience your space before execution begins.",
    image: H1,
    ctaText: "Service Detail"
  },
  {
    id: "bespoke-material-selection",
    number: "02",
    subtitle: "OUR SERVICE",
    title: "Bespoke Material & Furniture Selection",
    description: "Premium furniture sourcing, custom furniture solutions, high-end textures, bespoke wall finishes, material customization, and curated décor.",
    image: H2,
    ctaText: "Service Detail"
  },
  {
    id: "turnkey-project-management",
    number: "03",
    subtitle: "OUR SERVICE",
    title: "Turnkey Project Management",
    description: "Vendor coordination, site verification, material inspection, quality control, execution supervision, and final white-glove project handover.",
    image: H3,
    ctaText: "Service Detail"
  },
  {
    id: "luxury-residential",
    number: "04",
    subtitle: "OUR SERVICE",
    title: "Luxury Residential Sanctuaries",
    description: "High-end living areas, luxury master suites, custom bars, curated home lounges, bespoke furniture layouts, and personalized entertainment spaces.",
    image: V1,
    ctaText: "Service Detail"
  },
  {
    id: "commercial-office-spaces",
    number: "05",
    subtitle: "OUR SERVICE",
    title: "Commercial & Office Excellence",
    description: "High-performance corporate offices, modern executive rooms, collaborative work zones, and reception halls designed to boost collaboration and employee wellness.",
    image: V3,
    ctaText: "Service Detail"
  }
];

export const PILLARS_DATA = {
  subtitle: "WHY CHOOSE US",
  headline: "We design environments with bold visual details, customized wavy contours, and 100% turnkey execution.",
  items: [
    {
      number: "01",
      title: "Luxury In Every Detail",
      description: "Seamlessly blending bespoke textures, organic curves, and flawless functionality to elevate your lifestyle.",
      image: H1
    },
    {
      number: "02",
      title: "Functional Efficiency",
      description: "Striking the perfect balance between bold visual statements, optimized layouts, and uncluttered comfort.",
      image: H2
    },
    {
      number: "03",
      title: "Turnkey Management",
      description: "Managing blueprint concepts, vendor coordination, site verification, and execution supervision down to final handover.",
      image: H3
    },
    {
      number: "04",
      title: "Personalized Storytelling",
      description: "Creating bespoke residential and commercial environments that tell your story and reflect your true individuality.",
      image: V3
    }
  ]
};

export const PROCESS_DATA = {
  subtitle: "OUR APPROACH",
  headline: "From Blueprint Concept to Final Handover",
  steps: [
    {
      number: "01",
      title: "Understand",
      description: "We begin by understanding your vision, lifestyle, requirements, and practical expectations."
    },
    {
      number: "02",
      title: "Design",
      description: "Our team transforms insights into thoughtful concepts, detailed layouts, material palettes, and 3D visualizations."
    },
    {
      number: "03",
      title: "Execute",
      description: "From vendor coordination and material inspection to site execution and installation, we manage every detail with precision."
    },
    {
      number: "04",
      title: "Deliver",
      description: "A refined, functional, and personalized space designed to inspire and built to last."
    }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "sanjay-place-suite",
    subtitle: "Luxury Residence • Sanjay Place, Agra",
    title: "The Sanjay Place Luxury Suite",
    description: "A high-end residential suite featuring customized wavy contours, bespoke furniture layouts, statement cove lighting, and curated material textures.",
    image: H1,
    category: "Residential Interior",
    year: "2024",
    area: "340 sqm",
    gallery: [H1, H2, V1]
  },
  {
    id: "delhi-ncr-turnkey-villa",
    subtitle: "Turnkey Villa • Delhi NCR",
    title: "Delhi NCR Executive Villa",
    description: "Bespoke residential sanctuary featuring a custom marble bar, curated entertainment lounge, integrated acoustics, and high-performance kitchen joinery.",
    image: H2,
    category: "Turnkey Villa",
    year: "2024",
    area: "460 sqm",
    gallery: [H2, H3, V2]
  },
  {
    id: "noida-corporate-hub",
    subtitle: "Corporate Office • Noida",
    title: "Noida High-Performance Office",
    description: "Modern executive suite with collaborative work zones, frameless glass meeting rooms, and ergonomic workstation layouts built for employee wellness.",
    image: H3,
    category: "Commercial Office",
    year: "2023",
    area: "380 sqm",
    gallery: [H3, H1, V3]
  },
  {
    id: "agra-boutique-lounge",
    subtitle: "Commercial Suite • Agra",
    title: "Boutique Reception & Lounge",
    description: "A high-impact commercial entry lounge highlighting organic architectural lines, custom veneer paneling, and warm ambient lighting.",
    image: V3,
    category: "Commercial Interior",
    year: "2023",
    area: "210 sqm",
    gallery: [V3, V1, H2]
  }
];

export const BEFORE_AFTER_DATA = {
  subtitle: "TRANSFORMATION",
  title: "Turnkey Space Transformation",
  description: "Witness how TT Interiors transforms bare, uninspired spaces into high-end, luxury sanctuaries.",
  beforeImage: V1,
  afterImage: H1,
  beforeLabel: "Raw Construction State",
  afterLabel: "TT Interiors Handover"
};

export const TESTIMONIALS_DATA = [
  {
    quote: "TT Interiors transformed our Agra residence into an absolute masterpiece. Tanya Tandolia's attention to custom textures and organic curves is unmatched.",
    client: "Rajesh & Priya Agarwal",
    role: "Agra Residence • 5★ Client Review"
  },
  {
    quote: "From 3D walkthroughs to turnkey handover, Tanya and her team managed our corporate office execution seamlessly. Highly recommended!",
    client: "Amit Verma",
    role: "Managing Director • Delhi NCR"
  },
  {
    quote: "Their ability to balance bold visual details with practical functionality made our luxury apartment feel effortlessly personal and comfortable.",
    client: "Sunita & Vikram Sharma",
    role: "Villa Owners • Noida"
  }
];

export const CTA_DATA = {
  subtitle: "START YOUR PROJECT",
  title: "Ready to Transform Your Space?",
  description: "Reach out to schedule an initial consultation with TT Interiors and take the first step toward transforming your residential or commercial space.",
  bgImage: H3,
  primaryCta: { text: "Book a Consultation", href: "#contact" },
  secondaryCta: { text: "Explore Our Portfolio", href: "#projects" }
};

export const FAQ_DATA = [
  {
    question: "What services does TT Interiors provide?",
    answer: "We provide all-inclusive turnkey interior design solutions including 3D visualization, bespoke material selection, custom furniture, luxury residential transformations, and commercial office design."
  },
  {
    question: "Where is TT Interiors located and what regions do you cover?",
    answer: "Our studio is located at First Floor, Friends Center, Sanjay Place, Agra, Uttar Pradesh. We deliver turnkey projects across Agra, Delhi, and Noida (Delhi NCR)."
  },
  {
    question: "Who leads TT Interiors?",
    answer: "TT Interiors is led by Principal Designer Tanya Tandolia, an alumna of the International Institute of Fashion and Arts (IIFA), India."
  },
  {
    question: "Do you offer complete turnkey project management?",
    answer: "Yes! We manage 100% turnkey execution from blueprint concepts, vendor coordination, and material inspection to site supervision and final handover."
  },
  {
    question: "How can I book an initial project consultation?",
    answer: "You can reach out through our contact form, email us at tandolia18@gmail.com, call +91 8630278318, or connect on Instagram @tanya.interiors."
  }
];

export const CONTACT_DATA = {
  subtitle: "GET IN TOUCH",
  title: "Let's Build Your Dream Project Together",
  description: "Reach out to schedule an initial consultation and take the first step toward transforming your space.",
  address: "First Floor, Friends Center, Sanjay Place, Agra, Uttar Pradesh, India",
  phone: "+91 8630278318",
  email: "tandolia18@gmail.com",
  instagram: "@tanya.interiors",
  images: [H1, H2, H3, V1, V2, V3]
};
