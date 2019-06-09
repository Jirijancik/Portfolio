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


    constructor(){
        this.init();
    }

    private init(){
        this.createPortfolioItemPairs();
    }

    private getPortfolioItems(){
        return document.querySelectorAll(".portfolio--glass");  
    }

    private getPortfolioDescriptions(){
        return document.querySelectorAll(".item-description");
    }

    private createPortfolioItemPairs(){
        
        let pItems = this.getPortfolioItems();
        let pDescription = this.getPortfolioDescriptions();

        this.addEventListenersToDescriptions(pItems,pDescription)
    }

    private addEventListenersToDescriptions(pItems:NodeListOf<Element>,pDescription:NodeListOf<Element>){

        let i = 0;

        for(let item of pItems){

            item.addEventListener('mouseenter', e => this.onHover(pDescription[i])) 
            i++;
        }

    }

    private onHover(element:any){
        let pDescription = this.getPortfolioDescriptions();
        pDescription.forEach(item=>{item.classList.remove("visiblex")})
        element.classList.add("visiblex")
    }
}



// function myFunction() {
//     var element = document.getElementById("elem");
//     var delta = (window.pageYOffset)*1;
//     var originx = window.getComputedStyle(element).top;
//     const origin = parseInt(originx.slice(0,-2));
//     let newPosition = 200 + delta;
//     console.log(origin);
//     element.style.top=`${newPosition}px`;
  
   
// }
//   window.onscroll = myFunction;




let HeroSection = new heroSection(elementHeroButton, elementHeroSection,elementMain,elementNavbar,elementFooter);
let NavBar = new navBar(elementHeroSection,elementMain,elementNavbar,elementFooter);
let Portfolio = new portfolio();