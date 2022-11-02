const main = document.querySelector('main');

export default function initNavbar(scroll) {
  scroll.on('scroll', (instance) => {
    let navbarHeight = document
      .querySelector('.nav__bar')
      .getBoundingClientRect().height;

    if (instance.direction === 'down' && instance.scroll.y > navbarHeight) {
      main.classList.add('scrolled');
    }

    if (instance.direction === 'up' && instance.scroll.y > navbarHeight * 2) {
      main.classList.remove('scrolled');
    }
  });
}
