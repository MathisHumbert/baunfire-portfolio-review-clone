import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  animateTitleIn,
  animateTitleInWidthDelay,
} from '../utils/gsapAnimations.js';

gsap.registerPlugin(ScrollTrigger);

export default function initFirstTitleImage() {
  const video = document.querySelector(
    '.title__image.first .title__image__visual__overlay video'
  );
  animateTitleIn(
    '.title__image.first .title__image__content__container h2 span',
    0.05,
    ' .title__image.first .title__image__content__container',
    '50% bottom'
  );

  animateTitleInWidthDelay(
    '.title__image.first .title__images__content__title h4 span',
    0.05,
    0.3,
    '.title__image.first .title__image__content__container',
    '50% bottom'
  );

  ScrollTrigger.create({
    trigger: '.title__image.first',
    start: 'top bottom',
    end: 'bottom top',
    scroller: '[data-scroll-container]',
    onEnter: () => {
      video.play();
    },
    onLeave: () => {
      video.pause();
    },
    onEnterBack: () => {
      video.play();
    },
    onLeaveBack: () => {
      video.pause();
    },
  });
}
