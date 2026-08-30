// Single Source of Truth for Mathubharathi A Portfolio Data

export const personalData = {
  name: "MATHUBHARATHI A",
  displayName: "Mathu Bharathi A",
  heroName: "MATHU",
  primaryTitle: "FULL STACK DEVELOPER",
  supportingIdentity: "Biomedical Engineer • Full Stack Developer • Graphic Designer",
  location: "Theni, Tamil Nadu, India",
  email: "mathubharathi15@gmail.com",
  phone: "8072505342",
  phoneDisplay: "+91 80725 05342",
  github: "https://github.com/MathuBharathi",
  linkedin: "https://linkedin.com/in/mathubharathi",
  resumePdf: "/Mathubharathi_A_FSD_Resume.pdf",
};

export const heroData = {
  headline: "BUILDING DIGITAL EXPERIENCES THAT FEEL AS GOOD AS THEY FUNCTION.",
  subtitle: "Full Stack Developer crafting modern, responsive and interactive web applications — from e-commerce and booking platforms to travel experiences and AI-powered healthcare systems.",
};

export const aboutData = {
  lead: "I'm Mathu Bharathi A, a Full Stack Developer and Biomedical Engineer passionate about building modern, responsive and user-focused digital experiences.",
  paragraph1: "I work across frontend development, backend integration, databases, authentication, APIs and deployment, while also focusing strongly on UI/UX and interactive design.",
  paragraph2: "My projects span multiple domains including e-commerce, travel, tourism, appointment management, online booking, biomedical events and AI-assisted healthcare documentation.",
  paragraph3: "I enjoy transforming ideas into complete digital products — from designing intuitive interfaces to implementing functional backend systems, integrating APIs and deploying production-ready applications.",
  quote: "\"Building digital experiences at the intersection of Code, Design, and Healthcare Technology.\"",
};

export const expertiseData = [
  {
    id: "01",
    title: "FRONTEND DEVELOPMENT",
    description: "Building immersive, high-performance web experiences with Next.js, React, TypeScript, JavaScript, Tailwind CSS, GSAP, Framer Motion, Three.js, React Three Fiber, and Lenis. Focused on responsive design, cinematic animations, interactive 3D experiences, and pixel-perfect interfaces that combine storytelling, performance, and exceptional user experience.",
  },
  {
    id: "02",
    title: "BACKEND DEVELOPMENT",
    description: "Engineering robust backend architectures using Next.js, Node.js, Supabase, PostgreSQL, REST APIs, Authentication, Cloudinary, and Edge Functions. Focused on secure data management, optimized server-side logic, seamless media handling, and scalable infrastructure that powers fast, reliable digital products.",
  },
  {
    id: "03",
    title: "AI-POWERED DEVELOPMENT",
    description: "Leveraging Claude, ChatGPT, GitHub Copilot, Cursor, Codex, Gemini, Midjourney, Figma AI, and OpenCode to accelerate ideation, architecture, UI engineering, debugging, code generation, and creative workflows while maintaining high standards for performance, scalability, and code quality.",
  },
  {
    id: "04",
    title: "AI-ASSISTED APPLICATIONS",
    description: "Building AI-assisted applications with voice processing, speech-to-text, LLM-based information extraction, intelligent document workflows, and automated report generation. Combining AI capabilities with practical application architecture to transform complex workflows into useful, reliable, and user-focused digital solutions.",
  },
  {
    id: "05",
    title: "CLOUD & DEPLOYMENT",
    description: "Deploying and maintaining modern web applications with Vercel, Cloudflare Workers, GitHub, Supabase, Cloudinary, and custom domains. Focused on fast global delivery, scalable infrastructure, secure hosting, media optimization, and seamless deployment workflows.",
  },
];

export const skillsData = {
  frontend: [
    "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript",
    "Responsive Web Design", "Tailwind CSS", "UI/UX Design", "WebGL", "Three.js / 3D Experiences"
  ],
  backend: [
    "Supabase", "PostgreSQL", "SQLite", "API Integration",
    "Netlify Functions", "Flask", "Database Management", "Authentication", "Role-Based Access Control"
  ],
  languages: [
    "Java", "Python", "JavaScript", "SQL"
  ],
  cloudDeployment: [
    "Vercel", "Cloudflare Workers", "GitHub", "Supabase",
    "Cloudinary", "Custom Domains", "Netlify", "Edge Functions"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Netlify", "Vercel", "Figma", "Canva",
    "Adobe Photoshop", "Adobe Illustrator", "Antigravity", "Cursor", "OpenCode"
  ],
};

