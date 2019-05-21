"use strict";
var elementMain = document.querySelector("main");
var elementHeroButton = document.querySelector(".hero-section__button");
var elementHeroSection = document.querySelector(".hero-section");
var elementNavbar = document.querySelector(".navbar");
var elementFooter = document.querySelector(".footer");
elementHeroButton.addEventListener("click", function () { return visibilityChanges(); });
var visibilityChanges = function () {
    showMainSection();
    hideHeroSection();
    showNavbar();
    showFooterSection();
};
var hideHeroSection = function () { return elementHeroSection.classList.add("hero-section--hide"); };
var showMainSection = function () { return elementMain.classList.remove("main--hide"); };
var showNavbar = function () { return elementNavbar.classList.remove("navbar--hide"); };
var showFooterSection = function () { return elementFooter.classList.remove("footer--hide"); };
