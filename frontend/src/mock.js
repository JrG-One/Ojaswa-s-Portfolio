// Mock data for Ojaswa Varshney's Portfolio

export const personalInfo = {
  name: "Ojaswa Varshney",
  title: "Software Engineer & AI Enthusiast",
  tagline: "Building intelligent solutions that automate the impossible",
  bio: "Computer Science Engineer and backend developer specializing in distributed systems, AI-driven architectures, and high-performance microservices. My background includes engineering secure, highly concurrent enterprise backend systems in Golang during my time at IDFC FIRST Bank.\n\nDriven by complex scalability challenges, I founded EVOM—a state-funded autonomous AI interviewing platform featuring custom agentic workflows and zero-trust Docker sandboxing capable of evaluating untrusted code in milliseconds. Additionally, I spearheaded the zero-downtime, end-to-end legacy infrastructure migration for the global COMSNETS and AIML Systems conferences, serving hundreds of international researchers. I am passionate about leveraging cloud infrastructure and multi-agent AI to solve massive engineering bottlenecks at scale.",
  email: "ojaswa.varshney2003@gmail.com",
  phone: "+91 8865989833",
  location: "IIIT Surat, India",
  avatar: "https://avatars.githubusercontent.com/u/placeholder",
  resumeUrl: "https://drive.google.com/file/d/1bvd16AwmuvubTUs-6rFHHmj0RS2NxsY0/view?usp=sharing",
  social: {
    github: "https://github.com/JrG-One",
    linkedin: "https://www.linkedin.com/in/ojaswavarshney/",
    leetcode: "https://leetcode.com/awsajo/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/ojaswa",
    codeforces: "https://codeforces.com/profile/ojaswa",
    googleScholar: "https://scholar.google.com/citations?user=VOWIVtAAAAAJ&hl=en"
  }
};

