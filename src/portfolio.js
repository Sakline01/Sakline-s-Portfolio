/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sakline's Portfolio",
  description:
    "Self-motivated aspiring full-stack web developer. Intends to work in an environment that encourages success and professional growth.",
  og: {
    title: "Md Sakline Sk Portfolio",
    type: "website",
    url: "http://localhost:3000/#/home",
  },
};

//Home Page
const greeting = {
  title: "Md Sakline Sk",
  logo_name: "MdSaklineSk",
  nickname: "Saku",
  subTitle:
    "Self-motivated aspiring full-stack web developer. Intends to work in an environment that encourages success and professional growth.",
  resumeLink:
    "https://drive.google.com/file/d/1HeCFRWPpIEyqmxnAGfxVABcQNSOAYFLF/view?usp=sharing",
  portfolio_repository: "https://github.com/Sakline01",
  githubProfile: "https://github.com/Sakline01",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Sakline01",
  // linkedin: "http://www.linkedin.com/in/md-sakline-sk786",
  // gmail: "mdsaklinesk@gmail.com",
  // facebook: "https://www.facebook.com/mdsakl.sk",
  // twitter: "https://twitter.com/MdSaklineSk1?t=eohcGp2xU1B8MYltDlVXSQ&s=08",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/Sakline01",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com/in/md-sakline-sk786",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mdsaklinesk@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MdSaklineSk1?t=eohcGp2xU1B8MYltDlVXSQ&s=08",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mdsakl.sk",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating websites with Html Css Javascript",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

//Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Masai School",
      subtitle: "Full-stack Web Development",
      logo_path: "masai.png",
      alt_name: "masaiSchool",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Contai College of Learning Management & Science",
      subtitle: "BCA",
      logo_path: "download.png",
      alt_name: "CCLMS",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA etc.",
        "⚡ Apart from this, I have done courses on Python, Data Science Intro ",
        "⚡ I was selected for Scholarship which is given to top 1 of students in college. I have received award from respected director for becoming first in scolarship",
      ],
      website_link: "https://www.cclms.org/",
    },
    {
      title: "Bhagwanpur High School",
      subtitle: "Higher Secondary(Science Strem)",
      logo_path: "bhs.png",
      alt_name: "BHS",
      duration: "2018",
      descriptions: [
        "⚡ I have studied Math, Physics, Chemistry, Biology.",
        "⚡ I got this digree with 79% marks.",
      ],
      website_link: "https://bit.ly/3DOKtde",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//   ],
// };

// Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work",
//       experiences: [
//         {
//           title: "Associate AI Engineer",
//           company: "Legato Health Technology",
//           company_url: "https://legatohealthtech.com/",
//           logo_path: "legato_logo.png",
//           duration: "June 2020 - PRESENT",
//           location: "Hyderabad, Telangana",
//           description:
//             "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
//           color: "#0879bf",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Google Explore ML Facilitator",
//           company: "Google",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//           color: "#4285F4",
//         },
//       ],
//     },
//   ],
// };

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "circle.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@utubechamp1000",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bhagwanpur, Dist.-Purba Medinipur, West Bengal - 721601",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/uRyDmfnhEidjJAFk8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9735806274",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  // certifications,
  // experience,
  projectsHeader,
  contactPageData,
};
