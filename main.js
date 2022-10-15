import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import './styles/index.scss';

gsap.registerPlugin(CustomEase);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const init = () => {
  initHeader();
};

const initHeader = () => {
  const tl = gsap.timeline();

  const headerTitles = gsap.utils.toArray('.header__container__title h1');

  console.log(headerTitles);

  tl.from(headerTitles, {
    translateY: '125%',
    rotate: '5deg',
    stagger: 0.2,
    ease: 'animation-smooth',
    duration: 1.25,
  })
    .from(
      '.nav__bar',
      { scale: '(0, 1)', transformOrigin: 'left top', duration: 1.5 },
      '<'
    )
    .from(
      '.nav__bar__left, .nav__bar__right',
      {
        translateY: '50%',
        opacity: 0,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '-=1'
    )
    .from(
      '.header__bottom__left, .header__bottom__right',
      {
        translateY: '50%',
        opacity: 0,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '<'
    );
};

window.addEventListener('load', () => init());

const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__right__hamburger');

const navLeftTitle = document.querySelector('.nav__left__title');
const navLeftImg = document.querySelector('.nav__left__img');
const navBarLine = document.querySelector('.nav__bar__line');

navButton.addEventListener('click', (e) => {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    const animateMenuOut = gsap.timeline({ ease: 'none', duration: 0 });

    animateMenuOut
      .to(
        gsap.utils.toArray('.menu__item__text').reverse(),
        {
          translateY: '100%',
          rotate: '5deg',
          stagger: 0.05,
          duration: 0.6,
          ease: 'animation-smooth',
        },
        0
      )
      .to(
        '.nav__bottom__left, .nav__bottom__right',
        {
          translateY: '-50%',
          opacity: 0,
          ease: 'animation-smooth',
          duration: 0.7,
        },
        0
      )
      .to(
        '.nav__back',
        {
          translateY: 0,
          duration: 1.2,
          ease: 'nav-translate',
        },
        0
      )
      .to('.nav__back__color', {
        background: '#f84525',
      })
      .to(navLeftTitle, { color: '#FFFFFF' }, '<')
      .to(navBarLine, { background: '#FFFFFF' }, '<')
      .to(
        navLeftImg,
        {
          filter:
            'invert(99%) sepia(94%) saturate(4%) hue-rotate(224deg) brightness(105%) contrast(100%)',
        },
        '<'
      )
      .to('.nav__hamburger__bar', { background: '#eafe07' }, '<');
  } else {
    nav.classList.add('open');
    const animateMenuIn = gsap.timeline({ ease: 'none', duration: 0 });

    animateMenuIn
      .to(navLeftTitle, { color: '#1B1B1B' }, 0)
      .to(navBarLine, { background: '#1B1B1B' }, 0)
      .to(
        navLeftImg,
        {
          filter:
            'invert(0%) sepia(3%) saturate(14%) hue-rotate(7deg) brightness(87%) contrast(79%)',
        },
        0
      )
      .to('.nav__hamburger__bar', { background: '#1B1B1B' }, 0)
      .to(
        '.nav__back',
        {
          translateY: '100vh',
          duration: 1.2,
          ease: 'nav-translate',
        },
        0
      )
      .to('.nav__back__color', { background: '#eafe07' }, 0)
      .to(
        gsap.utils.toArray('.menu__item__text'),
        {
          translateY: 0,
          rotate: 0,
          stagger: 0.05,
          ease: 'animation-smooth',
          duration: 0.6,
        },
        '-=0.8'
      )
      .to(
        '.nav__bottom__left, .nav__bottom__right',
        {
          translateY: 0,
          opacity: 1,
          ease: 'animation-smooth',
          duration: 0.7,
        },
        '-=0.7'
      );
  }
});
