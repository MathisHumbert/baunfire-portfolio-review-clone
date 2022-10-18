import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles/index.scss';

import magneticButton from './js/utils/magneticButton.js';
import {
  animateTitleIn,
  animateLineIn,
  animateTextIn,
  animateImageIn,
} from './js/utils/gsapAnimations.js';

import initPurpose from './js/sections/initPurpose.js';
import initTextButton from './js/sections/initTextButton.js';
import initHeader from './js/sections/initHeader.js';
import initMenu from './js/sections/initMenu.js';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const init = () => {
  initMenu();
  initHeader();
  initPurpose();
  initTextButton();
};

window.addEventListener('load', () => init());
