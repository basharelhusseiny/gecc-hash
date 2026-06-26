import { HardHat, Factory, Building2, Zap } from "lucide-react";

export const iconMap = {
  hardHat: HardHat,
  factory: Factory,
  building2: Building2,
  zap: Zap,
};

export const getIconComponent = (iconName) => iconMap[iconName];

export const imageLogos = [
  {
    src: "/partners/1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/partners/2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/partners/3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/partners/4.png",
    alt: "Company 4",
    href: "https://company4.com",
  },
  {
    src: "/partners/5.png",
    alt: "Company 5",
    href: "https://company5.com",
  },
];

export const servicesData = [
  {
    id: "01",
    slug: "road-construction",
    title: "Road Construction & Asphalting",
    icon: HardHat,
    iconName: "hardHat",
    subtitle:
      "Building reliable transportation networks that connect communities, improve mobility, and support sustainable economic development across South Sudan and East Africa.",
    heroImage: "/road-aerial-card.jpg",
    listImage: "/road-aerial-card.jpg",
    shortDescription:
      "Professional road construction, asphalt paving, and infrastructure solutions designed for durability, safety, and long-term performance.",
    description:
      "At GECC, we provide comprehensive road construction and asphalting solutions for government agencies, private developers, and infrastructure projects throughout South Sudan and East Africa. Our engineers oversee every stage — from feasibility studies and engineering design to earthworks, asphalt paving, drainage systems, and final road marking — using modern equipment and internationally recognized practices.",
    stats: [
      { value: "150+", label: "KM of Roads Built" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "16+", label: "Years Experience" },
    ],
    features: [
      "Modern road engineering techniques",
      "Premium asphalt paving systems",
      "Advanced surveying and planning",
      "High-performance drainage solutions",
      "Long-lasting pavement durability",
      "Environmentally responsible construction",
    ],
    benefits: [
      {
        title: "Tailor-Made Infrastructure",
        description:
          "Every road project is designed around traffic demands, terrain conditions, and client objectives.",
      },
      {
        title: "Superior Construction Quality",
        description:
          "Premium materials and advanced paving technologies ensure roads remain durable for decades.",
      },
      {
        title: "Safety First",
        description:
          "Proper geometric design, drainage, signage, and strict construction standards throughout.",
      },
      {
        title: "Efficient Project Delivery",
        description:
          "Professional planning and experienced management deliver projects on schedule, every time.",
      },
    ],
    services: [
      "Highway Construction",
      "Urban Road Development",
      "Rural Road Construction",
      "Industrial Access Roads",
      "Airport Runway Construction",
      "Asphalt Paving",
      "Road Rehabilitation",
      "Drainage Systems",
    ],
    process: [
      {
        title: "Site Assessment",
        description:
          "Feasibility studies, topographic surveys, and soil investigations.",
      },
      {
        title: "Engineering Design",
        description:
          "Road layouts, structural calculations, and drainage planning.",
      },
      {
        title: "Site Preparation",
        description:
          "Clearing, grading, and excavation for stable foundations.",
      },
      {
        title: "Construction",
        description:
          "Earthworks, sub-base, asphalt paving, and finishing works.",
      },
      {
        title: "Inspection & Delivery",
        description: "Quality inspections and final testing before handover.",
      },
    ],
    whyChooseUs: [
      "Experienced civil engineering team",
      "Modern construction equipment",
      "International quality standards",
      "Strict HSE compliance",
      "Sustainable construction methods",
      "On-time project completion",
    ],
    faq: [
      {
        question: "What types of roads does GECC construct?",
        answer:
          "Highways, urban roads, rural roads, industrial access roads, airport pavements, and commercial transportation infrastructure.",
      },
      {
        question: "Do you provide road rehabilitation services?",
        answer:
          "Yes — resurfacing, rehabilitation, pavement strengthening, and complete reconstruction services.",
      },
      {
        question: "Do your projects comply with international standards?",
        answer:
          "Every project follows regional regulations and internationally recognized engineering standards.",
      },
    ],
    cta: {
      title: "Let's Build Better Roads Together",
      description:
        "Partner with GECC to develop durable, efficient, and sustainable transportation infrastructure.",
      button: "Request a Consultation",
    },
  },

  {
    id: "02",
    slug: "concrete-manufacturing",
    title: "Concrete Product Manufacturing",
    icon: Factory,
    iconName: "factory",
    subtitle:
      "Manufacturing high-strength structural concrete blocks, paving blocks, and precast elements built to strict industrial standards.",
    heroImage: "/paver-card.jpg",
    listImage: "/paver-card.jpg",
    shortDescription:
      "Industrial-grade concrete products engineered for structural performance, consistency, and large-scale supply.",
    description:
      "Our manufacturing division produces high-strength concrete blocks, interlocking pavers, and custom precast elements for construction projects across the region. Every batch passes through strict quality control — from aggregate grading to compressive testing — so contractors and developers can build with confidence.",
    stats: [
      { value: "50K+", label: "Units Produced / Year" },
      { value: "100%", label: "Lab-Tested Output" },
      { value: "16+", label: "Years Experience" },
    ],
    features: [
      "Vibro-compression molding technology",
      "High-strength structural blocks",
      "Custom precast elements",
      "In-house quality control lab",
      "Consistent batch-to-batch quality",
      "Large-scale supply capacity",
    ],
    benefits: [
      {
        title: "Engineered Consistency",
        description:
          "Every unit is produced under controlled conditions for predictable structural performance.",
      },
      {
        title: "Rigorous Lab Testing",
        description:
          "Compressive strength testing on every batch before it reaches your site.",
      },
      {
        title: "Scalable Supply",
        description:
          "Production capacity built to support large infrastructure and housing projects.",
      },
      {
        title: "Custom Specifications",
        description:
          "Precast elements manufactured to your project's exact structural requirements.",
      },
    ],
    services: [
      "High-Strength Blocks",
      "Interlocking Pavers",
      "Precast Elements",
      "Curb Stones & Drainage Units",
      "Custom Mold Fabrication",
      "Bulk Project Supply",
    ],
    process: [
      {
        title: "Aggregate Grading",
        description: "Selecting and grading premium raw aggregates.",
      },
      {
        title: "Mix Design",
        description: "Engineering the concrete mix for target strength.",
      },
      {
        title: "Vibro-Compression",
        description: "High-amplitude density molding for structural integrity.",
      },
      {
        title: "Curing",
        description:
          "Controlled curing conditions to reach full design strength.",
      },
      {
        title: "Compressive Testing",
        description: "Verifying stress load limits in the in-house lab.",
      },
    ],
    whyChooseUs: [
      "In-house quality control lab",
      "High-volume production capacity",
      "Custom mold & specification support",
      "Consistent regional supply chain",
      "Strict batch testing protocols",
      "Competitive bulk pricing",
    ],
    faq: [
      {
        question: "Can GECC supply concrete products for large-scale projects?",
        answer:
          "Yes, our production capacity is built to support bulk and continuous-supply contracts.",
      },
      {
        question: "Do you offer custom precast elements?",
        answer:
          "We manufacture custom molds and precast elements to match specific project drawings.",
      },
      {
        question: "Is every batch quality tested?",
        answer:
          "Yes — every batch goes through compressive strength testing in our in-house lab.",
      },
    ],
    cta: {
      title: "Source Reliable Concrete Products",
      description:
        "Partner with GECC's manufacturing division for consistent, tested concrete supply.",
      button: "Request a Quote",
    },
  },

  {
    id: "03",
    slug: "real-estate",
    title: "Real Estate Development",
    icon: Building2,
    iconName: "building2",
    subtitle:
      "Delivering modern residential, commercial, and institutional buildings with structural integrity and sustainable practices.",
    heroImage: "/gallery-3.jpg",
    listImage: "/gallery-3.jpg",
    shortDescription:
      "Complete building development — from concept and design to project handover — built to the highest industry standards.",
    description:
      "GECC delivers high-quality building construction for residential, commercial, industrial, and institutional developments across South Sudan and East Africa. Our engineers, architects, and project managers handle every stage of the lifecycle — from site preparation and structural works to finishing and handover — combining durability, functionality, and modern design.",
    stats: [
      { value: "30+", label: "Buildings Delivered" },
      { value: "5+", label: "Countries Reached" },
      { value: "16+", label: "Years Experience" },
    ],
    features: [
      "Residential, commercial & industrial builds",
      "Modern architectural solutions",
      "High-quality structural engineering",
      "Sustainable building practices",
      "Advanced project management",
      "Strict quality assurance & HSE compliance",
    ],
    benefits: [
      {
        title: "Tailor-Made Solutions",
        description:
          "Every project is planned around functional needs, budget, and architectural vision.",
      },
      {
        title: "Exceptional Build Quality",
        description:
          "Premium materials and rigorous quality control ensure long-lasting results.",
      },
      {
        title: "Sustainable Buildings",
        description:
          "Environmentally responsible materials and energy-efficient building systems.",
      },
      {
        title: "Reliable Delivery",
        description:
          "Efficient scheduling and cost control without compromising quality or safety.",
      },
    ],
    services: [
      "Residential Homes & Villas",
      "Apartment Buildings",
      "Commercial Buildings",
      "Office Complexes",
      "Industrial Warehouses",
      "Schools & Healthcare Facilities",
      "Government Buildings",
    ],
    process: [
      {
        title: "Planning & Consultation",
        description: "Defining objectives, budget, and site conditions.",
      },
      {
        title: "Design & Engineering",
        description: "Architectural drawings and structural calculations.",
      },
      {
        title: "Construction Execution",
        description: "Structural works, MEP systems, and finishing.",
      },
      {
        title: "Quality Control",
        description: "Continuous inspections at every construction phase.",
      },
      {
        title: "Project Handover",
        description:
          "A fully inspected, ready-to-use facility delivered on time.",
      },
    ],
    whyChooseUs: [
      "16+ years of construction experience",
      "Qualified engineers & project managers",
      "Modern construction technologies",
      "Premium building materials",
      "Strict health & safety standards",
      "Client-focused project delivery",
    ],
    faq: [
      {
        question: "What types of buildings does GECC construct?",
        answer:
          "Residential homes, apartment buildings, offices, commercial facilities, warehouses, schools, and hospitals.",
      },
      {
        question: "Can GECC manage projects from design to completion?",
        answer:
          "Yes — full project delivery including planning, engineering, construction, and handover.",
      },
      {
        question: "Do you use sustainable construction methods?",
        answer:
          "We integrate eco-friendly materials and energy-efficient systems wherever possible.",
      },
    ],
    cta: {
      title: "Let's Build Your Next Landmark",
      description:
        "Whether residential, commercial, or industrial — GECC is ready to bring your vision to life.",
      button: "Start Your Project",
    },
  },

  {
    id: "04",
    slug: "energy-infrastructure",
    title: "Energy Infrastructure",
    icon: Zap,
    iconName: "zap",
    subtitle:
      "Engineering robust power distribution grids, substations, and renewable energy installations for South Sudan and East Africa's future.",
    heroImage: "/factory-floor.jpg",
    listImage: "/factory-floor.jpg",
    shortDescription:
      "Power distribution, substation engineering, and renewable energy solutions built for reliability at scale.",
    description:
      "GECC's energy division delivers grid electrification, substation construction, and renewable installations that bring reliable power to growing communities and industries. We size, install, and synchronize power infrastructure with the same engineering discipline we apply to roads and buildings.",
    stats: [
      { value: "20+", label: "Substations Installed" },
      { value: "24/7", label: "Reliability Focus" },
      { value: "16+", label: "Years Experience" },
    ],
    features: [
      "Substation design & construction",
      "Grid electrification networks",
      "Solar & renewable installations",
      "Industrial power solutions",
      "Load modeling & sizing",
      "Grid synchronization & testing",
    ],
    benefits: [
      {
        title: "Engineered for Reliability",
        description:
          "Power systems sized and built to handle real demand without failure points.",
      },
      {
        title: "Renewable-Ready",
        description:
          "Solar and hybrid installations integrated into existing or new grid infrastructure.",
      },
      {
        title: "Industrial-Grade Power",
        description:
          "Substations and switchgear built to serve heavy industrial and commercial loads.",
      },
      {
        title: "Full Lifecycle Support",
        description:
          "From load modeling to commissioning and ongoing grid synchronization.",
      },
    ],
    services: [
      "Substation Design",
      "Grid Electrification",
      "Solar & Renewables",
      "Industrial Power Supply",
      "Transmission Line Erection",
      "Power System Upgrades",
    ],
    process: [
      {
        title: "Load Modeling",
        description: "Sizing power grids and equipment for projected demand.",
      },
      {
        title: "Engineering Design",
        description:
          "Substation layouts, transmission routing, and switchgear specs.",
      },
      {
        title: "Transmission Install",
        description: "Erecting grid towers, cabling, and switchgear.",
      },
      {
        title: "Grid Synchronization",
        description: "Integrating new power infrastructure into live networks.",
      },
      {
        title: "Commissioning",
        description:
          "Testing and handover with full performance documentation.",
      },
    ],
    whyChooseUs: [
      "Experienced power systems engineers",
      "Renewable energy integration expertise",
      "Industrial-grade equipment sourcing",
      "Strict grid safety compliance",
      "Regional logistics network",
      "Long-term maintenance support",
    ],
    faq: [
      {
        question: "Does GECC install renewable energy systems?",
        answer:
          "Yes — solar and hybrid renewable installations are part of our energy infrastructure services.",
      },
      {
        question: "Can you build substations for industrial clients?",
        answer:
          "Yes, we design and construct substations sized for industrial and commercial loads.",
      },
      {
        question: "Do you handle grid synchronization?",
        answer:
          "Yes — full testing and synchronization into existing live networks is part of our delivery.",
      },
    ],
    cta: {
      title: "Power Your Next Project",
      description:
        "Talk to our energy team about grid, substation, or renewable installation needs.",
      button: "Get a Free Consultation",
    },
  },
];

export const getServiceBySlug = (slug) => {
  const service = servicesData.find((service) => service.slug === slug);
  if (!service) return null;
  // Return only serializable data (no icon component)
  const { icon, ...serializableService } = service;
  return serializableService;
};
