///////////////////// Accordion /////////////////////
const accordionItemEl = document.querySelectorAll('.faq-container .item');
accordionItemEl.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('open');
  });
});
