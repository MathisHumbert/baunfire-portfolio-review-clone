import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

export function animateTitleIn(target, stagger = 0.05, trigger, start) {
  gsap.to(target, {
    translateY: 0,
    rotate: 0,
    stagger,
    duration: 1.25,
    ease: 'animation-smooth',
    scrollTrigger: {
      trigger,
      start,
    },
  });
}

export function animateTextIn(target, stagger = 0.05, trigger, start) {
  gsap.to(target, {
    translateY: 0,
    opacity: 1,
    stagger,
    ease: 'animation-smooth',
    duration: 0.7,
    scrollTrigger: {
      trigger,
      start,
    },
  });
}

export function animateLineIn(target, trigger, start) {
  gsap.to(target, {
    scale: 1,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
      trigger,
      start,
    },
  });
}

export function animateImageIn(revealTarget, imageTarget, trigger, start) {
  const tl = gsap.timeline({
    ease: 'nav-translate',
  });

  tl.to(revealTarget, { translateY: '-100%', duration: 0.7 }).to(
    imageTarget,
    { scale: 1, duration: 1 },
    0
  );

  ScrollTrigger.create({
    trigger,
    start,
    animation: tl,
  });
}
