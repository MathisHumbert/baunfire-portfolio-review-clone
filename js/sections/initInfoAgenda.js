import {
  animateTitleIn,
  animateLineIn,
  animateTextIn,
} from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';

export default function initInfoAgenda() {
  const infoAgenda = document.querySelector('.info__agenda');
  const headerSection = document.querySelector(
    '.info__agenda__container__header'
  );
  const agendaRows = document.querySelectorAll('.info__agenda__row');
  const textSection = infoAgenda.querySelector('.text__section');
  const button = infoAgenda.querySelector('.rounded__button');

  animateTitleIn(
    '.info__agenda__header__title h2 span',
    0.05,
    headerSection,
    'bottom bottom'
  );

  animateTitleIn(
    '.info__agenda__header__title h4 span',
    0.05,
    headerSection,
    'bottom bottom'
  );

  animateTextIn(
    '.info__agenda__container__text p',
    0.1,
    0.7,
    '.info__agenda__container__text',
    'bottom bottom'
  );

  animateLineIn('.info__agenda__header__line', headerSection, 'bottom bottom');

  agendaRows.forEach((row) => {
    const titles = row.querySelectorAll('h4 span');
    const line = row.querySelector('.info__agenda__line');
    console.log(titles);

    animateTitleIn(titles, 0, row, 'bottom bottom');
    animateLineIn(line, row, 'bottom bottom');
  });

  animateTitleIn(
    '.info__agenda .text__section__info__subtitle span',
    0.1,
    textSection,
    '50% bottom'
  );

  animateTitleIn(
    '.info__agenda .text__section__info__title span',
    0.05,
    textSection,
    '50% bottom'
  );

  magneticButton(button);
}
