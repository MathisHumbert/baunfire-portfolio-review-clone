export default function (scroll) {
  const buttons = document.querySelectorAll('#rounded__button__link');
  buttons.forEach((button) => {
    const section = document.querySelector(button.getAttribute('data-target'));
    button.addEventListener('click', () => {
      scroll.scrollTo(section);
    });
  });
}
