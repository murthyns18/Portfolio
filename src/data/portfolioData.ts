import {
  PersonalInfo,
  StatItem,
  WorkExperience,
  TechStackItem,
  Project,
  Education,
  Certification,
  ExtraActivity
} from '../types/portfolio';

const getAssetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const personalInfo: PersonalInfo = {
  name: "Narasimhamurthy N S",
  initials: "NS",
  role: "Software Engineer",
  company: "Talentpace Pvt Ltd",
  tagline: "Software Engineer passionate about building scalable, high-performance web applications using ASP.NET Core, .NET Framework, C#, SQL Server, React JS, and SFCC B2C.",
  aboutText: "I'm a Full Stack Software Engineer with hands-on enterprise development experience. Currently working at Talentpace Pvt Ltd on ASP.NET Core, C#, .NET Framework, React JS, and SQL Server web applications, with prior experience in Salesforce Commerce Cloud (SFCC B2C) storefront and cartridge development at Cloud Odyssey.",
  location: "Bangalore, India",
  educationDegree: "MCA (2024)",
  email: "murthy.ns646@gmail.com",
  altEmail: "murthy.ns646@gmail.com",
  phone: "+91 91 8431054518",
  altPhone: "+91 8431054518",
  status: "Software Engineer",
  resumePath: getAssetPath("/murthyns.pdf"),
  profileImage: getAssetPath("/murthy.jpg"),
  socialLinks: {
    github: "https://github.com/murthyns18",
    linkedin: "https://linkedin.com/in/murthyns18",
    email: "mailto:murthyns18@gmail.com",
    leetcode: "https://leetcode.com"
  }
};

export const statsData: StatItem[] = [
  { id: 1, value: "1+ Year", label: "Work Experience", icon: "Rocket" },
  { id: 2, value: "5+", label: "Projects Completed", icon: "Briefcase" },
  { id: 3, value: "250+", label: "Problems Solved", icon: "Code" },
  { id: 4, value: "100%", label: "Dedication & Quality", icon: "Trophy" }
];

export const workExperienceData: WorkExperience[] = [
  {
    id: "talentpace",
    role: "Software Engineer",
    company: "Talentpace Pvt Ltd",
    companyLinkedin: "https://www.linkedin.com/company/talent-pace-pvt-ltd",
    companyLogo: getAssetPath("/talent_pace_pvt_ltd_logo.jpg"),
    type: "Full-time",
    period: "Nov 2025 - Present",
    duration: "10 mos",
    location: "Bengaluru, Karnataka, India • On-site",
    description: "Developing scalable, high-performance enterprise web applications and RESTful services using ASP.NET Core, C#, .NET Framework, React JS, and SQL Server.",
    skills: ["C#", ".NET Framework", "ASP.NET Core", "React JS", "SQL Server", "JavaScript"]
  },
  {
    id: "cloud-odyssey",
    role: "SFCC B2C Developer Trainee",
    company: "Cloud Odyssey",
    companyLinkedin: "https://www.linkedin.com/company/cloudodysseyofficial",
    companyLogo: getAssetPath("/cloudodysseyofficial_logo.jpg"),
    type: "Trainee",
    period: "Jul 2025 - Oct 2025",
    duration: "4 mos",
    location: "Bengaluru, Karnataka, India • On-site",
    description: "Worked on Salesforce Commerce Cloud (SFCC) B2C projects, including storefront development, cartridge development, ISML template design, SCSS styling, and backend integrations.",
    skills: ["SFCC B2C", "ISML", "SCSS", "JavaScript", "Cartridge Dev", "Backend Integrations"]
  }
];

export const techStack: TechStackItem[] = [
  { name: "ASP.NET Core", category: "Frameworks", iconClass: "fa-solid fa-cubes", color: "#00e676" },
  { name: "C#", category: "Languages", iconClass: "fa-solid fa-code", color: "#a855f7" },
  { name: ".NET Framework", category: "Frameworks", iconClass: "fa-solid fa-cube", color: "#512bd4" },
  { name: "React JS", category: "Frontend", iconClass: "fa-brands fa-react", color: "#61dafb" },
  { name: "SFCC B2C", category: "Frameworks", iconClass: "fa-solid fa-cloud", color: "#00a1e0" },
  { name: "SQL Server", category: "Databases", iconClass: "fa-solid fa-database", color: "#cc292b" },
  { name: "ISML & SCSS", category: "Frontend", iconClass: "fa-brands fa-sass", color: "#cc6699" },
  { name: "JavaScript", category: "Languages", iconClass: "fa-brands fa-js", color: "#f7df1e" },
  { name: "Java", category: "Languages", iconClass: "fa-brands fa-java", color: "#f89820" },
  { name: "HTML5 & CSS3", category: "Frontend", iconClass: "fa-brands fa-html5", color: "#e34f26" },
  { name: "Git", category: "Tools", iconClass: "fa-brands fa-git-alt", color: "#f05032" },
  { name: "Python", category: "Languages", iconClass: "fa-brands fa-python", color: "#3776ab" },
  { name: "Spring Boot", category: "Backend", iconClass: "fa-leaf", color: "#6db33f" },
  { name: "MySQL", category: "Databases", iconClass: "fa-solid fa-server", color: "#4479a1" }
];

