// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });
}

// Back to top
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 600 ? 'inline-flex' : 'none';
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Modal callback
const modalBackdrop = document.getElementById('modal');
const openModalBtns = document.querySelectorAll('[data-open-modal="callback"]');
const closeModalBtn = document.getElementById('modalClose');
openModalBtns.forEach(btn => btn.addEventListener('click', () => {
  if (modalBackdrop) modalBackdrop.style.display = 'flex';
}));
if (closeModalBtn) closeModalBtn.addEventListener('click', () => {
  if (modalBackdrop) modalBackdrop.style.display = 'none';
});
if (modalBackdrop) modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) modalBackdrop.style.display = 'none';
});

// Lead forms (simulate submit)
function handleLeadForm(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // Simple validation
    if (!data.name || !data.phone) {
      alert('Пожалуйста, заполните имя и телефон.');
      return;
    }
    // Save to localStorage as imitation
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({ ...data, ts: new Date().toISOString(), page: location.pathname });
    localStorage.setItem('leads', JSON.stringify(leads));
    // UX feedback
    form.reset();
    alert('Спасибо! Мы свяжемся с вами в течение 10 минут.');
    if (modalBackdrop && modalBackdrop.style.display === 'flex') {
      modalBackdrop.style.display = 'none';
    }
  });
}
document.querySelectorAll('form.lead').forEach(handleLeadForm);

// Mini calculator on home
(function initCalculator(){
  const root = document.getElementById('calc');
  if (!root) return;
  const peopleEl = root.querySelector('[name="people"]');
  const hoursEl = root.querySelector('[name="hours"]');
  const packageEl = root.querySelector('[name="package"]');
  const resultEl = root.querySelector('#calcResult');

  function calc() {
    const people = Math.max(1, Number(peopleEl.value || 0));
    const hours = Math.max(1, Number(hoursEl.value || 0));
    const pkg = packageEl.value || 'start';
    // base price per hour per person
    const base = 350;
    const coeff = pkg === 'peak' ? 1.15 : pkg === 'flow' ? 0.9 : 1.0;
    const subtotal = people * hours * base * coeff;
    // service fee and rounding
    const service = Math.max(0, subtotal * 0.05);
    const total = Math.round((subtotal + service) / 10) * 10;
    resultEl.textContent = total.toLocaleString('ru-RU') + ' ₽';
  }

  [peopleEl, hoursEl, packageEl].forEach(el => el.addEventListener('input', calc));
  calc();
})();
