let skill_tab = document.getElementById("skills-tab");
let exp_tab = document.getElementById("experience-tab");
let edu_tab = document.getElementById("education-tab");
let skill_btn = document.getElementById("skills-btn");
let exp_btn = document.getElementById("experience-btn");
let edu_btn = document.getElementById("education-btn");
let hamburger_open = document.getElementById("hamburger-open");
let hamburger_close = document.getElementById("hamburger-close");
let menu = document.getElementById("side-menu");
console.log(menu);
// console.log(this code is writtenn by sunny bhushan dabang sarkar of bihar power ihe se suru hola ehe khtmhokhela)

const btnHandler = (tab) => {
  if (tab == "skill") {
    skill_tab.classList.add("active-tab");
    exp_tab.classList.remove("active-tab");
    edu_tab.classList.remove("active-tab");
  } else if (tab == "exp") {
    skill_tab.classList.remove("active-tab");
    exp_tab.classList.add("active-tab");
    edu_tab.classList.remove("active-tab");
  } else {
    skill_tab.classList.remove("active-tab");
    exp_tab.classList.remove("active-tab");
    edu_tab.classList.add("active-tab");
  }
};
// console.log(menu)
const hamburgerHandler = (toggle) => {
  if (toggle == "open") {
    menu.classList.add("nav-active");
  } else {
    menu.classList.remove("nav-active");
  }
};

skill_btn.addEventListener("click", () => btnHandler("skill"));
exp_btn.addEventListener("click", () => btnHandler("exp"));
edu_btn.addEventListener("click", () => btnHandler("edu"));
hamburger_open.addEventListener("click", () => hamburgerHandler("open"));
hamburger_close.addEventListener("click", () => hamburgerHandler("close"));
