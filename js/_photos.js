/**
 * Photos
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Photos {
  constructor() {
    const photos = document.querySelectorAll('.myphoto');
    if (!photos || !photos.length) return;

    photos.forEach(elem => {
      elem.addEventListener('mousemove', (event) => {
        const image = elem.querySelector('.myphoto__image');
        image.style.transform = '';
        if ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0) {
          image.style.transformOrigin = `50% 50%`;
        } else {
          const rect = elem.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          image.style.transformOrigin = `${x}px ${y}px`;
        }
      });

      elem.addEventListener('mouseleave', () => {
        const image = elem.querySelector('.myphoto__image');
        image.style.transform = 'scale(1)';
      });
    });
  }
}
