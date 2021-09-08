import personalPhoto from "../../shared/assets/common/personalPhoto.jpg";
import devto from "../../shared/assets/contacts/devto.png";
import email from "../../shared/assets/contacts/email.png";
import github from "../../shared/assets/contacts/github.png";
import telegram from "../../shared/assets/contacts/telegram.png";
import twitter from "../../shared/assets/contacts/twitter.png";
import antDesign from "../../shared/assets/technologies/ant.svg";
import css3 from "../../shared/assets/technologies/css3.png";
import cypress from "../../shared/assets/technologies/cypress.png";
import html5 from "../../shared/assets/technologies/html5.png";
import javascript from "../../shared/assets/technologies/javascript.png";
import jest from "../../shared/assets/technologies/jest.svg";
import materialUi from "../../shared/assets/technologies/material.png";
import reactjs from "../../shared/assets/technologies/reactjs.png";
import redux from "../../shared/assets/technologies/redux.png";
import sass from "../../shared/assets/technologies/sass.png";
import styledComponents from "../../shared/assets/technologies/styled-components.png";
import webPack from "../../shared/assets/technologies/webpack.svg";

export type LinkInfo = {
  url: string;
  img: string;
  label: string;
};

export type PersonalInfo = {
  nickname: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  specialization: string;
  avatar: string;
  birthCity: string;
  birthCountry: string;
};

const PERSONAL_INFO: PersonalInfo = {
  nickname: "0xLDev",
  firstName: "Vitaly",
  lastName: "Myasnikov",
  birthDate: "2000-08-26",
  specialization: "Frontend developer",
  avatar: personalPhoto,
  birthCity: "Barnaul",
  birthCountry: "Russia",
};

export const PERSONAL_LINKS: LinkInfo[] = [
  {
    img: devto,
    url: "https://dev.to/0xLDev",
    label: "dev.to",
  },
  {
    img: email,
    url: "mailto:0xldev@mail.ru",
    label: "Email",
  },
  {
    img: github,
    url: "https://github.com/0xLDev",
    label: "GitHub",
  },
  {
    img: telegram,
    url: "https://t.me/x0LDev",
    label: "Telegram",
  },
  {
    img: twitter,
    url: "https://twitter.com/0xLDev",
    label: "Twitter",
  },
];

export const PERSONAL_SKILLS: LinkInfo[] = [
  {
    img: javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    label: "JavaScript",
  },
  {
    img: reactjs,
    url: "https://reactjs.org/",
    label: "ReactJS",
  },
  {
    img: redux,
    url: "https://redux.js.org/",
    label: "Redux",
  },
  {
    img: html5,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    label: "HTML5",
  },
  {
    img: css3,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    label: "CSS",
  },
  {
    img: jest,
    url: "https://jestjs.io",
    label: "Jest",
  },
  {
    img: antDesign,
    url: "https://ant.design",
    label: "Ant Design",
  },
  {
    img: styledComponents,
    url: "https://styled-components.com/",
    label: "styled-components",
  },
  {
    img: sass,
    url: "https://sass-lang.com",
    label: "SASS",
  },
  {
    img: cypress,
    url: "https://www.cypress.io",
    label: "Cypress",
  },
  {
    img: webPack,
    url: "https://webpack.js.org",
    label: "WebPack",
  },
  {
    img: materialUi,
    url: "https://material-ui.com/ru",
    label: "Material UI",
  },
];

export const getPersonalInfo = (): PersonalInfo => PERSONAL_INFO;
export const getPersonalSkills = () => PERSONAL_SKILLS;
export const getPersonalLinks = () => PERSONAL_LINKS;
