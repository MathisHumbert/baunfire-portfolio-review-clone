import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');

export default function initHeader(scroll) {
  const header = document.querySelector('.header');

  header.addEventListener('click', () => scroll.scrollTo('#target-purpose'));
  const tl = gsap.timeline();

  tl.from('.header__container__title h1', {
    translateY: '125%',
    rotate: '5deg',
    stagger: 0.2,
    ease: 'animation-smooth',
    duration: 1.25,
  })
    .from(
      '.nav__bar__line',
      { scale: '(0, 1)', duration: 1, ease: 'linear' },
      '<'
    )
    .from(
      '.nav__bar__left, .nav__bar__right',
      {
        translateY: '50%',
        opacity: 0,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '-=1'
    )
    .from(
      '.header__bottom__left, .header__bottom__right',
      {
        translateY: '50%',
        opacity: 0,
        ease: 'animation-smooth',
        duration: 0.7,
      },
      '<'
    );
}
