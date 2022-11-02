import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LocomotiveScroll from 'locomotive-scroll';

import './styles/index.scss';

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

const init = () => {
  initMenu(locoScroll);
  initButtons(locoScroll);
  initHeader(locoScroll);
  initCursor();
  initNavbar(locoScroll);
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
  initFooter();
};

window.addEventListener('load', () => init());