export const projectsData: Project[] = [
  {
    id: "schemes-360",
    title: "Schemes 360",
    description: "Incentive management system for creating schemes, setting targets, and calculating payouts for dealers and distributors.",
    longDescription: "A comprehensive corporate solution engineered to streamline dealer incentives, tier-based commission calculations, target metrics tracking, and automated payout disbursement reporting.",
    techStack: ["ASP.NET Core", "C#", "React", "SQL Server"],
    accentColor: "#00e676",
    badgeIcon: "Target",
    github: "https://github.com/murthyns18",
    image: getAssetPath("/dev.png"),
    featured: true
  },
  {
    id: "smartflow",
    title: "SmartFlow Management System",
    description: "Workflow automation platform for managing approvals, requests, and dynamic forms with role-based access.",
    longDescription: "Enterprise-grade workflow platform designed to automate multi-stage review approvals, dynamic form building, real-time activity audit trails, and strict role-based authorization.",
    techStack: ["ASP.NET Core", "Dapper", "React", "SQL Server"],
    accentColor: "#a855f7",
    badgeIcon: "Workflow",
    github: "https://github.com/murthyns18",
    image: getAssetPath("/dev.png"),
    featured: true
  },
  {
    id: "synone",
    title: "SynOne Project Tracker",
    description: "Project management system for tracking projects, activities, tasks and managing team collaboration.",
    longDescription: "Modern collaborative project workspace featuring interactive Kanban task boards, milestone tracking, real-time member assignments, and progress analytics dashboards.",
    techStack: ["ASP.NET Core", "React", "TypeScript", "SQL Server"],
    accentColor: "#3b82f6",
    badgeIcon: "BarChart3",
    github: "https://github.com/murthyns18",
    image: getAssetPath("/dev.png"),
    featured: true
  },
  {
    id: "food-delivery",
    title: "Online Food Delivery Application",
    description: "User-focused food delivery application for seamless online ordering with menu filtering, cart management, and payment integration.",
    longDescription: "Developed a user-focused food delivery application for seamless online ordering. Enabled users to browse restaurants, filter menu items, and manage their cart. Integrated demo payment functionality to allow users to complete test transactions.",
    techStack: ["Java", "JavaScript", "JDBC", "JSP", "Servlets", "MySQL"],
    accentColor: "#f97316",
    badgeIcon: "Utensils",
    github: "https://github.com/murthyns18/FoodDelivery-Application.git",
    image: getAssetPath("/food.png"),
    featured: false
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website",
    description: "Full-stack e-commerce solution with product catalog, cart management, admin dashboard, order tracking, and email alerts.",
    longDescription: "Developed a full-stack e-commerce application using Spring Boot, Hibernate, JSP and MySQL. Enabled product browsing, cart management, order tracking, and user feedback. Implemented admin functionalities for managing products, applying discounts, processing orders, and shipping. Integrated email notifications for customer registration, order placement, and shipping updates.",
    techStack: ["Java", "Spring Boot", "Hibernate", "JSP", "MySQL", "HTML", "CSS"],
    accentColor: "#10b981",
    badgeIcon: "ShoppingBag",
    github: "https://github.com/murthyns18/E-Commerce-Web-Application-Using-SpringBoot-Hibernate-JSP-Java-MySQL.git",
    image: getAssetPath("/ecommerce.png"),
    featured: false
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    description: "Web-based Employee Management System performing complete CRUD operations on employee records with Maven and MySQL.",
    longDescription: "Developed a web-based Employee Management System to perform CRUD operations on employee data. Implemented features to add, update, delete, and view employee records efficiently with clean web UI.",
    techStack: ["Spring Boot", "Hibernate", "JSP", "MySQL", "JPA", "Maven"],
    accentColor: "#06b6d4",
    badgeIcon: "Users",
    github: "https://github.com/murthyns18/Employee-Management-System.git",
    image: getAssetPath("/employee.png"),
    featured: false
  },
  {
    id: "portfolio-app",
    title: "Personal Portfolio Website",
    description: "Modern high-performance React portfolio featuring dark mode glassmorphism UI, glowing accents, and smooth animations.",
    longDescription: "Designed and developed a sleek personal portfolio website showcasing projects, skills, education, and interactive contact functionality built with React, CSS design tokens, and smooth UI animations.",
    techStack: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    accentColor: "#00e676",
    badgeIcon: "Globe",
    github: "https://github.com/murthyns18/Portfolio.git",
    image: getAssetPath("/portfolio.png"),
    featured: false
  }
];

export const educationData: Education[] = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Bengaluru North University",
    location: "Bangalore, Karnataka, India",
    percentage: "86%",
    period: "2022 - 2024",
    highlight: "Graduated with distinction in advanced software development & database management."
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Bengaluru North University",
    location: "Bagepalli, Karnataka, India",
    percentage: "89%",
    period: "2019 - 2022",
    highlight: "Excelled in core computer science fundamentals, programming algorithms, and data structures."
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Tap Academy",
    year: "2024",
    description: "Hands-on experience with frontend and backend development with frameworks like Hibernate, Spring Boot.",
    link: "/tap.pdf",
    image: "/tapp.png"
  },
  {
    title: "Fundamentals of Full Stack Web Development",
    issuer: "Exceller",
    year: "2023",
    description: "Acquired foundational knowledge of web development principles and modern software practices.",
    link: "/fundamentals.pdf",
    image: "/excellerr.png"
  }
];

export const extraActivitiesData: ExtraActivity[] = [
  {
    title: "Tech Fest Participation",
    description: "Took part in INNOCODE FEST at Krupanidhi College of Management, showcasing coding and software development skills."
  },
  {
    title: "Coding Competitions",
    description: "Participated in online and offline coding challenges, solving 250+ algorithmic problems on the Tai Platform by Tap Academy."
  },
  {
    title: "Open Source Contributions",
    description: "Contributed to web development projects, gaining hands-on experience in collaborative version control and coding standard compliance."
  },
  {
    title: "Project Presentations",
    description: "Presented academic and personal projects, demonstrating architecture diagrams, live demos, and technical strategies to faculty & peers."
  }
];
