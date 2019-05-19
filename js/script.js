const elementMain = document.querySelector("main");
const elementHeroButton = document.querySelector(".hero-section__button");
const elementHeroSection = document.querySelector(".hero-section");
const elementNavbar = document.querySelector(".navbar");
const elementFooter = document.querySelector(".footer");


elementHeroButton.addEventListener("click", ()=> visibilityChanges());


const visibilityChanges = () => {


    showMainSection();

    hideHeroSection();

    showNavbar();

    showFooterSection();
}

const hideHeroSection = () => elementHeroSection.classList.add("hero-section--hide");
const showMainSection = () => elementMain.classList.remove("main--hide");
const showNavbar = () => elementNavbar.classList.remove("navbar--hide");
const showFooterSection = () => elementFooter.classList.remove("footer--hide");
