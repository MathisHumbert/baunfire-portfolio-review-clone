import gsap from 'gsap';
const cursor = document.querySelector('.custom__cursor');

let lastX = 0;
let lastY = 0;
let clientX = 0;
let clientY = 0;

// const lerp = (a, b, n) => {
//   return (1 - n) * a + n * b;
// };

export default function initCursor() {
  document.addEventListener('mousemove', (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    // lastX = lerp(lastX, clientX, 0.2);
    // lastY = lerp(lastY, clientY, 0.2);

    gsap.to(cursor, { left: clientX, top: clientY, duration: 0.3 });
    // cursor.style.top = `${lastY}px`;
    // cursor.style.left = `${lastX}px`;

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
}
