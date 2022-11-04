import { animateLineIn, animateTitleIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';

export default function initFooter(scroll) {
  const button = document.querySelector('.footer .rounded__button');
  const footerLogo = document.querySelector('.footer__bottom__left__logo');

  animateTitleIn(
    '.footer__top__part h2 span',
    0.05,
    '.footer__top__part',
    'top bottom'
  );

  animateLineIn(
    '.footer__bottom__line',
    '.footer__bottom__wrapper',
    'top bottom'
  );

  magneticButton(button);

  footerLogo.addEventListener('click', () => scroll.scrollTo('#target-header'));
}
