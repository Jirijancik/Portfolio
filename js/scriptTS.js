"use strict";
/***********************************************
 VARIABLES
***********************************************/
const elementMain = document.querySelector("main");
const elementHeroButton = document.querySelector(".hero-section__button");
const elementHeroSection = document.querySelector(".hero-section");
const elementNavbar = document.querySelector(".navbar");
const elementFooter = document.querySelector(".footer");
let myChartSkills = document.getElementById('myChartSkills');
let myChartLove = document.getElementById('myChartLove');
var ctxs = myChartSkills.getContext("2d");
var ctxl = myChartLove.getContext("2d");
let radarChartSkills = new Chart(ctxs, {
    type: 'radar',
    data: {
        labels: ['HTML5', 'CSS', 'JavaScript', 'C#', 'SQL', 'Selenium', 'React', 'Git', 'Typescript'],
        datasets: [{
                label: "",
                data: [9, 8, 7, 4, 2, 5, 5, 4, 5],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(47, 58, 125, 0.7)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)'
                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
    },
    options: {
        title: {
            display: false,
            text: 'Things I Can Do',
            fontSize: 25
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});
let radarChartLove = new Chart(ctxl, {
    type: 'radar',
    data: {
        labels: ['Jokes', 'Learning New things', 'IT', 'Video Games', 'My Dog', 'Chockolate', 'Parties With Coworkers', 'Creating Things', 'Sience'],
        datasets: [{
                label: "",
                data: [7, 10, 9, 9, 11, 4, 7, 10, 7],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(125, 47, 58, 0.7)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)',
                    'rgba(26, 32, 69, 0.6)'
                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
    },
    options: {
        title: {
            display: false,
            text: 'Things I Can Do',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});
class HeroSection {
    constructor(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter) {
        // Funkce pro schování hero sekce a zobrazení zbytku stránky
        this.hideHeroSection = () => {
            this._elementHeroSection.classList.add("hero-section--hide");
            this._elementMain.classList.remove("main--hide");
            this._elementNavbar.classList.remove("navbar--hide");
            this._elementFooter.classList.remove("footer--hide");
        };
        if (!elementHeroButton || !elementHeroSection || !elementMain || !elementNavbar || !elementFooter)
            throw Error("Element nebyl nalezen");
        this._elementHeroButton = elementHeroButton;
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    }
    ;
    init() {
        this.onHeroButtonClick();
    }
    onHeroButtonClick() {
        this._elementHeroButton.addEventListener("click", () => this.hideHeroSection());
    }
}
class NavBar {
    constructor(elementHeroSection, elementMain, elementNavbar, elementFooter) {
        this._homeBtn = document.querySelector(".navbar__nav__item.home-button");
        // Funkce pro zobrazení hero sekce při kliku na Home
        this.showHeroSection = () => {
            this._elementHeroSection.classList.remove("hero-section--hide");
            this._elementMain.classList.add("main--hide");
            this._elementNavbar.classList.add("navbar--hide");
            this._elementFooter.classList.add("footer--hide");
        };
        if (!elementHeroButton || !elementHeroSection || !elementMain || !elementNavbar || !elementFooter)
            throw Error("Element nebyl nalezen");
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    }
    init() {
        this.onHomeBtnClick();
    }
    onHomeBtnClick() {
        this._homeBtn.addEventListener("click", () => this.showHeroSection());
    }
}
class Portfolio {
    constructor() {
        this.init();
    }
    init() {
        this.addEventListenersToDescriptions();
    }
    getPortfolioItems() {
        return document.querySelectorAll(".portfolio--glass");
    }
    // Funkce pro přidání Eventlistenerů za spárování portolio itemů s popisky 
    // zapomocí data-id
    addEventListenersToDescriptions() {
        let pItems = this.getPortfolioItems();
        let i = 0;
        for (let item of pItems) {
            const descriptionWithDataID = document.querySelector(`.item-description[data-id=${item.getAttribute("data-id")}]`);
            if (!descriptionWithDataID) {
                continue;
            }
            item.addEventListener('mouseenter', () => this.onHover(descriptionWithDataID));
            i++;
        }
    }
    // Funkce pro získání všech item popisků
    getPortfolioDescriptions() {
        return document.querySelectorAll(".item-description");
    }
    // Funkce onHover schová všechny popis. a poté zobrazí cílený popisek
    onHover(element) {
        let pDescription = this.getPortfolioDescriptions();
        pDescription.forEach(item => { item.classList.remove("visible_tooltip"); });
        element.classList.add("visible_tooltip");
    }
}
let heroSection = new HeroSection(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter);
let navBar = new NavBar(elementHeroSection, elementMain, elementNavbar, elementFooter);
let portfolio = new Portfolio();
// console.log(ctx);
console.log("see");
