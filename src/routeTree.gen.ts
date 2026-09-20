export const practice = {
  name: "auriKear",
  legalName: "Aurikear",
  tagline: "Hear for good",
  headline: "Expert hearing care you can trust",
  lede: "Aurikear delivers research-led audiology for newborns, children, and adults. With 15+ years' clinical experience and a UCL PhD, we combine scientific rigour with warm, personalised care.",
  phone: "020 7946 0184",
  phoneHref: "tel:+442079460184",
  email: "hello@aurikear.co.uk",
  emailHref: "mailto:hello@aurikear.co.uk",
  addressLines: [
    "Nuffield Health Brentwood Hospital",
    "Nuffield Health The Holly Hospital",
    "Spire Cambridge Lea Hospital",
    "Spire Hartswood Hospital",
    "Spire London East Hospital",
  ],
  founded: "2009",
  registration: "HCPC registered audiologist",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/paediatric", label: "Paediatric" },
  { to: "/musicians", label: "Musician plugs" },
  { to: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "2009", label: "Career began" },
  { value: "1st", label: "Class BSc, UCL" },
  { value: "PhD", label: "University College London" },
  { value: "15+", label: "Years' experience" },
  { value: "All", label: "Ages treated" },
] as const;

export const services = [
  {
    slug: "assessments",
    title: "Audiology assessments",
    eyebrow: "Diagnostic",
    summary:
      "Comprehensive diagnostic hearing tests for all ages using calibrated clinical equipment in a calm, professional setting.",
    body: "A thorough hearing assessment is the foundation of all hearing healthcare. Using calibrated audiological equipment in a sound-treated environment, we conduct a comprehensive diagnostic evaluation across all frequencies.",
    bullets: [
      "Pure tone audiometry (air and bone conduction)",
      "Speech audiometry and speech-in-noise testing",
      "Tympanometry and acoustic reflex testing",
      "Detailed written report and clear recommendations",
      "Suitable for children and adults",
    ],
    href: "/contact",
    to: "/contact" as const,
    image: "/images/diagnostic.jpg",
    imageAlt: "Diagnostic audiology booth with headphones and console",
    icon: "waves",
  },
  {
    slug: "hearing-aids",
    title: "Hearing aids",
    eyebrow: "Amplification",
    summary:
      "Independent fitting and aftercare for the latest digital hearing aids, selected for your lifestyle and hearing profile.",
    body: "Modern hearing aids are sophisticated digital devices that can transform daily life. We provide independent, unbiased advice on the most suitable technology for your degree of hearing loss, lifestyle, and budget.",
    bullets: [
      "Independent audiological assessment",
      "Access to leading hearing aid brands",
      "Custom ear moulds and fittings",
      "Real-ear measurement verification",
      "Ongoing aftercare and fine-tuning appointments",
    ],
    href: "/contact",
    to: "/contact" as const,
    image: "/images/hearing-aid.jpg",
    imageAlt: "A modern receiver-in-canal hearing aid in a patient's hand",
    icon: "ear",
  },
  {
    slug: "musician-plugs",
    title: "Musician ear plugs",
    eyebrow: "Protection",
    summary:
      "Custom-moulded ear protection engineered for musicians — preserving nuance while safeguarding hearing for the long term.",
    body: "Standard foam earplugs block high frequencies more than low, creating a muffled, unnatural sound. Custom musician ear plugs use precision acoustic filters that reduce all frequencies equally — so music sounds as it should, just quieter and safer.",
    bullets: [
      "Ear impression and custom moulding",
      "Choice of acoustic filter attenuation levels",
      "Suitable for musicians, engineers, and concert-goers",
      "Long-lasting, comfortable, and washable",
    ],
    href: "/musicians",
    to: "/musicians" as const,
    image: "/images/lifestyle.jpg",
    imageAlt: "Friends talking closely at an outdoor cafe table",
    icon: "music",
  },
  {
    slug: "paediatric",
    title: "Paediatric audiology",
    eyebrow: "Children & families",
    summary:
      "Specialist care for newborns and children using visual reinforcement audiometry, play audiometry, and glue ear monitoring.",
    body: "Children require specialist audiological techniques adapted to their age and developmental stage. Our audiologist has extensive experience assessing hearing in children from birth through to adolescence.",
    bullets: [
      "Newborn hearing screening follow-up",
      "Visual reinforcement audiometry (VRA)",
      "Play audiometry",
      "Glue ear assessment and monitoring",
      "School-age hearing assessment",
    ],
    href: "/paediatric",
    to: "/paediatric" as const,
    image: "/images/waiting-room%20(2).jpg",
    imageAlt: "A child and audiologist using a playful hearing assessment table",
    icon: "baby",
  },
  {
    slug: "swim-moulds",
    title: "Swim moulds",
    eyebrow: "Protection",
    summary:
      "Custom-fit waterproof ear moulds to prevent water ingress — for regular swimmers, post-surgery patients, and children with grommets.",
    body: "Custom-moulded swim plugs provide a precise, comfortable seal to prevent water from entering the ear canal — essential for regular swimmers, those recovering from ear surgery, or patients with grommets.",
    bullets: [
      "Precise ear impressions for a perfect fit",
      "Floats in water — easy to retrieve",
      "Soft, hypoallergenic silicone material",
      "Suitable for children and adults",
      "Available in a range of colours",
    ],
    href: "/contact",
    to: "/contact" as const,
    image: "/images/waiting-room%20(2).jpg",
    imageAlt: "A child and audiologist using a playful hearing assessment table",
    icon: "droplets",
  },
] as const;

