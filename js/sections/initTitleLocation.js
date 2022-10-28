import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initTitleLocation() {
  gsap.registerEffect({
    name: 'animateSwiperImage',
    extendTimeline: true,
    effect: (targets) => {
      const tl = gsap.timeline({ ease: 'animation-smooth' });

      tl.to(targets[0], { translateX: '-100%', duration: 1 }) // lefft
        .to(targets[1], { translateX: 0, duration: 1 }, 0) // midldle
        .to(targets[2], { translateX: '100%', duration: 1 }, 0) // right
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

  const container = document.querySelector('.title__location');
  // const imageRevealLeft = container.querySelector(
  //   '.reviewers__section__images__left .image__reveal'
  // );
  // const imageRevealRight = container.querySelector(
  //   '.reviewers__section__images__right .image__reveal'
  // );
  // const imagesWrapper = container.querySelector('.reviewers__section__images');

  const leftImages = gsap.utils.toArray(
    '.title__location__swiper__images__left img'
  );

  const middleImages = gsap.utils.toArray(
    '.title__location__swiper__images__middle img'
  );
  const rightImages = gsap.utils.toArray(
    '.title__location__swiper__images__right img'
  );

  // const bars = container.querySelectorAll(
  //   '.reviewers__swiper__pagination__progress'
  // );
  // const texts = container.querySelectorAll('.reviewers__images__infos__title');

  // animateImageIn(
  //   [imageRevealLeft, imageRevealRight],
  //   [videos[0], images[0]],
  //   imagesWrapper,
  //   '50% bottom'
  // );

  const animateInfinitSwiperFirst = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 3,
    })
    .animateSwiperImage([middleImages[0], middleImages[1], middleImages[2]]);
  //   .animateSwiperText([texts[0], texts[1], texts[2]], '-=1');
  const animateInfinitSwiperSecond = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 7,
    })
    .animateSwiperImage([[middleImages[1], middleImages[2], middleImages[3]]]);
  //   .animateSwiperText([texts[1], texts[2], texts[0]], '-=1');
  const animateInfinitSwiperThird = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 11,
    })
    .animateSwiperImage([[middleImages[2], middleImages[3], middleImages[0]]]);
  // .animateSwiperText([texts[2], texts[0], texts[1]], '-=1');

  const animateInfinitSwiperFourth = gsap
    .timeline({
      repeat: -1,
      repeatDelay: 14,
      delay: 15,
    })
    .animateSwiperImage([[middleImages[3], middleImages[0], middleImages[1]]]);
  // .animateSwiperText([texts[2], texts[0], texts[1]], '-=1');

  // const animateInfinitBarTextFirst = gsap
  //   .timeline({
  //     repeat: -1,
  //     repeatDelay: 7,
  //     delay: 0,
  //   })
  //   .animateSwiperBar(bars[0]);
  // const animateInfinitBarTextSecond = gsap
  //   .timeline({
  //     repeat: -1,
  //     repeatDelay: 7,
  //     delay: 4,
  //   })
  //   .animateSwiperBar(bars[1]);
  // const animateInfinitBarTextThird = gsap
  //   .timeline({
  //     repeat: -1,
  //     repeatDelay: 7,
  //     delay: 8,
  //   })
  //   .animateSwiperBar(bars[2]);

  const main = gsap.timeline();

  main
    .add(animateInfinitSwiperFirst, 0)
    .add(animateInfinitSwiperSecond, 0)
    .add(animateInfinitSwiperThird, 0)
    .add(animateInfinitSwiperFourth, 0);
  // .add(animateInfinitBarTextFirst, 0)
  // .add(animateInfinitBarTextSecond, 0)
  // .add(animateInfinitBarTextThird, 0);

  // ScrollTrigger.create({
  //   trigger: imagesWrapper,
  //   start: '50% bottom',
  //   end: 'bottom top',
  //   onEnter: () => {
  //     main.play();
  //   },
  //   onLeave: () => {
  //     main.pause();
  //   },
  //   onEnterBack: () => {
  //     main.play();
  //   },
  //   onLeaveBack: () => {
  //     main.pause();
  //   },
  // });
}
