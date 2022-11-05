import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';

import LocomotiveScroll from 'locomotive-scroll';

import './styles/index.scss';
import './styles/base/font.scss';

import initPurpose from './js/sections/initPurpose.js';
import initMenu from './js/sections/initMenu.js';
import initHeader from './js/sections/initHeader.js';
import initBigTitle from './js/sections/initBigTitle.js';
import initFirstTitleImage from './js/sections/initFirstTitleImage.js';
import initSecondTitleImage from './js/sections/initSecondTitleImage.js';
import initLocation from './js/sections/initLocation.js';
import initFirstReviewers from './js/sections/initFirstReviewers.js';
import initSecondReviewers from './js/sections/initSecondReviewers.js';
import initTitleLocation from './js/sections/initTitleLocation.js';
import initInfoAgenda from './js/sections/initInfoAgenda.js';
import initSubmit from './js/sections/initSubmit.js';
import initFooter from './js/sections/initFooter.js';
import initButtons from './js/sections/initButtons.js';
import initCursor from './js/sections/initCursor.js';
import initNavbar from './js/sections/initNavbar.js';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1,
  getDirection: true,
  mobile: {
    breakpoint: 0,
    smooth: true,
    multiplier: 1,
    getDirection: true,
  },
  tablet: {
    breakpoint: 0,
    smooth: true,
    multiplier: 1,
    getDirection: true,
  },
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform
    ? 'transform'
    : 'fixed',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

ScrollTrigger.refresh();

const initSection = () => {
  initMenu(locoScroll);
  initButtons(locoScroll);
  initHeader(locoScroll);
  initNavbar(locoScroll);
  initCursor();
  initPurpose();
  initFirstReviewers();
  initBigTitle();
  initFirstTitleImage();
  initLocation();
  initSecondReviewers();
  initTitleLocation();
  initSecondTitleImage();
  initInfoAgenda();
  initSubmit();
  initFooter(locoScroll);
};

const init = () => {
  const container = document.body;
  const imgLoaded = imagesLoaded(container);

  imgLoaded.on('done', () => {
    const tl = gsap.timeline();
    tl.to('.loading__logo__inner', {
      y: 0,
      rotate: '-5deg',
      ease: 'animation-smooth',
    })
      .to('.loading__logo__inner svg path', {
        opacity: 0,
        stagger: 0.01,
        duration: 0.3,
        ease: 'animation-smooth',
      })
      .to('.loading__logo__inner svg path', {
        opacity: 1,
        stagger: 0.01,
        duration: 0.3,
        ease: 'animation-smooth',
      });
    tl.to('.loading__logo__inner', { y: '-160%', rotate: '0deg' }).to(
      '.loading__screen',
      {
        x: 0,
        y: '-130%',
        rotate: 0,
        duration: 1.25,
        ease: 'nav-translate',
        onComplete: () => initSection(),
      },
      '<'
    );
  });
};

init();
