import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const init = () => {
  initMenu();
  initHeader();
  initPurpose();
  initFirstReviewers();
  initBigTitle();
  initFirstTitleImage();
  initLocation();
  initSecondReviewers();
  initTitleLocation();
  initSecondTitleImage();
  initInfoAgenda();
};

window.addEventListener('load', () => init());