export const projects = [
  {
    id: 1,
    title: "COMSNETS Website Migration",
    description: "Successfully migrated and optimized the 18-year-old legacy website for the COMSNETS Association.",
    longDescription: "Recognized with the Outstanding Work Award for migrating a massive 18-year-old legacy platform to a modern architecture, ensuring high performance, SEO optimization, and mobile responsiveness for thousands of international researchers and delegates.",
    techStack: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    category: "Web Platform",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/comsnets-web.jpg`,
    githubUrl: null,
    liveUrl: "https://www.comsnets.org/",
    status: "Live in Production",
    highlights: [
      "Outstanding Work Award",
      "Migrated 18-year-old legacy code",
      "Massive performance improvements",
      "Used by international delegates"
    ]
  },
  {
    id: 2,
    title: "COMSNETS Conference App",
    description: "Official conference application on Google Play Store, utilized by 300+ delegates for event scheduling and real-time updates.",
    longDescription: "High-performance cross-platform solution using React and Capacitor with Firebase Cloud Messaging for instant notifications. Managed the development and successful launch of the official COMSNETS 2026 mobile app.",
    techStack: ["React", "Capacitor", "Firebase", "Tailwind CSS", "FCM"],
    category: "Mobile",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/comsnets.jpg`,
    githubUrl: null,
    liveUrl: "https://www.comsnets.org/comsnets_app.html",
    status: "Live on Play Store - 300+ Active Users",
    highlights: [
      "300+ active delegates",
      "Cross-platform solution",
      "Real-time push notifications",
      "App Co-Chair for COMSNETS"
    ]
  },
  {
    id: 3,
    title: "AIML Systems Website",
    description: "Architecting and building production applications for AIML Systems 2026 conference.",
    longDescription: "Currently building production-grade web applications and the official website for AIML Systems 2026, serving as the Web Chair for the conference to ensure robust availability and a seamless digital experience.",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web Platform",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/aiml.png`,
    githubUrl: null,
    liveUrl: "https://www.aimlsystems.org/2026/",
    status: "In Development",
    highlights: [
      "Web Chair for AIML Systems 2026",
      "Production-grade architecture",
      "Global conference platform"
    ]
  },
  {
    id: 4,
    title: "Official TNP Platform (IIIT Surat)",
    description: "Architected and deployed the official Training and Placement platform for IIIT Surat.",
    longDescription: "Comprehensive placement portal serving all B.Tech and M.Tech students. Built with Next.js and Firebase, featuring role-based access control, real-time notifications, and analytics. Managing a technical team to continuously scale the infrastructure.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "RBAC"],
    category: "Web Platform",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/tnp.png`,
    githubUrl: null,
    liveUrl: "https://tnp.iiitsurat.ac.in",
    status: "Live - Production Grade",
    highlights: [
      "Campus-wide operations",
      "Role-based access control",
      "Managing technical team",
      "Analytics dashboard"
    ]
  },
  {
    id: 5,
    title: "Alumni Portal IIIT Surat",
    description: "Development of the Alumni networking and engagement platform for IIIT Surat.",
    longDescription: "A dedicated platform aimed at bridging the gap between current students and alumni, facilitating mentorship, networking, and professional opportunities.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web Platform",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/alumni.png`,
    githubUrl: null,
    liveUrl: null,
    status: "In Development - Soon to be Live (Production Grade)",
    highlights: [
      "Alumni networking features",
      "Mentorship integration",
      "Event management"
    ]
  },
  {
    id: 6,
    title: "EVOM - Autonomous LLM Agent",
    description: "Architected a scalable AI-driven interview simulator utilizing OpenAI LLMs, agentic prompt chaining, and context retention.",
    longDescription: "A government-funded AI platform that revolutionizes interview preparation through microservices architecture, Docker containerization, and real-time coding assessments. Secured 2.5 Lakhs grant from SSIP Gujarat.",
    techStack: ["MERN", "Docker", "OpenAI", "Microservices"],
    category: "AI/ML",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/evom.png`,
    githubUrl: "https://github.com/JrG-One/EVOM",
    liveUrl: null,
    status: "Secured SSIP Gujarat Grant - 2.5 Lakhs",
    highlights: [
      "Agentic prompt chaining",
      "Sandboxed code execution",
      "Context retention logic",
      "Government grant secured"
    ]
  },
  {
    id: 7,
    title: "SecQR SCAN - Malicious QR Detector",
    description: "Research project featuring real-time malicious URL detection using ML Kit and heuristic algorithms.",
    longDescription: "Developed a secure QR application with advanced heuristic algorithms. Co-authored research accepted as a poster at COMSNETS 2026 and selected for publication in IEEE Xplore conference proceedings.",
    techStack: ["Kotlin", "Jetpack Compose", "ML Kit", "Room Database"],
    category: "Research",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/secqr.png`,
    githubUrl: null,
    liveUrl: "https://drive.google.com/drive/folders/1HE5Spb2JUZUOrrgKxDdD4716j-2ArhIO?usp=sharing",
    posterUrl: "https://drive.google.com/file/d/1xQX68tQ2u7jyaQxsJczdnGNwdPGC6BHt/view?usp=sharing",
    status: "IEEE Xplore Publication",
    highlights: [
      "ML-powered detection",
      "IEEE Xplore publication",
      "COMSNETS 2026 poster",
      "Jetpack Compose UI"
    ]
  },
  {
    id: 8,
    title: "Finsage - AI Finance Assistant",
    description: "Privacy-aware SaaS platform with 100% automated expense tracking through AI-powered receipt and bank statement parsing.",
    longDescription: "Integrated Google Cloud Vision OCR and Gemini AI for structured data extraction with real-time financial visualization.",
    techStack: ["Next.js", "Firebase", "Google Gemini", "Cloud Vision OCR", "Recharts", "TypeScript"],
    category: "AI/ML",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/finsage.png`,
    githubUrl: "https://github.com/JrG-One/Finsage",
    status: "Live - AI-Powered",
    highlights: [
      "100% automated tracking",
      "OCR + AI integration",
      "Real-time visualization",
      "Personalized insights"
    ]
  },
  {
    id: 9,
    title: "21CC Smart QR & Moodle Automation",
    description: "Developed 'Smart QR' system, refactored UI into modular Angular services, and engineered scalable logistics features.",
    longDescription: "Orchestrated recovery of critical server infrastructure after a breach. Automated Moodle workflows and designed Grails RESTful services, contributing to a 30% increase in course completion rates at 21CC Education.",
    techStack: ["Angular", "Grails", "Groovy", "PostgreSQL", "Moodle"],
    category: "Enterprise Software",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/21cc.png`,
    githubUrl: null,
    liveUrl: null,
    status: "Production Implemented",
    highlights: [
      "Restored 100% data post-breach",
      "Modular Angular services",
      "Reduced API latency by 40%",
      "30% increase in course completion"
    ]
  }
];

