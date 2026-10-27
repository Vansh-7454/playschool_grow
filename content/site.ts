export interface ThemeTokens {
  background: string;
  surface: string;
  surface2: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryHover: string;
  primaryContrast: string;
  coral: string;
  warmOrange: string;
  sunnyYellow: string;
  skyBlue: string;
  mintGreen: string;
  teal: string;
  softLavender: string;
  warmCream: string;
  border: string;
  darkBand: string;
  darkBandText: string;
  darkBandMuted: string;
}

export interface BrandConfig {
  name: string;
  legalType: string;
  city: string;
  state: string;
  country: string;
  tagline: string;
  shortDescription: string;
  ageGroup: string;
  logo: {
    src: string;
    markSrc: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ContactConfig {
  phoneDisplay: string;
  phoneTel: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  locality: string;
  city: string;
  pincode: string;
  state: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  mapQueryUrl: string;
  appointmentNote: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ImageSlot {
  src: string;
  alt: string;
  ratio: "4:5" | "16:9" | "4:3" | "1:1" | "21:9";
  focalPoint?: string;
  source: string;
  isStock: boolean;
  notes?: string;
}

export interface ProgrammeItem {
  id: string;
  slug: string;
  title: string;
  ageBracket: string;
  timings: string;
  summary: string;
  description: string;
  whatIsIncluded: string[];
  whoItIsFor: string;
  iconName: "Baby" | "Palette" | "BookOpen" | "Clock" | "Heart" | "ShieldCheck";
  image: ImageSlot;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Admissions & Visits" | "Safety & Campus" | "Programmes & Timings" | "Day Care";
}

export interface SafetyPoint {
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Camera" | "HeartHandshake" | "CheckCircle2";
}

export interface DailyRoutineItem {
  timeSlot: string;
  activity: string;
  purpose: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
}

export interface SiteContent {
  brand: BrandConfig;
  tokens: ThemeTokens;
  contact: ContactConfig;
  nav: NavItem[];
  pages: {
    home: PageMetadata;
    programmes: PageMetadata;
    daycare: PageMetadata;
    gallery: PageMetadata;
    about: PageMetadata;
    contact: PageMetadata;
  };
  trustPoints: Array<{
    title: string;
    subtitle: string;
    iconName: "Baby" | "ShieldCheck" | "Clock" | "Sparkles";
  }>;
  programmes: ProgrammeItem[];
  safetyPoints: SafetyPoint[];
  dailyRoutine: DailyRoutineItem[];
  galleryItems: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    image: ImageSlot;
  }>;
  faqs: FAQItem[];
  visitingCardStatus: {
    description: string;
    isSeparateJob: boolean;
    specifications: string;
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "Little Steps Play School",
    legalType: "Early Childhood Play School & Day Care",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    tagline: "Gentle first steps. Confident young minds.",
    shortDescription:
      "A calm, nurturing play school and day care in Lucknow designed for ages 2–5. Guided early learning, predictable daily routine, and continuous CCTV security.",
    ageGroup: "Ages 2 to 5 Years",
    logo: {
      src: "/logo.svg",
      markSrc: "/logo-mark.svg",
      alt: "Little Steps Play School and Day Care Logo",
      width: 240,
      height: 48,
    },
  },

  tokens: {
    background: "#FFF9EF",
    surface: "#FFFFFF",
    surface2: "#F0F4FD",
    text: "#29332F",
    textMuted: "#5A6B64",
    primary: "#FF786B",
    primaryHover: "#E66356",
    primaryContrast: "#FFFFFF",
    coral: "#FF786B",
    warmOrange: "#FFA45B",
    sunnyYellow: "#FFD84D",
    skyBlue: "#79C9F5",
    mintGreen: "#A9DFC2",
    teal: "#287F78",
    softLavender: "#DCD0FA",
    warmCream: "#FFF9EF",
    border: "#EADFCF",
    darkBand: "#29332F",
    darkBandText: "#FFFFFF",
    darkBandMuted: "#A9DFC2",
  },

  contact: {
    phoneDisplay: "+91 98765 00000 [CONFIRM PHONE]",
    phoneTel: "+919876500000",
    whatsappDisplay: "+91 98765 00000 [CONFIRM WHATSAPP]",
    whatsappNumber: "919876500000",
    whatsappMessage:
      "Hello Little Steps Play School, I would like to book a campus visit for my child.",
    email: "admissions@littlestepslucknow.in [CONFIRM EMAIL]",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh 226010 [CONFIRM FULL STREET ADDRESS]",
    locality: "Gomti Nagar",
    city: "Lucknow",
    pincode: "226010",
    state: "Uttar Pradesh",
    hoursWeekday: "Monday – Friday: 8:30 AM – 5:30 PM",
    hoursSaturday: "Saturday: 9:00 AM – 1:00 PM (Visits by Appointment)",
    hoursSunday: "Sunday: Closed",
    mapQueryUrl:
      "https://www.google.com/maps/search/?api=1&query=Little+Steps+Play+School+Gomti+Nagar+Lucknow",
    appointmentNote:
      "To ensure student safety, campus walkthroughs and director discussions are scheduled by advance WhatsApp confirmation.",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Programmes", href: "/programmes" },
    { label: "Day Care", href: "/daycare" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  pages: {
    home: {
      title: "Little Steps Play School Lucknow | Play School & Day Care (Ages 2–5)",
      description:
        "Nurturing play school and day care in Lucknow for ages 2–5. Predictable routine, CCTV safety, trained early educators. Book your campus visit on WhatsApp.",
      eyebrow: "Early Learning & Day Care (Ages 2–5)",
      heading: "Where curiosity blossoms and every little step is celebrated",
      intro:
        "A calm, safe learning home in Lucknow for children aged 2 to 5 years. We combine gentle socialisation, structured daily routines, and constant security so children feel secure and parents stay assured.",
    },
    programmes: {
      title: "Early Childhood Programmes (Ages 2–5) | Little Steps Play School Lucknow",
      description:
        "Explore Playgroup, Nursery, and Kindergarten at Little Steps Play School in Lucknow. Transparent age requirements, morning timings, and foundational learning focus.",
      eyebrow: "Early Learning & Developmental Stages",
      heading: "Carefully designed stages for each developmental milestone",
      intro:
        "Every age bracket has distinct social, physical, and sensory needs. Discover our structured timings, age criteria, and daily classroom routines below.",
    },
    daycare: {
      title: "Secure Day Care in Lucknow | Little Steps Play School",
      description:
        "Reliable, hygienic day care in Lucknow for ages 2–5. Monitored rest spaces, nutritious snack routines, caring supervision, and flexible hours from 8:30 AM to 5:30 PM.",
      eyebrow: "Reliable Day Care & Extended Routine",
      heading: "A gentle home away from home with structured care",
      intro:
        "For working parents in Lucknow needing dependable supervision after school hours or full-day care. Balanced rest, hygiene, and safe quiet activities.",
    },
    gallery: {
      title: "Campus Gallery | Little Steps Play School Lucknow",
      description:
        "Tour the learning spaces, activity corners, sanitized wash stations, and outdoor soft play lawns at Little Steps Play School, Lucknow.",
      eyebrow: "Campus & Classroom Spaces",
      heading: "A clean, cheerful environment prepared for young learners",
      intro:
        "Explore our classrooms, reading corners, sensorial tables, and safety infrastructure. In compliance with our child privacy policy, only verified learning environments are shown.",
    },
    about: {
      title: "About Little Steps Play School Lucknow | Our Story & Safety Standards",
      description:
        "Learn about the founding principles, director's philosophy, and strict safety guidelines of Little Steps Play School & Day Care in Lucknow.",
      eyebrow: "Our Philosophy & Values",
      heading: "Built around safety, unhurried growth, and parent partnership",
      intro:
        "How Little Steps Play School grew out of a commitment to provide Lucknow families with a calm, orderly, and genuinely nurturing early education space.",
    },
    contact: {
      title: "Contact & Book Campus Visit | Little Steps Play School Lucknow",
      description:
        "Schedule an in-person school visit at Little Steps Play School in Gomti Nagar, Lucknow. Direct WhatsApp appointment link, visiting hours, and campus directions.",
      eyebrow: "Campus Visits & Inquiries",
      heading: "Visit our campus and meet our early childhood educators",
      intro:
        "Admissions at Little Steps take place in person. We invite parents to tour our classrooms, observe safety standards, and ask any questions before enrolling.",
    },
  },

  trustPoints: [
    {
      title: "Ages 2 to 5 Years",
      subtitle: "Dedicated Playgroup, Nursery, KG & Day Care stages",
      iconName: "Baby",
    },
    {
      title: "CCTV & Security",
      subtitle: "Continuous surveillance across rooms and campus entry",
      iconName: "ShieldCheck",
    },
    {
      title: "Predictable Daily Routine",
      subtitle: "Structured morning circle, free play, snack, and rest",
      iconName: "Clock",
    },
    {
      title: "Trained Caregivers",
      subtitle: "Attentive, verified educators and early childhood staff",
      iconName: "Sparkles",
    },
  ],

  programmes: [
    {
      id: "playgroup",
      slug: "playgroup",
      title: "Playgroup",
      ageBracket: "2.0 – 3.0 Years",
      timings: "9:00 AM – 11:30 AM (Monday to Friday)",
      summary:
        "Gentle separation, sensory exploration, and interactive social play designed for a toddler's very first school experience.",
      description:
        "Our Playgroup offers a gentle transition from home to school. We emphasize comfort, routine predictability, and sensory discovery using non-toxic wooden blocks, musical bells, and tactile water and sand play.",
      whatIsIncluded: [
        "Sensory and tactile play with natural materials",
        "Gentle language stimulation through songs and rhymes",
        "Fine and gross motor coordination games",
        "Assisted toilet training and handwashing habit building",
        "Daily healthy snack time routine",
      ],
      whoItIsFor:
        "Toddlers taking their first step away from home who benefit from social play in a safe, unhurried setting.",
      iconName: "Baby",
      image: {
        src: "/images/programmes/playgroup.webp",
        alt: "Sensorial tactile trays and wooden stacking rings in the Playgroup classroom",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "nursery",
      slug: "nursery",
      title: "Nursery",
      ageBracket: "3.0 – 4.0 Years",
      timings: "9:00 AM – 12:30 PM (Monday to Friday)",
      summary:
        "Early language phonics, number awareness, creative self-expression, and cooperative peer play.",
      description:
        "Nursery introduces foundational phonics, shape and color recognition, and expressive arts. Children learn to follow multi-step routines, express their thoughts clearly, and collaborate with peers.",
      whatIsIncluded: [
        "Phonetic awareness and vocabulary enrichment",
        "Pre-math concepts, counting beads, and shape identification",
        "Creative art, finger painting, and paper craft",
        "Storytelling circle and question exploration",
        "Guided outdoor play on soft safety turf",
      ],
      whoItIsFor:
        "Curious children aged 3 to 4 ready to expand communication, question their surroundings, and build friendships.",
      iconName: "Palette",
      image: {
        src: "/images/programmes/nursery.webp",
        alt: "Wooden alphabet blocks and phonetic visual cards in the Nursery room",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "kindergarten",
      slug: "kindergarten",
      title: "Kindergarten (LKG & UKG)",
      ageBracket: "4.0 – 5.0+ Years",
      timings: "9:00 AM – 1:00 PM (Monday to Friday)",
      summary:
        "Comprehensive school readiness, independent reading fundamentals, early numeracy, and logical curiosity.",
      description:
        "Kindergarten prepares young learners with the focus, cognitive confidence, and foundational skills necessary for primary school admissions in Lucknow. Instruction balances playful inquiry with structured desk readiness.",
      whatIsIncluded: [
        "Independent phonics reading and beginner writing",
        "Number concepts, abacus calculation, and simple problem solving",
        "Scientific observation trays and nature exploration",
        "Public speaking confidence during 'Show & Share'",
        "Social empathy, team problem solving, and independence",
      ],
      whoItIsFor:
        "Children aged 4 to 5 gearing up for primary formal school admission with high confidence and strong foundational habits.",
      iconName: "BookOpen",
      image: {
        src: "/images/programmes/kindergarten.webp",
        alt: "Reading materials and geometric abacus in Kindergarten room",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "daycare",
      slug: "daycare",
      title: "Extended Day Care",
      ageBracket: "2.0 – 5.0 Years",
      timings: "8:30 AM – 5:30 PM (Half-Day & Full-Day slots)",
      summary:
        "Supervised afternoon care with dedicated hygienic nap cots, nutritious snack times, and quiet recreation.",
      description:
        "Created to support working families across Lucknow. Children enjoy a wholesome hot snack, designated restful sleep in an individual cot, followed by supervised homework assistance, puzzles, and indoor recreation.",
      whatIsIncluded: [
        "Individual sanitized nap cot with clean linen",
        "Warm, nutritious afternoon snack routine",
        "Continuous supervision by trained day care caregivers",
        "Quiet table games, puzzles, and story reading",
        "Evening tea and light fruit snack before pickup",
      ],
      whoItIsFor:
        "Working parents needing a secure, loving, and predictable environment for their child during business hours.",
      iconName: "Clock",
      image: {
        src: "/images/daycare/after-school.webp",
        alt: "Preschool children and caregiver playing calm evening floor activities in extended day care",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
  ],

  safetyPoints: [
    {
      title: "Continuous CCTV Coverage",
      description:
        "All activity classrooms, common indoor spaces, nap areas, and entrance gates are under active CCTV surveillance.",
      iconName: "Camera",
    },
    {
      title: "Trained & Verified Staff",
      description:
        "Every educator, day care attendant, and support staff undergoes background verification and comprehensive safety training.",
      iconName: "ShieldCheck",
    },
    {
      title: "Child-Safe Infrastructure",
      description:
        "Rounded furniture corners, finger-pinch door guards, electrical switch safety covers, and soft anti-impact flooring.",
      iconName: "CheckCircle2",
    },
    {
      title: "Strict Visitor & Gate Protocols",
      description:
        "Campus access is restricted. Visitor entry requires identification logging, and child handover follows verified parent protocols.",
      iconName: "HeartHandshake",
    },
  ],

  dailyRoutine: [
    {
      timeSlot: "8:30 AM – 9:00 AM",
      activity: "Warm Welcome & Health Check",
      purpose: "Gentle greeting, temperature check, and shoes-off transition.",
    },
    {
      timeSlot: "9:00 AM – 9:30 AM",
      activity: "Morning Circle & Rhyme Time",
      purpose: "Calendar, weather chart, and interactive songs to build connection.",
    },
    {
      timeSlot: "9:30 AM – 10:30 AM",
      activity: "Guided Learning & Cognitive Activities",
      purpose: "Age-specific phonics, numeracy, fine-motor tracing, and sensorial play.",
    },
    {
      timeSlot: "10:30 AM – 11:00 AM",
      activity: "Wholesome Snack & Table Manners",
      purpose: "Handwashing ritual, self-feeding encouragement, and hydration.",
    },
    {
      timeSlot: "11:00 AM – 11:45 AM",
      activity: "Outdoor Soft-Play / Gross Motor Games",
      purpose: "Sand pit, mini slide, balance games on safety artificial grass.",
    },
    {
      timeSlot: "11:45 AM – 12:30 PM",
      activity: "Storytelling, Creative Art & Music",
      purpose: "Puppet stories, expressive painting, and cleanup cooperation.",
    },
    {
      timeSlot: "12:30 PM – 1:00 PM",
      activity: "Playgroup & Nursery Dismissal",
      purpose: "Orderly parent handoff for morning-only programs.",
    },
    {
      timeSlot: "1:00 PM – 3:30 PM",
      activity: "Day Care Lunch & Quiet Nap Time",
      purpose: "Warm meal followed by quiet sleep in individualized cots.",
    },
    {
      timeSlot: "3:30 PM – 5:30 PM",
      activity: "Afternoon Snack & Quiet Recreation",
      purpose: "Puzzle boards, light free play, and safe evening pickup.",
    },
  ],

  galleryItems: [
    {
      id: "gal-1",
      title: "Art & Creativity Wall",
      category: "Creative Expression",
      description:
        "Children's finger painting, leaf prints, and seasonal craft displays celebrating self-expression.",
      image: {
        src: "/images/gallery/art-craft.webp",
        alt: "Art and craft display wall with children's colorful paper creations",
        ratio: "1:1",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "gal-2",
      title: "Reading & Story Nook",
      category: "Early Literacy",
      description:
        "Low wooden book cubbies and plush cushions where educators read picture classics daily.",
      image: {
        src: "/images/gallery/reading-corner.webp",
        alt: "Cosy reading corner with child-accessible wooden bookshelves and cushions",
        ratio: "4:5",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "gal-3",
      title: "Outdoor Soft Turf Play Area",
      category: "Gross Motor Play",
      description:
        "Shock-absorbent lawn equipped with child-height slides, tunnels, and safe balance beams.",
      image: {
        src: "/images/gallery/outdoor-play.webp",
        alt: "Outdoor play yard with clean green artificial turf and child slide",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "gal-4",
      title: "Montessori Sensory Zone",
      category: "Cognitive Discovery",
      description:
        "Tactile wooden shape sorters, kinetic sand, and sound cylinder boxes designed for tactile learning.",
      image: {
        src: "/images/gallery/sensory-zone.webp",
        alt: "Sensorial exploration table with natural wooden sorting blocks",
        ratio: "1:1",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "gal-5",
      title: "Child-Sized Hygiene Station",
      category: "Sanitation & Care",
      description:
        "Low-height sinks, anti-slip washroom floor mats, and gentle automated soap dispensers.",
      image: {
        src: "/images/gallery/hygiene-wash.webp",
        alt: "Spotless child-sized handwashing sinks with anti-slip flooring",
        ratio: "4:3",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
    {
      id: "gal-6",
      title: "Morning Assembly Circle",
      category: "Community & Rhymes",
      description:
        "Vibrant circle rug where daily greetings, morning exercise, and interactive storytelling occur.",
      image: {
        src: "/images/gallery/circle-time.webp",
        alt: "Circle time carpet area with morning activity props",
        ratio: "4:5",
        source: "Atmosphere photography",
        isStock: true,
      },
    },
  ],

  faqs: [
    {
      category: "Admissions & Visits",
      question: "How do we schedule a campus visit for our child?",
      answer:
        "Campus visits are scheduled via WhatsApp or phone. Click 'Book a school visit on WhatsApp' to pick a morning slot (between 9:30 AM and 12:30 PM). This allows you to observe ongoing activities, inspect our CCTV and classrooms, and discuss your child's needs directly with the director.",
    },
    {
      category: "Admissions & Visits",
      question: "Are admissions conducted online or in person?",
      answer:
        "Admissions at Little Steps are conducted strictly in person. We believe parents and children should experience the school environment first-hand before making an admission decision. No online admission portals or registration fees are required prior to your visit.",
    },
    {
      category: "Safety & Campus",
      question: "What safety measures are implemented on campus?",
      answer:
        "Our campus features 24/7 CCTV surveillance across all classrooms, play areas, and access points. All doors have finger-guard protectors, furniture has rounded edges, and electrical outlets are elevated and covered. All educators and support staff undergo police and background verification.",
    },
    {
      category: "Safety & Campus",
      question: "What is the adult-to-child ratio in the classrooms?",
      answer:
        "We maintain small, focused groups with dedicated classroom teachers supported by caring attendants. This ensures every child receives personal attention, assisted toilet transitions, and immediate comfort whenever needed.",
    },
    {
      category: "Programmes & Timings",
      question: "What are the school timings for each age group?",
      answer:
        "Playgroup runs from 9:00 AM to 11:30 AM, Nursery runs from 9:00 AM to 12:30 PM, and Kindergarten runs from 9:00 AM to 1:00 PM (Monday through Friday). Extended Day Care is available from 8:30 AM up to 5:30 PM.",
    },
    {
      category: "Day Care",
      question: "How is rest and nutrition managed in the Day Care?",
      answer:
        "Day care children have individual sanitized cots with personal bed linen in a quiet, air-cooled nap room. We follow a structured routine including a warm midday meal, supervised sleep, an evening healthy snack, and peaceful table games until parents arrive for pickup.",
    },
    {
      category: "Day Care",
      question: "Can children enrolled in Playgroup or Nursery also opt for Day Care?",
      answer:
        "Yes. Children enrolled in morning Playgroup, Nursery, or KG can seamlessly transition into our extended Day Care programme at 12:30 PM or 1:00 PM, remaining under continuous, caring supervision until evening pickup.",
    },
  ],

  visitingCardStatus: {
    description:
      "Visiting card design is designated as a separate job per the project brief (Section 21). The brand logo, typography, color tokens, and contact structure in this site are prepared for immediate application to the visiting card.",
    isSeparateJob: true,
    specifications:
      "Standard 3.5 x 2.0 inch card; front featuring Logo and Tagline on Warm White background (#FFFCF8); back featuring Deep Plum (#48165F) with Principal Contact details, WhatsApp QR code, and Gomti Nagar address.",
  },
};
