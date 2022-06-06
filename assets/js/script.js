///////////////////// Accordion /////////////////////
const accordionItemEl = document.querySelectorAll('.faq-container .item');
accordionItemEl.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('open');
  });
});

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

ScrollReveal().reveal('#hero .subtitle, #hero .title, #hero .button, #hero .image', {
  interval: 100,
});
ScrollReveal().reveal('#partners .subtitle, #partners .title', {
  interval: 100,
});
ScrollReveal().reveal('#about .subtitle, #about .title, #about .paragraph,  #about .image', {
  interval: 100,
});
ScrollReveal().reveal(
  '#forWhom .subtitle, #forWhom .title, #forWhom .paragraph,  #forWhom .image',
  { interval: 100 }
);
ScrollReveal().reveal('#points .subtitle, #points .title, #points .paragraph,  #points .image', {
  interval: 100,
});


// ScrollReveal().reveal('.image, .paragraph', { origin: 'bottom', delay: 300 });
