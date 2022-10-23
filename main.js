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
  gsap.registerEffect({
    name: 'animateSwiperImage',
    extendTimeline: true,
    effect: (targets, config) => {
      const tl = gsap.timeline();

      tl.to(targets[config.first], { translateX: '-100%', duration: 1 })
        .to(targets[config.second], { translateX: 0, duration: 1 }, 0)
        .to(targets[config.third], { translateX: '100%', duration: 1 }, 0)
        .to(targets[config.third], { opacity: 1, duration: 0 })
        .to(
          targets[config.first],
          {
            opacity: 0,
            duration: 0,
          },
          '<'
        );

      return tl;
    },
  });

  gsap.registerEffect({
    name: 'animateSwiperBar',
    extendTimeline: true,
    effect: (target) => {
      const tl = gsap.timeline();

      tl.to(target, { opacity: 1, duration: 0, ease: 'none' }, 0);
      tl.to(target, { scale: 1, duration: 3, ease: 'linear' }, 0);
      tl.to(target, { opacity: 0, duration: 1, ease: 'none' });
      tl.to(target, { scale: '(0, 1)', duration: 0 });

      return tl;
    },
  });

  const images = gsap.utils.toArray('.reviewers__images__right__image img');
  const bars = gsap.utils.toArray('.reviewers__swiper__pagination__progress');

  const animateInfinitSwiperFirst = gsap.timeline({
    repeat: -1,
    repeatDelay: 10,
    delay: 3,
  });
  const animateInfinitBarFirst = gsap.timeline({
    repeat: -1,
    repeatDelay: 7,
    delay: 0,
  });

  const animateInfinitSwiperSecond = gsap.timeline({
    repeat: -1,
    repeatDelay: 10,
    delay: 7,
  });
  const animateInfinitBarSecond = gsap.timeline({
    repeat: -1,
    repeatDelay: 7,
    delay: 4,
  });

  const animateInfinitSwiperThird = gsap.timeline({
    repeat: -1,
    repeatDelay: 10,
    delay: 11,
  });
  const animateInfinitBarThird = gsap.timeline({
    repeat: -1,
    repeatDelay: 7,
    delay: 8,
  });

  animateInfinitSwiperFirst.animateSwiperImage(images, {
    first: 0,
    second: 1,
    third: 2,
  });
  animateInfinitBarFirst.animateSwiperBar(bars[0]);

  animateInfinitSwiperSecond.animateSwiperImage(images, {
    first: 1,
    second: 2,
    third: 0,
  });
  animateInfinitBarSecond.animateSwiperBar(bars[1]);

  animateInfinitSwiperThird.animateSwiperImage(images, {
    first: 2,
    second: 0,
    third: 1,
  });
  animateInfinitBarThird.animateSwiperBar(bars[2]);
};

const init = () => {
  initMenu();
  initHeader();
  initPurpose();
  initTextButton();
  initReviewers();
};

window.addEventListener('load', () => init());
