export interface CourseModules {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
}

export interface SkillDetail {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  aboutCourse: string;
  iconName: string;
  duration: string;
  mode: string;
  tools: string[];
  whoCanJoin: string[];
  trainingFeatures: string[];
  modules: CourseModules;
}

export const skillsData: SkillDetail[] = [
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    tagline: 'Engineer Intelligent Systems & Deep Learning Architectures',
    shortDescription: 'Master neural networks, predictive models, NLP, and modern Generative AI algorithms.',
    aboutCourse: 'This comprehensive program takes you from the absolute basics of mathematics and Python programming to advanced deep learning frameworks and large language model application development. Designed by active AI researchers, this course focuses heavily on writing mathematical foundations in code and fine-tuning neural nets on real-world industrial datasets.',
    iconName: 'Cpu',
    duration: '12 Weeks',
    mode: 'Online & Classroom (Hybrid Available)',
    tools: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'NumPy & Pandas', 'OpenCV', 'Hugging Face'],
    whoCanJoin: [
      'B.Tech/MCA/B.Sc Computer Science students looking to enter AI careers',
      'Software engineers transitioning into ML engineering roles',
      'Data analysts looking to upgrade to advanced predictive modeling',
      'Hobbyists and researchers aiming to build Generative AI applications'
    ],
    trainingFeatures: [
      '24/7 dedicated GPU lab access for training heavy deep learning models',
      'One-on-one reviews with experienced ML scientists and research mentors',
      'Real-world project portfolio building: Chatbots, Vision systems, and Forecasting engines',
      'Access to exclusive AI networking events and placements at tech startups'
    ],
    modules: {
      beginner: [
        'Introduction to AI, ML, and Python Fundamentals',
        'Mathematical foundations: Linear Algebra, Calculus, and Probability',
        'Data preprocessing & scientific computing with NumPy and Pandas',
        'Data visualization techniques using Matplotlib and Seaborn'
      ],
      intermediate: [
        'Supervised learning: Regression, Decision Trees, SVM, and KNN',
        'Unsupervised learning: K-Means, Hierarchical Clustering, and PCA',
        'Model evaluation metrics, bias-variance tradeoffs, and cross-validation',
        'Introduction to Scikit-Learn libraries and automated pipelines'
      ],
      advanced: [
        'Deep Learning Foundations & Multi-Layer Perceptrons',
        'Convolutional Neural Networks (CNN) for Computer Vision tasks',
        'Recurrent Neural Networks (RNN) and Transformers for NLP',
        'Generative AI, LLM fine-tuning, and Retrieval-Augmented Generation (RAG)'
      ]
    }
  },
  {
    id: 'fullstack-java',
    name: 'Full-stack Java Development',
    tagline: 'Architect Highly Scalable Enterprise Backend & Frontend Systems',
    shortDescription: 'Master Spring Boot, React, Microservices, Hibernate ORM, and cloud database integrations.',
    aboutCourse: 'Java is the backbone of major enterprise architectures worldwide. This industry-standard training program grooms you to become an elite Full-Stack Java developer. You will build highly responsive react frontends and hook them into hyper-scalable Spring Boot backends, utilizing microservice architectures and AWS pipelines.',
    iconName: 'Layers',
    duration: '16 Weeks',
    mode: 'Classroom & Online (Intensive Bootcamps)',
    tools: ['IntelliJ IDEA', 'Maven', 'Spring Boot', 'Hibernate ORM', 'React', 'MySQL', 'Docker', 'AWS'],
    whoCanJoin: [
      'Aspiring programmers looking to build bulletproof career foundations',
      'MCA/B.Tech students aiming for placements at top MNC tech consultancies',
      'Backend developers looking to expand their skill set into full-stack architectures',
      'Technical leads aiming to build multi-tenant SaaS architectures'
    ],
    trainingFeatures: [
      '100% hands-on microservices project implementation mimicking banking systems',
      'Voucher codes and mock tests for Oracle Java & AWS Cloud certifications',
      'Code reviews conforming to industry-best design patterns and security criteria',
      'Direct interview schedules with top-tier product and consulting companies'
    ],
    modules: {
      beginner: [
        'Java core programming syntax, operators, and control loops',
        'Object-Oriented Programming (OOP) paradigms (Polymorphism, Inheritance)',
        'Exception handling, Multithreading, and Memory architecture',
        'Java Collections Framework and functional streams'
      ],
      intermediate: [
        'Database design, SQL querying, and JDBC connections',
        'Hibernate ORM and JPA (Java Persistence API) fundamentals',
        'Spring Core Framework: Dependency Injection & IOC container',
        'Building REST APIs using Spring Boot and postman validation'
      ],
      advanced: [
        'React frontend integration, hooks, routing, and state management',
        'Securing endpoints using Spring Security and JWT authentication',
        'Enterprise Microservices design, Eureka Discovery, and API Gateways',
        'Docker containerization and deployment onto AWS Elastic Beanstalk'
      ]
    }
  },
  {
    id: 'fullstack-python',
    name: 'Full-stack Python',
    tagline: 'Modern Web Engineering with Django, Flask, and React',
    shortDescription: 'Build high-performance web applications using Django, FastAPI, React, and PostgreSQL.',
    aboutCourse: 'Leverage the speed and power of Python. This program covers building reliable, highly efficient API endpoints using Django and FastAPI, and combining them with rich React interfaces. You will learn deployment best-practices and cloud-scale database operations.',
    iconName: 'Code',
    duration: '14 Weeks',
    mode: 'Online & Classroom (Flexible Scheduling)',
    tools: ['PyCharm', 'VS Code', 'Django', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    whoCanJoin: [
      'Students looking for a fast-track route to modern web development careers',
      'Data enthusiasts who want to bridge their scripts with full-fledged web dashboards',
      'Frontend developers wanting to master rapid backend API development in Python',
      'Freelancers aiming to build custom web applications fast'
    ],
    trainingFeatures: [
      'Implement real-time features using WebSockets and Django Channels',
      'Industry-standard Git/GitHub workflows with CI/CD action pipeline setup',
      'Interactive project building: E-commerce storefront, collaboration tools',
      'Resume mentoring and portfolio presentation sessions'
    ],
    modules: {
      beginner: [
        'Python syntax, standard libraries, and control structures',
        'OOP concepts in Python & advanced data structures (Lists, Dicts, Sets)',
        'File Handling, Package Management (pip), and Virtual Environments',
        'Database fundamentals with SQLite & database modeling'
      ],
      intermediate: [
        'Introduction to Flask for micro-web APIs and routing',
        'Django Web Framework structure, Views, Models, and Templates',
        'Django ORM, Migrations, and SQL databases (PostgreSQL)',
        'Building RESTful endpoints using Django REST Framework (DRF)'
      ],
      advanced: [
        'Building ultra-fast asynchronous endpoints with FastAPI',
        'React frontend integration, context API, and asynchronous fetching',
        'Token-based authentication (JWT) and secure cookie storage',
        'Containerization with Docker and deployment to Cloud run instances'
      ]
    }
  },
  {
    id: 'fullstack-webdev',
    name: 'Full-stack Web Development',
    tagline: 'Master the Modern MERN Stack (MongoDB, Express, React, Node)',
    shortDescription: 'Build modern responsive websites and rich applications using the ultimate MERN stack.',
    aboutCourse: 'MERN is the most demanded stack in the modern startup ecosystem. This course takes you on a high-octane journey from writing raw HTML/CSS/JavaScript to building fully interactive SaaS web apps featuring live databases, auth systems, and cloud deployments.',
    iconName: 'Globe',
    duration: '12 Weeks',
    mode: 'Online & Classroom (Intensive Hackathons included)',
    tools: ['VS Code', 'Tailwind CSS', 'React', 'Node.js', 'Express', 'MongoDB', 'Git & GitHub', 'Vercel'],
    whoCanJoin: [
      'Complete beginners wanting to break into tech careers with zero code experience',
      'Graphic Designers wishing to expand their portfolio into functional web applications',
      'College students aiming to build impressive high-impact major capstone projects',
      'Entrepreneurs wanting to rapid-prototype their startup ideas independently'
    ],
    trainingFeatures: [
      'Interactive, zero-to-hero curriculum focusing on modular clean coding styles',
      'Weekly weekend hackathons to build collaborative apps with cohort members',
      'Real-world cloud persistence integration with MongoDB Atlas and Serverless APIs',
      'Comprehensive CSS styling training using advanced Tailwind frameworks'
    ],
    modules: {
      beginner: [
        'Web Architecture basics, HTML5 semantic structure & responsive page design',
        'CSS3 layouts, Flexbox, Grid systems, and advanced Tailwind CSS styling',
        'JavaScript basics, variables, functions, DOM manipulation, and event handling',
        'Modern ES6+ JS features (Promises, async/await, destructors, modules)'
      ],
      intermediate: [
        'React framework fundamentals, Virtual DOM, components, and props',
        'React state management (useState, useEffect, custom hooks, context)',
        'Responsive navigation design, modal structures, and animation using Framer/Motion',
        'Integrating third-party design systems and API consumption'
      ],
      advanced: [
        'Backend server setup with Node.js and Express Routing systems',
        'NoSQL database management using MongoDB & Mongoose validation schemas',
        'Securing applications: bcrypt password hashing, JWT, cookies',
        'Deploying React client on Vercel and Node server on Render/Cloud Engine'
      ]
    }
  },
  {
    id: 'vlsi',
    name: 'VLSI (Very Large Scale Integration)',
    tagline: 'Semiconductor Design & FPGA Prototyping Systems',
    shortDescription: 'Launch your career in microchip design, digital circuits, Verilog HDL, and UVM.',
    aboutCourse: 'The semiconductor sector is expanding exponentially. This highly technical training curriculum prepares you for core chip-design engineering roles. You will write robust hardware description models, perform verification simulations, and learn clocking architectures using industry-best EDA tools.',
    iconName: 'Cpu',
    duration: '16 Weeks',
    mode: 'Classroom & Online (Practical EDA Lab Work)',
    tools: ['ModelSim', 'Xilinx Vivado', 'Cadence Tools', 'Synopsys Design Compiler', 'Verilog', 'SystemVerilog'],
    whoCanJoin: [
      'ECE / EEE students wanting to work in core hardware design fields',
      'Embedded programmers wishing to transition into chip design and synthesis',
      'Academic researchers focused on microprocessor and FPGA prototypes',
      'Working professionals seeking to upgrade their verification skills'
    ],
    trainingFeatures: [
      'Access to virtual server labs hosting premium Synopsys & Cadence design environments',
      'Live FPGA development board programming sessions at our hardware centers',
      'Curriculum aligned with international semiconductor design practices',
      'Placement support across global semiconductor companies and top VLSI design centers'
    ],
    modules: {
      beginner: [
        'Boolean Algebra, Combinational logic gates, and Sequential networks',
        'FSM (Finite State Machine) structures and timing diagram drafting',
        'Fundamentals of semiconductor physics and CMOS inverter designs',
        'Introduction to hardware modeling concepts and simulation scopes'
      ],
      intermediate: [
        'Verilog HDL modeling styles (Dataflow, Behavioral, Structural)',
        'Writing modular testbenches for comprehensive unit verification',
        'Handling multi-phase clocks, setup/hold times, and metastability issues',
        'Synthesis and logic optimization using modern EDA compilers'
      ],
      advanced: [
        'SystemVerilog programming paradigms for advanced validation structures',
        'UVM (Universal Verification Methodology) foundations and class libraries',
        'FPGA mapping workflows: RTL, floorplanning, routing, and hardware programming',
        'Static Timing Analysis (STA) and physical layout specifications'
      ]
    }
  },
  {
    id: 'embedded-systems',
    name: 'Embedded Systems & IoT',
    tagline: 'Bridge Software and Hardware to Engineer Next-Gen Smart Devices',
    shortDescription: 'Master embedded C, microcontroller interfacing, RTOS, and wireless protocols.',
    aboutCourse: 'Join the IoT revolution. This course bridges the software-hardware gap, training you to program physical silicon. You will design firmware using Embedded C, interface sensors and actuators with ARM processors, and build real-time multi-tasking systems using FreeRTOS.',
    iconName: 'Cpu',
    duration: '12 Weeks',
    mode: 'Classroom & Online (Physical IoT Kit Supplied)',
    tools: ['Keil uVision', 'STM32CubeIDE', 'Arduino IDE', 'Proteus', 'STM32 Microcontrollers', 'ESP32'],
    whoCanJoin: [
      'ECE, EEE, and CSE students passionate about hardware-level programming',
      'Robotics enthusiasts and product designers wanting to prototype smart systems',
      'Software engineers looking to master low-level device drivers and hardware firmware',
      'Automation professionals looking to upskill in internet-connected IoT hubs'
    ],
    trainingFeatures: [
      'Complementary hardware kit containing microcontrollers, 15+ sensors, and shields shipped directly to you',
      'Hands-on experience building wireless communication devices over Bluetooth, Wi-Fi, and LoRa',
      'Detailed training on writing clean device drivers with direct memory register operations',
      'Direct mock interviews and reference placement routes into automotive and smart device giants'
    ],
    modules: {
      beginner: [
        'Embedded C syntax, bitwise operations, memory pointers, and register mapping',
        'Microcontroller fundamentals (8051 and PIC structures)',
        'GPIO (General Purpose Input Output) programming and LED/Keypad interfacing',
        'Configuring internal hardware timers, counters, and basic interrupts'
      ],
      intermediate: [
        'ARM Cortex-M processor architecture and memory register details',
        'Interfacing ADCs, DACs, and LCD character panels',
        'Mastering communication protocols: UART, SPI, and I2C serial lanes',
        'Interfacing temperature, humidity, ultrasonic sensors, and stepper motors'
      ],
      advanced: [
        'FreeRTOS concepts: Task creation, priority scheduling, semaphores, and queues',
        'Wireless IoT networks: Wi-Fi ESP32, MQTT protocols, cloud data logging',
        'Developing low-level device drivers for industrial physical boards',
        'Debugging physical systems using logic analyzers, digital multimeters, and oscilloscopes'
      ]
    }
  },
  {
    id: 'ms-office',
    name: 'MS Office Mastery',
    tagline: 'Boost Workplace Productivity & Administrative Automation',
    shortDescription: 'Master Advanced Excel, PowerPoint, Word, Outlook, and administrative automation.',
    aboutCourse: 'Every office operations job demands high-level MS Office skills. This practical program elevates you from basic typing to writing complex Excel formulas, creating high-impact PowerPoint slides, and automating repetitive tasks using macros.',
    iconName: 'FileText',
    duration: '6 Weeks',
    mode: 'Online & Classroom (Practical Assignments)',
    tools: ['MS Excel', 'MS Word', 'MS PowerPoint', 'MS Outlook', 'Excel VBA & Macros'],
    whoCanJoin: [
      'Job seekers looking for administrative, data entry, or office management roles',
      'MBA students wanting to excel in business analysis and reporting',
      'Working professionals seeking to automate repetitive tasks and save daily effort',
      'School graduates and college students preparing for corporate office requirements'
    ],
    trainingFeatures: [
      'Exhaustive, template-rich training covering real corporate report layouts',
      '100+ dynamic Excel formula worksheets and business presentation templates',
      'Weekly speed challenges to boost typing and navigation shortcuts by 200%',
      'JJH Global certification recognized across hundreds of corporate hiring agencies'
    ],
    modules: {
      beginner: [
        'MS Word basic document formatting, page setup, header/footers, and margins',
        'MS Excel navigation, data types, grid layouts, and simple math equations',
        'MS PowerPoint basic slide structures, themes, adding visual objects, and transitions',
        'MS Outlook inbox setup, email writing guidelines, signature setup, and calendar management'
      ],
      intermediate: [
        'Advanced Word features: Table of Contents, Track changes, and Mail Merge workflows',
        'Advanced Excel: Pivot Tables, VLOOKUP, HLOOKUP, XLOOKUP, and logical IF formulas',
        'PowerPoint: Master slides, smart shapes, graphic illustrations, and interactive tables',
        'Data analysis: Sorting, advanced filtering, conditional formatting, and chart drafting'
      ],
      advanced: [
        'Excel data validation rules, protected sheets, and custom analytical dashboard design',
        'Introduction to Excel Macros & VBA scripting to automate daily report compilation',
        'Developing premium PowerPoint decks for executive investor and quarterly board reviews',
        'Integrating MS Office suite files: Connecting live Excel tables directly into MS Word report briefs'
      ]
    }
  },
  {
    id: 'tally',
    name: 'TallyPrime & Finance Systems',
    tagline: 'Professional Computer Accounting & Taxation Systems',
    shortDescription: 'Master TallyPrime, computer ledger systems, GST filing, TDS, and corporate taxation.',
    aboutCourse: 'Empower your financial career. This training is curated by veteran Chartered Accountants to deliver real-world accounting knowledge. Learn to configure company files, enter multiple voucher transactions, balance ledger books, manage inventory, and file GST returns.',
    iconName: 'FileText',
    duration: '8 Weeks',
    mode: 'Classroom & Online (Real Ledger Audits)',
    tools: ['TallyPrime', 'Tally ERP 9', 'MS Excel', 'E-Way Bill Portal'],
    whoCanJoin: [
      'B.Com, BBA, and finance graduates aiming for professional accounting careers',
      'Small business owners looking to manage their own taxation, sales, and ledgers',
      'Tax consultants wanting to master TallyPrime GST and TDS integrations',
      'Experienced bookkeepers upgrading from older physical ledger systems'
    ],
    trainingFeatures: [
      'Learn on actual ledger records of active trading and services companies',
      'Complete, step-by-step guidance on live GST portal operations and filings',
      'Weekly accounting workshops to reconcile bank sheets and inventory records',
      'Placement referrals with regional accounting firms and SME manufacturing units'
    ],
    modules: {
      beginner: [
        'Fundamental double-entry accounting principles and ledger concepts',
        'TallyPrime setup: Creating company profile files, financial years, and groups',
        'Ledger creation, item catalogs, and basic cash/bank accounting vouchers',
        'Tally interface shortcuts, navigation panels, and secure password management'
      ],
      intermediate: [
        'Advanced voucher entry: Journal vouchers, debit/credit notes, and interest calculations',
        'Inventory tracking: Godown management, batch tracking, and item groups',
        'Bank Reconciliation Statements (BRS) and credit control guidelines',
        'Generating fundamental reports: Trial Balance, Profit & Loss, and Balance Sheets'
      ],
      advanced: [
        'GST taxation setup: Central GST, State GST, Integrated GST, and E-Way bills',
        'Filing GSTR-1 & GSTR-2, and managing input tax credit reconciliations',
        'TDS (Tax Deducted at Source) calculations, voucher entry, and quarterly filings',
        'Payroll management in Tally: Creating pay heads, employee attendance, and pay slips'
      ]
    }
  },
  {
    id: 'autocad',
    name: 'AutoCAD 2D & 3D Drafting',
    tagline: 'Industry-Standard Architectural & Engineering Drawings',
    shortDescription: 'Master 2D drafting, structural layouts, and 3D architectural modeling with Autodesk AutoCAD.',
    aboutCourse: 'Transform your design ideas into precise blueprints. This practical, project-oriented course takes you through the industry standards of drafting, civil elevations, mechanical parts design, and rendering layouts.',
    iconName: 'Award',
    duration: '8 Weeks',
    mode: 'Classroom & Online (Practical Design Labs)',
    tools: ['Autodesk AutoCAD', 'DWG TrueView', 'Plotters & Printers', 'A3/A0 Layout setups'],
    whoCanJoin: [
      'Civil, Mechanical, and Electrical engineering students requiring CAD draft training',
      'Interior Designers wanting to draft precise floor plans and furniture layouts',
      'Hobbyists and draftspersons working in building construction and parts manufacture',
      'Contractors looking to interpret and modify architectural drawings independently'
    ],
    trainingFeatures: [
      'Highly structured lab sessions with individual high-perf design computer units',
      'Detailed blueprints database representing actual residential and commercial structures',
      'Drafting speed challenges conforming with international ANSI and ISO design conventions',
      'Autodesk authorized course curriculum and digital achievement certifications'
    ],
    modules: {
      beginner: [
        'Understanding AutoCAD interface, coordinate networks, and user parameters',
        'Basic draw commands: Lines, circles, polylines, arcs, and polygons',
        'Basic modification tools: Move, copy, scale, trim, offset, and rotate',
        'Setting up correct measurement systems, dimensions, scales, and text guidelines'
      ],
      intermediate: [
        'Drafting floor plans with advanced layering systems and color tags',
        'Blocks, block insertion, custom dynamic attributes, and item libraries',
        'Isometric projection drafting and hatch pattern applications',
        'External references (XREFs), viewports, layout sheets, and drafting scale setups'
      ],
      advanced: [
        '3D solid modeling: Extrude, sweep, loft, and boolean modeling operations',
        'Creating advanced 3D surfaces and modifying mesh elements',
        'Material configuration, camera setup, and rendering realistic civil views',
        'Plotting, batch plotting, printing, and converting files to high-fidelity PDF/DWG formats'
      ]
    }
  },
  {
    id: 'revit',
    name: 'Revit BIM Systems',
    tagline: 'Modern Building Information Modeling & Collaboration workflows',
    shortDescription: 'Master Revit Architecture, Revit Structure, MEP, and cloud BIM collaboration.',
    aboutCourse: 'BIM has completely overtaken traditional drafting in modern civil engineering. This Revit training teaches you to build intelligent virtual structures where 3D geometry is linked directly with scheduling, material lists, and structural loads. Master building designs for commercial and residential hubs.',
    iconName: 'Award',
    duration: '10 Weeks',
    mode: 'Classroom & Online (High-Performance PC Labs)',
    tools: ['Autodesk Revit', 'Revit Structure', 'Revit MEP', 'BIM 360', 'Enscape Rendering'],
    whoCanJoin: [
      'Architects and Civil engineers looking to upgrade from 2D CAD to advanced BIM',
      'MEP (Mechanical, Electrical, Plumbing) engineering specialists wanting coordinate modeling',
      'Project Managers wanting to extract bill of materials and construction timelines',
      'Students looking for careers in multinational design consultancies'
    ],
    trainingFeatures: [
      'Full lifecycle BIM model design from initial grid setups to photorealistic renders',
      'Collaborative BIM 360 workflows where students work simultaneously on a single building model',
      'Comprehensive material scheduling and cost extraction training',
      'Interlinking AutoCAD drafts into Revit to construct detailed 3D building profiles'
    ],
    modules: {
      beginner: [
        'BIM (Building Information Modeling) core parameters and Revit user dashboard',
        'Grid mapping, level configurations, and creating structural columns',
        'Modeling architectural walls, windows, doors, and floor systems',
        'Adding standard furniture elements and adjusting family properties'
      ],
      intermediate: [
        'Creating multi-story structures, customized stairs, railings, and roofs',
        'Designing customized Revit parameter families (parametric doors/windows)',
        'Topography site modeling, importing contour maps, and building pads',
        'Detailed room designations, color schedules, and layout annotations'
      ],
      advanced: [
        'Introduction to Revit Structure: Rebars, beams, foundations, and framing layouts',
        'Revit MEP basics: Air ducts, plumbing pipes, and electrical lighting networks',
        'Collaborative worksharing, tracking model changes, and resolving design clashes',
        'Photorealistic rendering with Enscape, visual camera walkthroughs, and sheets creation'
      ]
    }
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills & Interview Prep',
    tagline: 'Elevate Your Professional Persona & Communication Excellence',
    shortDescription: 'Master communication, public speaking, resume building, and mock interviews.',
    aboutCourse: 'Technical skills get you the interview, but soft skills get you the job. This intensive personality development and career grooming program is curated by top HR directors. Improve your active communication, spoken English, group discussion skills, and resume layouts.',
    iconName: 'Users',
    duration: '4 Weeks',
    mode: 'Online & Classroom (Intensive Interactive Roleplay)',
    tools: ['MS PowerPoint', 'LinkedIn Professional Desktop', 'Zoom Mock Interfaces', 'Sway Presentation'],
    whoCanJoin: [
      'College students heading into campus placements looking to excel in HR interviews',
      'Professionals feeling stagnant in their careers needing public presentation improvements',
      'Job seekers wanting to optimize their resumes and professional LinkedIn brands',
      'Team leads looking to polish their corporate email writing and leadership communication'
    ],
    trainingFeatures: [
      'Highly interactive daily speaking circles and public presentation practice',
      'Individual, personalized 1-on-1 mock interviews with active corporate HR directors',
      'Complete resume revamp and optimized professional LinkedIn page review',
      'Lifetime access to standard professional correspondence templates and career tips'
    ],
    modules: {
      beginner: [
        'Principles of active communication, voice modulation, and clear articulation',
        'Body language, micro-expressions, posture, and workplace attire guidelines',
        'Developing confidence and overcoming Stage Fear through speaking practices',
        'Basic conversation starters, networking etiquette, and social behaviors'
      ],
      intermediate: [
        'Resume layout design: ATS-friendly layouts and highlight phrasing strategies',
        'Structuring stellar LinkedIn profiles to attract top outbound recruiter searches',
        'Participating in Group Discussions (GD): Active listening, driving points, and summarization',
        'Corporate Email writing, memo formatting, and professional slack structures'
      ],
      advanced: [
        'Answering difficult behavioral HR interview questions with STAR method layouts',
        'Public speaking skills: Delivering engaging executive presentations under pressure',
        'Negotiation strategies for package discussions, salary counters, and benefits',
        'Time management matrices, handling workplace stress, and positive conflict resolutions'
      ]
    }
  },
  {
    id: 'corporate-training',
    name: 'Corporate Training',
    tagline: 'Unlock Peak Workforce Synergy & Organizational Leadership',
    shortDescription: 'Tailor-made programs covering leadership, agile management, and teamwork for companies.',
    aboutCourse: 'Empower your company workforce. Our Corporate Training service delivers specialized, custom programs designed to align with your corporate objectives. We help companies adopt Agile mindsets, build outstanding leadership teams, resolve inner conflict, and optimize technical workflows.',
    iconName: 'GraduationCap',
    duration: 'Customized',
    mode: 'On-site Corporate Workshops or Digital Classrooms',
    tools: ['Jira / Confluence', 'Slack Enterprise', 'Trello boards', 'MS Teams / Zoom', 'Miro collaboration boards'],
    whoCanJoin: [
      'Scaling companies seeking to train their middle-management teams on OKRs',
      'Multi-national enterprises looking to execute massive technical upskilling bootcamps',
      'Startups needing to align engineering teams around Agile Scrum processes',
      'Corporate departments suffering from communication blocks and productivity lags'
    ],
    trainingFeatures: [
      'Syllabuses custom-developed from scratch to align with your project specifications',
      'Pre-training diagnostic checks and comprehensive post-training efficacy logs',
      'Fun, highly interactive on-site team-building activities and workshops',
      'Ongoing post-training support desk to review team implementation progress'
    ],
    modules: {
      beginner: [
        'Team dynamics, forming feedback loops, and peer accountability methods',
        'Setting objective corporate goals utilizing the OKR (Objectives and Key Results) system',
        'Introduction to clean communication structures and resolving daily workspace delays',
        'Virtual collaboration tools optimization (Slack, Teams, Jira) for daily workflows'
      ],
      intermediate: [
        'Adopting Agile frameworks: Scrum master roles, sprint schedules, and retrospective meetings',
        'Building emotional intelligence at work and fostering psychological workspace safety',
        'Empowering managers: Delegation techniques, mentoring juniors, and constructive appraisals',
        'Process optimization: Documenting work protocols and lowering administrative error rates'
      ],
      advanced: [
        'Strategic Leadership: Vision mapping, corporate planning, and market expansions',
        'Managing organizational changes and handling major structural shifts with minimal friction',
        'Crisis communication: Handling major technical downtime or public company issues',
        'Advanced negotiation: Securing major clients, vendor management, and internal alignments'
      ]
    }
  }
];
