import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/index.scss';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const init = () => {
  initHeader();
  initPurpose();
  initTextReviewers();
};

const initTextReviewers = () => {
  const textSection = document.querySelector('.text__section');

  const textSectionSubTitle = gsap.utils.toArray(
    '.text__section__info__subtitle span'
  );
  const textSectionTitle = gsap.utils.toArray(
    '.text__section__info__title span'
  );

  const button = document.querySelector('.rounded__button');
  const buttonContainer = document.querySelector('.rounded__button__container');
  const buttonText = document.querySelector('.rounded__button__text');

  let diffBound = { x: 0, y: 0 };
  let rootBound, itemBound;
  let scale = 2;
  let tollerance = 10;
  let speed = 0.5;

  button.addEventListener('mouseenter', function (e) {
    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    rootBound = button.getBoundingClientRect();
    itemBound = buttonContainer.getBoundingClientRect();
    diffBound.x = (rootBound.width * scale - rootBound.width) / 2;
    diffBound.y = (rootBound.height * scale - rootBound.height) / 2;
  });

  button.addEventListener('mouseleave', function (e) {
    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    gsap.to([buttonContainer, buttonText], {
      x: 0,
      y: 0,
      ease: 'elastic.out(1.1, .4)',
      duration: 1.2,
    });
  });

  button.addEventListener('mousemove', function (e) {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const maxX = ((rootBound.width - itemBound.width) / 2) * tollerance;
    const maxY = ((rootBound.height - itemBound.height) / 2) * tollerance;

    const newX = gsap.utils.mapRange(
      0,
      rootBound.width * scale,
      -maxX,
      maxX,
      x - rootBound.x + diffBound.x
    );

    const newY = gsap.utils.mapRange(
      0,
      rootBound.height * scale,
      -maxY,
      maxY,
      y - rootBound.y + diffBound.y
    );

    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    gsap.to(buttonContainer, {
      x: newX * 10,
      y: newY * 10,
      ease: 'power3.out',
      duration: speed,
    });

    gsap.to(buttonText, {
      x: newX * 1.5,
      y: newY * 1.5,
      ease: 'power3.out',
      duration: speed,
    });
  });

  gsap.to(textSectionSubTitle, {
    translateY: 0,
    rotate: 0,
    stagger: 0.1,
    ease: 'animation-smooth',
    duration: 1,
    scrollTrigger: {
      trigger: textSection,
      start: '50% bottom',
    },
  });

  gsap.to(textSectionTitle, {
    translateY: 0,
    rotate: 0,
    stagger: 0.05,
    ease: 'animation-smooth',
    duration: 0.7,
    scrollTrigger: {
      trigger: textSection,
      start: '50% bottom',
    },
  });
};

const initPurpose = () => {
  const imageWrapperTop = document.querySelector(
    '.purpose__images__top__wrapper'
  );
  const imageWrapperBottom = document.querySelector(
    '.purpose__images__bottom__wrapper'
  );
  const imageRevealTop = imageWrapperTop.querySelector('.image__reveal');
  const imageRevealBottom = imageWrapperBottom.querySelector('.image__reveal');
  const imageTop = imageWrapperTop.querySelector('img');
  const imageBottom = imageWrapperBottom.querySelector('img');

  gsap.to('.purpose__header__title h2, .purpose__header__title h4 span', {
    translateY: 0,
    rotate: 0,
    ease: 'animation-smooth',
    duration: 0.7,
    scrollTrigger: {
      trigger: '.purpose__header__title',
      start: 'bottom bottom',
    },
  });

  gsap.to('.purpose__header__line', {
    scale: 1,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
      trigger: '.purpose__header__title',
      start: 'bottom bottom',
    },
  });

  gsap.to('.purpose__container__text p', {
    translateY: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'animation-smooth',
    duration: 0.7,
    scrollTrigger: {
      trigger: '.purpose__container__text',
      start: 'bottom bottom',
    },
  });

  const animatiteTopImages = gsap.timeline({
    ease: 'nav-translate',
  });

  const animatiteBottomImages = gsap.timeline({
    ease: 'nav-translate',
  });

  animatiteTopImages
    .to(imageRevealTop, { translateY: '-100%', duration: 0.7 })
    .to(imageTop, { scale: 1, duration: 1 }, 0);

  animatiteBottomImages
    .to(imageRevealBottom, { translateY: '-100%', duration: 0.7 })
    .to(imageBottom, { scale: 1, duration: 1 }, 0);

  ScrollTrigger.create({
    trigger: imageWrapperTop,
    start: '50% bottom',
    animation: animatiteTopImages,
  });

  ScrollTrigger.create({
    trigger: imageWrapperBottom,
    start: '50% bottom',
    animation: animatiteBottomImages,
  });
};

const initHeader = () => {
  const tl = gsap.timeline();

  const headerTitles = gsap.utils.toArray('.header__container__title h1');

  tl.from(headerTitles, {
    translateY: '125%',
    rotate: '5deg',
    stagger: 0.2,
    ease: 'animation-smooth',
    duration: 1.25,
  })
    .from(
      '.nav__bar__line',
      { scale: '(0, 1)', duration: 1, ease: 'linear' },
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
          translateY: '91vh',
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
