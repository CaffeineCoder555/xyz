document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const menuBox = document.getElementById('menu-box');

  let isOpen = false; // To track menu state

  // Toggle menu open/close with animations
  menuBtn.addEventListener('click', function () {
    if (!isOpen) {
      // Open Menu with Bounce Effect
      menuBox.classList.remove('hidden');
      menuBox.classList.add('animate-open');

      setTimeout(() => {
        menuBox.classList.remove('animate-open');
      }, 300); // Remove bounce effect after animation
    } else {
      // Close Menu with Minimal Bounce Effect
      menuBox.classList.add('animate-close');
      setTimeout(() => {
        menuBox.classList.add('hidden');
        menuBox.classList.remove('animate-close');
      }, 300);
    }

    isOpen = !isOpen; // Toggle menu state
  });

  // Hover Animation for Text Rolling Effect
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.innerHTML = `<span class="text-top">${item.textContent}</span><span class="text-bottom">${item.textContent}</span>`;

    item.addEventListener('mouseenter', function () {
      this.classList.add('hover-roll');
    });

    item.addEventListener('mouseleave', function () {
      this.classList.remove('hover-roll');
    });
  });
});

var tl = gsap.timeline();
const images = document.querySelectorAll('#hero-img');
tl.to('#img', {
  width: '100%',
  height: '100%',
  duration: 0.1,
});
tl.from('#nav', {
  opacity: 0,
  top: '-100px',
  duration: 0.7,
});

tl.from(images, {
  opacity: 0,
  bottom: '-50%',
  duration: 0.5,
});
tl.to(images, {
  bottom: 'initial',
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  duration: 0.5,
  opacity: 1,
  stagger: 1,
});

tl.to('.last-img', {
  top: '00%',
  delay: 0.5,
  left: 0,
  duration: 1,
  width: '100%',
  height: '100%',
});

tl.to('.last-img', {
  top: 0,
  duration: 1,
  height: '100%',
  opacity: 1,
  autoplay:true
});
tl.to('images', {
  opacity: 0,
 
});
tl.from(
  '#textWrapper',
  {
    opacity: 0,
  },
  '-=3'
);

document.addEventListener('DOMContentLoaded', () => {
  let marquee = document.getElementById('marquee');

  // Duplicate images for infinite scrolling effect
  let marqueeContent = marquee.innerHTML;
  marquee.innerHTML += marqueeContent;

  // GSAP Marquee Animation (Slow Speed)
  let marqueeAnim = gsap.to(marquee, {
    x: '-40%', // Moves to the left
    duration: 25, // Default slow speed
    ease: 'linear',
    repeat: -1, // Infinite loop
  });

  let speedUp = false;

  window.addEventListener('scroll', () => {
    if (!speedUp) {
      speedUp = true;
      gsap.to(marqueeAnim, { timeScale: 3, duration: 3, ease: 'power2.out' }); // Smooth speed up
    }

    // Reset speed immediately when scroll stops
    clearTimeout(window.scrollEndTimer);
    window.scrollEndTimer = setTimeout(() => {
      marqueeAnim.timeScale(12); // Instantly reset speed
      speedUp = false;
    }, 0); // 150ms delay after scroll stops
  });
});
