import { Tripwire } from './components/wire.js';

// Инициализация Tripwire компонента
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tripwire-container');
  if (container) {
    new Tripwire(container, {
      title: 'Получите бесплатную консультацию по подбору персонала',
      subtitle: '15 минут',
      buttonText: 'Оставить заявку',
      modalTitle: 'Бесплатная консультация'
    });
  }
});
// Force update Tue Aug 19 22:34:25 +07 2025
