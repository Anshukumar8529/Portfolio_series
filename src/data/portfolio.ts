/**
 * Central portfolio data — generated for Anshu Kumar.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Factual source: Anshu Kumar's verified resumes and campusfix-ai project repository.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const BASE = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');
export const asset = (path: string) => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export const profile = {
  fullName: 'Anshu Kumar',
  displayName: 'Anshu Kumar',
  firstName: 'ANSHU',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ANSHU ORIGINAL',
  role: 'Software Engineer & Machine Learning Developer',
  tagline: ['Machine Learning', 'Java & Python', 'FastAPI & Data Analytics'],
  intro:
    'A B.Tech Computer Science & Engineering student at Lovely Professional University (CGPA 7.43) building production-grade machine learning pipelines, autonomous AI agent workflows, and full-stack software solutions with Python, Java, FastAPI, Docker, and React.',
  location: 'Aurangabad, Bihar / Punjab, India',
  email: 'anshukumardeo9@gmail.com',
  phone: '+91 8207711548',
  links: {
    linkedin: 'https://linkedin.com/in/anshu-kumar-ap',
    github: 'https://github.com/Anshukumar8529',
  },
  resumePdf: asset('/assets/Anshu_Kumar_General_CV.pdf'),
  generalResumePdf: asset('/assets/Anshu_Kumar_General_CV.pdf'),
  specializedResumePdf: asset('/assets/Anshu_Kumar_Specialized_CV.pdf'),
  portrait: {
    src: asset('/assets/portrait-720.webp'),
    srcSet: `${asset('/assets/portrait-420.webp')} 420w, ${asset('/assets/portrait-720.webp')} 720w, ${asset('/assets/portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Anshu Kumar',
  },
  interests: ['Autonomous AI Agents', 'Predictive Modeling', 'Distributed Systems'],
};

export const education = [
  {
    school: 'Lovely Professional University',
    place: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'August 2023 – Present',
    score: 'CGPA 7.43',
  },
  {
    school: 'Bhagwan Shree Surya Narayan Inter College',
    place: 'Aurangabad, Bihar',
    degree: 'Intermediate — 12th with Science',
    period: 'April 2020 – March 2022',
    score: 'Score 82%',
  },
  {
    school: 'Vivekanand Vision Ideal Public School',
    place: 'Aurangabad, Bihar',
    degree: 'Matriculation — 10th with Science',
    period: 'April 2019 – February 2020',
    score: 'Score 77%',
  },
];

export const experience = [
  {
    company: 'Lovely Professional University',
    role: 'Application Development Trainee',
    place: 'Phagwara, Punjab',
    period: 'July 2025',
    points: [
      'Completed intensive hands-on training in end-to-end desktop application development covering Java, OOP concepts, JDBC, database design, and JavaFX.',
      'Engineered 5+ CRUD-based real-world applications incorporating MySQL for persistent storage and streamlined database operations.',
      'Simulated an ATM-based banking system covering user login verification, fund transactions (cash withdrawal, deposit, balance check), and database connectivity via JDBC.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'campusfix-ai',
    title: 'CampusFix AI',
    year: '2026',
    genre: 'Autonomous AI Agents • Operations • Incident Resolution',
    logline: 'AI agent system for smart campus incident reporting, triage, and automated resolution workflow management.',
    stack: ['FastAPI', 'Google Gemini', 'React', 'Vite', 'SQLite', 'Uvicorn'],
    build: [
      'Engineered an end-to-end campus maintenance resolution platform with FastAPI and React, automating the entire incident reporting and triage lifecycle.',
      'Integrated Google Gemini LLM to parse reporter descriptions, classify severity, and perform intelligent department routing and staff assignment via automated SOP lookups.',
      'Architected lightweight persistence using SQLite, providing transactional safety for incidents, supervisor alerts, and ticket status progression (Reported → Assigned → Resolved).',
    ],
    features: [
      'Google Gemini-powered incident parsing and multi-class classification',
      'Intelligent department identification & automated staff dispatching',
      'Dual interface: Reporter submission portal + Staff dashboard',
      'Real-time ticket lifecycle tracking and supervisor alerts',
      'FastAPI REST microservices with auto-generated OpenAPI documentation',
    ],
    metrics: [
      { value: '100%', label: 'automated incident triage' },
      { value: 'Gemini', label: 'LLM reasoning engine' },
      { value: 'FastAPI', label: 'microservice backend' },
      { value: 'SQLite', label: 'embedded ACID storage' },
      { value: '3-tier', label: 'ticket status pipeline' },
    ],
    github: 'https://github.com/Anshukumar8529/campusfix-ai',
    palette: { from: '#031726', via: '#09476b', to: '#050c14', accent: '#38bdf8' },
    motif: 'tenants',
  },
  {
    id: 'real-estate-prediction',
    title: 'Real Estate Price Prediction & Recommendation',
    year: '2026',
    genre: 'Machine Learning • Geospatial Filtering • Microservices',
    logline: 'A production-grade machine learning application to estimate property valuations and recommend similar apartments across 100+ locations.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Docker', 'Render'],
    build: [
      'Developed an end-to-end ML application estimating valuations and market trends across 100+ locations to resolve property price opacity.',
      'Built Scikit-learn regression pipelines (Random Forest, Linear Regression) with extensive data preprocessing and feature engineering.',
      'Developed a content-based recommender using Cosine Similarity with geospatial radius filtering.',
      'Decoupled architecture serving ML inference via FastAPI REST microservices with Pydantic validation, Streamlit UI, Docker containerization, and Render deployment.',
    ],
    features: [
      'Property price estimation regression pipelines',
      'Content-based apartment recommender with geospatial radius filtering',
      'FastAPI REST endpoints with Pydantic type validation',
      'Interactive Streamlit frontend interface',
      'Containerized with Docker and deployed live on Render cloud',
    ],
    metrics: [
      { value: '100+', label: 'locations analyzed' },
      { value: 'FastAPI', label: 'REST microservices' },
      { value: 'Docker', label: 'containerized deployment' },
      { value: 'Render', label: 'cloud infrastructure' },
      { value: 'Cosine', label: 'similarity matrix' },
    ],
    github: 'https://github.com/Anshukumar8529/house-price-prediction-recommendations',
    live: 'https://real-estate-frontend-d8hn.onrender.com/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'diabetes-prediction',
    title: 'Predictive Analysis in Diabetes',
    year: '2025',
    genre: 'Machine Learning • Healthcare Analytics • Early Detection',
    logline: 'Classification model predicting diabetes risk from patient physiological health data to support early clinical intervention.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Logistic Regression'],
    build: [
      'Built a classification model to predict diabetes risk from patient health data, enabling early disease detection.',
      'Conducted data cleaning, exploratory data analysis (EDA), and statistical feature selection to eliminate noise and boost prediction accuracy.',
      'Evaluated performance across precision, recall, accuracy, and confusion matrix diagnostics.',
    ],
    features: [
      'Patient health indicator risk classification',
      'Statistical feature selection and EDA',
      'Confusion matrix and recall-driven clinical validation',
      'Python & Scikit-learn machine learning pipeline',
    ],
    metrics: [
      { value: 'ML', label: 'clinical risk classification' },
      { value: 'EDA', label: 'exploratory data analysis' },
      { value: 'Scikit', label: 'learn pipeline' },
      { value: 'Metrics', label: 'precision & recall validated' },
    ],
    github: 'https://github.com/Anshukumar8529/Predictive-Analysis-in-Diabetes',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'poshan-tracker',
    title: 'Poshan Tracker Analytics Dashboard',
    year: '2025',
    genre: 'Data Analytics • Power BI • Public Health',
    logline: 'Interactive Power BI dashboard monitoring nutrition and maternal-child health indicators across national public health data.',
    stack: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Data Visualization'],
    build: [
      'Built an interactive Power BI dashboard to monitor nutrition and maternal-child health indicators using Poshan Tracker data.',
      'Cleaned and modeled raw data using Power Query and authored custom DAX measures for dynamic KPIs, charts, and interactive filtering.',
      'Surfaced actionable visual insights on health trends and program performance for data-driven decisions.',
    ],
    features: [
      'Dynamic KPIs & multi-level interactive filters',
      'Custom DAX measures for complex health metrics',
      'Power Query automated data transformation pipeline',
      'Actionable visual insights for maternal-child nutrition',
    ],
    metrics: [
      { value: 'DAX', label: 'dynamic KPI modeling' },
      { value: 'Power BI', label: 'interactive dashboard' },
      { value: 'Power Query', label: 'ETL & data transformation' },
      { value: 'Trends', label: 'program performance surfaced' },
    ],
    github: 'https://github.com/Anshukumar8529/poshan-tracker-dashboard',
    palette: { from: '#021a12', via: '#066347', to: '#030d09', accent: '#34d399' },
    motif: 'flow',
  },
  {
    id: 'bank-management',
    title: 'Bank Management System',
    year: '2025',
    genre: 'Desktop Application • Core Banking • Java & MySQL',
    logline: 'Desktop banking application simulating ATM operations with real-time transactional integrity and secure authentication.',
    stack: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'OOP'],
    build: [
      'Designed a desktop banking application simulating core ATM functionalities: cash withdrawal, deposit, and balance inquiry with real-time data handling.',
      'Implemented a modular GUI using Java Swing, integrating MySQL and JDBC for backend connectivity, with secure user authentication workflows.',
      'Streamlined banking operations through a reliable interface, reducing transaction errors and improving overall usability.',
    ],
    features: [
      'ATM transaction simulation: withdrawal, deposit, balance check',
      'Java Swing modular graphical interface',
      'MySQL & JDBC relational persistence',
      'Secure user authentication and PIN verification',
    ],
    metrics: [
      { value: 'JDBC', label: 'database connectivity' },
      { value: 'MySQL', label: 'transaction storage' },
      { value: 'Swing', label: 'desktop GUI' },
      { value: 'ATM', label: 'simulated operations' },
    ],
    github: 'https://github.com/Anshukumar8529/Bank-managment-system',
    palette: { from: '#1b092a', via: '#581882', to: '#0b0412', accent: '#c084fc' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'binary-blitz',
    title: 'Top 8 Finalist',
    org: 'Binary Blitz Hackathon',
    detail: 'Built an end-to-end heart-disease prediction model showcasing solid machine learning and feature engineering expertise.',
    laurel: 'Hackathon Finalist',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle', name: 'Data Platform 2025 Certified Foundations Associate', link: 'https://drive.google.com/file/d/1geBEdPZWRmBxNLy32W0u23p8fOQgZD8Y/view?usp=drive_link' },
  { issuer: 'Google', name: 'The Bits and Bytes of Computer Networking', link: 'https://drive.google.com/file/d/1VFUzGhP_SJfBNCYqhrkiX9jG0oMFB1Ji/view?usp=drive_link' },
  { issuer: 'LPU', name: 'Java and MySQL: Application Development', link: 'https://drive.google.com/file/d/1812isf5Xmsjfdlv7DHma7k4zK4vqLvyy/view?usp=drive_link' },
  { issuer: 'Fynd', name: 'Hacktimus – Hackathon Participation Certificate', link: 'https://drive.google.com/file/d/11u_wgxrvceR3AJ07b1xBInOy9P0l4rCz/view?usp=drive_link' },
  { issuer: 'CSE Pathshala', name: 'Unrevealing Basic Python towards ML/AI', link: 'https://drive.google.com/drive/folders/1W_4gSvebZovRq8wVC551BNyoacHqgJbo' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python & Java are primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Predictive modeling & pipelines',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk', note: 'Pipelines' },
      { name: 'Random Forest', mono: 'Rf' },
      { name: 'Logistic Regression', mono: 'Lr' },
      { name: 'Linear Regression', mono: 'Ln' },
      { name: 'Decision Tree', mono: 'Dt' },
      { name: 'K-Means Clustering', mono: 'Km' },
      { name: 'PyTorch', mono: 'Pt' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    subtitle: 'Intelligent agents & reasoning',
    skills: [
      { name: 'Google Gemini', mono: 'Gm', note: 'Agents' },
      { name: 'LLM APIs', mono: 'Lm' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Hugging Face', mono: 'Hf' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Exploration & Business Intelligence',
    skills: [
      { name: 'Power BI', mono: 'Bi', note: 'Dashboards' },
      { name: 'DAX', mono: 'Dx' },
      { name: 'Power Query', mono: 'Pq' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Seaborn', mono: 'Sb' },
      { name: 'Excel', mono: 'Xl' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & Document persistence',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'SQLite', mono: 'Sl', note: 'ACID' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'JDBC', mono: 'Jd' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'Engineering & delivery',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'APIs' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Uvicorn', mono: 'Uv' },
      { name: 'Render', mono: 'Rn' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'IntelliJ IDEA', mono: 'Ij' },
      { name: 'Jupyter', mono: 'Jp' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Data Modeling', mono: 'Dm' },
    ],
  },
  {
    id: 'softskills',
    title: 'Soft Skills',
    subtitle: 'Professional collaboration',
    skills: [
      { name: 'Problem-Solving', mono: 'Ps' },
      { name: 'Team Collaboration', mono: 'Tc' },
      { name: 'Adaptability', mono: 'Ad' },
      { name: 'Time Management', mono: 'Tm' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in Anshu's projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['CampusFix AI', 'Real Estate Prediction', 'Diabetes Prediction', 'CSE Pathshala Certified'],
  Java: ['Bank Management System', 'LPU Application Development Training'],
  SQL: ['Oracle Data Platform Certified', 'Bank Management System (MySQL)'],
  HTML: ['CampusFix AI Frontend', 'Web Platform'],
  CSS: ['CampusFix AI UI', 'Tailwind / Styling'],
  'Scikit-learn': ['Real Estate Price Prediction', 'Diabetes Prediction', 'Binary Blitz Hackathon'],
  'Random Forest': ['Real Estate Price Prediction'],
  'Logistic Regression': ['Predictive Analysis in Diabetes'],
  'Linear Regression': ['Real Estate Price Prediction'],
  'Decision Tree': ['Machine Learning Curriculum'],
  'K-Means Clustering': ['Unsupervised ML Modeling'],
  PyTorch: ['Deep Learning Experiments'],
  'Google Gemini': ['CampusFix AI (LLM Agent Engine)'],
  'LLM APIs': ['CampusFix AI'],
  RAG: ['Context Retrieval Pipelines'],
  LangChain: ['Agent Workflows'],
  Embeddings: ['CampusFix AI / Vector Similarity'],
  'Hugging Face': ['Transformers'],
  'Power BI': ['Poshan Tracker Analytics Dashboard'],
  DAX: ['Poshan Tracker Dashboard (Dynamic KPIs)'],
  'Power Query': ['Poshan Tracker Dashboard (Data Modeling)'],
  Pandas: ['Real Estate Prediction', 'Diabetes Prediction', 'Data Preprocessing'],
  NumPy: ['Real Estate Prediction', 'Diabetes Prediction'],
  Matplotlib: ['Diabetes Analysis EDA'],
  Seaborn: ['Exploratory Data Analysis'],
  Excel: ['Data Analytics & Modeling'],
  MySQL: ['Bank Management System', 'LPU Training'],
  SQLite: ['CampusFix AI (Transactional Persistence)'],
  MongoDB: ['NoSQL Data Modeling'],
  JDBC: ['Bank Management System (ATM Simulation)'],
  FastAPI: ['CampusFix AI', 'Real Estate Price Prediction'],
  Streamlit: ['Real Estate Prediction Frontend'],
  Docker: ['Real Estate Prediction (Containerized)'],
  Git: ['GitHub Repositories & Version Control'],
  Uvicorn: ['CampusFix AI', 'Real Estate Prediction'],
  Render: ['Real Estate Prediction (Live Deployment)'],
  DSA: ['Core CS at LPU'],
  DBMS: ['LPU Training', 'Oracle Data Platform'],
  OOP: ['Java Bank Management System'],
  'Operating Systems': ['Core CS Curriculum'],
  'Computer Networks': ['Google Certified in Computer Networking'],
  'Feature Engineering': ['Real Estate Price Prediction', 'Binary Blitz Hackathon'],
  EDA: ['Predictive Analysis in Diabetes'],
  'Data Modeling': ['Poshan Tracker Dashboard', 'MySQL Bank System'],
  'Problem-Solving': ['Top 8 Finalist, Binary Blitz Hackathon'],
  'Team Collaboration': ['CampusFix AI', 'Academic Group Engineering Tasks'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2022',
    synopsis: 'Schooling and Intermediate years in Aurangabad, Bihar — building a strong analytical foundation in Science and Mathematics.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Matriculation',
        description: 'Completed 10th with Science at Vivekanand Vision Ideal Public School, Aurangabad (77%).',
        tags: ['Science', '10th', '77%'],
        runtime: '2019 – 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Intermediate Science',
        description: 'Completed 12th with Science at Bhagwan Shree Surya Narayan Inter College with an impressive 82%.',
        tags: ['Science', '12th', '82%'],
        runtime: '2020 – 2022',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2023 – Present',
    synopsis: 'Pursuing Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, Punjab.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science and Engineering at Lovely Professional University with a strong CGPA of 7.43.',
        tags: ['B.Tech', 'CSE', 'CGPA 7.43'],
        runtime: 'Aug 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Networking & Systems',
        description: 'Earned Google certification in "The Bits and Bytes of Computer Networking" and mastered OS & DBMS fundamentals.',
        tags: ['Google Certified', 'Networking', 'DBMS'],
        runtime: 'Sep 2024',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Hackathon Finalist',
        description: 'Secured Top 8 Finalist ranking in the Binary Blitz Hackathon by architecting a machine learning heart-disease prediction model.',
        tags: ['Top 8 Finalist', 'Binary Blitz', 'ML'],
        runtime: 'Mar 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Developer & Trainee',
    period: '2025',
    synopsis: 'Intensive application development training at Lovely Professional University and software engineering projects.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Java & MySQL Training',
        description: 'Completed hands-on application development covering Java, OOP, JDBC, database design, and JavaFX.',
        tags: ['Java', 'MySQL', 'JDBC', 'LPU Certified'],
        runtime: 'Jul 2025',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Core Banking Simulation',
        description: 'Engineered the Bank Management System with Java Swing GUI and MySQL persistence simulating ATM workflows.',
        tags: ['Java Swing', 'MySQL', 'ATM System'],
        runtime: 'Jun – Jul 2025',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Healthcare Analytics',
        description: 'Developed the Poshan Tracker Power BI dashboard and machine learning predictive analysis for diabetes risk detection.',
        tags: ['Power BI', 'DAX', 'Scikit-learn'],
        runtime: 'Jul – Nov 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building AI & ML Originals',
    period: '2026',
    synopsis: 'Developing autonomous AI agent systems, geospatial machine learning platforms, and earning Oracle certification.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Agent Architect',
        description: 'CampusFix AI — Autonomous campus incident reporting and triage using Google Gemini LLM, FastAPI, and React.',
        tags: ['Gemini LLM', 'FastAPI', 'React', 'SQLite'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'Production ML Pipelines',
        description: 'Real Estate Price Prediction & Recommendation System with FastAPI microservices, Cosine Similarity, Docker, and Render.',
        tags: ['Scikit-learn', 'FastAPI', 'Docker', 'Render'],
        runtime: 'Apr – Jul 2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Oracle Certified Associate',
        description: 'Earned the Oracle Data Platform 2025 Certified Foundations Associate credential.',
        tags: ['Oracle', 'Data Platform', 'Certified'],
        runtime: 'May 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Deepening expertise across autonomous AI multi-agent workflows, scalable distributed microservices, and predictive systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring Autonomous AI Agents, Predictive Modeling, and Distributed High-Throughput Architectures.',
        tags: ['AI Agents', 'Predictive Modeling', 'Distributed Systems'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The AI Agent', title: 'CampusFix AI', detail: 'Google Gemini • FastAPI • SQLite • React', palette: ocean },
  { label: 'The ML Original', title: 'Real Estate Valuation', detail: 'FastAPI • Scikit-learn • Docker • Render', palette: amber },
  { label: 'Hackathon High', title: 'Binary Blitz', detail: 'Top 8 Finalist • Heart Disease ML Model', palette: crimson },
  { label: 'Cloud Data Credential', title: 'Oracle Certified', detail: 'Data Platform 2025 Foundations Associate', palette: violet },
  { label: 'Networking Credential', title: 'Google Certified', detail: 'The Bits and Bytes of Computer Networking', palette: jade },
  { label: 'Academic Standing', title: 'LPU B.Tech CSE', detail: 'CGPA 7.43 • Lovely Professional University', palette: amber },
  { label: 'Enterprise Java', title: 'Bank Management', detail: 'Java Swing • MySQL • JDBC • ATM Workflows', palette: violet },
  { label: 'Healthcare ML', title: 'Diabetes Prediction', detail: 'Early Disease Detection • Scikit-learn', palette: crimson },
  { label: 'Analytics Showcase', title: 'Poshan Tracker', detail: 'Power BI • DAX • Maternal-Child Health KPIs', palette: jade },
  { label: 'Next Frontier', title: 'Autonomous Agents', detail: 'Multi-Agent LLM Orchestration & RAG', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Lovely Professional University, Punjab', 'August 2023 – Present'],
    chips: ['CGPA 7.43', 'B.Tech CSE'],
  },
  {
    kicker: 'Skills',
    title: 'Python & Java first.',
    lines: ['FastAPI, Scikit-learn, PyTorch · React, Vite', 'MySQL, SQLite, MongoDB · Docker, Render, Git'],
    chips: ['Python', 'Java', 'FastAPI', 'Google Gemini', 'Docker', 'MySQL'],
  },
  {
    kicker: 'Originals',
    title: 'Five Productions',
    lines: [
      'CampusFix AI — Autonomous incident triage with Google Gemini & FastAPI',
      'Real Estate Valuation — 100+ locations, Cosine Similarity, Docker & Render',
      'Diabetes Risk Classifier — Early clinical detection with Scikit-learn',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Top 8 Finalist — Binary Blitz Hackathon', 'Built high-precision heart-disease ML prediction system'],
  },
  {
    kicker: 'Certified',
    title: 'Industry Credentials',
    lines: ['Oracle Certified Data Platform 2025', 'Google Certified Computer Networking', 'LPU Certified Java & MySQL Application Developer'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Autonomous AI Agents · Predictive Modeling · Distributed Systems'],
  },
];

export type ProfileId = 'anshu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'anshu',
    name: 'Anshu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Trainee Background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights from Profile', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Achievement • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Dual Resume • View & Download', palette: violet },
};
