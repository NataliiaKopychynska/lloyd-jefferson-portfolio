const iconBurger = document.querySelector(".icon-open-modal use");
const iconStart = document.querySelector(".icon-open-modal");
const navModal = document.querySelector(".navig-header");
const logoText = document.querySelector(".link-logo-header");
const header = document.querySelector(".header");
const iconModal = document.querySelector(".icon-open-modal");
const bodyToSite = document.querySelector("body");
const modalList = document.querySelector(".header-list");
const modalItems = modalList.children;

iconStart.addEventListener("click", modalOpen);

function modalOpen() {
  const currentHref = iconBurger.getAttribute("href");



const now = new Date();
const hours = now.getHours();

// const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, li');

// if (hours >= 18 || hours < 6) {
//     elements.forEach(element => {
//     element.classList.add('navig-header-night');
//     });
//   navModal.classList.add("navig-header-night");
//   logoText.classList.add("navig-header-night");
//   header.classList.add("navig-header-night");
//   iconModal.classList.add("icon-night");
//     bodyToSite.classList.add("navig-header-night");
    
// } else {
//     elements.forEach(element => {
//     element.classList.remove('navig-header-night');
//     });
//   navModal.classList.remove("navig-header-night");
//   logoText.classList.remove("navig-header-night");
//   header.classList.remove("navig-header-night");
//   iconModal.classList.remove("icon-night");
//     bodyToSite.classList.remove("navig-header-night");
// }
