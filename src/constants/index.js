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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  communication,
  reliability,
  strategy,
  justicescale
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Services",
  },
  {
    id: "team",
    title: "Our Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Expert Financial Guidance",
    icon: web,
  },
  {
    title: "Customized Solutions",
    icon: mobile,
  },
  {
    title: "Integrity & Transparency",
    icon: backend,
  },
  {
    title: "On-Time Service Delivery",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Comprehensive Expertise",
    // company_name: "Murugan Associates",
    icon: communication,
    iconBg: "#383E56",
    date: "Always at the Forefront",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Strategic Financial Planning",
    // company_name: "Murugan Associates",
    icon: strategy,
    iconBg: "#000",
    date: "Perpetual Growth in Progress",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Ethical Practices",
    // company_name: "Shopify",
    icon: justicescale,
    iconBg: "#E9EFEC",
    date: "Endlessly Innovating",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Reliable Service",
    // company_name: "Meta",
    icon: reliability,
    iconBg: "#6A9C89",
    date: "Crafting Excellence, Continuously",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


// 1.Aravindhan
// Semi Qualified Chartered Accountant


// 2.Saravana Kumar
// Semi Qualified Chartered Accountant, CPA Candidate
// With expertise in Assurance Services, he is focused on ensuring compliance and improving financial performance for organizations.


// 3.Prabhagaran U
// Semi Qualified Chartered Accountant
// He is a seasoned corporate professional with strong expertise in financial reporting, accounting, and taxation. He played a key role in an IPO project, including IND AS transition and special financial statement preparation.


// 4.Prabakaran E
// GST Practitioner
// He is proficient in GST compliance, offering expert guidance on GST laws and regulations, ensuring timely and accurate filings.

const testimonials = [
  {
    testimonial:
      "Specializing in Statutory Audits, he is committed to delivering innovative solutions and strategic advice to enhance financial accuracy and compliance.",
    name: "Aravindhan",
    designation: "Semi Qualified Chartered Accountant",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "With a deep expertise in Assurance Services, Saravana Kumar has demonstrated a remarkable ability to ensure compliance and enhance financial performance for a wide range of organizations.",
    name: "Saravana Kumar",
    designation: "Semi Qualified Chartered Accountant, CPA Candidate",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
  {
    testimonial:
      "He is a seasoned corporate professional with strong expertise in financial reporting, accounting, and taxation. He played a key role in an IPO project, including IND AS transition and special financial statement preparation.",
    name: "Prabhagaran U",
    designation: "Semi Qualified Chartered Accountant",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      " He is proficient in GST compliance, offering expert guidance on GST laws and regulations, ensuring timely and accurate filings.",
    name: "Prabakaran E",
    designation: "GST Practitioner",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
