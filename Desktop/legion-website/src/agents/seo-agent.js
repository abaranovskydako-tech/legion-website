export class SEOAgent {
  constructor() {
    this.name = 'SEO Agent';
    this.role = 'Search Engine Optimization Specialist';
  }

  getMetaTags() {
    return {
      title: 'Legion - Подбор персонала | Грузчики, фасовщики, комплектовщики',
      description: 'Профессиональный подбор персонала для бизнеса. Находим грузчиков, фасовщиков, комплектовщиков за 24-48 часов. Бесплатная консультация.',
      keywords: 'подбор персонала, грузчики, фасовщики, комплектовщики, аутсорсинг персонала, Москва',
      ogTitle: 'Legion - Быстрый подбор персонала для бизнеса',
      ogDescription: 'Находим лучших специалистов за 24-48 часов. Бесплатная консультация.',
      ogImage: '/assets/hero.jpg'
    };
  }

  getStructuredData() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Legion",
      "description": "Профессиональный подбор персонала",
      "url": "https://legion-website-final.onrender.com",
      "telephone": "+7 (495) 123-45-67",
      "email": "info@legion-staff.ru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "serviceType": "Подбор персонала",
      "areaServed": "Москва и Московская область"
    };
  }

  getKeywords() {
    return [
      'подбор персонала',
      'грузчики',
      'фасовщики', 
      'комплектовщики',
      'аутсорсинг персонала',
      'временный персонал',
      'подбор рабочих',
      'складской персонал'
    ];
  }
}

