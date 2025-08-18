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

// Enhanced calculator on home
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
    
    // Add animation effect
    resultEl.style.transform = 'scale(1.1)';
    setTimeout(() => {
      resultEl.style.transform = 'scale(1)';
    }, 200);
  }

  // Add event listeners
  [peopleEl, hoursEl, packageEl].forEach(el => {
    if (el) el.addEventListener('input', calc);
  });
  
  // Initialize calculation
  calc();
})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation for forms
document.querySelectorAll('form.lead').forEach(form => {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    form.addEventListener('submit', function() {
      submitBtn.textContent = 'Отправляем...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = 'Отправлено!';
        setTimeout(() => {
          submitBtn.textContent = 'Отправить заявку';
          submitBtn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.card, .service-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
