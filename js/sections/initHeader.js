import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');

export default function initHeader(scroll) {
  const header = document.querySelector('.header');

  header.addEventListener('click', () => scroll.scrollTo('#target-purpose'));
  const tl = gsap.timeline();

  tl.to('.header__container__title h1', {
    translateY: 0,
    rotate: 0,
    stagger: 0.2,
    ease: 'animation-smooth',
    duration: 1.25,
  })
    .to('.nav__bar__line', { scale: 1, duration: 1, ease: 'linear' }, '<')
    .to(
      '.nav__bar__left, .nav__bar__right',
      {
        translateY: 0,
        opacity: 1,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '-=1'
    )
    .to(
      '.header__bottom__left, .header__bottom__right',
      {
        translateY: 0,
        opacity: 1,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '<'
    );
}
