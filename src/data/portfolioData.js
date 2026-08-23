export const personalInfo = {
  name: "ASAD ASHRAF",
  title: "AI/ML-Focused Software Engineer",
  subtitle: "Building Production-Grade Machine Learning, NLP & Agentic AI Workflows",
  location: "Lahore, Pakistan",
  email: "asadashrafashraf21@gmail.com",
  phone: "+92 309 1428959",
  linkedin: "https://linkedin.com/in/asad-ashraf-84840127a",
  github: "https://github.com/Asduuu",
  availability: "Available for Full-time AI/ML Engineering & High-Impact Consulting",
  summary: `AI/ML-focused Software Engineer with hands-on experience building and deploying production-style systems spanning Machine Learning, NLP, Generative AI, backend development, and intelligent automation. Experienced in Python, FastAPI, Scikit-learn, TensorFlow, PyTorch, XGBoost, LangChain, LangGraph, LangSmith, and modern AI/LLM workflows. Built AI-powered recruitment systems, healthcare AI applications, enterprise software, AI security systems, predictive ML solutions, conversational tools, and full-stack platforms. Strong foundation in data preprocessing, feature engineering, model evaluation, REST APIs, databases, Docker, system architecture, problem solving, and competitive programming.`
};

export const stats = [
  { label: "Featured AI Systems", value: "4+", detail: "Production RAG, ML & Agentic Architectures" },
  { label: "Competitive Awards", value: "3x", detail: "Speed Programming Winner & Runner-up" },
  { label: "Core Tech Stack", value: "15+", detail: "PyTorch, FastAPI, LangGraph, Docker & React" },
  { label: "Code Quality", value: "100%", detail: "Strict Typing, Pydantic & LangSmith Tracing" }
];

export const visualStories = [
  {
    id: "ai-workflow",
    title: "HOW AI ENGINEERING WORKS",
    subtitle: "From raw unstructured documents to autonomous intelligent agents in production.",
    steps: [
      {
        number: "01",
        stage: "RAW DATA & UNSTRUCTURED DOCS",
        desc: "Messy PDFs, scanned resumes, raw text & unstructured clinical logs containing valuable domain knowledge.",
        icon: "file-text",
        status: "High Noise, Low Structure"
      },
      {
        number: "02",
        stage: "ASAD'S PARSING & EMBEDDING PIPELINE",
        desc: "Tesseract OCR, SBERT embeddings, PyTorch preprocessing, and Pydantic schema validation.",
        icon: "cpu",
        status: "Cleaned & Vectorized"
      },
      {
        number: "03",
        stage: "RAG & LANGGRAPH AGENT WORKFLOWS",
        desc: "Stateful agent graphs, semantic search retrieval, memory state management & LangChain pipelines.",
        icon: "git-branch",
        status: "Intelligent Reasoning"
      },
      {
        number: "04",
        stage: "SCALABLE PRODUCTION DEPLOYMENT",
        desc: "FastAPI REST microservices, Docker containerization & LangSmith observability and evaluation.",
        icon: "rocket",
        status: "Production-Ready APIs"
      }
    ]
  },
  {
    id: "ai-climb",
    title: "THE ENTERPRISE AI DEFENSE CLIMB",
    subtitle: "Safeguarding AI interactions against data leaks, prompt injection, and compliance risks.",
    steps: [
      {
        number: "01",
        stage: "SECURITY RISK & DATA LEAKS",
        desc: "Employees inadvertently sending confidential PII and proprietary source code into external LLM endpoints.",
        icon: "alert-triangle",
        status: "Enterprise Vulnerability"
      },
      {
        number: "02",
        stage: "CEREBRAOS AI FIREWALL",
        desc: "Asad builds multi-layer NLP inspection models and real-time PII & prompt injection detectors.",
        icon: "shield",
        status: "Active Inspection"
      },
      {
        number: "03",
        stage: "POLICY SANITIZATION ENGINE",
        desc: "Dynamic decision workflows for real-time redaction, blocking, or sanitizing high-risk requests.",
        icon: "check-circle-2",
        status: "Zero Data Leakage"
      },
      {
        number: "04",
        stage: "AUDITED ENTERPRISE GOVERNANCE",
        desc: "PostgreSQL audit logs, SQLAlchemy ORM, and full traceability for CISO compliance.",
        icon: "lock",
        status: "Complete Observability"
      }
    ]
  }
];

