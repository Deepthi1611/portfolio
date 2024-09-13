import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    Django,
    expressjs_1,
    bootstrap,
    python,
    fullStack,
    projectPulse,
    quickTweet,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: expressjs_1,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: Django,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "Veltris (Former West Agile Labs)",
      icon: fullStack,
      iconBg: "#383E56",
      date: "Jan 2023 - August 2023",
      points: [
        "Learning development of web applications using React.js, Node.js and other related technologies.",
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
        "Executed multiple small-scale projects leveraging MERN stack technologies, demonstrating practical application of skills in Node.js, Express.js, React.js, and SQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Veltris (Former West Agile Labs)",
      icon: fullStack,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Designed and implemented RESTful APIs using Node.js and Express.js in the backend.",
        "Implemented SQL queries as both raw and through Sequelize ORM in conjunction with Node.js to ensure robust data retrieval and processing for high-performance backend applications.",
        "Developed responsive Web Design using HTML, CSS, Bootstrap and JavaScript.",
        "Successfully handled state management of application using Redux, improving application performance.",
        "Utilized React Router for handling client-side routing and navigation within the application."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Pulse",
      description:
        "Web-based platform that provides a user-friendly project tracking tool for managing projects and portfolios across an organization, to enable users to access relevant project information.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: projectPulse,
      source_code_link: "https://github.com/Deepthi1611/project-pulse-frontend",
    },
    {
      name: "Quick Tweet",
      description:
        "It features user registration and login functionalities, enabling users to securely create accounts and access the platform. Once logged in, users can view, create, edit, and delete tweets",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: quickTweet,
      source_code_link: "https://github.com/Deepthi1611/QuickTweet",
    },
    {
      name: "Portfolio",
      description:
        "It features a visually appealing and responsive layout, highlighting my completed projects, technical skills, and professional background. It also includes sections for my bio, contact information, and links to my projects",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Deepthi1611/portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };