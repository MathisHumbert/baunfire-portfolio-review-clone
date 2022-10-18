import {
  animateImageIn,
  animateLineIn,
  animateTextIn,
  animateTitleIn,
} from '../utils/gsapAnimations.js';

export default function initPurpose() {
  const imageWrapperTop = document.querySelector(
    '.purpose__images__top__wrapper'
  );
  const imageRevealTop = imageWrapperTop.querySelector('.image__reveal');
  const imageTop = imageWrapperTop.querySelector('img');
  const imageWrapperBottom = document.querySelector(
    '.purpose__images__bottom__wrapper'
  );
  const imageRevealBottom = imageWrapperBottom.querySelector('.image__reveal');
  const imageBottom = imageWrapperBottom.querySelector('img');

  animateTitleIn(
    '.purpose__header__title h2, .purpose__header__title h4 span',
    0,
    '.purpose__header__title',
    'bottom bottom'
  );

  animateLineIn(
    '.purpose__header__line',
    '.purpose__header__title',
    'bottom bottom'
  );

  animateTextIn(
    '.purpose__container__text p',
    0.1,
    '.purpose__container__text',
    'bottom bottom'
  );

  animateImageIn(imageRevealTop, imageTop, imageWrapperTop, '50% bottom');

  animateImageIn(
    imageRevealBottom,
    imageBottom,
    imageWrapperBottom,
    '50% bottom'
  );
}
