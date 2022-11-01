import { animateTitleIn } from '../utils/gsapAnimations.js';
import magneticButton from '../utils/magneticButton.js';

export default function initSubmit() {
  const button = document.querySelector('.submit .rounded__button');

  animateTitleIn('.submit__header span', 0.05, '.submit__header', 'top bottom');

  magneticButton(button);
}
