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

} 


class navBar{

    _homeBtn:Element = document.querySelector(".navbar__nav__item.home-button")!;
    _elementHeroSection:Element;
    _elementMain:Element;
    _elementNavbar:Element;
    _elementFooter:Element;


    constructor(elementHeroSection:Element, elementMain:Element, elementNavbar:Element, elementFooter:Element){
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;


        this.init();
    }

    private init(){
        this.onHomeBtnClick();
    }

    private onHomeBtnClick(){
        this._homeBtn.addEventListener("click", ()=> this.showHeroSection());
    }

    private showHeroSection = () => {
        this._elementHeroSection.classList.remove("hero-section--hide");
        this._elementMain.classList.add("main--hide");
        this._elementNavbar.classList.add("navbar--hide");
        this._elementFooter.classList.add("footer--hide");
    };

}




class portfolio{




    private getPortfolioItems(){
        return document.querySelectorAll(".portfolio--glass");  
    }

    private getPortfolioDescriptions(){
        return document.querySelectorAll(".item-description");
    }

    private createPortfolioItemPairs(){
        let portfolioPairs = new Map();
        let pItems:NodeListOf<Element> = this.getPortfolioItems();
        let pDescription = this.getPortfolioDescriptions();

        pItems.forEach(element => {
            
        });
    }


}



class heroSection{
    _elementHeroButton:Element;
    _elementHeroSection:Element;
    _elementMain:Element;
    _elementNavbar:Element;
    _elementFooter:Element;
    
    
    constructor(elementHeroButton:Element, elementHeroSection:Element, elementMain:Element, elementNavbar:Element, elementFooter:Element ){
        this._elementHeroButton = elementHeroButton;
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    };

    private init(){
        this.onHeroButtonClick();
    }
    
    private onHeroButtonClick(){
        this._elementHeroButton.addEventListener("click", ()=> this.hideHeroSection());
    }

    private hideHeroSection = () => {
        this._elementHeroSection.classList.add("hero-section--hide");
        this._elementMain.classList.remove("main--hide");
        this._elementNavbar.classList.remove("navbar--hide");
        this._elementFooter.classList.remove("footer--hide");
    };
}




let HeroSection = new heroSection(elementHeroButton, elementHeroSection,elementMain,elementNavbar,elementFooter);
let NavBar = new navBar(elementHeroSection,elementMain,elementNavbar,elementFooter);