export const bookingServices = [
  {
    id: "hearing-test",
    title: "Comprehensive Hearing Assessment",
    duration: "60 mins",
  },
  {
    id: "earwax-removal",
    title: "Earwax Removal (Micro-suction)",
    duration: "30 mins",
  },
  {
    id: "hearing-aid-consultation",
    title: "Hearing Aid Consultation & Fitting",
    duration: "60 mins",
  },
  {
    id: "paediatric-hearing",
    title: "Paediatric Audiology",
    duration: "60 mins",
  },
  {
    id: "tinnitus-consultation",
    title: "Tinnitus Assessment & Management",
    duration: "60 mins",
  },
  {
    id: "custom-ear-protection",
    title: "Custom Ear Protection Impressions",
    duration: "30 mins",
  },
] as const;

export const timePreferences = [
  { id: "morning", label: "Monday – Friday morning" },
  { id: "afternoon", label: "Monday – Friday afternoon" },
  { id: "saturday", label: "Saturday morning" },
  { id: "flexible", label: "Flexible / No preference" },
] as const;

export const qualifications = [
  { label: "Qualification", value: "First Class BSc Audiology, UCL" },
  { label: "Research degree", value: "PhD, University College London" },
  { label: "Clinical experience", value: "15+ years, newborn to adult" },
  { label: "Research focus", value: "Cortical Auditory Evoked Potentials" },
  { label: "Registration", value: "HCPC registered audiologist" },
] as const;

export const timeline = [
  {
    mark: "09",
    year: "2009",
    title: "First Class BSc Audiology — UCL",
    desc: "Graduated with First Class Honours, specialising in diagnostic and clinical audiology from one of the world's top programmes.",
  },
  {
    mark: "→",
    year: "2009 – present",
    title: "Clinical audiologist — paediatric & adult",
    desc: "Fifteen years of clinical practice across NHS and private settings, specialising in newborn, paediatric, and adult hearing assessments.",
  },
  {
    mark: "PhD",
    year: "Postgraduate research",
    title: "PhD — University College London",
    desc: "Doctoral research on Cortical Auditory Evoked Potentials, contributing peer-reviewed publications to the field of objective hearing assessment.",
  },
  {
    mark: "Now",
    year: "Now",
    title: "Founder, Aurikear",
    desc: "Bringing together research excellence and clinical expertise to offer hearing care that is unhurried, independent, and evidence-based.",
  },
] as const;

export const specialisms = [
  "Hearing loss assessment",
  "Paediatric audiology",
  "Glue ear monitoring",
  "Visual reinforcement audiometry",
  "Play audiometry",
  "Tympanometry",
  "Newborn hearing screening",
  "Cortical auditory evoked potentials",
] as const;

export const testimonials = [
  {
    quote:
      "The care my daughter received was exceptional. The audiologist was calm, patient, and incredibly skilled at making a nervous four-year-old feel completely at ease. The diagnosis was thorough and clearly explained.",
    name: "Sarah R.",
    role: "Parent, paediatric patient",
    initials: "SR",
  },
  {
    quote:
      "As a professional musician, protecting my hearing is critical. The custom ear plugs are outstanding — crystal-clear sound with real protection. I recommend Aurikear to every musician I know.",
    name: "James M.",
    role: "Professional guitarist",
    initials: "JM",
  },
  {
    quote:
      "After struggling with hearing aids elsewhere for years, the assessment here transformed my quality of life. The knowledge and research background really shows — this is clinical care at its best.",
    name: "Margaret P.",
    role: "Adult hearing aid patient",
    initials: "MP",
  },
] as const;

