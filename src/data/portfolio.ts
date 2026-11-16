/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components only render what's here.
 *
 * Links set to "#" are placeholders and are hidden in the UI until filled in.
 */

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export const profile = {
  name: "Rizqy Fadhil Athallah",
  shortName: "Fadhil",
  logoText: "fadhil.dev",
  role: "AI Engineer & Full-Stack Developer",
  subtitle: "Information Systems @ Universitas Airlangga",
  tagline:
    "I take machine learning models from notebook experiments all the way to products people actually use.",
  location: "Surabaya, Indonesia",
  photo: "/images/profile-square.jpg", // square crop of profile.jpeg, face centered
  cv: "/cv.pdf", // TODO: replace public/cv.pdf placeholder with the real CV
  email: "fadhil2005new@gmail.com",
  githubUsername: "rizqy-fadhil",
  socials: {
    github: "https://github.com/rizqy-fadhil",
    // NOTE: the old site used https://www.linkedin.com/in/rizqy-fadhil-athallah-23681b30a/ — confirm which is current.
    linkedin: "https://www.linkedin.com/in/rizqy-fadhil-athallah",
  },
  about: [
    "I'm an Information Systems student at Universitas Airlangga, based in Surabaya. I enjoy the full journey of building with data: framing the problem, training and evaluating models, then wrapping them in APIs and interfaces that real users can rely on.",
    "Outside of coding, I teach as a Teaching Assistant and organize campus events, because explaining things clearly and coordinating people matter as much as shipping code.",
  ],
} as const;