export const projects = [
  {
    id: "cv-analyzer",
    title: "AI-Based CV Analyzer",
    tagline: "Automated Recruitment System & Semantic Candidate Evaluation",
    category: "GenAI & LLMs",
    period: "2024",
    badge: "Recruitment Automation",
    description: "Built an AI-powered recruitment system for automated CV screening, candidate evaluation, skill matching, and semantic similarity scoring.",
    longDescription: `AI-powered recruitment platform designed to automate document parsing, resume evaluation, and candidate ranking. Extracted and validated resume details from PDF and DOCX formats with full scanned document support via Tesseract OCR. Implemented semantic text embeddings using Sentence Transformers (SBERT) and Cosine Similarity to score candidate fitness against job specifications, while automating candidate notification workflows via SMTP with attached match breakdown reports.`,
    tags: ["Python", "FastAPI", "Pydantic", "SBERT", "Tesseract OCR", "Gradio", "NumPy", "SMTP"],
    highlights: [
      "Extracted & validated structured resume data using Pydantic schemas",
      "Integrated Tesseract OCR for scanned PDF/image resumes",
      "Semantic similarity & skill match scoring using Sentence Transformers (SBERT)",
      "Automated email notifications & ranking report generation with SMTP",
      "Gradio interactive demo for recruitment team evaluation"
    ],
    architecture: [
      "Input Document (PDF/DOCX/Scan)",
      "PDFPlumber / Tesseract OCR",
      "Pydantic Validation Layer",
      "SBERT Embeddings & Vector Match",
      "Candidate Rank Engine",
      "FastAPI / SMTP Dispatch"
    ],
    metrics: [
      { label: "Parsing Accuracy", value: "98.5%" },
      { label: "Screening Speed", value: "< 2.5s / Resume" },
      { label: "Semantic Precision", value: "High SBERT Match" }
    ],
    github: "https://github.com/Asduuu",
    demo: "https://github.com/Asduuu"
  },
  {
    id: "mediguide-ai",
    title: "MediGuide AI",
    tagline: "Stateful RAG Healthcare Information & Agentic Guidance Platform",
    category: "Healthcare AI",
    period: "2024",
    badge: "Agentic AI & RAG",
    description: "Developed an AI-powered healthcare guidance platform using LangChain, LangGraph stateful agent workflows, and LangSmith observability.",
    longDescription: `MediGuide AI is a patient-centric guidance prototype that uses Retrieval-Augmented Generation (RAG) and stateful AI agent graphs to provide structured, safe medical information assessment. Built with LangGraph to orchestrate stateful conversation trees and multi-step reasoning, validated with Pydantic for clinical disclaimers, and tracked using LangSmith for real-time latency and accuracy evaluation.`,
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "LangSmith", "RAG", "LLMs", "Pydantic", "Docker"],
    highlights: [
      "Designed RAG workflows for contextual medical knowledge retrieval",
      "Orchestrated complex multi-turn stateful agent graphs via LangGraph",
      "Full observability, tracing, & latency evaluation using LangSmith",
      "Enforced clinical disclaimers & structured outputs using Pydantic",
      "FastAPI REST backend fully containerized with Docker"
    ],
    architecture: [
      "User Query & Symptom Input",
      "RAG Vector Retrieval (Embeddings)",
      "LangGraph Stateful Agent Graph",
      "LangSmith Observability Layer",
      "Pydantic JSON Response Guardrail",
      "FastAPI Docker Container"
    ],
    metrics: [
      { label: "Observability", value: "100% LangSmith" },
      { label: "Agent State", value: "LangGraph Stateful" },
      { label: "Containerization", value: "Docker Ready" }
    ],
    github: "https://github.com/Asduuu",
    demo: "https://github.com/Asduuu"
  },
  {
    id: "cerebra-os",
    title: "CerebraOS — Enterprise AI Firewall",
    tagline: "Data Leak Prevention & Risk Governance for LLMs",
    category: "Security & ML",
    period: "2024",
    badge: "Cybersecurity AI",
    description: "Designed an enterprise AI security platform focused on preventing sensitive data exposure, prompt injection, and PII leaks in LLM applications.",
    longDescription: `CerebraOS acts as an inline proxy and security governance firewall for enterprise AI adoption. It monitors user prompts and AI responses in real time, detecting sensitive credentials, PII, financial data, and adversarial prompt injections using specialized NLP classification models. Features dynamic policy rules (Block, Redact, Allow) and comprehensive CISO audit logging built on FastAPI, SQLAlchemy, and PostgreSQL.`,
    tags: ["Python", "AI/ML", "NLP", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "REST APIs"],
    highlights: [
      "Real-time NLP inspection of user inputs & LLM interactions",
      "Sensitive PII detection, credential scanning & risk scoring engine",
      "Policy-based execution (Allow / Sanitize / Block requests)",
      "Audit logging & security event traceability with SQLAlchemy & PostgreSQL",
      "Production-ready FastAPI backend designed for scalable microservices"
    ],
    architecture: [
      "Client Request",
      "CerebraOS Proxy Gate",
      "NLP PII & Injection Detector",
      "Policy Engine (Allow/Redact/Block)",
      "PostgreSQL Security Audit Log",
      "Upstream LLM Provider"
    ],
    metrics: [
      { label: "Inspection Overhead", value: "< 15ms" },
      { label: "PII Detection", value: "Multi-Entity NLP" },
      { label: "Audit Traceability", value: "100% PostgreSQL" }
    ],
    github: "https://github.com/Asduuu",
    demo: "https://github.com/Asduuu"
  },
  {
    id: "idurar-erp",
    title: "IDURAR — Enterprise ERP/CRM Platform",
    tagline: "Full-Stack ERP & CRM Solution for Startups & SMEs",
    category: "Full-Stack ERP",
    period: "2023 – 2024",
    badge: "Full-Stack SaaS",
    description: "Developed a comprehensive modular ERP/CRM platform managing customer relationships, invoicing, accounting, and HR operations.",
    longDescription: `IDURAR is a modern enterprise resource planning (ERP) and customer relationship management (CRM) software built for growing businesses. Features real-time financial tracking, automated invoice generation, inventory management, customer lead pipelines, and HR management, powered by React.js, Redux, Express.js REST APIs, and MongoDB.`,
    tags: ["React.js", "Redux", "Ant Design", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    highlights: [
      "Built modular business tools: Invoicing, Customer CRM, Accounting & HR",
      "Responsive, clean UI dashboard built with React.js & Ant Design",
      "Robust state management with Redux and clean RESTful backend with Express",
      "High scalability schema design with MongoDB",
      "Led full-stack architecture design & team coordination"
    ],
    architecture: [
      "React + Redux Frontend",
      "Ant Design Component Suite",
      "Node.js Express REST API",
      "MongoDB Cluster",
      "Role-Based Access Control"
    ],
    metrics: [
      { label: "Modules", value: "CRM, HR, Invoicing" },
      { label: "Architecture", value: "REST API Microservices" },
      { label: "Frontend State", value: "Redux Toolkit" }
    ],
    github: "https://github.com/Asduuu",
    demo: "https://github.com/Asduuu"
  }
];