export const paediatricAges = [
  {
    title: "Newborns & infants",
    age: "Birth – 6 months",
    body: "Objective testing including automated ABR and OAEs. No active cooperation needed — babies are tested while asleep or drowsy.",
    icon: "moon",
  },
  {
    title: "Toddlers & pre-schoolers",
    age: "6 months – 4 years",
    body: "Visual reinforcement audiometry uses engaging animated rewards to teach young children to respond to sounds — reliable, and paced to them.",
    icon: "toy",
  },
  {
    title: "Children & school-age",
    age: "4 years and over",
    body: "Play audiometry and standard pure-tone testing, adapted to each child's developmental level. Clear, engaging, and always child-paced.",
    icon: "backpack",
  },
] as const;

export const musicianAudiences = [
  {
    title: "For musicians",
    body: "Whether you play in a rock band, a symphony orchestra, or a solo acoustic set, custom plugs protect your hearing night after night. Available in 9 dB, 15 dB, and 25 dB filter options.",
    icon: "guitar",
  },
  {
    title: "For sound engineers",
    body: "Long hours monitoring levels at close range put engineers at serious risk. Custom plugs let you work safely without losing the detail you need.",
    icon: "sliders",
  },
  {
    title: "In-ear monitors",
    body: "Custom in-ear monitor shells combine isolation and sound quality — hear your mix clearly without turning the volume up.",
    icon: "headphones",
  },
  {
    title: "For music fans",
    body: "Protect your hearing at festivals and concerts with discreet, comfortable custom plugs that let you enjoy the night without ringing ears the next day.",
    icon: "spark",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Aurikear",
  alternateName: "auriKear",
  description:
    "Research-led independent audiology for newborns, children, and adults in London. HCPC registered. UCL-trained.",
  url: "https://aurikear.co.uk",
  telephone: "+44-20-7946-0184",
  email: "hello@aurikear.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Compton Terrace",
    addressLocality: "London",
    postalCode: "N1 2UN",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  medicalSpecialty: "Audiology",
};

export const clinics = [
  {
    id: "brentwood",
    name: "Nuffield Health Brentwood Hospital",
    type: "Private Hospital",
    address: "Shenfield Road, Shenfield",
    town: "Brentwood",
    postcode: "CM15 8EH",
    phone: "01277 695695",
    phoneHref: "tel:+441277695695",
    services: "Children & school-age audiology",
    website: "https://www.nuffieldhealth.com/hospitals/brentwood",
  },
  {
    id: "holly",
    name: "Nuffield Health The Holly Hospital",
    type: "Private Hospital",
    address: "High Road",
    town: "Buckhurst Hill",
    postcode: "IG9 5HX",
    phone: "020 8505 3311",
    phoneHref: "tel:+442085053311",
    services: "Children & school-age audiology",
    website: "https://www.nuffieldhealth.com/hospitals/the-holly-hospital",
  },
  {
    id: "cambridge-lea",
    name: "Spire Cambridge Lea Hospital",
    type: "Private Hospital",
    address: "30 New Road, Impington",
    town: "Cambridge",
    postcode: "CB24 9EL",
    phone: "01223 266900",
    phoneHref: "tel:+441223266900",
    services: "Children & school-age audiology",
    website: "https://www.spirehealthcare.com/spire-cambridge-lea-hospital/",
  },
  {
    id: "hartswood",
    name: "Spire Hartswood Hospital",
    type: "Private Hospital",
    address: "Eagle Way",
    town: "Brentwood",
    postcode: "CM13 3LE",
    phone: "01277 232525",
    phoneHref: "tel:+441277232525",
    services: "Children & school-age audiology",
    website: "https://www.spirehealthcare.com/spire-hartswood-hospital/",
  },
  {
    id: "london-east",
    name: "Spire London East Hospital",
    type: "Private Hospital",
    address: "Roding Lane South, Redbridge",
    town: "Ilford",
    postcode: "IG4 5PZ",
    phone: "020 8551 1100",
    phoneHref: "tel:+442085511100",
    services: "Toddler, pre-school, children & school-age audiology",
    website: "https://www.spirehealthcare.com/spire-london-east-hospital/",
  },
] as const;
