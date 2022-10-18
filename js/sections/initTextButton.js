import { animateTitleIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';

export default function () {
  const textSection = document.querySelector('.text__section');

  const button = document.querySelector('.rounded__button');

  animateTitleIn(
    '.text__section__info__subtitle span',
    0.1,
    textSection,
    '50% bottom'
  );

  animateTitleIn(
    '.text__section__info__title span',
    0.05,
    textSection,
    '50% bottom'
  );

  magneticButton(button);
}