export const site = {
  url: "https://rizqy-fadhil.github.io",
  title: "Rizqy Fadhil Athallah | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Rizqy Fadhil Athallah, an AI Engineer & Full-Stack Developer studying Information Systems at Universitas Airlangga. Deep learning, LLM pipelines, computer vision, and full-stack products with Next.js, FastAPI, and Flutter.",
  footer: "© 2026 Rizqy Fadhil Athallah · Built with Next.js",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

// ---------------------------------------------------------------------------
// About / Pillars
// ---------------------------------------------------------------------------

export type PillarIcon = "brain" | "layers" | "users";

export const pillars: { icon: PillarIcon; title: string; description: string }[] = [
  {
    icon: "brain",
    title: "Machine Learning & AI",
    description:
      "Deep learning for churn prediction, LLM pipelines, and computer vision, evaluated with care and built to be served.",
  },
  {
    icon: "layers",
    title: "Full-Stack Product Building",
    description:
      "Shipping end-to-end products with Next.js, FastAPI, Flutter, Supabase, and Laravel.",
  },
  {
    icon: "users",
    title: "Teaching & Leadership",
    description:
      "Teaching Assistant for Object Oriented Programming (30 students) and event coordinator for 300+ participants.",
  },
];

// ---------------------------------------------------------------------------
// Journey (newest first)
// ---------------------------------------------------------------------------

export type JourneyType = "work" | "teaching" | "achievement" | "organization" | "education";

export type JourneyItem = {
  period: string;
  title: string;
  org: string;
  type: JourneyType;
  description?: string;
};

export const journey: JourneyItem[] = [
  {
    period: "Oct 2026 – Present",
    title: "Software Developer",
    org: "SAGE (Source-code Architecture Graph Extraction)",
    type: "work",
  },
  {
    period: "2026 – Present",
    title: "Teaching Assistant, Object Oriented Programming",
    org: "Universitas Airlangga",
    type: "teaching",
  },
  {
    period: "Jun 2026 – Present",
    title: "Frontend Developer",
    org: "AstroLab (Kombo), BSO FTMM UNAIR",
    type: "work",
  },
  {
    period: "2026",
    title: "Semifinalist, Innovation Case Competition",
    org: "Campus Data Week 2026",
    type: "achievement",
    description: "Ranked 7th among semifinalists, out of 40+ teams.",
  },
  {
    period: "2026",
    title: "Finalist, KIM UNAIR 2026",
    org: "Gagasan Futuristik Tertulis category",
    type: "achievement",
  },
  {
    period: "May 2026",
    title: "Event Expert Staff, Student Services",
    org: "HIMSI 2026",
    type: "organization",
    description: "Taught Looker Studio to 40+ students of SMA 20 Surabaya.",
  },
  {
    period: "Feb 2025 – Dec 2025",
    title: "Research & Technopreneurship Staff",
    org: "HIMSI UNAIR",
    type: "organization",
    description: "Organized Job Experience Sharing with 70+ participants.",
  },
  {
    period: "Nov 2025",
    title: "Event Coordinator",
    org: "Unair Esport Internship 2025",
    type: "organization",
    description: "Coordinated an event for 300+ new students.",
  },
  {
    period: "2024 – 2028",
    title: "B.Sc. Information Systems",
    org: "Universitas Airlangga",
    type: "education",
    description: "GPA 3.64 / 4.00",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projectCategories = ["All", "AI & ML", "Web", "Mobile", "Research"] as const;
export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type ProjectLink = { label: string; href: string; kind: "demo" | "code" };

export type Project = {
  title: string;
  description: string;
  categories: ProjectCategory[];
  stack: string[];
  featured?: boolean;
  status?: "In Progress";
  /** Short achievement / result badge. Only real, verified numbers. */
  badge?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Customer Churn Prediction System",
    description:
      "Compared three deep learning architectures (MLP, FT-Transformer, Hybrid CNN-Transformer) for churn prediction; the best model is served via FastAPI + SQLite to a Flutter app.",
    categories: ["AI & ML"],
    stack: ["Python", "PyTorch", "FastAPI", "SQLite", "Flutter"],
    featured: true,
    badge: "Best MLP · F1 0.8197 · ROC-AUC 0.8932",
    links: [{ label: "Code", href: "https://github.com/rizqy-fadhil/churn-prediction", kind: "code" }],
  },
  {
    title: "Numerasi Detektif",
    description:
      "A numeracy game for grades 4–6 built on stealth assessment: Bayesian Knowledge Tracing plus rule-based classification detect 3 types of fraction misconceptions, and an LLM pipeline turns gameplay logs into remedial advice for teachers without exposing student data.",
    categories: ["AI & ML", "Research"],
    stack: ["React", "FastAPI", "Supabase", "LLM API"],
    featured: true,
    links: [
      { label: "Code", href: "#", kind: "code" }, // TODO: link
    ],
  },
  {
    title: "SAGE",
    description:
      "A platform that turns PHP and JS/TS repositories into a Code Knowledge Graph and architecture documentation, developed with Agile, BDD testing, and GitHub issue tracking.",
    categories: ["Research", "Web"],
    stack: ["Code Knowledge Graph", "PHP & JS/TS analysis", "BDD", "Agile"], // TODO: add the actual implementation stack
    links: [
      { label: "Code", href: "#", kind: "code" }, // TODO: link
    ],
  },
  {
    title: "DICE Fest 2026 ML Pipeline",
    description:
      "A competition ML pipeline combining spatial priors and Mundlak models with a LightGBM / XGBoost / CatBoost ensemble.",
    categories: ["AI & ML"],
    stack: ["Python", "LightGBM", "XGBoost", "CatBoost"],
    links: [
      { label: "Code", href: "#", kind: "code" }, // TODO: link (maybe github.com/rizqy-fadhil/infest or infest-data?)
    ],
  },
  {
    title: "Book & Vehicle Detector",
    description: "Object detection for books and vehicles with YOLOv8, wrapped in an interactive Streamlit app.",
    categories: ["AI & ML"],
    stack: ["Python", "YOLOv8", "Streamlit"],
    links: [
      { label: "Book", href: "https://github.com/rizqy-fadhil/book-detector", kind: "code" },
      { label: "Vehicle", href: "https://github.com/rizqy-fadhil/Vehicle-Detector", kind: "code" },
    ],
  },
  {
    title: "Image Classification",
    description: "An image classification project built with PyTorch and torchvision.",
    categories: ["AI & ML"],
    stack: ["Python", "PyTorch", "torchvision"],
    status: "In Progress",
    links: [
      { label: "Code", href: "#", kind: "code" }, // TODO: link
    ],
  },
  {
    title: "EcoPoin / EcoPick",
    description:
      "A digital waste bank for Bank Sampah Induk Surabaya that rewards residents with GreenCoin points.",
    categories: ["Web", "Mobile"],
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    links: [
      { label: "Demo", href: "https://ecopoin-web.vercel.app", kind: "demo" },
      { label: "Code", href: "https://github.com/rizqy-fadhil/ecopoin-web", kind: "code" },
    ],
  },
  {
    title: "HealthSync",
    description: "Daily health tracking for water intake, sleep, and body weight.",
    categories: ["Mobile", "Web"],
    stack: ["Flutter", "Laravel", "TiDB", "Vercel"],
    links: [
      { label: "Demo", href: "https://healthsync-frontend-phi.vercel.app", kind: "demo" },
      { label: "Code", href: "https://github.com/rizqy-fadhil/HealthSync", kind: "code" },
    ],
  },
  {
    title: "HIMSI Dashboard",
    description: "A data dashboard for HIMSI's Research & Technopreneurship division.",
    categories: ["Web"],
    stack: ["React", "Chart.js"],
    links: [
      { label: "Code", href: "#", kind: "code" }, // TODO: link
    ],
  },
  {
    title: "TraceLedger",
    description: "A proposal for a blockchain DApp that tracks goods across the supply chain.",
    categories: ["Research"],
    stack: ["Blockchain", "DApp"],
    links: [
      { label: "Proposal", href: "#", kind: "code" }, // TODO: link
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills (icon keys are resolved in src/lib/icons.tsx)
// ---------------------------------------------------------------------------

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "AI / ML",
    skills: ["Python", "Scikit-learn", "PyTorch", "LightGBM", "XGBoost", "CatBoost", "YOLOv8", "LLM APIs", "Streamlit"],
  },
  {
    title: "Web",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Laravel", "PHP"],
  },
  { title: "Mobile", skills: ["Flutter", "Dart"] },
  {
    title: "Backend & Data",
    skills: ["FastAPI", "Supabase", "SQLite", "MySQL/TiDB", "Docker", "Java"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Looker Studio", "Tableau"],
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

export type Certification = {
  name: string;
  issuer: "AWS" | "Dicoding";
  issued?: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Essentials Knowledge",
    issuer: "AWS",
    credentialUrl: "#", // TODO: link (not present on the old site)
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding",
    issued: "Dec 2025",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ050RQ3X65",
  },
  {
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    issued: "Jan 2026",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYQ96QKZVM",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    issued: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/RVZK0109QZD5",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    issued: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJOL3JLZ3V",
  },
];

/** True for links that are still placeholders. */
export const isPlaceholder = (href: string) => !href || href === "#";
