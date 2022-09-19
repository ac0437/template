const main = document.querySelector('main');
const nav = document.querySelector('.mobile-nav');
const navContent = document.querySelector('.nav-content');
const navLogoLink = document.querySelector('.nav-logo .nav-content__link');
const tech = document.querySelector('.tech');
const events = document.querySelector('.events');
const footer = document.querySelector('.footer-content');
const hamburger = document.querySelector('.nav-hamburger__btn');

const display = () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
        document.body.style.overflow = 'hidden';
    } else {
        nav.classList.remove('flex');
        nav.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }

    if(main.classList.contains('blog')) {
        if (!main.classList.contains('bg-clr-primary')) {
            main.classList.add('bg-clr-primary');
            hamburger.classList.add('clr-light');
            navLogoLink.classList.add('clr-light');
        } else {
            main.classList.remove('bg-clr-primary');
            hamburger.classList.remove('clr-light');
            navLogoLink.classList.remove('clr-light')
        }
    }
}

hamburger.addEventListener('click', display);


