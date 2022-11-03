import gsap from 'gsap';
const cursor = document.querySelector('.custom__cursor');

export default function initCursor() {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { left: e.clientX, top: e.clientY });

    // if (e.target.classList.value.includes('button')) {
    //   cursor.style.width = '0';
    // }
  });
}