export const skills = {
  languages: [
    { name: "C++", level: 95, icon: "code-2", devicon: "devicon-cplusplus-plain" },
    { name: "TypeScript", level: 92, icon: "file-code", devicon: "devicon-typescript-plain" },
    { name: "JavaScript", level: 90, icon: "braces", devicon: "devicon-javascript-plain" },
    { name: "Python", level: 88, icon: "snake", devicon: "devicon-python-plain" },
    { name: "Kotlin", level: 85, icon: "smartphone", devicon: "devicon-kotlin-plain" },
    { name: "Groovy", level: 80, icon: "code", devicon: "devicon-groovy-plain" },
    { name: "Java", level: 85, icon: "coffee", devicon: "devicon-java-plain" },
    { name: "Go", level: 80, icon: "box", devicon: "devicon-go-original-wordmark" },
    { name: "SQL", level: 87, icon: "database", devicon: "devicon-mysql-plain" }
  ],
  frontend: [
    { name: "React", level: 95, icon: "component", devicon: "devicon-react-original" },
    { name: "Next.js", level: 93, icon: "triangle", devicon: "devicon-nextjs-plain" },
    { name: "Angular", level: 85, icon: "hexagon", devicon: "devicon-angularjs-plain" },
    { name: "Flutter", level: 88, icon: "smartphone", devicon: "devicon-flutter-plain" },
    { name: "Tailwind CSS", level: 97, icon: "wind", devicon: "devicon-tailwindcss-original" },
    { name: "Jetpack Compose", level: 82, icon: "layers", devicon: "devicon-android-plain" }
  ],
  backend: [
    { name: "Spring Boot", level: 85, icon: "server", devicon: "devicon-spring-original" },
    { name: "Node.js", level: 92, icon: "server", devicon: "devicon-nodejs-plain" },
    { name: "Express", level: 90, icon: "route", devicon: "devicon-express-original" },
    { name: "Grails", level: 80, icon: "box", devicon: "devicon-grails-plain" },
    { name: "REST APIs", level: 94, icon: "network", devicon: "devicon-postman-plain" },
    { name: "Microservices", level: 85, icon: "boxes", devicon: "devicon-kubernetes-plain" }
  ],
  cloud: [
    { name: "Docker", level: 87, icon: "container", devicon: "devicon-docker-plain" },
    { name: "Firebase", level: 95, icon: "flame", devicon: "devicon-firebase-plain" },
    { name: "PostgreSQL", level: 88, icon: "server-cog", devicon: "devicon-postgresql-plain" },
    { name: "MongoDB", level: 90, icon: "database", devicon: "devicon-mongodb-plain" },
    { name: "Temporal", level: 80, icon: "clock", devicon: "devicon-amazonwebservices-plain-wordmark" }
  ],
  ai: [
    { name: "Google Gemini", level: 92, icon: "sparkles", devicon: "devicon-google-plain" },
    { name: "Azure OpenAI", level: 90, icon: "brain", devicon: "devicon-azure-plain" },
    { name: "Cloud Vision OCR", level: 88, icon: "scan", devicon: "devicon-googlecloud-plain" },
    { name: "ML Kit", level: 85, icon: "cpu", devicon: "devicon-android-plain" }
  ]
};

export const achievements = [
  {
    id: 1,
    title: "SSIP Gujarat Grant",
    description: "Awarded 2.5 Lakhs for EVOM: LLM-based Autonomous Interview Bot",
    date: "2024",
    category: "Grant",
    icon: "trophy"
  },
  {
    id: 2,
    title: "LeetCode Knight Badge",
    description: "Max Rating: 2134 - Top 1.3% globally, 600+ DSA solved",
    date: "2024",
    category: "Competitive Programming",
    icon: "crown"
  },
  {
    id: 3,
    title: "Outstanding Work Award",
    description: "Received from COMSNETS Association for migrating their 18-year-old legacy website",
    date: "2026",
    category: "Award",
    icon: "award"
  },
  {
    id: 4,
    title: "GeeksforGeeks Advanced",
    description: "Max Rating: 1848",
    date: "2024",
    category: "Competitive Programming",
    icon: "star"
  },
  {
    id: 5,
    title: "TCS CodeVita Season 12",
    description: "Global Rank 1413 - Top 0.6% of 2.5L+ participants",
    date: "2024",
    category: "Competitive Programming",
    icon: "medal"
  },
  {
    id: 6,
    title: "Hackbyte 3.0 Finalist",
    description: "Qualified among 5,000+ participants for the 48-hour hackathon at IIIT-DM Jabalpur with multiple expert reviews.",
    date: "2024",
    category: "Hackathon",
    icon: "award"
  },
  {
    id: 7,
    title: "Head of Training & Placement Coordinator",
    description: "Led the placement season for IIIT Surat FY 2025-2026, managing technical teams and scalable infrastructure.",
    date: "2025-2026",
    category: "Leadership",
    icon: "users"
  }
];

