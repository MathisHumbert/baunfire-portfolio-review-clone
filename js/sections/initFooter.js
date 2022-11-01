import { animateLineIn, animateTitleIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';

export default function initFooter() {
  const button = document.querySelector('.footer .rounded__button');

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
}
