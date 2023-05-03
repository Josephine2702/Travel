const slidesWrapper = document.querySelector(".popular__slider-wrapper"), mobileWrapper = document.querySelector(".popular__slider_mobile-wrapper"), slidesField = document.querySelector(".popular__slider-inner"), slides = document.querySelectorAll(".popular__slide"), carousel = document.querySelector(".carousel-indicators"), dots = document.querySelectorAll(".dot"), next = document.querySelector(".next"), width = window.getComputedStyle(slidesWrapper).width, widthMobile = window.getComputedStyle(mobileWrapper).width, headerLoginBtn = document.querySelector(".header__btn-container"), overlay = document.querySelector(".popup-overlay"), logInPopup = document.querySelector(".login-popup-container"), singUpPopup = document.querySelector(".singup-popup-container"), register = document.querySelector(".register"), login = document.querySelector("#login");
console.log(widthMobile);
console.log(width);
let slideIndex = 1;
let offset = 0;
function addActiveStyle(e) {
    const target = e.target;
    let current = document.querySelector(".active");
    current.classList.remove("active");
    target.classList.add("active");
}
function navigateDots(e) {
    const slideTo = e.target.getAttribute("data-slide-to");
    slideIndex = slideTo;
    offset = +width.slice(0, width.length - 2) / 2 * (slideTo - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideTo == 0) slidesField.style.transform = "translateX(698px)";
    addActiveStyle(e);
}
dots.forEach((dot)=>{
    dot.addEventListener("click", (e)=>{
        navigateDots(e);
    });
});
function displayLoginPopap() {
    singUpPopup.classList.add("hide");
    overlay.classList.remove("hide");
    logInPopup.classList.remove("hide");
}
function displaySighUpPopap() {
    logInPopup.classList.add("hide");
    singUpPopup.classList.remove("hide");
}
function closePopup(e) {
    const target = e.target;
    if (target.classList.contains("popup-overlay")) {
        singUpPopup.classList.add("hide");
        overlay.classList.add("hide");
        logInPopup.classList.add("hide");
    }
}
headerLoginBtn.addEventListener("click", displayLoginPopap);
register.addEventListener("click", displaySighUpPopap);
login.addEventListener("click", displayLoginPopap);
overlay.addEventListener("click", closePopup);
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
function closeMenu() {
    navbarNav.classList.remove("active");
    navbarNav.classList.add("hide");
    navbarToggler.style.display = "block";
}
function showMenu() {
    navbarToggler.style.display = "none";
    navbarNav.classList.remove("hide");
    navbarNav.classList.add("active");
}
navbarToggler.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);

//# sourceMappingURL=index.672d4772.js.map
