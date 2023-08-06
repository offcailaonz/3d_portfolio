import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  dudee,
  lucablock,
  threejs,
  vue,
  nuxt,
  bootstrap,
  gitlab,
  vuetify,
  js1,
  js2,
  htmlcss,
  carcare,
  hrm,
  backOffice,
  mso,
  meecha,
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Vuetify Components Framwork",
    icon: vuetify,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern Front-End Developer",
    company_name: "Dudee-Indeed Co.,Ltd",
    icon: dudee,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using vue.js ( Nuxt2, vue2 )",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Dudee-Indeed Co.,Ltd",
    icon: dudee,
    iconBg: "#383E56",
    // date: "Feb 2023 - Aug 2023",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using vue.js ( Nuxt2, vue2, Nuxt3, Vue3 )",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Assign tasks and review code for interns.",
    ],
  },
  // {
  //   title: "Front-End 3D Developer",
  //   company_name: "Luca Block Co.,Ltd.",
  //   icon: lucablock,
  //   iconBg: "#383E56",
  //   date: "Aug 2023 - Present",
  //   points: [
  //     "Soon.",
  //   ],
  // },
];

const certificate = [
  {
    name: "Introduction to JavaScript",
    image: js1,
    link: "https://www.borntodev.com/certificate_online/1ea721ae74ef30b7200b856e8d74a620/",
  },
  {
    name: "JavaScript For Beginners",
    image: js2,
    link: "https://certificate.makewebbkk.com/certificate/2btc-42bp-nl9q-vfen/?fbclid=IwAR0hjYfcn-fwZnQ8krBaeRSQrDIpDntjdVmWuqLIlS4xn2xMFRl81Os-6ig",
  },
  {
    name: "HTML and CSS for Beginners",
    image: htmlcss,
    link: "https://certificate.makewebbkk.com/certificate/vgmb-qhw0-iqnn-rkse/?fbclid=IwAR3msxwI2uwq0uiPk0dnuBVJmWi8y82KG5Kg9w4eBMrIEPBwGH5t90m8Ueo",
  },
];

const projects = [
  {
    name: "POS CarCare Website",
    description:
      "A website selling store products and services. About car care, I did some things about this project, such as creating a sales summary table page. Some debugging has been carried out.",
    tags: [
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js (vue3)",
        color: "green-text-gradient",
      },
      {
        name: "Vuetify",
        color: "blue-text-gradient",
      },
    ],
    image: carcare,
    source_code_link: "https://github.com/",
  },
  {
    name: "Payroll Hr Website",
    description:
      "Website salary and OT calculator,  Management about employee, I did refactor code, debugging , and Maintainance.",
    tags: [
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js (vue2)",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hrm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Back Office Website",
    description:
      "Website management Back Office, user management, sales package, about live broadcast, I have done about managing live broadcast page, management API and real-time start and stop",
    tags: [
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js (vue2)",
        color: "green-text-gradient",
      },
      {
        name: "Vuetify",
        color: "blue-text-gradient",
      },
    ],
    image: backOffice,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dashboard Big data Website",
    description:
      "a website for Visualize Big Government Data In this project, a lot of data is displayed using the libary chart.js . There are many chart types such as vertical chart , horizontal chart , pie chart , donut chart , etc. other",
    tags: [
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js (vue3)",
        color: "green-text-gradient",
      },
      {
        name: "Vuetify",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: mso,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cafe Dashboard Website",
    description:
      "A website for Show cafe sales data. In this project, libary chart.js is used. There are many chart types such as vertical chart, horizontal chart , pie chart , donut chart etc. but special for this project. chart.js will be combined into multiple charts such as bar chart + line chart and sales data will be brought together. Let's do long, pre-sale results.",
    tags: [
      {
        name: "Nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js (vue2)",
        color: "green-text-gradient",
      },
      {
        name: "Vuetify",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: meecha,
    source_code_link: "https://github.com/",
  },
  
];

export { technologies, experiences, projects, certificate };