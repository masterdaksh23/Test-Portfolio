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
  highImpactStats: [
    {
      value: "TOP 15",
      label: "National CTF",
      detail: "Codemahotsav 26 CTF Finalist",
      accent: "cyan",
    },
    {
      value: "2+",
      label: "Live Products Shipped",
      detail: "Agri-Tech & Civic-Tech Deployed",
      accent: "yellow",
    },
    {
      value: "8+",
      label: "Hackathons & Competitions",
      detail: "National & Global Arenas",
      accent: "cyan",
    },
  ],
  codeSnippet: `class Daksh extends Developer {
  focus = ["Full-Stack", "Cybersecurity", "AI"];

  async build() {
    await this.ship("Odyssey 20 (Agri-Tech)");
    await this.win("Top 15 National CTF");
  }
}`,
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
    description: "National-level jeopardy-style CTF across Web Security, Reverse Engineering, and Cryptography with a ₹1,00,000 prize pool.",
    tags: ["CTF", "Top 15 Nationally", "₹1,00,000 Prize Pool", "Web Exploitation", "Crypto"],
    type: "ctf",
    highlight: true,
  },
  {
    id: "seize-da-flaq",
    title: "Seize da Flaq - CTF",
    role: "Participant",
    achievement: "National Competition",
    description: "National-level cybersecurity competition (Web Exploitation, Cryptography, Digital Forensics, and OSINT) organized by Cyberonites Club.",
    tags: ["Cyberonites Club", "Web Exploitation", "Crypto", "Forensics", "OSINT"],
    type: "ctf",
  },
  {
    id: "silverhill-ctf",
    title: "SilverHill Attack/Defense CTF",
    role: "Participant",
    achievement: "Offline Attack & Defense",
    description: "Offline Attack & Defense CTF at ESYA'26, IIIT Delhi. Defended live services while identifying and weaponizing attack vectors against competitor nodes.",
    tags: ["IIIT Delhi", "ESYA'26", "Live Attack & Defense", "Host Hardening"],
    type: "ctf",
    highlight: true,
  },
  {
    id: "voyagehack",
    title: "VOYAGEHACK 4.0",
    role: "Participant",
    achievement: "₹6L Prizes + PPI Opportunities",
    description: "Tech-enabled travel platform hackathon hosted by TBO.com featuring ₹6,00,000 in prizes and fast-track pre-placement interviews.",
    tags: ["TBO.com", "Travel-Tech", "₹6,00,000 Prize Pool", "PPI Opportunities"],
    type: "hackathon",
  },
  {
    id: "codesprint-2026",
    title: "Codesprint 2026",
    role: "Participant",
    achievement: "Month-long Building Challenge",
    description: "Month-long open-source building challenges (Idea → MVP → Open Source → Pitch) with offline finals in Dehradun by Elite Coders & UPES.",
    tags: ["Elite Coders & UPES", "Idea to MVP", "Open Source", "Dehradun Finals"],
    type: "hackathon",
    highlight: true,
  },
  {
    id: "vibe2ship",
    title: "Vibe2Ship",
    role: "Participant",
    achievement: "India's Biggest Vibe-Coding",
    description: "India's Biggest Vibe-Coding Hackathon by Coding Ninjas, rapidly designing and architecting AI solutions with Google AI Studio.",
    tags: ["Coding Ninjas", "Google AI Studio", "Vibe Coding", "Rapid AI Prototyping"],
    type: "hackathon",
  },
  {
    id: "hacktoberfest-day",
    title: "Hacktoberfest Hack Day",
    role: "Participant",
    achievement: "MLH Open Source Overnight",
    description: "MLH Open Source overnight hackathon held at Newton School of Technology, delivering collaborative OSS contributions under crunch time.",
    tags: ["MLH", "Newton School", "Open Source", "Overnight Hack"],
    type: "hackathon",
  },
  {
    id: "vedathon-2",
    title: "Vedathon 2",
    role: "Participant",
    achievement: "Hack2Skill Challenge",
    description: "Cross-disciplinary innovation challenge hosted by Hack2Skill focusing on emerging tech stacks and real-world problem statements.",
    tags: ["Hack2Skill", "Social Impact", "Emerging Tech"],
    type: "hackathon",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "odyssey-20",
    title: "Odyssey 20 (Agro Use)",
    subtitle: "AI & IoT Precision Agriculture Platform",
    description: "An agricultural tech platform combining IoT telemetry, satellite data, and ML models to help farmers increase productivity and manage soil/irrigation intelligently.",
    techStack: ["Next.js", "IoT", "AI / Machine Learning", "Tailwind CSS", "Satellite APIs"],
    liveUrl: "https://odyssey-20-frontend.vercel.app/",
    githubUrl: "https://github.com/masterdaksh23",
    category: "Agri-Tech & IoT",
    accentColor: "yellow",
    metrics: "Real-time Telemetry + Satellite Yield Forecasting",
  },
  {
    id: "community-hero",
    title: "Community Hero",
    subtitle: "Civic-Tech City Issue Reporting & Tracking Tool",
    description: "An interactive civic-tech city issue reporting and tracking tool (potholes, water leaks, streetlights) with real-time map integration and severity filtering.",
    techStack: ["React", "Mapping APIs", "Node.js", "Express", "GeoJSON"],
    liveUrl: "https://communityhero-gamma.vercel.app/",
    githubUrl: "https://github.com/masterdaksh23",
    category: "Civic-Tech & Infra",
    accentColor: "cyan",
    metrics: "Real-time Map Integration & Severity Triage",
  },
];

export const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: "venture-vanguard",
    title: "Venture Vanguard",
    organizer: "E-Summit'26, NSUT Delhi",
    event: "Venture Capital Business Simulation",
    description: "VC business simulation testing startup pitching, valuation modeling, cap table negotiations, and strategic investment thesis presentation.",
    type: "Business",
  },
  {
    id: "gemini-ai-challenge",
    title: "Google Gemini AI Challenge",
    organizer: "Google Developer Ecosystem",
    event: "Prompt Engineering & Visual Reimagining",
    description: "Hybrid prompt engineering and multi-modal visual reimagining challenge leveraging the latest Google Gemini models.",
    type: "AI & Prompting",
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    organizer: "Udyam'26, Jindal Global Business School",
    event: "60-Second Startup Challenge",
    description: "High-intensity 60-second startup pitch testing business acumen, value proposition clarity, and persuasive investor communication.",
    type: "Business",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-econnect",
    title: "E-Connect (E-Summit'26)",
    issuer: "Netaji Subhas University of Technology (NSUT), Delhi",
    date: "Oct 2026",
    status: "Verified Participant",
    verified: true,
    linkText: "NSUT Delhi E-Summit",
  },
  {
    id: "cert-quizverse",
    title: "Unstop Quizverse 2026",
    issuer: "Unstop",
    date: "Oct 2026",
    status: "Verified Participant",
    verified: true,
    linkText: "Unstop National Assessment",
  },
];

