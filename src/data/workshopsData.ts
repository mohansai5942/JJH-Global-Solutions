export interface Workshop {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  bannerImage: string;
  category: string;
  topicsCovered: string[];
  toolsUsed: string[];
  whoCanAttend: string[];
  industryRelevance: string;
  colleges: string[];
  photos: {
    url: string;
    caption: string;
  }[];
  certification: {
    title: string;
    description: string;
    image: string;
  };
}

export const workshopsData: Workshop[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI',
    tagline: 'Leveraging LLMs, Prompt Engineering, and RAG Architectures',
    shortDescription: 'Hands-on bootcamp on prompt engineering, Gemini API integrations, retrieval-augmented generation (RAG), and deploying smart agents.',
    bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    category: 'Advanced Tech Workshops',
    topicsCovered: [
      'Foundations of Large Language Models (LLMs)',
      'Advanced Prompt Engineering Tactics & Few-shot Learning',
      'Integration of Gemini & OpenAI APIs in Application Backends',
      'Building Vector Databases & Retrieval-Augmented Generation (RAG)',
      'Constructing Conversational Agents with LangChain & LangGraph',
      'Responsible AI, Security Guardrails, and Context Handling'
    ],
    toolsUsed: ['Gemini API', 'LangChain', 'Pinecone Vector DB', 'Python', 'Hugging Face', 'Ollama'],
    whoCanAttend: [
      'B.Tech / MCA students looking to specialize in modern AI applications',
      'Software Developers seeking to integrate cognitive capabilities into software',
      'Computer Science faculty members wanting to align coursework with AI developments',
      'Tech aspirants looking to build custom GenAI chatbots and agents'
    ],
    industryRelevance: 'Generative AI has shifted from a novelty to a critical enterprise capability. Companies are actively seeking developers who know how to integrate model APIs, build prompt chains, configure Vector databases, and circumvent LLM hallucinations via RAG. This workshop directly addresses this gap.',
    colleges: [
      'Andhra University',
      'GITAM University',
      'Gayatri Vidya Parishad College of Engineering',
      'ANITS'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Interactive session exploring vector embeddings' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', caption: 'Live prompt engineering demonstration by industry speaker' },
      { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Students building and testing their first AI Agent' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Certificate distribution ceremony at the hosting college campus' }
    ],
    certification: {
      title: 'Certified Generative AI Practitioner',
      description: 'Awarded to students who successfully code and deploy an end-to-end RAG-enabled chatbot utilizing Vector DBs and API gateways during the practical lab sessions.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'full-stack-java',
    title: 'Full Stack Java',
    tagline: 'Building Enterprise Microservices with Spring Boot & React',
    shortDescription: 'Master enterprise-level development using Java Core, Spring Boot REST APIs, Hibernate, and fully interactive React frontends.',
    bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    category: 'Enterprise Software Engineering',
    topicsCovered: [
      'Core Java Principles & Object-Oriented Architecture',
      'Relational Database Design with PostgreSQL & Spring Data JPA',
      'Building Modular REST APIs with Spring Boot Controllers',
      'Securing Services using Spring Security & JWT Tokenization',
      'Creating High-Performance UI Layouts with React & Tailwind CSS',
      'Connecting Frontend components to Cloud Microservices via Axios'
    ],
    toolsUsed: ['IntelliJ IDEA', 'Maven', 'Spring Boot', 'PostgreSQL', 'React', 'Git & GitHub', 'Docker'],
    whoCanAttend: [
      'MCA & B.Tech aspirants targeting placements in prime MNCs and software houses',
      'Junior developers looking to pivot from pure frontend/backend to full-stack positions',
      'Engineering students desiring rigorous practical database and coding projects'
    ],
    industryRelevance: 'Java remains the preferred technology stack for banking, finance, healthcare, and enterprise enterprise resource planning (ERP) systems worldwide. Understanding how Spring Boot coordinates backends with modern SPA frameworks like React is highly sought-after in placement drives.',
    colleges: [
      'Gayatri Vidya Parishad College of Engineering',
      'Vignan’s Institute of Information Technology',
      'Raghu Engineering College',
      'ANITS'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', caption: 'Walkthrough of React-to-Spring REST connections' },
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', caption: 'Students optimizing JPA relational query pipelines' },
      { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', caption: 'Hands-on debugging and live hosting on cloud networks' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Top-performing coders recognized during the hackathon phase' }
    ],
    certification: {
      title: 'Enterprise Java Full-Stack Specialist',
      description: 'Granted upon completing a full-scale microservice-driven billing or management app with operational state, secure endpoints, and responsive user boards.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'n8n-automation',
    title: 'N8N Automation',
    tagline: 'No-Code / Low-Code Workflow Orchestration & API Plugs',
    shortDescription: 'Accelerate digital business processes. Learn to hook up Webhooks, databases, CRMs, and email triggers visually using n8n.',
    bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    category: 'Process Automation & DevOps',
    topicsCovered: [
      'Introduction to Node-based Workflow Automation Systems',
      'Setting up Webhooks, Triggers, and Listeners in n8n',
      'Connecting Google Sheets, Telegram, Slack, and Email systems',
      'Parsing JSON payloads & applying code transforms using JavaScript nodes',
      'Integrating LLM sub-nodes inside automation nodes for smart parsing',
      'Configuring error-handling mechanisms and automatic retries'
    ],
    toolsUsed: ['n8n Self-Hosted', 'JSON API', 'Webhooks', 'OAuth Integrations', 'AI Sub-Nodes', 'JavaScript'],
    whoCanAttend: [
      'Business Administration students aiming to gain modern digital operation skills',
      'Web Developers looking to offload backend notification pipelines to visual boards',
      'Systems administrators seeking to automate data pipelines without heavy scripts',
      'Startup founders aiming to build quick, robust MVPs with automated triggers'
    ],
    industryRelevance: 'Modern corporate environments are replacing fragile, hand-coded script triggers with robust, self-hosted workflow engines like n8n. This skill allows teams to design automated marketing channels, customer databases, and tech operations 10x faster.',
    colleges: [
      'GITAM University',
      'Andhra University',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80', caption: 'Setting up webhook listeners for automated form submissions' },
      { url: 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80', caption: 'Analyzing automation telemetry logs in real-time labs' },
      { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80', caption: 'Pair-programming visual automation branches and error routes' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Students posing with completion credentials after the workflow sprint' }
    ],
    certification: {
      title: 'Accredited n8n Workflow Architect',
      description: 'Requires modeling, deploying, and demonstrating a multi-branch automated system that pulls data from web APIs, formats it, and updates slack boards.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Responsive UI Architecture & Dynamic Client-Side Systems',
    shortDescription: 'Master the core stack of modern frontend web engineering: HTML5, CSS3, ES6 JavaScript, Tailwind CSS, and component state.',
    bannerImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    category: 'Core Computer Science',
    topicsCovered: [
      'Semantic HTML5 Structures and Accessible Layout Design',
      'CSS Grid, Flexbox, and Advanced Media Query systems',
      'Modern Tailwind CSS integration, design systems, and responsive patterns',
      'Asynchronous Javascript (ES6), Fetch API, and Promise handling',
      'DOM manipulation, event architectures, and form state control',
      'Publishing and hosting web applications on Netlify, Vercel, and GitHub'
    ],
    toolsUsed: ['VS Code', 'Tailwind CSS', 'Git & GitHub', 'Chrome DevTools', 'ES6 JS', 'Vercel / Netlify'],
    whoCanAttend: [
      'Beginner students from B.Tech, MCA, and B.Sc streams looking for solid coding fundamentals',
      'Non-CS aspirants seeking a structured, mentor-guided introduction to programming',
      'Aspiring web designers who want to bridge the gap between static wireframes and live code'
    ],
    industryRelevance: 'Every software app, SaaS product, and digital agency requires polished responsive frontends. Learning the core mechanics of HTML, CSS, and modern utility frameworks like Tailwind is the irreplaceable foundation for any software career path.',
    colleges: [
      'Andhra University',
      'Vignan’s Institute of Information Technology',
      'ANITS',
      'Gayatri Vidya Parishad College of Engineering',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'CSS Layout hackathon: replicating responsive enterprise landings' },
      { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Learning how to structure accessible DOM elements' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', caption: 'Reviewing CSS architecture and layout spacing on widescreen screens' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Proud participants showcasing live published portfolio URLs' }
    ],
    certification: {
      title: 'Certified Frontend Web Developer',
      description: 'Conferred upon submitting a fully responsive, semantic portfolio website hosted live on cloud servers, showcasing pixel-perfect layouts.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    tagline: 'Predictive Modeling, Clustering, and Statistical Analysis',
    shortDescription: 'Deep dive into data processing, regression, supervised & unsupervised models, and model deployment.',
    bannerImage: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80',
    category: 'Advanced Tech Workshops',
    topicsCovered: [
      'Mathematical Foundations: Linear Algebra & Probability in ML',
      'Data Cleansing, Outlier Treatment, and Feature Scaling via Pandas',
      'Supervised Learning: Multiple Linear Regression, SVMs, and Decision Trees',
      'Unsupervised Learning: K-Means Clustering and PCA Dimensionality Reduction',
      'Model Evaluation: ROC-AUC, Precision-Recall, and Cross-Validation',
      'Introduction to deploying models as lightweight micro-services'
    ],
    toolsUsed: ['Python', 'Jupyter Notebooks', 'Scikit-Learn', 'NumPy & Pandas', 'Matplotlib & Seaborn', 'Flask API'],
    whoCanAttend: [
      'Third and final-year B.Tech / MCA students seeking specialized project materials',
      'Data Analysts wanting to move beyond SQL queries to statistical predictions',
      'Research scholars wanting to apply mathematical models to empirical datasets'
    ],
    industryRelevance: 'Machine learning algorithms drive modern recommendation engines, financial risk indicators, healthcare diagnostics, and pricing systems. Companies across e-commerce, banking, and consulting rely heavily on candidates with robust ML credentials.',
    colleges: [
      'GITAM University',
      'Andhra University',
      'Gayatri Vidya Parishad College of Engineering',
      'ANITS',
      'Vignan’s Institute of Information Technology'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', caption: 'Step-by-step review of bias-variance tradeoffs' },
      { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', caption: 'Students plotting clustering graphs in Jupyter environments' },
      { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', caption: 'Practical lab session focused on feature tuning and training' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Certification presentation for top data prediction models' }
    ],
    certification: {
      title: 'Certified Machine Learning Analyst',
      description: 'Conferred upon programming, training, and validating an end-to-end predictive model script and hosting its scoring endpoints as an API.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'ai-powered-web-application',
    title: 'AI Powered Web Application',
    tagline: 'Integrating Cognitive Models inside Modern React SaaS Platforms',
    shortDescription: 'Build next-gen SaaS. Create a complete, responsive React web app connected to server-side Gemini intelligence.',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    category: 'Advanced Tech Workshops',
    topicsCovered: [
      'SaaS System Architecture with AI core processors',
      'Designing client state pipelines to handle async stream outputs',
      'Configuring server-side API proxy routers to protect secret keys',
      'Executing multi-turn chat sessions and function-calling endpoints',
      'Styling streaming outputs cleanly with Markdown and custom loaders',
      'Structuring responsive web workspaces with dashboard metrics'
    ],
    toolsUsed: ['React', 'Node.js Express', 'Gemini SDK', 'Tailwind CSS', 'Vite', 'Postman'],
    whoCanAttend: [
      'B.Tech / MCA students wanting to build highly impressive final-year capstone projects',
      'Full-Stack Engineers looking to build and monetize AI-powered web applications',
      'Product managers seeking to understand the architectural layout of modern AI platforms'
    ],
    industryRelevance: 'The biggest wave in software is building cognitive wrappers and copilots inside responsive web dashboards. Learning how to cleanly coordinate frontend components with AI APIs through proxy servers is a premium, high-paying engineering skill.',
    colleges: [
      'Andhra University',
      'Gayatri Vidya Parishad College of Engineering',
      'ANITS',
      'Vignan’s Institute of Information Technology'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Debugging streaming token responses from server-side proxies' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', caption: 'Designing loading animations and typewriter-effect elements' },
      { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Group prototyping sessions of student-led AI startups' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Live app demonstration to university faculty and industry experts' }
    ],
    certification: {
      title: 'AI SaaS Developer Specialist',
      description: ' Conferred upon building and showcasing a fully functional React SaaS application linked server-side to active Gemini APIs.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'full-stack-python',
    title: 'Full Stack Python',
    tagline: 'Modern Web Pipelines with Django, REST, and React UI',
    shortDescription: 'Build high-performance, secure web backends using Django and Django REST Framework, paired with React frontends.',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    category: 'Enterprise Software Engineering',
    topicsCovered: [
      'Python advanced core (Generators, Decorators, context managers)',
      'Django MVC Framework, ORM systems, and migration control',
      'Designing robust endpoints using Django REST Framework (DRF)',
      'User security auditing via OAuth2 & simple JWT plugs',
      'React component states and state synchronization with DRF',
      'Database integration using SQLite, PostgreSQL, and Redis caching'
    ],
    toolsUsed: ['PyCharm / VS Code', 'Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Pipenv', 'Git'],
    whoCanAttend: [
      'Engineering and computer science students aiming to learn a modern backend stack',
      'Developers wishing to expand Python knowledge from analytics to web platforms',
      'College students seeking structures to build rapid and scalable enterprise APIs'
    ],
    industryRelevance: 'Django is renowned for its "batteries-included" philosophy, enabling rapid development of secure and robust database portals. Pairing it with React is a major architectural standard for tech-heavy SaaS setups and administrative enterprise platforms.',
    colleges: [
      'Vignan’s Institute of Information Technology',
      'ANITS',
      'Raghu Engineering College',
      'GITAM University'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', caption: 'Setting up model relations and migrations in Django ORM' },
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', caption: 'Integrating asynchronous tasks and cache pools' },
      { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', caption: 'Pair-programming react contexts to absorb backend JSON payloads' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Certificate award session marking the end of Python codecamp' }
    ],
    certification: {
      title: 'Full-Stack Python & Django Developer',
      description: 'Conferred upon coding and demonstrating a complete backend-to-frontend system with relational integrity, user login, and tabular dashboard boards.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    tagline: 'Professional Grooming, Communication & Campus Placement Prep',
    shortDescription: 'Excel in campus recruitment. Intensive workshops on Resume crafting, Group Discussions, and Mock Interviews.',
    bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    category: 'Corporate Readiness & Careers',
    topicsCovered: [
      'Constructing professional, ATS-friendly Resumes and LinkedIn profiles',
      'Mastering Verbal and Non-Verbal communication and corporate etiquette',
      'Group Discussion (GD) simulations, turn-taking, and confidence building',
      'Acing Technical & HR Interview rounds: STAR technique answers',
      'Critical thinking, leadership communication, and crisis handling',
      'Aptitude test strategies and logical reasoning foundations'
    ],
    toolsUsed: ['LinkedIn Profiles', 'Resume ATS Checkers', 'GD Evaluation Metrics', 'Mock Simulation Cards', 'STAR Methodology'],
    whoCanAttend: [
      'Final-year students of B.Tech, MBA, MCA, B.Sc, B.Com, and other streams preparing for campus placement drives',
      'Pre-final-year students wishing to establish initial resume frameworks',
      'Graduates entering the professional job market seeking confidence grooming'
    ],
    industryRelevance: 'While technical skills land you the interview, soft skills secure the job offer. Sourcing partners consistently highlight that candidate rejection in final rounds is caused by a gap in clear communication, active listening, structured explanations, and confidence.',
    colleges: [
      'Andhra University',
      'GITAM University',
      'Gayatri Vidya Parishad College of Engineering',
      'Vignan’s Institute of Information Technology',
      'ANITS',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80', caption: 'Live Group Discussion simulations with professional feedback' },
      { url: 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80', caption: 'Resume correction workshop and ATS grading sessions' },
      { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80', caption: 'Individual mockup interviews with video playback analysis' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Smiling students showing off completed placement profiles' }
    ],
    certification: {
      title: 'Certified Campus-Ready Professional',
      description: 'Granted upon completing individual resume reviews, clearing group simulation criteria, and passing a mock panel interview.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'revit',
    title: 'Revit',
    tagline: 'Building Information Modeling (BIM) & Architectural Modeling',
    shortDescription: 'Industrial workshop on Revit Architecture. Learn parametric building design, structural rendering, and documentation.',
    bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    category: 'Industrial Design & Architecture',
    topicsCovered: [
      'BIM Foundations and the Revit Interface Layout',
      'Developing Parametric building elements (Walls, slabs, roofs, stairs)',
      'Managing levels, building grids, and structural components',
      'Rendering materials, lights, and conceptual model assets',
      'Generating section cuts, elevations, and detailed annotations',
      'Working with Schedules, quantities, and construction sheet prints'
    ],
    toolsUsed: ['Autodesk Revit', 'BIM Objects', 'Parametric libraries', 'Rendering Engines', 'Enscape plugs'],
    whoCanAttend: [
      'Civil Engineering students aiming to join modern design and BIM agencies',
      'B.Arch / Architectural students looking to master CAD to BIM translations',
      'Working professionals seeking to upgrade drafting skills to parametric model systems'
    ],
    industryRelevance: 'Architectural and civil industries have completely migrated from pure 2D CAD drafting to multi-dimensional Building Information Modeling (BIM). Proficiency in Autodesk Revit is a mandatory criterion for placement at global structural consultancies.',
    colleges: [
      'Andhra University',
      'GITAM University',
      'Gayatri Vidya Parishad College of Engineering',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Designing multi-floor commercial structures visually' },
      { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Reviewing structural schedules and building material lists' },
      { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', caption: 'Configuring sun studies and material rendering models' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Faculty presentation showing structural layouts and printed sheets' }
    ],
    certification: {
      title: 'Certified BIM Parametric Modeler',
      description: 'Granted upon designing, scheduling, and rendering a complete commercial structure complying with corporate BIM standards.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'git-and-github',
    title: 'GIT and GITHUB',
    tagline: 'Version Control, Collaboration, and Modern DevOps Pipelines',
    shortDescription: 'Learn Git fundamentals, branch management, merge conflict resolution, pull requests, and automating deployments with GitHub Actions.',
    bannerImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
    category: 'Core Developer Utilities',
    topicsCovered: [
      'Introduction to Version Control & Local Git Repositories',
      'Tracking files, committing changes, and inspecting Git logs',
      'Branching strategies, merging workflows, and resolving merge conflicts',
      'GitHub collaboration: cloning, pushing, pulling, and pull requests',
      'Advanced commands: rebasing, stashing, cherry-picking, and reflog',
      'Automation introduction with GitHub Actions & CI/CD workflows'
    ],
    toolsUsed: ['Git', 'GitHub', 'Git Bash', 'VS Code', 'GitHub Desktop', 'Markdown'],
    whoCanAttend: [
      'B.Tech, BCA, MCA students aiming to join engineering teams',
      'Open-source enthusiasts wanting to contribute to global projects',
      'Developers seeking to master standard collaborative dev workflows'
    ],
    industryRelevance: 'Git is the absolute industry standard for version control and group collaboration. Every tech organization, from startups to Fortune 500 companies, requires its engineering staff to be proficient with branches, merges, and code-review pull requests.',
    colleges: [
      'Andhra University',
      'GITAM University',
      'Gayatri Vidya Parishad College of Engineering',
      'ANITS',
      'Vignan’s Institute of Information Technology',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', caption: 'Interactive terminal walk-throughs of merge conflicts' },
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', caption: 'Students reviewing code branches during a practical peer-review run' },
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Configuring custom CI/CD pipelines in a live demonstration' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Students proud of publishing their first open-source repository' }
    ],
    certification: {
      title: 'Certified Git & GitHub Specialist',
      description: 'Awarded after successfully managing a collaborative group repo, resolving mock conflicts, and writing functional GitHub Action automation workflows.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    tagline: 'Professional CMS Development, Theme Customization & E-Commerce',
    shortDescription: 'Design, configure, secure, and deploy responsive blogs, corporate portfolios, and full e-commerce storefronts using WordPress.',
    bannerImage: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
    category: 'Content Management & E-Commerce',
    topicsCovered: [
      'WordPress Core setup: Hosting, Databases, and Installation',
      'Configuring dashboards, users, general settings, and permalinks',
      'Theme curation: choosing, activating, and child-theme overrides',
      'Page builders: Gutenberg block editor and Elementor layouts',
      'E-Commerce deployment: setting up WooCommerce catalogs and cart routes',
      'WordPress security hardening, SEO integration, and cloud deployment'
    ],
    toolsUsed: ['WordPress Core', 'WooCommerce', 'Elementor', 'Local WP', 'cPanel', 'SEO Plugins'],
    whoCanAttend: [
      'Aspiring web designers, freelancers, and digital marketers',
      'Entrepreneurs looking to build self-managed business shops',
      'Students wanting to learn how to deploy and scale production ready CMS'
    ],
    industryRelevance: 'WordPress powers over 40% of all websites on the internet. Knowing how to quickly spin up, secure, customize, and maintain WordPress websites is a highly lucrative skill for agencies, freelance development, and commercial operations.',
    colleges: [
      'Andhra University',
      'GITAM University',
      'Gayatri Vidya Parishad College of Engineering',
      'Vignan’s Institute of Information Technology',
      'Raghu Engineering College'
    ],
    photos: [
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', caption: 'Live installation of custom web elements on WordPress' },
      { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80', caption: 'Configuring WooCommerce checkout pages and billing systems' },
      { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', caption: 'Hardening security blocklists and checking PageSpeed metrics' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Web design certificate recipients celebrating their live launches' }
    ],
    certification: {
      title: 'Certified WordPress Developer',
      description: 'Conferred upon designing, configuring, securing, and deploying a functional responsive WooCommerce shop live on the cloud.',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&w=800&q=80'
    }
  }
];
