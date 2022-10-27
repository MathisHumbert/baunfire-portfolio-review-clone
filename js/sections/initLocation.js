import {
  animateImageIn,
  animateLineIn,
  animateTextIn,
  animateTitleIn,
} from '../utils/gsapAnimations.js';

export default function initLocation() {
  const location = document.querySelector('.info__image.location');
  const imageWrapperTop = location.querySelector(
    '.info__image__images__top__wrapper'
  );
  const imageWrapperBottom = location.querySelector(
    '.info__image__images__bottom__wrapper'
  );
  const imageRevealTop = imageWrapperTop.querySelector('.image__reveal');
  const imageRevealBottom = imageWrapperBottom.querySelector('.image__reveal');
  const imageTop = imageWrapperTop.querySelector('img');
  const imageBottom = imageWrapperBottom.querySelector('img');

  animateTitleIn(
    '.location .info__image__header__title h2 span, .location .info__image__header__title h4 span',
    0,
    '.location .info__image__container__header',
    'bottom bottom'
  );

  animateLineIn(
    '.location .info__image__header__line',
    '.location .info__image__container__header',
    'bottom bottom'
  );

  animateTextIn(
    '.location .info__image__container__text p',
    0.1,
    0.7,
    '.location .info__image__container__text',
    '50% bottom'
  );

  animateImageIn(imageRevealTop, imageTop, imageWrapperTop, '20% bottom');

  animateImageIn(
    imageRevealBottom,
    imageBottom,
    imageWrapperBottom,
    '20% bottom'
  );
}