export const publications = [
  {
    id: 1,
    title: "Automated Telescope-Paper Linkage via Multi-Model Ensemble Learning",
    authors: "Ojaswa Varshney, Prashasti Vyas, Priyanka Goyal, Tarpita Singh, Ritesh Kumar, Mayank Singh",
    conference: "WASP-2025 (ACL Anthology) / AACL-IJCNLP 2025",
    status: "Published",
    publisher: "AACL Anthology",
    date: "2025",
    type: "Conference"
  },
  {
    id: 2,
    title: "SecQR Scan: Malicious QR Code Detection",
    authors: "Ojaswa Varshney, Dr. Kaustubh Dhondge",
    conference: "COMSNETS 2026",
    status: "Published - Poster Presentation",
    publisher: "IEEE Xplore",
    date: "2026",
    type: "Conference"
  },
  {
    id: 3,
    title: "Voight-Kampff AI Detection Sensitivity",
    authors: "Ritesh Kumar, Arya Trivedi, and Ojaswa Varshney",
    conference: "CLEF 2025 (PAN Lab)",
    status: "Published - CEUR-WS.org (Vol 4038)",
    publisher: "CEUR-WS.org",
    date: "Sep 2025",
    type: "Conference"
  }
];

export const experience = [
  {
    id: 1,
    company: "IDFC FIRST Bank",
    role: "Application Engineer Intern (Wholesale Banking)",
    duration: "Jan 2026 - Jul 2026",
    location: "Chennai, India",
    type: "Internship",
    responsibilities: [
      "Developing secure Bank Guarantee (BG) issuance workflows adhering to RBI guidelines and FEMA rules",
      "Building scalable full-stack features using Spring Boot, Flutter, and PostgreSQL, deployed via Docker and CI/CD pipelines",
      "Implementing complex authorization schemas using Permify, Ory Kratos, and Ory Hydra",
      "Orchestrating 2-eye, 4-eye, and 6-eye maker-checker processes using Temporal"
    ],
    current: false
  },
  {
    id: 2,
    company: "21CC Education",
    role: "IT Executive & SDE Intern",
    duration: "Nov 2024 - Dec 2025",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Orchestrated the recovery of critical server infrastructure following a security breach, restoring 100% of data",
      "Engineered scalable logistics platform features using Groovy and PostgreSQL, reducing API latency by 40%",
      "Developed a 'Smart QR' system, refactored UI into modular Angular services",
      "Designed Grails RESTful services, contributing to a 30% increase in course completion rates"
    ],
    current: false
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "ojaswavarshney",
    maxRating: 2134,
    badge: "Knight Badge",
    rank: "Top 1.3%",
    problemsSolved: 600,
    url: "https://leetcode.com/awsajo/",
    color: "#FFA116",
    icon: "code"
  },
  {
    platform: "GeeksforGeeks",
    username: "ojaswa",
    maxRating: 1848,
    badge: "Advanced Level",
    rank: null,
    problemsSolved: 200,
    url: "https://auth.geeksforgeeks.org/user/ojaswa",
    color: "#2F8D46",
    icon: "trophy"
  },
  {
    platform: "Codeforces",
    username: "ojaswa",
    maxRating: 1193,
    badge: "Pupil",
    rank: null,
    problemsSolved: 150,
    url: "https://codeforces.com/profile/ojaswa",
    color: "#1F8ACB",
    icon: "star"
  }
];

export const education = {
  institution: "Indian Institute of Information Technology, Surat",
  degree: "B.Tech in Computer Science & Engineering",
  duration: "Nov 2022 - Jun 2026",
  cgpa: "8.89/10",
  location: "Surat, Gujarat, India"
};

export const conferencRoles = [
  {
    conference: "COMSNETS 2026 & 2027",
    role: "Lead of Web Chair & App Chair",
    year: "2026-2027"
  },
  {
    conference: "COMSNETS 2026 & 2027",
    role: "UG Forum Co-Chair",
    year: "2026-2027"
  },
  {
    conference: "AIMLSystems 2025 & 2026",
    role: "Web Chair",
    year: "2025-2026"
  }
];
