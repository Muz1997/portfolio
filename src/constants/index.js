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
  figma,
  docker,
  meta,
  starbucks,
  digitalsoft,
  comvision,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  csharp,
  graph,
  python,
  sqlserver,
  neo4jfundamentals,
  neo4jmodeling,
  skillupagile,
  brokenlink,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Cloud Associate",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Machine Learning",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Artificial Intelligence",
    icon: ai,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graph,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "DigitalSoft",
    icon: digitalsoft,
    iconBg: "#383E56",
    date: "Nov 2019 - Jan 2022",
    points: [
      "Worked as a team member on large and complex projects focused on web and windows development using programming languages such as Visual Basic, C#, SQL Server, ASP.Net, PHP, MySQL, Node.js, MongoDB, Express.JS, and React.JS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilized Git version control for managing code changes and resolving conflicts and Docker for containerization to streamline the deployment process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Comvision",
    icon: comvision,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Oct 2019",
    points: [
      "Responsible for backend development of various web applications, including creating and managing databases using Microsoft SQL Server Management Studio, creating models, and adding controllers using C# with views built on HTML, CSS, jQuery, and Bootstrap.",
      "Developed, tested, and implemented new software programs using multiple programming languages.",
      "Analyzed user requirements and converted requirements into design documents, making good technical decisions that provided solutions to business challenges",
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
    name: "Neo4j Fundamentals",
    link:
      "https://graphacademy.neo4j.com/c/332a400c-1d1f-4a83-b112-aee13c5c2900/",
    designation: "GraphAcademy",
    image:
      "https://cdn.graphacademy.neo4j.com/assets/img/courses/badges/neo4j-fundamentals.svg",
  },
  {
    name: "Agile Scrum Foundation",
    link:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDE1OTY1Ml8xNjc2MzA0OTgxLnBuZyIsInVzZXJuYW1lIjoiTXV6YW0gQWxpIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1075369612049352593&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL6pI8S%2FIMknKr0gCAO8fhc4lAAAA",
    designation: "Simplilearn",
    image:
      "https://certificates.simplicdn.net/share/thumb_4159652_1676304981.png",
  },
  {
    name: "Graph Data Modeling Fundamentals",
    link:
      "https://graphacademy.neo4j.com/c/a2af2958-843d-4223-add4-f981faa37f60/",
    designation: "GraphAcademy",
    image:
      "https://cdn.graphacademy.neo4j.com/assets/img/courses/badges/modeling-fundamentals.svg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