export const projectsData = [
  {
    id: "01",
    name: "Mellow Desserts",
    category: "Full-Stack E-Commerce",
    shortDesc: "A modern full-stack dessert ordering platform with authentication, online payments, shopping cart, order management and an admin dashboard.",
    detailedDesc: "Mellow Desserts is a full-stack dessert ordering platform designed to provide customers with a smooth online ordering experience. The platform combines a responsive product catalogue with secure authentication, shopping cart functionality, Razorpay payments, order tracking and an administrative management system.",
    tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "Razorpay", "Netlify Functions", "Netlify", "Resend"],
    features: [
      "Modern dessert ordering interface", "Secure user authentication", "Razorpay payment integration",
      "User profile management", "Shopping cart & checkout", "Order tracking", "Admin dashboard",
      "Email notifications", "Fully responsive design"
    ],
    github: "https://github.com/MathuBharathi/Mellow-App",
    live: "https://mellow-desserts.netlify.app/",
    imageKey: "mellow",
    featured: true,
  },
  {
    id: "02",
    name: "DeepDive",
    category: "Full-Stack Scuba Diving Booking Platform",
    shortDesc: "A full-stack scuba diving booking platform featuring secure authentication, destination discovery, real-time reservations and personalized user profiles.",
    detailedDesc: "DeepDive is an ocean-inspired scuba diving reservation platform designed to simplify the discovery and booking of underwater adventures. Users can explore diving destinations, create accounts, make reservations, manage their profiles and view booking history, while administrators can manage bookings and customer information.",
    tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "SQL", "Netlify"],
    features: [
      "Scuba diving destination discovery", "Secure authentication", "Real-time dive reservation system",
      "Personalized user profiles", "Multiple diving destinations", "Booking history & management", "Admin dashboard", "Ocean-inspired UI"
    ],
    github: "https://github.com/MathuBharathi/DeepDive-Co",
    live: "https://deepdive-co.netlify.app/",
    imageKey: "deepdive",
    featured: true,
  },
  {
    id: "03",
    name: "Rustic Heritage",
    category: "E-Commerce / Order Management",
    shortDesc: "A modern traditional Indian kitchenware e-commerce platform combining Indian aesthetics with a complete online shopping and order management experience.",
    detailedDesc: "Rustic Heritage is an e-commerce platform dedicated to traditional Indian kitchenware and handcrafted household products. It combines traditional visual aesthetics with modern shopping functionality, including authentication, product discovery, cart management, secure payments, order tracking and an administrative management system.",
    tech: ["React", "Vite", "JavaScript", "CSS3", "Supabase", "Razorpay", "Netlify Functions", "Netlify"],
    features: [
      "Traditional Indian kitchenware store", "Secure authentication", "Razorpay payments",
      "Shopping cart & checkout", "Order management & tracking", "Admin dashboard",
      "Customer reviews & enquiries", "Invoice generation"
    ],
    github: "https://github.com/MathuBharathi/Rustic_Heritage",
    live: "https://rustic-heritage.netlify.app/",
    imageKey: "rustic",
    featured: true,
  },
  {
    id: "04",
    name: "WanderSphere",
    category: "Full-Stack Travel & Tourism Platform",
    shortDesc: "An India-focused travel discovery platform featuring destination exploration, hidden gems, live weather, interactive maps and personalized itinerary planning.",
    detailedDesc: "WanderSphere is a modern full-stack India travel and tourism platform built around destination discovery and personalized trip planning. Users can explore states, cities, attractions and hidden gems, view weather information, interact with maps, create itineraries, save trips and manage wishlists.",
    tech: ["Next.js", "React", "TypeScript", "CSS", "Supabase", "PostgreSQL", "OpenWeather", "Pexels", "WebGL", "Vercel", "Tailwind CSS", "Leaflet"],
    features: [
      "India travel discovery (states, cities, attractions)", "Hidden gems & live weather", "Interactive maps & Leaflet",
      "Personalized day-by-day trip planning", "Wishlists & downloadable itinerary PDF", "Supabase authentication",
      "WebGL ocean background & glassmorphism UI"
    ],
    github: "https://github.com/MathuBharathi/WanderSphere",
    live: "https://wandersphere-in.vercel.app/",
    imageKey: "wandersphere",
    featured: true,
  },
  {
    id: "05",
    name: "MB-Square & Co.",
    category: "Bespoke Tailoring / Appointment Management",
    shortDesc: "A premium full-stack bespoke tailoring and fashion platform featuring appointment reservations, collection showcases and secure reservation management.",
    detailedDesc: "MB-Square & Co. is a modern full-stack bespoke tailoring and fashion website designed around a premium digital experience. Customers can explore collections, fabrics, craftsmanship and services while making appointments through an integrated reservation system. Administrators can securely manage reservations and communicate reservation status through automated emails.",
    tech: ["Next.js", "React", "TypeScript", "CSS", "Supabase", "PostgreSQL", "Nodemailer", "Gmail SMTP", "Vercel", "Lenis"],
    features: [
      "Premium tailoring interface", "Fabric & collection showcase", "Appointment reservation system",
      "Admin reservation dashboard", "Automated email notifications", "Supabase database & Vercel deployment"
    ],
    github: "https://github.com/MathuBharathi/MB-Square_Co",
    live: "https://mb-squareco.vercel.app/",
    imageKey: "mbsquare",
    featured: true,
  },
  {
    id: "06",
    name: "MedXperia 2K26",
    category: "Biomedical Symposium Website",
    shortDesc: "A National Level Biomedical Engineering Symposium website featuring event discovery, interactive navigation, technical and non-technical events and an immersive 3D experience.",
    detailedDesc: "MedXperia 2K26 is a responsive symposium website developed for a National Level Biomedical Engineering Symposium. The platform presents technical events, non-technical competitions, workshops, hackathons and event posters through an interactive digital experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "GLB 3D Model", "WebGL / immersive 3D", "Netlify"],
    features: [
      "Medical-themed UI & responsive layout", "GLB 3D model & immersive WebGL", "Interactive navigation",
      "Event posters gallery", "Technical & non-technical event registration"
    ],
    github: "https://github.com/MathuBharathi/MedXperia_2k26",
    live: "https://medxperia2k26.netlify.app/",
    imageKey: "medxperia",
    featured: false,
  },
  {
    id: "07",
    name: "Discharge Summary Voice Process",
    category: "AI Healthcare / Clinical Documentation",
    shortDesc: "An AI-powered healthcare application that transforms voice-dictated clinical information into structured discharge summaries and professionally formatted PDF documents.",
    detailedDesc: "Discharge Summary Voice Process is an AI-assisted healthcare documentation platform designed to simplify hospital discharge summary creation. Authorized healthcare professionals can upload a doctor's voice dictation, convert it into text using speech-to-text processing, extract structured clinical information using an LLM and generate a professionally formatted discharge summary PDF.",
    tech: ["Python", "Flask", "OpenRouter", "Whisper", "ReportLab", "SQLite", "Supabase", "HTML", "CSS", "JavaScript", "Vercel", "Git", "GitHub"],
    features: [
      "AI-powered discharge summary generation", "Voice-to-text clinical documentation (Whisper)",
      "OpenRouter LLM clinical extraction", "Automated ReportLab PDF generation",
      "Supabase cloud storage", "Role-based access control & audit logging"
    ],
    github: "https://github.com/MathuBharathi/Discharge_Summary-Voice_Process",
    live: "https://discharge-summary-voice-process.vercel.app/",
    imageKey: "discharge_summary",
    featured: false,
  },
];

export const certificationsData = [
  {
    id: "01",
    title: "Bureau of Indian Standards (BIS) — Internship",
    organization: "BIS Headquarters, New Delhi",
    committee: "MHD-14 Committee",
    date: "2024",
    duration: "Internship",
    description: "Worked on a pre-standardization draft for Pneumatic Tube Transport Systems (PTS) in healthcare facilities. Analyzed technical specifications, safety requirements, operational workflows, and formal government documentation.",
  },
  {
    id: "02",
    title: "Young Creators Program",
    organization: "Zoho Corporation Pvt. Ltd., Chennai",
    date: "November 2024",
    duration: "03 Days",
    description: "Certified hands-on training in creating low-code mobile applications.",
  },
  {
    id: "03",
    title: "Cloud Computing Program",
    organization: "IBM SkillsBuild",
    date: "November 2025",
    duration: "4 days",
    description: "Introduction & Fundamentals of Cloud, covering foundational cloud computing concepts, IaaS, PaaS, SaaS and basic cloud architecture.",
  },
  {
    id: "04",
    title: "GenAI Powered Data Analytics Job Simulation",
    organization: "TCS / Forage",
    date: "2025",
    duration: "Simulation",
    description: "Data analysis, dashboard creation and GenAI-assisted insights for data-driven decision making.",
  },
  {
    id: "05",
    title: "Tata – Data Visualisation: Empowering Business with Effective Insights",
    organization: "Tata / Forage",
    date: "December 2025",
    duration: "Simulation",
    description: "Data visualization, dashboard design, and translating complex data into actionable business insights.",
  },
];

export const educationData = {
  institution: "PSNA College of Engineering and Technology, Dindigul",
  degree: "B.E. – Biomedical Engineering",
  period: "2022 – 2026",
  cgpa: "8.26",
  location: "Dindigul, Tamil Nadu",
};
