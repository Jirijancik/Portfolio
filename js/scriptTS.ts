const elementMain = document.querySelector("main")!;
const elementHeroButton = document.querySelector(".hero-section__button")!;
const elementHeroSection = document.querySelector(".hero-section")!;
const elementNavbar = document.querySelector(".navbar")!;
const elementFooter = document.querySelector(".footer")!;


elementHeroButton.addEventListener("click", ()=> 'yes');


const visibilityChanges = () => {


    showMainSection();

    hideHeroSection();

    showNavbar();

    showFooterSection();
}


//need to make a main class - T0

//components extending the main class - T1

//specific components on T1 that will contain logic-  T2


class heroSection {
    _elementHeroButton:Element;
    _elementHeroSection:Element;
    
    constructor(elementHeroButton:Element, elementHeroSection:Element){
        this._elementHeroButton = elementHeroButton;
        this._elementHeroSection = elementHeroSection;
        this.init();
    };

    private init(){
        this.onHeroButtonClick();
    }
    
    private onHeroButtonClick(){
        this._elementHeroButton.addEventListener("click", ()=> this.hideHeroSection());
    }

    private hideHeroSection = () => this._elementHeroSection.classList.add("hero-section--hide");
}



const hideHeroSection = () => elementHeroSection.classList.add("hero-section--hide");
const showMainSection = () => elementMain.classList.remove("main--hide");
const showNavbar = () => elementNavbar.classList.remove("navbar--hide");
const showFooterSection = () => elementFooter.classList.remove("footer--hide");
