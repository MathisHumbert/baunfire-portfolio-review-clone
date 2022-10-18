import { gsap } from 'gsap';

export default function magneticButton(button) {
  const buttonContainer = button.querySelector('.rounded__button__container');
  const buttonText = button.querySelector('.rounded__button__text');

  let diffBound = { x: 0, y: 0 };
  let rootBound, itemBound;
  let scale = 2;
  let tollerance = 10;
  let speed = 0.5;

  button.addEventListener('mouseenter', function (e) {
    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    rootBound = button.getBoundingClientRect();
    itemBound = buttonContainer.getBoundingClientRect();
    diffBound.x = (rootBound.width * scale - rootBound.width) / 2;
    diffBound.y = (rootBound.height * scale - rootBound.height) / 2;
  });

  button.addEventListener('mouseleave', function (e) {
    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    gsap.to([buttonContainer, buttonText], {
      x: 0,
      y: 0,
      ease: 'elastic.out(1.1, .4)',
      duration: 1.2,
    });
  });

  button.addEventListener('mousemove', function (e) {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const maxX = ((rootBound.width - itemBound.width) / 2) * tollerance;
    const maxY = ((rootBound.height - itemBound.height) / 2) * tollerance;

    const newX = gsap.utils.mapRange(
      0,
      rootBound.width * scale,
      -maxX,
      maxX,
      x - rootBound.x + diffBound.x
    );

    const newY = gsap.utils.mapRange(
      0,
      rootBound.height * scale,
      -maxY,
      maxY,
      y - rootBound.y + diffBound.y
    );

    gsap.killTweensOf(buttonContainer);
    gsap.killTweensOf(buttonText);

    gsap.to(buttonContainer, {
      x: newX * 10,
      y: newY * 10,
      ease: 'power3.out',
      duration: speed,
    });

    gsap.to(buttonText, {
      x: newX * 1.5,
      y: newY * 1.5,
      ease: 'power3.out',
      duration: speed,
    });
  });
}
