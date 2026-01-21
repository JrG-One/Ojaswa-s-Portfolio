// Mock data for Ojaswa Varshney's Portfolio

export const personalInfo = {
  name: "Ojaswa Varshney",
  title: "Software Engineer & AI Enthusiast",
  tagline: "Building intelligent solutions that automate the impossible",
  bio: "I'm a B.Tech student at IIIT Surat with a passion for solving real-world problems through technology. From AI-driven platforms to competitive programming, I thrive on challenges that push the boundaries of what's possible. With multiple research publications, government grants, and a LeetCode Knight badge, I'm on a mission to automate complexity and create impact.",
  email: "ojaswa.varshney2003@gmail.com",
  phone: "+91 8865989833",
  location: "IIIT Surat, India",
  avatar: "https://avatars.githubusercontent.com/u/placeholder",
  resumeUrl: "https://drive.google.com/file/d/1aMBNDBMLoSCHf87EzlryeFflkMzVX9mu/view?usp=sharing",
  social: {
    github: "https://github.com/JrG-One",
    linkedin: "https://www.linkedin.com/in/ojaswavarshney/",
    leetcode: "https://leetcode.com/u/ojaswavarshney/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/ojaswa",
    codeforces: "https://codeforces.com/profile/ojaswa"
  }
};

export const projects = [
  {
    id: 1,
    title: "EVOM - AI Mock Interview Platform",
    description: "Architected a scalable AI-driven interview simulator using MERN stack and Azure OpenAI, delivering personalized real-time feedback with 95% response reliability.",
    longDescription: "A government-funded AI platform that revolutionizes interview preparation through microservices architecture, Docker containerization, and real-time coding assessments.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Docker", "Azure OpenAI", "Microservices"],
    category: "AI/ML",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/evom.png`,
    githubUrl: "https://github.com/JrG-One/EVOM",
    liveUrl: null,
    status: "Secured SSIP Gujarat Grant - 2.5 Lakhs",
    highlights: [
      "95% response reliability",
      "Sandboxed code execution",
      "Context retention logic",
      "Government grant secured"
    ]
  },
  {
    id: 2,
    title: "COMSNETS Conference App",
    description: "Official conference application on Google Play Store, utilized by 300+ delegates for event scheduling and real-time updates.",
    longDescription: "High-performance cross-platform solution using React and Capacitor with Firebase Cloud Messaging for instant notifications.",
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
      "Published on Play Store"
    ]
  },
  {
    id: 3,
    title: "SecQR SCAN - Malicious QR Detector",
    description: "Research project with Dr. Kaustubh Dhondge, featuring real-time malicious URL detection using ML Kit and heuristic algorithms.",
    longDescription: "Accepted as poster presentation at COMSNETS 2026 and selected for IEEE Xplore publication.",
    techStack: ["Kotlin", "Jetpack Compose", "ML Kit", "Room Database", "Heuristic Algorithms"],
    category: "Research",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/secqr.png`,
    githubUrl: null,
    liveUrl: "https://drive.google.com/drive/folders/1HE5Spb2JUZUOrrgKxDdD4716j-2ArhIO?usp=sharing",
    posterUrl: "https://drive.google.com/file/d/1xQX68tQ2u7jyaQxsJczdnGNwdPGC6BHt/view?usp=sharing",
    status: "Accepted at COMSNETS 2026 - IEEE Xplore",
    highlights: [
      "Research with Dean, IIIT Surat",
      "ML-powered detection",
      "IEEE Xplore publication",
      "COMSNETS 2026 poster"
    ]
  },
  {
    id: 4,
    title: "IIIT Surat T&P Platform",
    description: "Comprehensive placement portal serving 500+ students, streamlining recruitment lifecycle from application tracking to offer management.",
    longDescription: "Built with Next.js and Firebase, featuring role-based access control, real-time notifications, and analytics dashboard.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "RBAC"],
    category: "Web Platform",
    featured: true,
    image: `${process.env.PUBLIC_URL}/assets/projects/tnp.png`,
    githubUrl: null,
    liveUrl: "https://tnp.iiitsurat.ac.in",
    status: "Live - 500+ Students",
    highlights: [
      "500+ active students",
      "Role-based access control",
      "Real-time notifications",
      "Analytics dashboard"
    ]
  },
  {
    id: 5,
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
  }
];

export const skills = {
  languages: [
    { name: "C++", level: 95, icon: "code-2" },
    { name: "TypeScript", level: 92, icon: "file-code" },
    { name: "JavaScript", level: 90, icon: "braces" },
    { name: "Python", level: 88, icon: "snake" },
    { name: "Kotlin", level: 85, icon: "smartphone" },
    { name: "Groovy", level: 80, icon: "code" },
    { name: "SQL", level: 87, icon: "database" }
  ],
  frontend: [
    { name: "React", level: 95, icon: "component" },
    { name: "Next.js", level: 93, icon: "triangle" },
    { name: "Angular", level: 85, icon: "hexagon" },
    { name: "Tailwind CSS", level: 97, icon: "wind" },
    { name: "Jetpack Compose", level: 82, icon: "layers" }
  ],
  backend: [
    { name: "Node.js", level: 92, icon: "server" },
    { name: "Express", level: 90, icon: "route" },
    { name: "Grails", level: 80, icon: "box" },
    { name: "REST APIs", level: 94, icon: "network" },
    { name: "Microservices", level: 85, icon: "boxes" }
  ],
  cloud: [
    { name: "Firebase", level: 95, icon: "flame" },
    { name: "MongoDB", level: 90, icon: "database" },
    { name: "PostgreSQL", level: 88, icon: "server-cog" },
    { name: "AWS EC2", level: 78, icon: "cloud" },
    { name: "Docker", level: 87, icon: "container" }
  ],
  ai: [
    { name: "Google Gemini", level: 92, icon: "sparkles" },
    { name: "Azure OpenAI", level: 90, icon: "brain" },
    { name: "Cloud Vision OCR", level: 88, icon: "scan" },
    { name: "ML Kit", level: 85, icon: "cpu" }
  ]
};

