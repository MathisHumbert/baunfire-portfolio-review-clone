import { animateTitleIn, animateLineIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';
import reviewersSwiper from '../utils/reviewersSwiper.js';

export default function initFirstReviewers() {
  const firstReviewers = document.querySelector('.first__reviewers');
  const textSection = firstReviewers.querySelector('.text__section');

  const button = firstReviewers.querySelector('.rounded__button');

  const headerSection = firstReviewers.querySelector(
    '.reviewers__section__header'
  );

  animateTitleIn(
    '.first__reviewers .text__section__info__subtitle span',
    0.1,
    textSection,
    '50% bottom'
  );

  animateTitleIn(
    '.first__reviewers .text__section__info__title span',
    0.05,
    textSection,
    '50% bottom'
  );

  magneticButton(button);

  animateTitleIn(
    '.first__reviewers .reviewers__section__header h2 span',
    0.05,
    headerSection,
    '50% bottom'
  );

  animateTitleIn(
    '.first__reviewers .reviewers__section__header h4 span',
    0.05,
    headerSection,
    '50% bottom'
  );

  animateLineIn(
    '.first__reviewers .reviewers__section__line',
    headerSection,
    '50% bottom'
  );

  reviewersSwiper(firstReviewers);
}
