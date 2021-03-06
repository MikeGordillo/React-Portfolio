// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mike",
  middleName: "",
  lastName: "Gordillo",
  message: " Excited to learn the world of software technologies. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mikegordillo",
    },
   
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mike-gordillo-a902001b5/",
    },
   
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mike.jpg"),
  imageSize: 355,
  message:
    "My name is Mike Gordillo. I’m a graduate of 2021  University of Miami coding boot camp. I am pursuing a career in this world of software engineering. I love music and sports as well.",
  resume:
    "https://drive.google.com/file/d/1agzWTUP6MTfkOM5m85mPEgWka1KaCVL1/view?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "MikeGordillo",
  reposLength: 0,
  specificRepos: ["React-Portfolio","Covid-Clean","Budgegrub","Movie_Profile_App","MemberProfileGenerator","README_md_Generator","SlitherGame","GameForTheGirls","CalendarAppHW","Password-Generator-HW","followTheLogic",],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/mike.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/mike.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 65 },
    { name: "MongoDB", value: 45 },
    { name: "MySql", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mikegordillotattoo@gmail.com",
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  // experiences,
};
