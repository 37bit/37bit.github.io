import { Profile, Education, Experience, Project, Certification, SkillCategory } from './types';

export const PROFILE: Profile = {
  name: "Javier Tang",
  title: "Aspiring Cybersecurity Professional",
  tagline: "Penultimate-Year Computer Science Student at SMU",
  contact: {
    linkedin: "linkedin.com/in/javiert37",
    github: "github.com/37bit",
    email: "2014javiertang@gmail.com",
    phone: "+65 93240603"
  },
  about: [
    "I am constantly driven by curiosity and desire to understand how intelligent systems behave - they are, after all, micro versions of human cognition.",
    "This curiosity motivates me to understand how models work and reproduce my own implementations to build even greater intuition."
  ]
};

export const EDUCATION: Education[] = [
  {
    school: "Singapore Management University",
    degree: "Bachelor of Science (Computer Science)",
    period: "Aug 2022 - Aug 2026 (Expected)",
    details: [
      "Latest GPA: 3.42",
      "Major in Cybersecurity & AI"
    ]
  },
  {
    school: "Ngee Ann Polytechnic",
    degree: "Diploma in Information Security & Forensics",
    period: "Aug 2017 - Aug 2020",
    details: [
      "GPA: 3.82",
      "Advanced Computing Mathematics (Diploma Plus)"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "AI & Full Stack Development Intern",
    company: "SembCorp Solar",
    period: "May 2025 - Dec 2025",
    details: [
      "Analyzed and implemented a hybrid SSA-SVM method from research literature to enhance irradiance time-series forecasting performance.",
      "Built and deployed full-stack web features using Vue.js (frontend) and Laravel (backend) to deliver irradiance insights to stakeholders.",
      "Aligned irradiance forecasts with business needs and risk appetite to avoid over-promising."
    ]
  },
  {
    role: "Security R&D Intern",
    company: "Centre of Strategic Infocomm Technologies (CSIT)",
    period: "Sep 2019 - Jan 2020",
    details: [
      "Researched Windows Credential Manager through open-source intelligence and leveraged Windows/Linux tools to identify and analyze potential threats.",
      "Expanded research from Credential Manager to broader Windows security, covering browser evolution and credential storage technologies (ie. DPAPI).",
      "Translated complex technical findings into clear, user-friendly documentation to present to the non-technical."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "LLM Safety Evaluation",
    period: "Jan 2025 - Aug 2025",
    description: [
      "Evaluated the ContactDoctor model across hallucination and robustness dimensions to assess susceptibility to real-world LLM safety attacks.",
      "Analyzed a research methodology on semantic entropy for hallucination detection and integrated a tailored version of the technique.",
      "Conducted adversarial text-perturbation attacks (CLARE and similar methods)."
    ],
    tech: ["Python", "LLM", "Adversarial AI"]
  },
  {
    title: "Analysis of Ransomware Gangs in 2024",
    period: "Jan 2025 - Aug 2025",
    description: [
      "Selenium-based web scraper to collect data from dark web leak sites for profiling the TTPs of ransomware gangs.",
      "Cleaned and correlated scraped data with OSINT to uncover underlying trends.",
      "Communicated insight using Tableau charts, linking empirical data to extract thought-provoking questions."
    ],
    tech: ["Selenium", "Python", "Tableau", "OSINT"]
  },
  {
    title: "Secure Salary Analysis with Fully Homomorphic Encryption",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Researched practical applications of FHE across industries to identify use cases and challenges.",
      "Developed a Python program to perform secure salary analysis and prediction.",
      "Highlighted key challenges with regards to technological scalability and limitations of FHE."
    ],
    tech: ["Python", "Cryptography", "FHE"]
  },
  {
    title: "Analysis of the Spread of Online Misinformation",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Analyzed and presented a research paper on misinformation diffusion using graph-based methods.",
      "Explained how misinformation spreads using the Independent Cascade diffusion model.",
      "Translated mathematical formulations into intuitive graph visualizations."
    ],
    tech: ["Graph Theory", "Python", "Data Viz"]
  },
  {
    title: "A Study on the Nature of Cybercrime in SEA",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Aggregated insights from cybersecurity reports/articles to gain a broad view of cybercriminal trends in SEA.",
      "Deep dived into a pig-butchering campaign, employing threat intelligence tools like whois to identify network artifacts.",
      "Modeled the threat using the Diamond Model and leveraged sandboxing tools like VirusTotal."
    ],
    tech: ["Threat Intel", "Diamond Model", "VirusTotal"]
  },
  {
    title: "Thorax Anomaly Detection using Deep Learning",
    period: "Jan 2024 - Aug 2024",
    description: [
      "Trained a CNN model in PyTorch to detect thorax anomalies in x-ray images and perform image classification.",
      "Wrote custom scripts in Python to preprocess data, ensuring data quality and consistency.",
      "Independently learned and implemented robust pipeline for training, evaluation, and hyperparameter tuning."
    ],
    tech: ["PyTorch", "CNN", "Python"]
  },
  {
    title: "SMU Image Classification with YOLO",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Developed and fine-tuned YOLOv5 model in PyTorch to achieve accurate image classification on SMU image datasets.",
      "Performed high-quality labeling in CVAT to ensure a robust training dataset.",
      "Evaluated model performance using precision, recall, and AUROC metrics."
    ],
    tech: ["YOLOv5", "PyTorch", "CVAT"]
  },
  {
    title: "Reverse Engineering IOLI Binaries",
    period: "July 2023 - July 2023",
    description: [
      "Developed foundational reverse engineering skills using Radare2 for static and dynamic analysis of Linux ELF binaries.",
      "Studied ELF structures, stack and register behavior, and analyzed decompiled pseudo-C code."
    ],
    tech: ["Radare2", "Assembly", "Linux", "C"]
  },
  {
    title: "CNA RSS RAG with Ollama",
    period: "Jan 2025 - Feb 2025",
    description: [
      "Developed a Python script to read the CNA RSS feed, automating retrieval of the latest news.",
      "Extracted and processed data using BeautifulSoup to structure it for RAG.",
      "Implemented a local RAG system with Ollama."
    ],
    tech: ["Python", "Ollama", "BeautifulSoup", "RAG"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Solutions Architect Associate (SAA-C03)",
    date: "Obtained May 2025",
    description: "Demonstrated solid understanding of core AWS services, architectural best practices, and cost optimization strategies."
  },
  {
    name: "Google Cybersecurity Certificate",
    date: "Obtained July 2024",
    description: "Gained hands-on training in cybersecurity operations aligned with real-world SOC workflows such as risk management, threat detection, and incident response."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C#", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Cybersecurity",
    skills: ["Cryptography", "Data Privacy", "OSINT", "Threat Profiling", "Malware Analysis", "Web Security"]
  },
  {
    category: "Machine Learning & Data",
    skills: ["Scikit-learn", "PyTorch", "CNNs", "Tableau", "Pandas", "Computer Vision", "LLMs"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "GitLab", "AWS Services", "Ollama"]
  },
  {
    category: "Algorithms & Math",
    skills: ["Graph Algorithms", "Dynamic Programming", "Linear Algebra", "Probability Theory"]
  }
];