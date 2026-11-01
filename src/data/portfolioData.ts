export interface HackathonItem {
  id: string;
  title: string;
  role: string;
  achievement?: string;
  description: string;
  tags: string[];
  type: "ctf" | "hackathon";
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  category: "Agri-Tech & IoT" | "Civic-Tech & Infra" | "Full-Stack Web";
  accentColor: "cyan" | "yellow";
  metrics?: string;
}

export interface CompetitionItem {
  id: string;
  title: string;
  organizer: string;
  event: string;
  description: string;
  type: "Business" | "AI & Prompting" | "Strategy";
  date?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: string;
  verified: boolean;
  linkText?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  username: string;
}

export const PERSONAL_DATA = {
  name: "Daksh",
  heroTitle: "CREATIVE DEVELOPER & CYBERSECURITY SPECIALIST",
  tagline: "Bridging spatial 3D web engineering, secure cloud architecture, and competitive cyber operations.",
  location: "India",
  status: "Available for High-Impact Roles & Hackathon Collaborations",
  education: {
    institution: "Newton School of Technology (Rishihood University)",
    degree: "Computer Science & Engineering",
    focus: "Full-Stack Engineering, AI Systems & Cybersecurity",
  },
  bio: "I am a passionate full-stack developer, cybersecurity enthusiast, and hackathon veteran currently studying at Newton School of Technology (Rishihood University). With a proven track record of ranking in the Top 15 nationally in CTF competitions and actively building in month-long open-source hackathons, I specialize in transforming complex ideas into functional, scalable web applications and AI-driven solutions. From Agri-Tech platforms to Civic-Tech infrastructure tools, I thrive in high-pressure, collaborative environments, consistently pushing the boundaries of web development, prompt engineering, and secure system design.",
  quickStats: [
    { label: "National CTF Rank", value: "Top 15", highlight: "Winner & Finalist" },
    { label: "Hackathons & Challenges", value: "8+", highlight: "National & Global" },
    { label: "Core Focus", value: "Full-Stack + AI", highlight: "Next.js / 3D / Cyber" },
    { label: "Civic & Agri Impact", value: "2 Major", highlight: "Deployed Web Apps" },
  ],
  skills: {
    frontend: ["Next.js", "React", "TypeScript", "Three.js / R3F", "Tailwind CSS", "GSAP", "Framer Motion"],
    backendAndCloud: ["Node.js", "Express", "REST APIs", "Vercel", "Firebase", "PostgreSQL"],
    cybersecurity: ["Web Exploitation", "Cryptography", "Forensics", "OSINT", "Attack & Defense CTF", "Secure Architecture"],
    aiAndTools: ["Google AI Studio", "Gemini API", "Prompt Engineering", "Git & GitHub", "IoT Telemetry"],
  },
  contact: {
    email: "dakshofficial0823@gmail.com",
    linkedin: "https://www.linkedin.com/in/daksh-230608d768/",
    github: "https://github.com/masterdaksh23",
  },
};

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: "codemahotsav-26",
    title: "Codemahotsav 26 CTF",
    role: "National Finalist",
    achievement: "Winner & Top 15 Nationally",
    description: "Competed in high-stakes national-level jeopardy-style CTF across Web Security, Reverse Engineering, and Cryptography with a ₹1,00,000 prize pool.",
    tags: ["CTF", "Top 15 Nationally", "₹1,00,000 Prize Pool", "Web Exploitation", "Crypto"],
    type: "ctf",
    highlight: true,
  },
  {
    id: "seize-da-flaq",
    title: "Seize da Flaq - CTF",
    role: "Participant",
    achievement: "National Competition",
    description: "National-level cybersecurity competition organized by Cyberonites Club spanning Web Exploitation, Cryptography, Digital Forensics, and OSINT.",
    tags: ["Cyberonites Club", "Forensics", "OSINT", "Reverse Engineering"],
    type: "ctf",
  },
  {
    id: "silverhill-ctf",
    title: "SilverHill Attack/Defense CTF",
    role: "Participant",
    achievement: "Offline Attack & Defense",
    description: "Intense on-site Attack & Defense CTF battle at ESYA'26, IIIT Delhi, securing live host services while patching zero-days and exploiting opponents.",
    tags: ["IIIT Delhi", "ESYA'26", "Live Attack/Defense", "Host Hardening"],
    type: "ctf",
    highlight: true,
  },
  {
    id: "voyagehack",
    title: "VOYAGEHACK 4.0",
    role: "Participant",
    achievement: "₹6,00,000 Pool & PPI Opportunities",
    description: "Tech-enabled travel platform hackathon hosted by TBO.com, creating high-concurrency booking algorithms and dynamic user experiences.",
    tags: ["TBO.com", "Travel-Tech", "₹6 Lakhs Pool", "Scalable Systems"],
    type: "hackathon",
  },
  {
    id: "codesprint-2026",
    title: "Codesprint 2026 (Elite Coders & UPES)",
    role: "Participant",
    achievement: "Month-long Building Challenge",
    description: "Full lifecycle engineering marathon (Idea → MVP → Open Source → Live Pitch) culminating in offline grand finals in Dehradun.",
    tags: ["Elite Coders & UPES", "Open Source", "MVP to Pitch", "Dehradun Finals"],
    type: "hackathon",
    highlight: true,
  },
  {
    id: "vibe2ship",
    title: "Vibe2Ship",
    role: "Participant",
    achievement: "India's Biggest Vibe-Coding",
    description: "Prestigious rapid-prototyping hackathon by Coding Ninjas, architecting rapid AI solutions with Google AI Studio and modern LLM orchestration.",
    tags: ["Coding Ninjas", "Google AI Studio", "Vibe Coding", "Rapid AI Prototyping"],
    type: "hackathon",
  },
  {
    id: "hacktoberfest-day",
    title: "Hacktoberfest Hack Day",
    role: "Participant",
    achievement: "MLH Open Source Overnight",
    description: "Official Major League Hacking (MLH) overnight open source hackathon hosted at Newton School of Technology, delivering verified OSS commits.",
    tags: ["MLH", "Newton School", "Open Source", "Overnight Sprint"],
    type: "hackathon",
  },
  {
    id: "vedathon-2",
    title: "Vedathon 2",
    role: "Participant",
    achievement: "Hack2Skill Challenge",
    description: "Cross-disciplinary innovation challenge hosted by Hack2Skill focusing on emerging tech stacks and social impact problem statements.",
    tags: ["Hack2Skill", "Social Impact", "Emerging Tech"],
    type: "hackathon",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "odyssey-20",
    title: "Odyssey 20 (Agro Use)",
    subtitle: "AI & IoT Precision Agriculture Platform",
    description: "An advanced agricultural tech ecosystem synthesizing real-time IoT soil telemetry, multispectral satellite data, and machine learning models to forecast irrigation schedules, crop health diagnostics, and precision nutrient deployment.",
    techStack: ["Next.js", "IoT Telemetry", "Machine Learning", "Tailwind CSS", "Satellite APIs"],
    liveUrl: "https://odyssey-20-frontend.vercel.app/",
    githubUrl: "https://github.com/masterdaksh23",
    category: "Agri-Tech & IoT",
    accentColor: "yellow",
    metrics: "Real-time Telemetry + Satellite Yield Forecasting",
  },
  {
    id: "community-hero",
    title: "Community Hero",
    subtitle: "Interactive Civic-Tech Issue Resolution Portal",
    description: "A high-visibility civic-tech infrastructure tool enabling citizens to report, map, and track urban municipality hazards (potholes, water pipeline leaks, streetlight outages) with pinpoint geolocation, severity grading, and live status heatmaps.",
    techStack: ["React", "Mapping APIs", "Node.js", "Express", "GeoJSON", "REST"],
    liveUrl: "https://communityhero-gamma.vercel.app/",
    githubUrl: "https://github.com/masterdaksh23",
    category: "Civic-Tech & Infra",
    accentColor: "cyan",
    metrics: "Interactive Geolocation & Severity Triage Engine",
  },
];

