const elementMain = document.querySelector("main")!;
const elementHeroButton = document.querySelector(".hero-section__button")!;
const elementHeroSection = document.querySelector(".hero-section")!;
const elementNavbar = document.querySelector(".navbar")!;
const elementFooter = document.querySelector(".footer")!;







//need to make a main class - T0
class mainPage{

    _navBar:navBar;

    constructor(navBar:navBar, ){
    this._navBar = navBar;
    }

    visibilityChanges = () => {


        showMainSection();
    
        
    
        showNavbar();
    
        showFooterSection();
    }
} 


class navBar{

    _homeBtn:Element;

    constructor(homeBtn:Element){
        this._homeBtn = homeBtn;
        this.init();
    }

    private init(){

    }

    private onHomeBtnClick(){
        this._homeBtn.addEventListener("click", ()=> this.hideHeroSection());
    }

    private hideHeroSection = () => this._homeBtn.classList.add("hero-section--hide");

}









class heroSection{
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




const showMainSection = () => elementMain.classList.remove("main--hide");
const showNavbar = () => elementNavbar.classList.remove("navbar--hide");
const showFooterSection = () => elementFooter.classList.remove("footer--hide");



let HeroSection = new heroSection(elementHeroButton, elementHeroSection);