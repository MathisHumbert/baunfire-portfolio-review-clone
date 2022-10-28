import { animateTitleIn, animateLineIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';
import reviewersSwiper from '../utils/reviewersSwiper.js';

export default function initSecondReviewers() {
  const secondReviewers = document.querySelector('.second__reviewers');
  const textSection = secondReviewers.querySelector('.text__section');

  const button = secondReviewers.querySelector('.rounded__button');

  const headerSection = secondReviewers.querySelector(
    '.reviewers__section__header'
  );

  animateTitleIn(
    '.second__reviewers .text__section__info__subtitle span',
    0.1,
    textSection,
    '50% bottom'
  );

  animateTitleIn(
    '.second__reviewers .text__section__info__title span',
    0.05,
    textSection,
    '50% bottom'
  );

  magneticButton(button);

  animateTitleIn(
    '.second__reviewers .reviewers__section__header h2 span',
    0.05,
    headerSection,
    '50% bottom'
  );

  animateTitleIn(
    '.second__reviewers .reviewers__section__header h4 span',
    0.05,
    headerSection,
    '50% bottom'
  );

  animateLineIn(
    '.second__reviewers .reviewers__section__line',
    headerSection,
    '50% bottom'
  );

  reviewersSwiper(secondReviewers);
}
