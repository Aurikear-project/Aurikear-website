export const practice = {
  name: "auriKear",
  legalName: "Aurikear",
  tagline: "Hear for good",

  headline: "Hear more of what matters",

  lede:
    "Expert, personalised hearing care for babies, children and adults — combining clinical expertise with technology and care tailored to you.",

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
  { to: "/hearing-assessments", label: "Adult hearing" },
  { to: "/paediatric", label: "Paediatric" },
  { to: "/hearing-aids", label: "Hearing aids" },
  { to: "/musicians", label: "Musician plugs" },
  { to: "/swim-moulds", label: "Swim moulds" },
] as const;

export const stats = [
  { value: "2009", label: "Career began" },
  { value: "1st", label: "Class BSc, UCL" },
  { value: "PhD", label: "University College London" },
  { value: "15+", label: "Years' experience" },
] as const;

export const services = [
  {
    slug: "assessments",

    title: "Hearing assessments",

    eyebrow: "Your hearing",

    summary:
      "Understand your hearing with a comprehensive assessment, carried out using specialist clinical equipment in a calm and comfortable setting.",

    body:
      "A thorough hearing assessment is the foundation of good hearing care. Using calibrated audiological equipment in a sound-treated environment, we carry out a comprehensive evaluation of your hearing and explain the results clearly.",

    bullets: [
      "Pure tone audiometry (air and bone conduction)",
      "Speech audiometry and speech-in-noise testing",
      "Tympanometry and acoustic reflex testing",
      "Detailed written report and clear recommendations",
      "Suitable for children and adults",
    ],

    href: "/hearing-assessments",
    to: "/hearing-assessments" as const,

    image: "/images/hearing-assessment-clinical-equipment.jpg",
    homeImage: "/images/homepage-hearing-assessments.jpg",

    imageAlt:
      "Clinical audiology equipment used during a hearing assessment",

    icon: "waves",
  },

  {
    slug: "hearing-aids",

    title: "Hearing aids",

    eyebrow: "Hearing technology",

    summary:
      "Personalised hearing technology, professionally selected and fitted around your hearing, lifestyle and individual needs.",

    body:
      "Modern hearing aids are sophisticated digital devices designed to make listening easier and communication more natural. We provide independent advice on the technology most appropriate for your hearing, lifestyle and budget.",

    bullets: [
      "Independent audiological assessment",
      "Access to leading hearing aid brands",
      "Custom ear moulds and fittings",
      "Real-ear measurement verification",
      "Ongoing aftercare and fine-tuning appointments",
    ],

    href: "/hearing-aids",
    to: "/hearing-aids" as const,

    image: "/images/hearing-aid-consultation-female.jpg",
    homeImage: "/images/homepage-hearing-aids.jpg",

    imageAlt:
      "Audiologist discussing hearing aid options with a patient",

    icon: "ear",
  },

  {
    slug: "musician-plugs",

    title: "Musician earplugs",

    eyebrow: "Hearing protection",

    summary:
      "Custom-made hearing protection designed to protect your hearing while preserving the music and sound you love.",

    body:
      "Standard foam earplugs can make music sound muffled and unnatural. Custom musician earplugs use specialist acoustic filters to reduce sound more evenly across frequencies, helping music remain clear while reducing exposure.",

    bullets: [
      "Ear impression and custom moulding",
      "Choice of acoustic filter attenuation levels",
      "Suitable for musicians, engineers and concert-goers",
      "Long-lasting, comfortable and washable",
    ],

    href: "/musicians",
    to: "/musicians" as const,

    image: "/images/musician-violinist-earplugs.jpg",
    homeImage: "/images/homepage-musician-earplugs.jpg",

    imageAlt:
      "Musician wearing custom hearing protection while performing",

    icon: "music",
  },

  {
    slug: "paediatric",

    title: "Children's hearing",

    eyebrow: "Children & families",

    summary:
      "Specialist, child-friendly hearing assessments carefully adapted to your child's age, development and individual needs.",

    body:
      "Children need hearing assessments that are carefully adapted to their age and developmental stage. Our approach is calm, engaging and child-focused, with specialist techniques selected according to each child's individual needs.",

    bullets: [
      "Visual reinforcement audiometry (VRA)",
      "Play audiometry",
      "Glue ear assessment and monitoring",
      "School-age hearing assessment",
      "Assessments for children with complex needs",
    ],

    href: "/paediatric",
    to: "/paediatric" as const,

    image: "/images/paediatric-hearing-assessment.jpg",
    homeImage: "/images/homepage-childrens-hearing.jpg",

    imageAlt:
      "Child taking part in a specialist hearing assessment",

    icon: "baby",
  },

  {
    slug: "swim-moulds",

    title: "Swim moulds",

    eyebrow: "Water protection",

    summary:
      "Comfortable, custom-made ear protection for children and adults who want to keep water out of their ears.",

    body:
      "Custom swim moulds are individually made to provide a comfortable seal that helps reduce water entering the ear canal. They are suitable for regular swimmers and may also be appropriate for people who need additional ear protection around water.",

    bullets: [
      "Precise ear impressions for an individual fit",
      "Floats in water — easy to retrieve",
      "Soft, hypoallergenic silicone material",
      "Suitable for children and adults",
      "Available in a range of colours",
    ],

    href: "/swim-moulds",
    to: "/swim-moulds" as const,

    image: "/images/swimmer-wearing-swim-moulds.jpg",
    homeImage: "/images/homepage-swim-moulds.jpg",

    imageAlt:
      "Swimmer wearing custom-made ear protection",

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
  {
    label: "Qualification",
    value: "First Class BSc Audiology, UCL",
  },
  {
    label: "Research degree",
    value: "PhD, University College London",
  },
  {
    label: "Clinical experience",
    value: "15+ years, newborn to adult",
  },
  {
    label: "Research focus",
    value: "Cortical Auditory Evoked Potentials",
  },
  {
    label: "Registration",
    value: "HCPC registered audiologist",
  },
] as const;

export const timeline = [
  {
    mark: "09",
    year: "2009",
    title: "First Class BSc Audiology — UCL",
    desc:
      "Graduated with First Class Honours, specialising in diagnostic and clinical audiology from one of the world's top programmes.",
  },
  {
    mark: "→",
    year: "2009 – present",
    title: "Clinical audiologist — paediatric & adult",
    desc:
      "Fifteen years of clinical practice across NHS and private settings, specialising in newborn, paediatric, and adult hearing assessments.",
  },
  {
    mark: "PhD",
    year: "Postgraduate research",
    title: "PhD — University College London",
    desc:
      "Doctoral research on Cortical Auditory Evoked Potentials, contributing peer-reviewed publications to the field of objective hearing assessment.",
  },
  {
    mark: "Now",
    year: "Now",
    title: "Founder, Aurikear",
    desc:
      "Bringing together research excellence and clinical expertise to offer hearing care that is unhurried, independent, and evidence-based.",
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

export const paediatricAges = [
  {
    title: "Babies & toddlers",
    age: "8 months – 2 years",
    body:
      "Visual reinforcement audiometry uses engaging visual rewards to help young children respond to sounds. Testing is adapted to your child's developmental stage and paced around their responses.",
    icon: "moon",
  },

  {
    title: "Pre-school children",
    age: "2 – 4 years",
    body:
      "Age-appropriate techniques, including visual reinforcement and play-based audiometry, are selected according to your child's development and ability to respond reliably.",
    icon: "toy",
  },

  {
    title: "Children & school-age",
    age: "4 years and over",
    body:
      "Play audiometry and standard pure-tone testing are adapted to each child's developmental level, providing a clear and child-friendly assessment of their hearing.",
    icon: "backpack",
  },
] as const;

export const musicianAudiences = [
  {
    title: "For musicians",
    body:
      "Whether you play in a rock band, a symphony orchestra, or a solo acoustic set, custom plugs protect your hearing night after night. Available in 9 dB, 15 dB, and 25 dB filter options.",
    icon: "guitar",
  },
  {
    title: "For sound engineers",
    body:
      "Long hours monitoring levels at close range put engineers at serious risk. Custom plugs let you work safely without losing the detail you need.",
    icon: "sliders",
  },
  {
    title: "In-ear monitors",
    body:
      "Custom in-ear monitor shells combine isolation and sound quality — hear your mix clearly without turning the volume up.",
    icon: "headphones",
  },
  {
    title: "For music fans",
    body:
      "Protect your hearing at festivals and concerts with discreet, comfortable custom plugs that let you enjoy the night without ringing ears the next day.",
    icon: "spark",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Aurikear",
  alternateName: "auriKear",
  description:
    "Research-led independent audiology for newborns, children, and adults. HCPC registered. UCL-trained.",
  url: "https://aurikear.co.uk",
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
    services: [
      "Adult hearing assessments",
      "Hearing aids",
      "Custom ear moulds",
      "Children's hearing assessments from age 4+",
    ],
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
    services: [
      "Adult hearing assessments",
      "Hearing aids",
      "Custom ear moulds",
      "Children's hearing assessments from age 4+",
    ],
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
    services: [
      "Adult hearing assessments",
      "Hearing aids",
      "Custom ear moulds",
      "Children's hearing assessments from age 4+",
    ],
    website:
      "https://www.spirehealthcare.com/spire-cambridge-lea-hospital/",
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
    services: [
      "Adult hearing assessments",
      "Hearing aids",
      "Custom ear moulds",
      "Children's hearing assessments from age 4+",
    ],
    website:
      "https://www.spirehealthcare.com/spire-hartswood-hospital/",
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
    services: [
      "Paediatric hearing assessments from 8 months to 4 years",
      "Hearing assessments for children with complex needs",
    ],
    website:
      "https://www.spirehealthcare.com/spire-london-east-hospital/",
  },
] as const;