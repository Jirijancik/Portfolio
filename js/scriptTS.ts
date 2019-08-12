/***********************************************
 VARIABLES
***********************************************/
const elementMain = document.querySelector("main");
const elementHeroButton = document.querySelector(".hero-section__button");
const elementHeroSection = document.querySelector(".hero-section");
const elementNavbar = document.querySelector(".navbar");
const elementFooter = document.querySelector(".footer");





class HeroSection {
    _elementHeroButton: Element;
    _elementHeroSection: Element;
    _elementMain: Element;
    _elementNavbar: Element;
    _elementFooter: Element;

    constructor(elementHeroButton: Element | null, elementHeroSection: Element | null, elementMain: Element | null, elementNavbar: Element | null, elementFooter: Element | null) {
        if (!elementHeroButton || !elementHeroSection || !elementMain || !elementNavbar || !elementFooter) throw Error("Element nebyl nalezen");

        this._elementHeroButton = elementHeroButton;
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    };

    private init() {
        this.onHeroButtonClick();
    }

    private onHeroButtonClick() {
        this._elementHeroButton.addEventListener("click", () => this.hideHeroSection());
    }

    // Funkce pro schování hero sekce a zobrazení zbytku stránky
    private hideHeroSection = () => {
        this._elementHeroSection.classList.add("hero-section--hide");
        this._elementMain.classList.remove("main--hide");
        this._elementNavbar.classList.remove("navbar--hide");
        this._elementFooter.classList.remove("footer--hide");
    };
}



class NavBar {

    _homeBtn: Element = document.querySelector(".navbar__nav__item.home-button")!;
    _elementHeroSection: Element;
    _elementMain: Element;
    _elementNavbar: Element;
    _elementFooter: Element;


    constructor(elementHeroSection: Element | null, elementMain: Element | null, elementNavbar: Element | null, elementFooter: Element | null) {
        if (!elementHeroButton || !elementHeroSection || !elementMain || !elementNavbar || !elementFooter) throw Error("Element nebyl nalezen");
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;


        this.init();
    }

    private init() {
        this.onHomeBtnClick();
    }

    private onHomeBtnClick() {
        this._homeBtn.addEventListener("click", () => this.showHeroSection());
    }

    // Funkce pro zobrazení hero sekce při kliku na Home
    private showHeroSection = () => {
        this._elementHeroSection.classList.remove("hero-section--hide");
        this._elementMain.classList.add("main--hide");
        this._elementNavbar.classList.add("navbar--hide");
        this._elementFooter.classList.add("footer--hide");
    };

}




class Portfolio {
    constructor() {
        this.init();
    }

    private init() {
        this.addEventListenersToDescriptions();
    }

    private getPortfolioItems() {
        return document.querySelectorAll(".portfolio--glass");
    }

    // Funkce pro přidání Eventlistenerů za spárování portolio itemů s popisky 
    // zapomocí data-id
    private addEventListenersToDescriptions() {
        let pItems = this.getPortfolioItems();
        let i = 0;
        for (let item of pItems) {
            const descriptionWithDataID = document.querySelector(`.item-description[data-id=${item.getAttribute("data-id")}]`)
            if (!descriptionWithDataID) {
                continue;
            }
            item.addEventListener('mouseenter', () => this.onHover(descriptionWithDataID))
            i++;
        }
    }

    // Funkce pro získání všech item popisků
    private getPortfolioDescriptions() {
        return document.querySelectorAll(".item-description");
    }

    // Funkce onHover schová všechny popis. a poté zobrazí cílený popisek
    private onHover(element: Element) {
        let pDescription = this.getPortfolioDescriptions();
        pDescription.forEach(item => { item.classList.remove("visible_tooltip") })
        element.classList.add("visible_tooltip")
    }
}




let heroSection = new HeroSection(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter);
let navBar = new NavBar(elementHeroSection, elementMain, elementNavbar, elementFooter);
let portfolio = new Portfolio();