export const skillCategories = [
  {
    id: "ai-ml",
    title: "AI / ML & GenAI Engineering",
    icon: "brain-circuit",
    description: "Model building, LangGraph agent workflows, RAG, and LLM evaluations.",
    skills: [
      { name: "LangChain & LangGraph", level: 95, tag: "Agentic AI & Stateful Workflows" },
      { name: "RAG & Vector Search", level: 92, tag: "Semantic Embeddings & SBERT" },
      { name: "PyTorch & TensorFlow", level: 88, tag: "Deep Learning & Neural Nets" },
      { name: "Scikit-learn & XGBoost", level: 90, tag: "Classification & Regression" },
      { name: "LangSmith", level: 88, tag: "LLM Observability & Evaluation" },
      { name: "NLP & Tesseract OCR", level: 85, tag: "Text Preprocessing & Extraction" },
      { name: "Feature Engineering & SMOTE", level: 90, tag: "Imbalanced Data & Preprocessing" },
      { name: "Prompt Engineering & Tool Calling", level: 95, tag: "Structured Output Schemas" }
    ]
  },
  {
    id: "backend-db",
    title: "Backend & Databases",
    icon: "database",
    description: "High-throughput microservices, API security, and database ORMs.",
    skills: [
      { name: "FastAPI & Pydantic", level: 95, tag: "Async REST APIs & Data Schemas" },
      { name: "Node.js & Express.js", level: 88, tag: "REST Microservices & Middleware" },
      { name: "PostgreSQL & SQLAlchemy", level: 90, tag: "Relational ORM & Migrations" },
      { name: "MongoDB & MySQL", level: 85, tag: "NoSQL & SQL Data Modeling" },
      { name: "REST Architecture", level: 95, tag: "API Design & Integration" },
      { name: "Automation Scripts", level: 92, tag: "Python ETL & Task Runners" }
    ]
  },
  {
    id: "web-tools",
    title: "Web Tech & Deployment",
    icon: "layout",
    description: "Modern frontend frameworks, containerization, and data app UIs.",
    skills: [
      { name: "React.js & Redux", level: 88, tag: "SPA & Modular UI Components" },
      { name: "Next.js & JavaScript", level: 85, tag: "SSR & Dynamic Modern Web" },
      { name: "Tailwind CSS & Ant Design", level: 90, tag: "Responsive Luxury UIs" },
      { name: "Docker & Git/GitHub", level: 88, tag: "Container Deployment & CI/CD" },
      { name: "Streamlit & Gradio", level: 92, tag: "Interactive AI Demos" }
    ]
  },
  {
    id: "core-engineering",
    title: "Languages & Engineering",
    icon: "code",
    description: "Core algorithms, data structures, and competitive problem solving.",
    skills: [
      { name: "Python", level: 96, tag: "Primary Systems Language" },
      { name: "C++", level: 90, tag: "Speed & Algorithm Optimization" },
      { name: "x86 Assembly / 8086", level: 78, tag: "Low-level Systems Computing" },
      { name: "Data Structures & Algorithms", level: 92, tag: "Competitive Programming" },
      { name: "System Architecture", level: 88, tag: "Scalable Microservice Design" },
      { name: "Team Leadership & Mentoring", level: 90, tag: "Workshop & Tech Lead" }
    ]
  }
];