export const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: "venture-vanguard",
    title: "Venture Vanguard",
    organizer: "E-Summit'26, NSUT Delhi",
    event: "Venture Capital Business Simulation",
    description: "End-to-end venture capital simulation encompassing startup term-sheet negotiations, equity valuation models, due diligence checks, and strategic investment pitches.",
    type: "Business",
  },
  {
    id: "gemini-ai-challenge",
    title: "Google Gemini AI Challenge",
    organizer: "Google Developer Student Ecosystem",
    event: "Prompt Engineering & Visual Reimagining",
    description: "Hybrid challenge evaluating multi-modal prompt engineering, structured reasoning workflows, and visual synthesis leveraging the latest Google Gemini models.",
    type: "AI & Prompting",
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    organizer: "Udyam'26, Jindal Global Business School",
    event: "60-Second High-Stakes Startup Challenge",
    description: "Rapid-fire 60-second elevator pitch evaluating business model scalability, value proposition clarity, and persuasive investor communication under intense time constraints.",
    type: "Business",
  },
  {
    id: "campus-orbit-chess",
    title: "CampusOrbit National Chess Championship 2026",
    organizer: "CampusOrbit",
    event: "National-Level Strategic Tournament",
    description: "High-intensity national-level competitive chess championship testing pattern recognition, strategic foresight, tactical maneuvering, and rapid decision-making.",
    type: "Strategy",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-econnect",
    title: "E-Connect (E-Summit'26)",
    issuer: "Netaji Subhas University of Technology (NSUT), Delhi",
    date: "October 2026",
    status: "Verified Participant",
    verified: true,
    linkText: "NSUT Delhi E-Summit",
  },
  {
    id: "cert-quizverse",
    title: "Unstop Quizverse 2026",
    issuer: "Unstop",
    date: "October 2026",
    status: "Verified Participant",
    verified: true,
    linkText: "Unstop National Assessment",
  },
];

