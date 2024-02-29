let target = 0;
let current = 0;
let ease = 0.0825;
let pressed = false;
let mouseX = 0;

const slider = document.querySelector('.swiper');
const sliderWrapper = document.querySelector('.swiper-wrapper');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const heroCards = sliderWrapper.querySelectorAll('a.hero-card');

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth + 96 * 2;

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
}

const update = () => {
  current = lerp(current, target, ease);
  if (current < 1) current = 0;
  if (current > maxScroll - 1) current = maxScroll; 

  let moveRatio = current / maxScroll;

  gsap.set('.swiper-scrollbar', {
    scaleX: moveRatio,
  });

  requestAnimationFrame(update);
};

slider.addEventListener('wheel', e => {
  if (Math.abs(e.deltaX) > 10) target += e.deltaX;

  target = Math.max(0, target);
  target = Math.min(target, maxScroll);

  if (target) prevBtn.classList.remove('disabled');
  else prevBtn.classList.add('disabled');
});

slider.addEventListener('mousedown', e => {
  pressed = true;
  mouseX = e.clientX;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
  pressed = false;
});

slider.addEventListener('mouseup', () => {
  pressed = false;
  slider.style.cursor = 'grab';
  heroCards.forEach((card) => {
    card.style.pointerEvents = 'auto';
  });
});

slider.addEventListener('mouseenter', () => {
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', e => {
  if (pressed) {
    heroCards.forEach((card) => {
      card.style.pointerEvents = 'none';
    });
    slider.scrollLeft += mouseX - e.clientX;
    target += mouseX - e.clientX;

    target = Math.max(0, target);
    target = Math.min(maxScroll, target);

    if (target) prevBtn.classList.remove('disabled');
    else prevBtn.classList.add('disabled');

    mouseX = e.clientX;
  }
});

update();

// const slideAction = (step, direction) => {
//   if (direction) {
//     slider.scrollLeft += step;
//     target += step;

//     target = Math.min(target, maxScroll);

//     if (target) prevBtn.classList.remove('disabled');
//     else prevBtn.classList.add('disabled');
//     return;
//   }
//   slider.scrollLeft -= step;
//   target -= step;

//   target = Math.max(0, target);

//   if (target) prevBtn.classList.remove('disabled');
//   else prevBtn.classList.add('disabled');
// };

// const scrollInterval = (step, direction, speed, threshold) => {
//   let cnt = 0;
//   const giveInterval = setInterval(() => {
//     slideAction(step, direction);
//     cnt += step;

//     if (cnt > threshold) window.clearInterval(giveInterval);
//   }, speed);
// };

prevBtn.addEventListener('click', () => {
  slider.style.scrollBehavior = 'smooth';
  slider.scrollLeft -= maxScroll/2;
  target -= maxScroll/2;

  target = Math.max(0, target);

  if (target) prevBtn.classList.remove('disabled');
  else prevBtn.classList.add('disabled');
  slider.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
  slider.style.scrollBehavior = 'smooth';
  slider.scrollLeft += maxScroll/2;
  target += maxScroll/2;

  target = Math.min(target, maxScroll);

  if (target) prevBtn.classList.remove('disabled');
  else prevBtn.classList.add('disabled');
  slider.style.scrollBehavior = 'auto';
});

const draggables = sliderWrapper.querySelectorAll('img, svg, p, a, span, h1, h2, h3, h4, h5, h6, .text');

draggables.forEach((draggable) => {
  draggable.setAttribute('draggable', 'false');
});