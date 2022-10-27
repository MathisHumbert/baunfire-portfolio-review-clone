import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles/index.scss';

import initPurpose from './js/sections/initPurpose.js';
import initTextButton from './js/sections/initTextButton.js';
import initHeader from './js/sections/initHeader.js';
import initMenu from './js/sections/initMenu.js';
import initBigTitle from './js/sections/initBigTitle.js';
import initTitleImage from './js/sections/initTitleImage.js';
import initReviewers from './js/sections/initReviewers.js';
import initLocation from './js/sections/initLocation';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const init = () => {
  initMenu();
  initHeader();
  initPurpose();
  initTextButton();
  initReviewers();
  initBigTitle();
  initTitleImage();
  initLocation();
};

window.addEventListener('load', () => init());
