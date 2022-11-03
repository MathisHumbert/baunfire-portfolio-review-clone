import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initNavbar(scroll) {
  const main = document.querySelector('main');

  let scrolled = false;
  let lastHeight = 0;

  scroll.on('scroll', (instance) => {
    let navbarHeight = document
      .querySelector('.nav__bar')
      .getBoundingClientRect().height;

    scrolled && (lastHeight = instance.scroll.y);

    if (
      instance.direction === 'down' &&
      instance.scroll.y > navbarHeight &&
      !scrolled
    ) {
      main.classList.add('scrolled');
      scrolled = true;
    }

    if (instance.direction === 'up') {
      scrolled = false;
    }

    if (
      instance.direction === 'up' &&
      lastHeight - instance.scroll.y > navbarHeight &&
      !scrolled
    ) {
      main.classList.remove('scrolled');
    }
  });

  const sections = document.querySelectorAll('[data-scroll-section]');
  const nav = document.querySelector('.nav');

  sections.forEach((section) => {
    const theme = section.getAttribute('data-theme');
    ScrollTrigger.create({
      trigger: section,
      scroller: '[data-scroll-container]',
      start: 'top top',
      end: 'bottom 50%',
      onEnter: () => (nav.className = `nav theme__${theme}`),
      onEnterBack: () => (nav.className = `nav theme__${theme}`),
    });
  });
}
