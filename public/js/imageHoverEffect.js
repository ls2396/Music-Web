import gsap from 'gsap';

export function initImageHoverEffect() {
  const imgs = [...document.querySelectorAll('.img-reveal')];
  const triggers = [...document.querySelectorAll('.img-reveal-hover')];

  imgs.forEach(img => {
    img.classList.add('hidden');
    gsap.set(img, { opacity: 0 });
  });

  triggers.forEach(trig => {
    trig.addEventListener('mouseenter', e => {
      console.log('enter');
      const activeIndex = triggers.indexOf(e.target);
      console.log(activeIndex);

      imgs.forEach(img => {
        gsap.to(img, 0.2, {
          opacity: 0,
          onComplete() {
            imgs.forEach(img => img.classList.add('hidden'));
            imgs[activeIndex].classList.remove('hidden');

            gsap.to(imgs[activeIndex], 0.2, {
              opacity: 1
            });
          }
        });
      });
    });
  });
}