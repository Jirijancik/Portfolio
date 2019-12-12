/***********************************************
 VARIABLES
***********************************************/


const elementMain = document.querySelector("main");
const elementHeroButton = document.querySelector(".hero-section__button")!;
const elementHeroSection = document.querySelector(".hero-section");
const elementNavbar = document.querySelector(".navbar");
const elementFooter = document.querySelector(".footer");

console.log(elementHeroButton.getBoundingClientRect());

let myChartSkills = <HTMLCanvasElement>document.getElementById('myChartSkills');
let myChartLove = <HTMLCanvasElement>document.getElementById('myChartLove');
var ctxs = myChartSkills.getContext("2d")!;
var ctxl = myChartLove.getContext("2d")!;


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
  _isTouchDevice: Boolean;

  constructor(isTouchDevice: Boolean) {
    this._isTouchDevice = isTouchDevice;
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

      this.addEventListenerToDescrItem(item, descriptionWithDataID);
      i++;
    }
  }

  // Funkce pro získání všech item popisků
  private getPortfolioDescriptions() {
    return document.querySelectorAll(".item-description");
  }

  // Funkce pro pžidání event listeneru jednotlivým popiskům, Rozlišení Pro TOUCH
  private addEventListenerToDescrItem(item: Element, description: Element) {
    let isTouch= isTouchDevice();
    console.log(isTouch);
    if (!isTouch) {
      return item.addEventListener('mouseenter', () => this.onHover(description));
    } else
      return item.addEventListener('touchstart', () => this.onHover(description));
  }

  // Funkce onHover schová všechny popis. a poté zobrazí cílený popisek
  private onHover(element: Element) {
    let pDescription = this.getPortfolioDescriptions();
    pDescription.forEach(item => { item.classList.remove("visible_tooltip") })
    element.classList.add("visible_tooltip")
  }
}






const track = <HTMLElement>document.querySelector('.carousel__track')!;
const previousButton = document.querySelector('.carousel__button--left')!;
const nextButton = document.querySelector('.carousel__button--right')!;
const slides = <HTMLElement[]>Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide:HTMLElement, index:number) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track:HTMLElement, currentSlide:HTMLElement, targetSlide:HTMLElement) =>{
  track.style.transform='translateX(-'+ targetSlide.style.left; + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const hideShowButtons = (slides:Element[], previousButton:Element, nextButton:Element, targetIndex:number) => {
    if(targetIndex == 0){
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(targetIndex === slides.length -1){
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');  
    }
}

nextButton.addEventListener('click', e=> {
  const currentSlide= <HTMLElement>track.querySelector('.current-slide')!;
  const nextSlide= <HTMLElement>currentSlide.nextElementSibling!;
  const nextSlideIndex= slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  hideShowButtons(slides, previousButton, nextButton, nextSlideIndex)
});


previousButton.addEventListener('click', e=> {
    const currentSlide= <HTMLElement>track.querySelector('.current-slide')!;
    const previousSlide= <HTMLElement>currentSlide.previousElementSibling!;
    const previousSlideIndex= slides.findIndex(slide => slide === previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    hideShowButtons(slides, previousButton, nextButton, previousSlideIndex);
});





let heroSection = new HeroSection(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter);
let navBar = new NavBar(elementHeroSection, elementMain, elementNavbar, elementFooter);
let portfolio = new Portfolio(isTouchDevice());


//Funkce pro detekci touch zařízení
function isTouchDevice() {

  if (('ontouchstart' in window)) {
    console.log("istouch");
    return true;
  }
  else
    console.log("isNOTtouch");
  return false;

}

