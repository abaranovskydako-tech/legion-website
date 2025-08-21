export class ContentAgent {
  constructor() {
    this.name = 'Content Agent';
    this.role = 'Content Strategist';
  }

  getHeroContent() {
    return {
      title: 'Legion',
      subtitle: 'Профессиональный подбор персонала для вашего бизнеса',
      description: 'Находим лучших специалистов для ваших задач. Грузчики, фасовщики, комплектовщики и другие рабочие специальности.',
      cta: 'Получить консультацию',
      urgency: 'Бесплатно • 15 минут'
    };
  }

  getFeaturesContent() {
    return [
      {
        icon: '🚀',
        title: 'Быстрый подбор',
        description: 'Находим персонал за 24-48 часов'
      },
      {
        icon: '✅',
        title: 'Проверенные кандидаты',
        description: 'Все соискатели проходят предварительную проверку'
      },
      {
        icon: '💰',
        title: 'Выгодные условия',
        description: 'Конкурентные цены без скрытых комиссий'
      },
      {
        icon: '🔄',
        title: 'Гарантия замены',
        description: 'Бесплатная замена в течение 30 дней'
      },
      {
        icon: '📞',
        title: '24/7 поддержка',
        description: 'Круглосуточная помощь по всем вопросам'
      },
      {
        icon: '📊',
        title: 'Отчётность',
        description: 'Полная прозрачность по каждому проекту'
      }
    ];
  }

  getFormContent() {
    return {
      title: 'Получите бесплатную консультацию',
      subtitle: 'Наш эксперт свяжется с вами в течение 15 минут',
      fields: [
        { name: 'name', label: 'Ваше имя', type: 'text', required: true },
        { name: 'phone', label: 'Номер телефона', type: 'tel', required: true },
        { name: 'company', label: 'Название компании', type: 'text', required: true },
        { name: 'comment', label: 'Опишите ваши потребности', type: 'textarea', required: false }
      ],
      submitText: 'Получить консультацию',
      privacyText: 'Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных'
    };
  }

  getFooterContent() {
    return {
      company: 'ООО "Легион"',
      description: 'Профессиональный подбор персонала с 2015 года',
      contacts: {
        phone: '+7 (495) 123-45-67',
        email: 'info@legion-staff.ru',
        address: 'г. Москва, ул. Примерная, д. 1'
      },
      links: [
        { text: 'О компании', href: '#about' },
        { text: 'Услуги', href: '#services' },
        { text: 'Отзывы', href: '#reviews' },
        { text: 'Контакты', href: '#contacts' }
      ]
    };
  }
}

