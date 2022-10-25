import {
  animateTextIn,
  animateTitleIn,
  animateTitleInWidthDelay,
} from '../utils/gsapAnimations.js';

export default function initBigTitle() {
  const titleParts = document.querySelectorAll('.big__title__part');
  const firstSmallHeading = titleParts[0].querySelectorAll(
    '.big__title__part__text h4 span'
  );
  const firstBigHeading = titleParts[0].querySelectorAll(
    '.big__title__part__text h2 span'
  );
  const secondSmallHeading = document.querySelector(
    '.big__title__last__part h4'
  );
  const secondBigHeading = titleParts[1].querySelectorAll(
    '.big__title__part__text h2 span'
  );

  animateTitleIn(firstSmallHeading, 0.05, titleParts[0], '50% bottom');

  animateTitleInWidthDelay(
    firstBigHeading,
    0.05,
    0.5,
    titleParts[0],
    '50% bottom'
  );

  animateTitleIn(secondBigHeading, 0.05, titleParts[1], '50% bottom');

  animateTextIn(
    secondSmallHeading,
    0.05,
    1.25,
    secondSmallHeading,
    'bottom bottom'
  );
}
