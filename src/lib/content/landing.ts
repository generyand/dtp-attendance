export const ORG = {
  name: "Department of Technical Programs",
  college: "UM Digos College",
  logoSrc: "/img/dtp.webp",
};

export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#features", label: "Problems" },
  { href: "#how-it-works-user", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO = {
  headline: "Modernizing Assembly Attendance, Effortlessly.",
  subheadline:
    "Launch events, scan arrivals, and see attendance update in real‑time — all in one modern dashboard.",
  ctaText: "Join Now ->",
  ctaHref: "/join",
  imageSrc: "/img/Hero.webp",
};

export interface FeatureItem {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
  bullets?: string[];
}

export const FEATURES: FeatureItem[] = [
  {
    title: "Tedious Manual Writing",
    description:
      "Tired of writing names on paper? Students waste time signing attendance sheets while organizers struggle with illegible handwriting and lost records.",
    iconSrc: "/img/manual-writing.webp",
    iconAlt: "Manual writing problem",
    bullets: ["Hand cramps from writing", "Illegible signatures"],
  },
  {
    title: "Easy to Manipulate Records",
    description:
      "Paper attendance sheets can be easily forged, altered, or lost. Friends can sign for absent classmates, making traditional methods unreliable.",
    iconSrc: "/img/manipulate.webp",
    iconAlt: "Data manipulation problem",
    bullets: ["Fake signatures", "Lost paper records"],
  },
  {
    title: "Significant Time Wasted",
    description:
      "Long queues form as students wait to sign attendance sheets. Organizers spend hours manually counting and organizing attendance data.",
    iconSrc: "/img/time-Wasted.webp",
    iconAlt: "Time wasting problem",
    bullets: ["Long waiting lines", "Manual data entry"],
  },
];

// For Students/Attendees
export const HOW_IT_WORKS_USER = [
  {
    title: "Register & Save QR Code",
    body: "Complete your registration and save your unique QR code to your device for quick access.",
  },
  {
    title: "Present Your QR Code",
    body: "Show your QR code to the event scanner for instant attendance recording.",
  },
  {
    title: "Enjoy the Event",
    body: "Relax and enjoy the event knowing your attendance has been automatically recorded.",
  },
];

// For Event Organizers/Recorders
export const HOW_IT_WORKS_ADMIN = [
  {
    title: "Create Event",
    body: "Set up your event details and generate a unique registration link for attendees.",
  },
  {
    title: "Scan to Record",
    body: "Use the scanner to quickly record attendance by scanning attendee QR codes.",
  },
  {
    title: "Track & Report",
    body: "Monitor real-time attendance data and generate detailed reports when needed.",
  },
];

export const FAQ = [
  {
    q: "Is the system difficult to set up?",
    a: "Not at all. The system is designed to be intuitive. You can create your first event and be ready to accept check-ins in under 5 minutes.",
  },
  {
    q: "What do students need to check in?",
    a: "All they need is a smartphone with a camera. No special app installation is required on their end, making the process frictionless.",
  },
  {
    q: "Can this be used for events other than assemblies?",
    a: "Absolutely. It’s perfect for seminars, workshops, training sessions, and any event where you need to track attendance accurately.",
  },
  {
    q: "How secure is the attendance data?",
    a: "The data is securely stored and accessible only to authorized administrators. Unique QR codes prevent fraudulent check-ins.",
  },
];

export const FOOTER = {
  contactEmail: "dtp.dc@umindanao.edu.ph",
  contactPhone: "Department Phone Number",
  legal: ["Privacy Policy", "Terms of Service"],
  address: [
    "Department of Technical Programs",
    "UM Digos College",
    "Digos City, Philippines",
  ],
  socials: [
    {
      label: "Website",
      href: "https://umdc.umindanao.edu.ph/login",
      type: "website",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/DepartmentOfTechnicalPrograms",
      type: "facebook",
    },
  ],
};
