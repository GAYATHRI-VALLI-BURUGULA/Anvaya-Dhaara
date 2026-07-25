const elements = document.querySelectorAll('.scroll-reveal');
const cards = document.querySelectorAll('.card');
console.log(cards.length);
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      el.classList.add('active');
    }
  });

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < windowHeight) {  // ✅ FIXED CONDITION
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
const nextBtn = document.querySelector('.next-fixed');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;

  // Check if near bottom
  if (scrollY + windowHeight >= fullHeight - 100) {
    nextBtn.classList.add('show');
  } else {
    nextBtn.classList.remove('show');
  }
});