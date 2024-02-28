// Search
const searchBtn = document.querySelector('.header__right button.search');
const searchClose = document.querySelector('.search__close-button');
const searchEl = document.querySelector('section.search');
const searchInput = document.querySelector('.search__searchbar-input');
const searchReset = document.querySelector('.search__searchbar-reset');

searchBtn.addEventListener('click', () => {
  searchEl.toggleAttribute('hidden');
});

searchClose.addEventListener('click', () => {
  searchEl.toggleAttribute('hidden');
});

searchInput.addEventListener('input', e => {
  if (e.target.value) {
    searchReset.classList.remove('hidden');
  }
});

searchReset.addEventListener('click', () => {
  searchInput.value = null;
  searchReset.classList.add('hidden');
});

// DevSecOps
const devOpsBtns = document.querySelectorAll('.devsecops__buttons > li > button');
const devOpsCards = document.querySelectorAll('.devsecops__cards article');

devOpsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    devOpsBtns.forEach((each) => {
      each.classList.remove('selected');
    });
    btn.classList.add('selected');
    devOpsCards.forEach((card) => {
      card.classList.remove('active');
    })
    devOpsCards[index].classList.add('active');
  })
})

// Case Studies
const caseTabBtns = document.querySelectorAll('.case__tabs button');
const caseContents = document.querySelectorAll('.case__contents article');

caseTabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    caseTabBtns.forEach((each) => {
      each.classList.remove('selected')
    });
    btn.classList.add('selected');
    caseContents.forEach((content) => {
      content.classList.remove('active');
    });
    caseContents[index].classList.add('active');
  });
});

// Language
const langBtn = document.querySelector('.footer__footer .language__button');
const langArrowUp = langBtn.querySelector('.arrow-up');
const langArrowDown = langBtn.querySelector('.arrow-down');
const langForm = document.querySelector('.footer__footer .language__form');

langBtn.addEventListener('click', () => {
  langArrowUp.classList.toggle('hidden');
  langArrowDown.classList.toggle('hidden');
  langForm.classList.toggle('hidden');
});