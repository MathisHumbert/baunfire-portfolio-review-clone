import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initNavbar(scroll) {
  const main = document.querySelector('main');

  let scrolled = false;
  let lastHeight = 0;

  // scroll.on('scroll', (instance) => {
  //   let navbarHeight = document
  //     .querySelector('.nav__bar')
  //     .getBoundingClientRect().height;

  //   scrolled && (lastHeight = instance.scroll.y);

  //   if (
  //     instance.direction === 'down' &&
  //     instance.scroll.y > navbarHeight &&
  //     !scrolled
  //   ) {
  //     main.classList.add('scrolled');
  //     scrolled = true;
  //   }

  //   if (instance.direction === 'up') {
  //     scrolled = false;
  //   }

  //   if (
  //     instance.direction === 'up' &&
  //     lastHeight - instance.scroll.y > navbarHeight &&
  //     !scrolled
  //   ) {
  //     main.classList.remove('scrolled');
  //   }
  // });

  const sections = document.querySelectorAll('[data-scroll-section]');
  const nav = document.querySelector('.nav');

  sections.forEach((section) => {
    const theme = section.getAttribute('data-theme');
    const tl = gsap.timeline({ duration: 0, ease: 'none', paused: true });

    let bgColor, hamburgerColor, allColor;

    if (theme === 'light') {
      bgColor = '#f6f5ef';
      hamburgerColor = '#f84525';
      allColor = '#1b1b1b';
    }

    if (theme === 'primary') {
      bgColor = '#f84525';
      hamburgerColor = '#eafe07';
      allColor = '#ffffff';
    }

    if (theme === 'dark' || theme === 'secondary') {
      bgColor = '#1b1b1b';
      hamburgerColor = '#eafe07';
      allColor = '#ffffff';
    }

    ScrollTrigger.create({
      trigger: section,
      scroller: '[data-scroll-container]',
      start: 'top top',
      end: 'bottom 50%',
      onEnter: () => {
        gsap
          .timeline()
          .to('.nav__back__color', {
            background: bgColor,
          })
          .to('.nav__left__title', { color: allColor }, '<')
          .to('.nav__bar__line', { background: allColor }, '<')
          .to(
            '.nav__bar__left svg path',
            {
              fill: allColor,
            },
            '<'
          )
          .to('.nav__hamburger__bar', { background: hamburgerColor }, '<');
      },
      onEnterBack: () => {
        gsap
          .timeline()
          .to('.nav__back__color', {
            background: bgColor,
          })
          .to('.nav__left__title', { color: allColor }, '<')
          .to('.nav__bar__line', { background: allColor }, '<')
          .to(
            '.nav__bar__left svg path',
            {
              fill: allColor,
            },
            '<'
          )
          .to('.nav__hamburger__bar', { background: hamburgerColor }, '<');
      },
    });
  });
}
