import {
  animateImageIn,
  animateLineIn,
  animateTextIn,
  animateTitleIn,
} from '../utils/gsapAnimations.js';

export default function initPurpose() {
  const purpose = document.querySelector('.info__image.purpose');
  const imageWrapperTop = purpose.querySelector(
    '.info__image__images__top__wrapper'
  );
  const imageWrapperBottom = purpose.querySelector(
    '.info__image__images__bottom__wrapper'
  );
  const imageRevealTop = imageWrapperTop.querySelector('.image__reveal');
  const imageRevealBottom = imageWrapperBottom.querySelector('.image__reveal');
  const imageTop = imageWrapperTop.querySelector('img');
  const imageBottom = imageWrapperBottom.querySelector('img');

  animateTitleIn(
    '.purpose .info__image__header__title h2, .purpose .info__image__header__title h4 span',
    0,
    '.purpose .info__image__header__title',
    'bottom bottom'
  );

  animateLineIn(
    '.purpose .info__image__header__line',
    '.purpose .info__image__header__title',
    'bottom bottom'
  );

  animateTextIn(
    '.purpose .info__image__container__text p',
    0.1,
    0.7,
    '.purpose .info__image__container__text',
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
