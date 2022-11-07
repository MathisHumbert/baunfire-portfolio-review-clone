import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);

CustomEase.create('animation-smooth', '0.7, 0, 0.3, 1');
CustomEase.create('nav-translate', '.9, 0, .1, 1');

const getColor = (type, theme) => {
  if (theme === 'theme__light') {
    if (type === 'bgColor') {
      return '#f6f5ef';
    }
    if (type === 'hamburgerColor') {
      return '#f84525';
    }
    if (type === 'allColor') {
      return '#1b1b1b';
    }
  } else if (theme === 'theme__dark' || theme === 'theme__secondary') {
    if (type === 'bgColor') {
      return '#1b1b1b';
    }
    if (type === 'hamburgerColor') {
      return '#eafe07';
    }
    if (type === 'allColor') {
      return '#ffffff';
    }
  } else {
    if (type === 'bgColor') {
      return '#f84525';
    }
    if (type === 'hamburgerColor') {
      return '#eafe07';
    }
    if (type === 'allColor') {
      return '#ffffff';
    }
  }
};

export default function initMenu(scroll) {
  const nav = document.querySelector('.nav');
  const navButton = document.querySelector('.nav__right__hamburger');
  const menuLinks = document.querySelectorAll('.menu__item__container');

  menuLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute('data-target'));
    link.addEventListener('click', () => {
      navButton.click();
      scroll.scrollTo(section);
    });
  });

  navButton.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');

      gsap.killTweensOf(
        '.menu__item__text, .nav__bottom__left, .nav__bottom__right, nav__back, .nav__back__color, .nav__left__title, .nav__bar__line, .nav__left__img, .nav__hamburger__bar'
      );

      const animateMenuOut = gsap.timeline({
        defaults: { ease: 'none', duration: 0 },
      });
      // cursor.style.background = '#eafe07';

      animateMenuOut
        .to(
          gsap.utils.toArray('.menu__item__text').reverse(),
          {
            translateY: '100%',
            rotate: '5deg',
            stagger: 0.05,
            duration: 0.6,
            ease: 'animation-smooth',
          },
          0
        )
        .to(
          '.nav__bottom__left, .nav__bottom__right',
          {
            y: '-50%',
            opacity: 0,
            ease: 'animation-smooth',
            duration: 0.7,
          },
          0
        )
        .to(
          '.nav__back',
          {
            translateY: 0,
            duration: 1.2,
            ease: 'nav-translate',
          },
          0
        )
        .to('.nav__back__color', {
          background: () => getColor('bgColor', document.body.classList.value),
        })
        .to(
          '.nav__left__title',
          { color: getColor('allColor', document.body.classList.value) },
          '<'
        )
        .to(
          '.nav__bar__line',
          { background: getColor('allColor', document.body.classList.value) },
          '<'
        )
        .to(
          '.nav__bar__left svg path',
          {
            fill: getColor('allColor', document.body.classList.value),
          },
          '<'
        )
        .to(
          '.nav__hamburger__bar',
          {
            background: getColor(
              'hamburgerColor',
              document.body.classList.value
            ),
          },
          '<'
        );
    } else {
      nav.classList.add('open');

      gsap.killTweensOf(
        '.menu__item__text, .nav__bottom__left, .nav__bottom__right, nav__back, .nav__back__color, .nav__left__title, .nav__bar__line, .nav__left__img, .nav__hamburger__bar'
      );

      const animateMenuIn = gsap.timeline({
        defaults: { ease: 'none', duration: 0 },
      });

      animateMenuIn
        .to('.nav__left__title', { color: '#1B1B1B' }, 0)
        .to('.nav__bar__line', { background: '#1B1B1B' }, 0)
        .to(
          '.nav__bar__left svg path',
          {
            fill: '#1B1B1B',
          },
          0
        )
        .to('.nav__hamburger__bar', { background: '#1B1B1B' }, 0)
        .to(
          '.nav__back',
          {
            translateY: '94vh',
            duration: 1.2,
            ease: 'nav-translate',
          },
          0
        )
        .to('.nav__back__color', { background: '#eafe07' }, 0)
        .to(
          gsap.utils.toArray('.menu__item__text'),
          {
            translateY: 0,
            rotate: 0,
            stagger: 0.05,
            ease: 'animation-smooth',
            duration: 0.6,
          },
          '-=0.8'
        )
        .to(
          '.nav__bottom__left, .nav__bottom__right',
          {
            y: 0,
            opacity: 1,
            ease: 'animation-smooth',
            duration: 0.7,
          },
          '-=0.7'
        );
    }
  });
}
