const iconBurger = document.querySelector(".icon-open-modal use");
const iconStart = document.querySelector(".icon-open-modal");
const navModal = document.querySelector(".navig-header");
const logoText = document.querySelector(".link-logo-header");
const header = document.querySelector(".header");
const iconModal = document.querySelector(".icon-open-modal");

iconStart.addEventListener("click", modalOpen);

function modalOpen() {
    const currentHref = iconBurger.getAttribute("href");

    if (currentHref === "./img/sprite.svg#icon-close-x") {
        iconBurger.setAttribute("href", "./img/sprite.svg#icon-burger");
        navModal.classList.remove("nav-mob-open");
    } else {
        iconBurger.setAttribute("href", "./img/sprite.svg#icon-close-x");
        navModal.classList.add("nav-mob-open");
    }
};

const now = new Date();
const hours = now.getHours();


if (hours >= 18 || hours < 6) {
    navModal.classList.add("navig-header-night");
    logoText.classList.add("navig-header-night");
    header.classList.add("navig-header-night");
    iconModal.classList.add("navig-header-night");
} else {
    navModal.classList.remove("navig-header-night");
    logoText.classList.remove("navig-header-night");
    header.classList.remove("navig-header-night");
    iconModal.classList.remove("navig-header-night");
}