import { gsap } from 'gsap';
import './styles/index.scss';

const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__right__hamburger');

const navLeftTitle = document.querySelector('.nav__left__title');
const navLeftImg = document.querySelector('.nav__left__img');
const navBarLine = document.querySelector('.nav__bar__line');

navButton.addEventListener('click', (e) => {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    const animateMenuOut = gsap.timeline({ ease: 'none', duration: 0 });

    animateMenuOut
      .to(
        gsap.utils.toArray('.menu__item__text').reverse(),
        {
          translateY: '100%',
          rotate: '5deg',
          stagger: 0.1,
          ease: 'power2.easeInOut',
        },
        0
      )
      .to(
        '.nav__back',
        {
          translateY: 0,
          duration: 1.2,
          ease: 'power2.easeInOut',
        },
        '0.2'
      )

      .to('.nav__back__color', {
        background: '#f84525',
      })
      .to(navLeftTitle, { color: '#FFFFFF' }, '<')
      .to(navBarLine, { background: '#FFFFFF' }, '<')
      .to(
        navLeftImg,
        {
          filter:
            'invert(99%) sepia(94%) saturate(4%) hue-rotate(224deg) brightness(105%) contrast(100%)',
        },
        '<'
      )
      .to('.nav__hamburger__bar', { background: '#eafe07' }, '<');
  } else {
    nav.classList.add('open');
    const animateMenuIn = gsap.timeline({
      duration: 0.25,
      ease: 'power2.easeInOut',
    });

    animateMenuIn
      .to(navLeftTitle, { color: '#1B1B1B' }, 0)
      .to(navBarLine, { background: '#1B1B1B' }, 0)
      .to(
        navLeftImg,
        {
          filter:
            'invert(0%) sepia(3%) saturate(14%) hue-rotate(7deg) brightness(87%) contrast(79%)',
        },
        0
      )
      .to('.nav__hamburger__bar', { background: '#1B1B1B' }, 0)
      .to(
        '.nav__back',
        {
          translateY: '100vh',
          duration: 1.2,
          ease: 'power1.easeInOut',
        },
        0
      )
      .to('.nav__back__color', { background: '#eafe07' }, 0)
      .to(
        gsap.utils.toArray('.menu__item__text'),
        { translateY: 0, rotate: 0, stagger: 0.1, ease: 'power2.easeInOut' },
        '-=1'
      );
  }
});
