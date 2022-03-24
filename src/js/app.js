import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/


// =================== Burger settings ======================
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', function (e) {

    burger.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('lock');
});
// =================== Burger settings ======================


// =================== Animation phone ======================
const conectionLogo = document.querySelector('.connection__logo');

function animation() {
    conectionLogo.classList.toggle('animation');
}

function runAnimat() {
    let go = setInterval(() => animation(), 50);
    setTimeout(() => { clearInterval(go); }, 1000);
}

setInterval(() => runAnimat(), 3000);
// ==================== Animation phone ====================


// ======================== Spollers =======================
const spolersTitle = document.querySelectorAll('.block-footer');

for (let p of spolersTitle) {
    p.addEventListener('click', function (e) {
        this.classList.toggle('open')
    });
};
// ======================== Spollers =======================


// ======================= Button Top ======================
const buttonTop = document.querySelector('.top-button');

// скрыть кнопку
window.addEventListener('scroll', function (e) {
    let positionY = window.pageYOffset;

    if (positionY > 300) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
});

// прокрутка вверх по нажатию на кнопку
const rootElement = document.documentElement;
buttonTop.addEventListener('click', function (e) {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// ======================= Button Top ======================