export const experiences = [
  {
    role: "Freelance Software & Web Developer",
    organization: "Self-Employed",
    period: "2023 – Present",
    type: "Freelance",
    location: "Remote / Global",
    description: "Building production-grade AI-powered applications, machine learning backend systems, automated ETL pipelines, and client-focused full-stack web products.",
    bullets: [
      "Engineered machine learning and NLP solutions with custom FastAPI backends.",
      "Containerized applications using Docker for smooth cloud and local deployments.",
      "Built interactive AI demonstration dashboards using Streamlit and Gradio for clients."
    ]
  },
  {
    role: "On-Spot Programming Lead",
    organization: "TechSphere",
    period: "2024 – Present",
    type: "Leadership",
    location: "Lahore, Pakistan",
    description: "Leading live programming workshops, competitive coding mentorship, and algorithmic problem-solving events.",
    bullets: [
      "Guided students and technical teams through complex algorithmic & data structure challenges.",
      "Organized speed programming hackathons and mentored participants on optimization in C++ and Python.",
      "Managed technical event logistics, problem statement creation, and live evaluation."
    ]
  },
  {
    role: "Social Media Marketing Specialist",
    organization: "GDSC @ LGU (Google Developer Student Club)",
    period: "2023 – 2024",
    type: "Community",
    location: "Lahore Garrison University",
    description: "Drove digital branding, social engagement, and technical content creation for Google Developer community events.",
    bullets: [
      "Designed visual technical collateral and promotional content using Canva.",
      "Supported technical events, workshops, and developer outreach across campus."
    ]
  }
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "Lahore Garrison University",
  period: "March 2024 – March 2028",
  focusAreas: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Database Systems",
    "Software Architecture"
  ]
};

export const awards = [
  {
    title: "Winner — Speed Programming Competition",
    issuer: "Lahore Garrison University",
    year: "2024",
    icon: "trophy",
    badge: "1st Place Gold"
  },
  {
    title: "Winner — Speed Programming Competition",
    issuer: "Bahria University Lahore",
    year: "2024",
    icon: "trophy",
    badge: "1st Place Gold"
  },
  {
    title: "Runner-Up — CodeX Coding Competition",
    issuer: "Bahria University Lahore",
    year: "2024",
    icon: "award",
    badge: "2nd Place Silver"
  },
  {
    title: "Technical Participant",
    issuer: "DevFest Lahore 2024",
    year: "2024",
    icon: "star",
    badge: "Google Developer Conference"
  }
];

export const aiSandboxPrompts = [
  {
    prompt: "What is Asad's core technical specialty?",
    response: `Asad Ashraf is an AI/ML-Focused Software Engineer based in Lahore. His core focus spans end-to-end Machine Learning pipelines, NLP, Generative AI, RAG (Retrieval-Augmented Generation), stateful AI agents using LangGraph, and high-performance FastAPI backends with Docker containerization.`
  },
  {
    prompt: "How does MediGuide AI use RAG & LangGraph?",
    response: `MediGuide AI combines vector database retrieval (RAG) with stateful agent graph workflows in LangGraph. Asad engineered the state transitions so symptom queries are dynamically enriched with verified medical context before response generation, with 100% observability traced via LangSmith.`
  },
  {
    prompt: "What is CerebraOS and how does it protect AI data?",
    response: `CerebraOS is an Enterprise AI Security Firewall engineered by Asad. It inspects user prompts and LLM outputs in under 15ms, detecting PII, credentials, and prompt injections via real-time NLP classification models. It enforces policy actions (Allow / Redact / Block) and logs audited events in PostgreSQL.`
  },
  {
    prompt: "Why should we hire Asad for our engineering team?",
    response: `Asad is a multi-award-winning Speed Programming Champion with deep algorithms expertise in C++ and Python. He doesn't just prototype AI—he builds production-ready microservices with Pydantic strict schemas, Docker containers, LangSmith observability, and clean REST APIs.`
  }
];
