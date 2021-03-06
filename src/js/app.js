import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// ===================== Slider Swiper =====================
new Swiper('.services__swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    initialSlide: 2,
    speed: 1000,
    centeredSlides: true,

    navigation: {
        nextEl: '.services__arrow-right',
        prevEl: '.services__arrow-left',
    },

    pagination: {
        el: '.services__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.3,
        },
        1200: {
            slidesPerView: 3,
        },
    }


});

new Swiper('.reviews__swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    initialSlide: 2,
    speed: 1000,
    centeredSlides: true,

    navigation: {
        nextEl: '.reviews__arrow-right',
        prevEl: '.reviews__arrow-left',
    },

    pagination: {
        el: '.reviews__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.3,
        },
        1200: {
            slidesPerView: 3,
        },
    }


});



// ===================== Slider Swiper =====================


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

// ???????????? ????????????
window.addEventListener('scroll', function (e) {
    let positionY = window.pageYOffset;

    if (positionY > 300) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
});

// ?????????????????? ?????????? ???? ?????????????? ???? ????????????
const rootElement = document.documentElement;
buttonTop.addEventListener('click', function (e) {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// ======================= Button Top ======================



// ======================= This Year =======================
let date = new Date();
let thisYear = date.getFullYear();
let thisYearShow = document.querySelector('.this-year');
thisYearShow.insertAdjacentText('afterbegin', thisYear)
// ======================= This Year =======================




