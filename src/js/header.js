const iconBurger = document.querySelector(".icon-open-modal use");
const iconStart = document.querySelector(".icon-open-modal");
const navModal = document.querySelector(".navig-header");
const logoText = document.querySelector(".link-logo-header");
const header = document.querySelector(".header");
const iconModal = document.querySelector(".icon-open-modal");
const bodyToSite = document.querySelector("body");
const modalList = document.querySelector(".header-list");


iconStart.addEventListener("click", modalOpen);

function modalOpen() {
  const currentHref = iconBurger.getAttribute("href");

  if (currentHref === "/portfolio-group-10/assets/sprite--ikKmnnz.svg#icon-close-x") {
    iconBurger.setAttribute("href", "/portfolio-group-10/assets/sprite--ikKmnnz.svg#icon-burger");
    navModal.classList.remove("nav-mob-open");
    bodyToSite.classList.remove("no-scroll");
    
  } else {
    iconBurger.setAttribute("href", "/portfolio-group-10/assets/sprite--ikKmnnz.svg#icon-close-x");
    navModal.classList.add("nav-mob-open");
    bodyToSite.classList.add("no-scroll");
    
  }
}

Array.from(modalItems).forEach(item => {
  item.addEventListener("click", closeModal);
});

function closeModal() {
  iconBurger.setAttribute("href", "/portfolio-group-10/assets/sprite--ikKmnnz.svg#icon-burger");
  navModal.classList.remove("nav-mob-open");
  bodyToSite.classList.remove("no-scroll");
}

const now = new Date();
const hours = now.getHours();



// if (hours >= 11 || hours < 6) {
    
//   navModal.classList.add("navig-header-night");
//   logoText.classList.add("navig-header-night");
//   header.classList.add("night-bg-color");
//   iconModal.classList.add("icon-night");
//     bodyToSite.classList.add("navig-header-night");
    
// } else {
   
//   navModal.classList.remove("navig-header-night");
//   logoText.classList.remove("navig-header-night");
//   header.classList.remove("navig-header-night");
//   iconModal.classList.remove("icon-night");
//     bodyToSite.classList.remove("navig-header-night");
// }
