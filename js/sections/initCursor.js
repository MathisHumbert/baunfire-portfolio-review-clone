import gsap from 'gsap';

const cursor = document.querySelector('.custom__cursor');
const scrollCursor = document.querySelector('.custom__cursor__scroll svg');
const tableCursor = document.querySelector('.custom__cursor__table h4');
const nav = document.querySelector('.nav');
let theme = document.body.classList;

const lerp = (a, b, n) => {
  return (1 - n) * a + n * b;
};

let lastScrollCursorX = 0;
let lastNavCursorX = 0;
let lastTableCursorX = 0;
let clientX = 0;
let clientY = 0;

export default function initCursor() {
  document.addEventListener('mousemove', (e) => {
    clientX = e.clientX;
    clientY = e.clientY;

    gsap.to(cursor, { left: clientX, top: clientY });

    const target = e.target.classList.value;

    if (
      target === 'header__scroll__trigger' ||
      target === 'title__image__content' ||
      target === 'info__agenda__row' ||
      (target.includes('nav') &&
        !nav.classList.contains('open') &&
        theme.value === 'theme__primary')
    ) {
      cursor.style.background = '#eafe07';
    } else {
      cursor.style.background = '#f84525';
    }

    if (target === 'header__scroll__trigger') {
      lastScrollCursorX = lerp(lastScrollCursorX, clientX, 0.2);

      cursor.className = 'custom__cursor cursor__scroll';

      scrollCursor.style.transform = `rotate(${-(
        lastScrollCursorX - clientX
      )}deg)`;
    } else if (target === 'menu__item__container') {
      let number = e.target.getAttribute('data-number');
      let numberHtml = cursor.querySelector('.custom__cursor__nav h4');

      if (numberHtml.textContent !== number) {
        numberHtml.textContent = number;
      }

      lastNavCursorX = lerp(lastNavCursorX, clientX, 0.2);

      cursor.className = 'custom__cursor cursor__nav';

      numberHtml.style.transform = `rotate(${-(lastNavCursorX - clientX)}deg)`;
    } else if (target === 'info__agenda__row') {
      lastTableCursorX = lerp(lastTableCursorX, clientX, 0.2);

      cursor.className = 'custom__cursor cursor__table';

      tableCursor.style.transform = `rotate(${-(
        lastTableCursorX - clientX
      )}deg)`;
    } else {
      cursor.className = 'custom__cursor';
    }
  });
}