export const achievements = [
  {
    id: 1,
    title: "SSIP Gujarat Grant",
    description: "Awarded 2.5 Lakhs for LLM-based Autonomous Interview Bot",
    date: "2024",
    category: "Grant",
    icon: "trophy"
  },
  {
    id: 2,
    title: "LeetCode Knight Badge",
    description: "Max Rating: 2134 - Top 1.3% globally",
    date: "2024",
    category: "Competitive Programming",
    icon: "crown"
  },
  {
    id: 3,
    title: "TCS CodeVita Season 12",
    description: "Global Rank 1413 - Top 0.6% of 2.5L+ participants",
    date: "2024",
    category: "Competitive Programming",
    icon: "medal"
  },
  {
    id: 4,
    title: "GDSC IIIT Surat Hackathon",
    description: "Winner - Rank 1",
    date: "2024",
    category: "Hackathon",
    icon: "award"
  },
  {
    id: 5,
    title: "IIIT Coding Challenge - Optigo",
    description: "AIR 17",
    date: "2024",
    category: "Competitive Programming",
    icon: "star"
  },
  {
    id: 6,
    title: "LeetCode Weekly Contest 451",
    description: "Ranked Top 150",
    date: "2024",
    category: "Competitive Programming",
    icon: "zap"
  },
  {
    id: 7,
    title: "Outstanding Service Award",
    description: "Received for outstanding service at COMSNETS 2026",
    date: "2026",
    category: "Award",
    icon: "award"
  }
];

export const publications = [
  {
    id: 1,
    title: "SecQR Scan: Malicious QR Code Detection",
    authors: "Ojaswa Varshney, Dr. Kaustubh Dhondge",
    conference: "COMSNETS 2026",
    status: "Accepted - Poster Presentation",
    publisher: "IEEE Xplore",
    date: "2026",
    type: "Conference"
  },
  {
    id: 2,
    title: "Voight-Kampff AI Detection Sensitivity",
    authors: "Ritesh Kumar, Arya Trivedi, and Ojaswa Varshney",
    conference: "CLEF 2025 (PAN Lab)",
    status: "Published - CEUR-WS.org (Vol 4038)",
    publisher: "CEUR-WS.org",
    date: "Sep 2025",
    type: "Conference"
  },
  {
    id: 3,
    title: "Automated Telescope-Paper Linkage via Multi-Model Ensemble Learning",
    authors: "Ojaswa Varshney, Prashasti Vyas, Priyanka Goyal, Tarpita Singh, Ritesh Kumar, Mayank Singh",
    conference: "AACL-IJCNLP 2025 (WASP)",
    status: "Accepted",
    publisher: "AACL",
    date: "2025",
    type: "Workshop"
  }
];

export const experience = [
  {
    id: 1,
    company: "21CC Education",
    role: "IT Executive (Part-Time)",
    duration: "Nov 2025 - Present",
    location: "Remote",
    type: "Part-Time",
    responsibilities: [
      "Orchestrated recovery of critical server infrastructure following security breach",
      "Developed 'Smart QR' system using Angular for dynamic content access",
      "Integrated AI capabilities into Groovy-based work packages",
      "Automated Moodle LMS workflows via custom scripts"
    ],
    current: true
  },
  {
    id: 2,
    company: "21CC Education",
    role: "Software Development Engineer Intern",
    duration: "Nov 2024 - Nov 2025",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Engineered scalable logistics platform features using Groovy and PostgreSQL",
      "Reduced API latency by 40% through backend optimization",
      "Designed RESTful services contributing to 30% increase in course completion",
      "Refactored legacy UI components, improving maintainability by 20%"
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
    url: "https://leetcode.com/u/ojaswavarshney/",
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
    role: "App Co-Chair",
    year: "2026-2027"
  },
  {
    conference: "COMSNETS 2026",
    role: "UG Forum Co-Chair",
    year: "2026"
  },
  {
    conference: "AIMLSystems 2025 & 2026",
    role: "Web Chair",
    year: "2025-2026"
  },
  {
    conference: "AIMLSystems 2026",
    role: "App Co-Chair",
    year: "2026"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Docker",
    excerpt: "Learn how to architect and deploy microservices using Docker containers for maximum scalability and reliability.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Mastering LeetCode: Knight Badge Journey",
    excerpt: "My complete strategy and roadmap to achieving Knight badge on LeetCode with 600+ problems solved.",
    date: "2024-10-20",
    readTime: "12 min read",
    category: "Competitive Programming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "AI-Powered Interview Platforms: The Future",
    excerpt: "Deep dive into building EVOM - an AI interview simulator using Azure OpenAI and microservices architecture.",
    date: "2024-09-10",
    readTime: "10 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  }
];
