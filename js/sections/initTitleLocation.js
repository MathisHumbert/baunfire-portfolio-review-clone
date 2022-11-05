import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  animateImageIn,
  animateTitleIn,
  animateTitleInWidthDelay,
} from '../utils/gsapAnimations.js';

gsap.registerPlugin(ScrollTrigger);

export default function initTitleLocation() {
  gsap.registerEffect({
    name: 'animateSwiperImage',
    extendTimeline: true,
    effect: (targets) => {
      const tl = gsap.timeline({ ease: 'animation-smooth' });

      tl.to(targets[0], { translateX: '-100%', duration: 1 })
        .to(targets[1], { translateX: 0, duration: 1 }, 0)
        .to(targets[2], { translateX: '100%', duration: 1 }, 0)
        .to(targets[2], { opacity: 1, duration: 0 })
        .to(
          targets[0],
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

  gsap.registerEffect({
    name: 'animateSwiperText',
    extendTimeline: true,
    effect: (targets) => {
      const tl = gsap.timeline({ ease: 'animation-smooth' });

      const first = targets[0].querySelectorAll('span');
      const second = targets[1].querySelectorAll('span');
      const third = targets[2].querySelectorAll('span');

      tl.to(first, { translateY: '-100%', opacity: 0, duration: 0.4 });
      tl.to(second, { translateY: 0, opacity: 1, duration: 0.4 }, '-=0.3');
      tl.to(third, { translateY: '100%', duration: 0 });

      return tl;
    },
  });

  const imageRevealLeft = document.querySelector(
    '.title__location__swiper__images__left .image__reveal'
  );

  const imageRevealMiddle = document.querySelector(
    '.title__location__swiper__images__middle .image__reveal'
  );

  const imageRevealRight = document.querySelector(
    '.title__location__swiper__images__right .image__reveal'
  );

  const imagesWrapper = document.querySelector(
    '.title__location__swiper__images__middle'
  );
  const leftImages = gsap.utils.toArray(
    '.title__location__swiper__images__left img'
  );
  const middleImages = gsap.utils.toArray(
    '.title__location__swiper__images__middle img'
  );
  const rightImages = gsap.utils.toArray(
    '.title__location__swiper__images__right img'
  );
  const bars = gsap.utils.toArray(
    '.title__location__swiper__pagination__progress'
  );
  const texts = gsap.utils.toArray('.title__location__swiper__infos__title');
  const leftArrow = document.querySelector(
    '.title__location__swipper__left__arrow'
  );
  const rightArrow = document.querySelector(
    '.title__location__swipper__right__arrow'
  );

  const titleContainer = document.querySelectorAll(
    '.title__location__text__part__text'
  )[0];
  const firstTitle = '.title__location__text__part__text h4 span';
  const secondTitle = '.title__location__text__part__text h2 span';

  animateTitleIn(firstTitle, 0.05, titleContainer, 'bottom bottom');

  animateTitleInWidthDelay(
    secondTitle,
    0.05,
    0.2,
    titleContainer,
    'bottom bottom'
  );

  animateImageIn(
    [imageRevealLeft, imageRevealMiddle, imageRevealRight],
    [leftImages[0], middleImages[0], rightImages[0]],
    imagesWrapper,
    '50% bottom'
  );

  const animateInfinitSwiperFirst = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 3,
    })
    .animateSwiperImage([leftImages[0], leftImages[1], leftImages[2]])
    .animateSwiperImage([middleImages[0], middleImages[1], middleImages[2]], 0)
    .animateSwiperImage([rightImages[0], rightImages[1], rightImages[2]], 0)
    .animateSwiperText([texts[0], texts[1], texts[2]], '-=1');
  const animateInfinitSwiperSecond = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 7,
    })
    .animateSwiperImage([[leftImages[1], leftImages[2], leftImages[3]]])
    .animateSwiperImage(
      [[middleImages[1], middleImages[2], middleImages[3]]],
      0
    )
    .animateSwiperImage([[rightImages[1], rightImages[2], rightImages[3]]], 0)
    .animateSwiperText([texts[1], texts[2], texts[3]], '-=1');
  const animateInfinitSwiperThird = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 11,
    })
    .animateSwiperImage([[leftImages[2], leftImages[3], leftImages[0]]])
    .animateSwiperImage(
      [[middleImages[2], middleImages[3], middleImages[0]]],
      0
    )
    .animateSwiperImage([[rightImages[2], rightImages[3], rightImages[0]]], 0)
    .animateSwiperText([texts[2], texts[3], texts[0]], '-=1');

  const animateInfinitSwiperFourth = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 15,
    })
    .animateSwiperImage([[leftImages[3], leftImages[0], leftImages[1]]])
    .animateSwiperImage(
      [[middleImages[3], middleImages[0], middleImages[1]]],
      0
    )
    .animateSwiperImage([[rightImages[3], rightImages[0], rightImages[1]]], 0)
    .animateSwiperText([texts[3], texts[0], texts[1]], '-=1');

  const animateInfinitBarTextFirst = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 11,
      delay: 0,
    })
    .animateSwiperBar(bars[0]);
  const animateInfinitBarTextSecond = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 11,
      delay: 4,
    })
    .animateSwiperBar(bars[1]);
  const animateInfinitBarTextThird = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 11,
      delay: 8,
    })
    .animateSwiperBar(bars[2]);
  const animateInfinitBarTextFourth = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 11,
      delay: 12,
    })
    .animateSwiperBar(bars[3]);

  const main = gsap.timeline({ paused: true });

  main
    .add(animateInfinitSwiperFirst, 0)
    .add(animateInfinitBarTextFirst, 0)
    .add(animateInfinitSwiperSecond, 0)
    .add(animateInfinitBarTextSecond, 0)
    .add(animateInfinitSwiperThird, 0)
    .add(animateInfinitBarTextThird, 0)
    .add(animateInfinitSwiperFourth, 0)
    .add(animateInfinitBarTextFourth, 0);

  leftArrow.addEventListener('mouseenter', () => main.pause());
  rightArrow.addEventListener('mouseenter', () => main.pause());
  leftArrow.addEventListener('mouseleave', () => main.play());
  rightArrow.addEventListener('mouseleave', () => main.play());

  ScrollTrigger.create({
    trigger: imagesWrapper,
    start: '50% bottom',
    end: 'bottom top',
    scroller: '[data-scroll-container]',
    onEnter: () => {
      main.play();
    },
    onLeave: () => {
      main.pause();
    },
    onEnterBack: () => {
      main.play();
    },
    onLeaveBack: () => {
      main.pause();
    },
  });
}
