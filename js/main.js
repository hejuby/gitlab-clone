const searchBtn = document.querySelector('.header__right button.search');
const searchClose = document.querySelector('.search__close-button');
const searchEl = document.querySelector('section.search');
const searchInput = document.querySelector('.search__searchbar-input');
const searchReset = document.querySelector('.search__searchbar-reset');

searchBtn.addEventListener('click', () => {
  searchEl.toggleAttribute('hidden');
})
searchClose.addEventListener('click', () => {
  searchEl.toggleAttribute('hidden');
})

searchInput.addEventListener('input', e => {
  if (e.target.value) {
    searchReset.classList.remove('hidden');
  }
});

searchReset.addEventListener('click', e => {
  searchInput.value = null;
  searchReset.classList.add('hidden');
})

const langBtn = document.querySelector('.footer__footer .language__button');
const langArrowUp = langBtn.querySelector('.arrow-up');
const langArrowDown = langBtn.querySelector('.arrow-down');
const langForm = document.querySelector('.footer__footer .language__form');

langBtn.addEventListener('click', () => {
  langArrowUp.classList.toggle('hidden');
  langArrowDown.classList.toggle('hidden');
  langForm.classList.toggle('hidden');
})