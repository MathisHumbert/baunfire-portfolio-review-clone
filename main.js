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

const initReviewers = () => {
  const animateInfinitSwiperFirst = gsap.timeline({
    repeat: -1,
    repeatDelay: 11,
    delay: 3,
  });

  const animateInfinitSwiperSecond = gsap.timeline({
    repeat: -1,
    repeatDelay: 11,
    delay: 7,
  });

  const animateInfinitSwiperThird = gsap.timeline({
    repeat: -1,
    repeatDelay: 11,
    delay: 11,
  });

  const images = gsap.utils.toArray('.reviewers__images__right__image img');

  animateInfinitSwiperFirst
    .to(images[0], { translateX: '-100%', duration: 1 })
    .to(images[1], { translateX: 0, duration: 1 }, 0)
    .to(images[2], { translateX: '100%', duration: 1 }, 0)
    .to(images[2], { opacity: 1, duration: 0 })
    .to(
      images[0],
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );

  animateInfinitSwiperSecond
    .to(images[1], { translateX: '-100%', duration: 1 })
    .to(images[2], { translateX: 0, duration: 1 }, 0)
    .to(images[0], { translateX: '100%', duration: 1 }, 0)
    .to(images[0], { opacity: 1, duration: 0 })
    .to(
      images[1],
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );

  animateInfinitSwiperThird
    .to(images[2], { translateX: '-100%', duration: 1 })
    .to(images[0], { translateX: 0, duration: 1 }, 0)
    .to(images[1], { translateX: '100%', duration: 1 }, 0)
    .to(images[1], { opacity: 1, duration: 0 })
    .to(
      images[2],
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );
};

const init = () => {
  initMenu();
  initHeader();
  initPurpose();
  initTextButton();
  initReviewers();
};

window.addEventListener('load', () => init());
