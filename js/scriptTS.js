"use strict";
var elementMain = document.querySelector("main");
var elementHeroButton = document.querySelector(".hero-section__button");
var elementHeroSection = document.querySelector(".hero-section");
var elementNavbar = document.querySelector(".navbar");
var elementFooter = document.querySelector(".footer");
//need to make a main class - T0
var mainPage = /** @class */ (function () {
    function mainPage(navBar) {
        this._navBar = navBar;
    }
    return mainPage;
}());
var navBar = /** @class */ (function () {
    function navBar(elementHeroSection, elementMain, elementNavbar, elementFooter) {
        var _this = this;
        this._homeBtn = document.querySelector(".navbar__nav__item.home-button");
        this.showHeroSection = function () {
            _this._elementHeroSection.classList.remove("hero-section--hide");
            _this._elementMain.classList.add("main--hide");
            _this._elementNavbar.classList.add("navbar--hide");
            _this._elementFooter.classList.add("footer--hide");
        };
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    }
    navBar.prototype.init = function () {
        this.onHomeBtnClick();
    };
    navBar.prototype.onHomeBtnClick = function () {
        var _this = this;
        this._homeBtn.addEventListener("click", function () { return _this.showHeroSection(); });
    };
    return navBar;
}());
var heroSection = /** @class */ (function () {
    function heroSection(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter) {
        var _this = this;
        this.hideHeroSection = function () {
            _this._elementHeroSection.classList.add("hero-section--hide");
            _this._elementMain.classList.remove("main--hide");
            _this._elementNavbar.classList.remove("navbar--hide");
            _this._elementFooter.classList.remove("footer--hide");
        };
        this._elementHeroButton = elementHeroButton;
        this._elementHeroSection = elementHeroSection;
        this._elementMain = elementMain;
        this._elementNavbar = elementNavbar;
        this._elementFooter = elementFooter;
        this.init();
    }
    ;
    heroSection.prototype.init = function () {
        this.onHeroButtonClick();
    };
    heroSection.prototype.onHeroButtonClick = function () {
        var _this = this;
        this._elementHeroButton.addEventListener("click", function () { return _this.hideHeroSection(); });
    };
    return heroSection;
}());
var HeroSection = new heroSection(elementHeroButton, elementHeroSection, elementMain, elementNavbar, elementFooter);
var NavBar = new navBar(elementHeroSection, elementMain, elementNavbar, elementFooter);
