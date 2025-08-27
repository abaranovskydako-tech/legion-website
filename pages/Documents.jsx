import React from 'react';
import Link from 'next/link';

const Documents = () => {
  const documents = [
    {
      category: "Договорная документация",
      items: [
        { name: "Типовой договор аутсорсинга персонала", type: "PDF", size: "245 KB", description: "Основной договор на оказание услуг по аутсорсингу персонала" },
        { name: "Дополнительное соглашение к договору", type: "PDF", size: "156 KB", description: "Для внесения изменений в условия договора" },
        { name: "Акт выполненных работ", type: "PDF", size: "89 KB", description: "Подтверждение выполненных работ и услуг" }
      ]
    },
    {
      category: "Лицензии и сертификаты",
      items: [
        { name: "Лицензия на деятельность по трудоустройству", type: "PDF", size: "1.2 MB", description: "Лицензия №12345 от 15.03.2023" },
        { name: "Сертификат соответствия ISO 9001", type: "PDF", size: "856 KB", description: "Система менеджмента качества" },
        { name: "Сертификат безопасности труда", type: "PDF", size: "678 KB", description: "Соответствие требованиям охраны труда" }
      ]
    },
    {
      category: "Реквизиты и контакты",
      items: [
        { name: "Реквизиты компании", type: "PDF", size: "123 KB", description: "Банковские реквизиты и контактная информация" },
        { name: "Свидетельство о регистрации", type: "PDF", size: "456 KB", description: "ОГРН, ИНН, КПП и другие регистрационные данные" },
        { name: "Устав компании", type: "PDF", size: "789 KB", description: "Учредительные документы ООО 'Легион'" }
      ]
    },
    {
      category: "Политики и соглашения",
      items: [
        { name: "Политика обработки персональных данных", type: "PDF", size: "234 KB", description: "Порядок обработки и защиты персональных данных" },
        { name: "Политика конфиденциальности", type: "PDF", size: "167 KB", description: "Условия использования и защиты информации" },
        { name: "Согласие на обработку персональных данных", type: "PDF", size: "98 KB", description: "Форма согласия для клиентов и сотрудников" }
      ]
    }
  ];

  const additionalInfo = [
    {
      icon: "📋",
      title: "Все документы актуальны",
      description: "Обновляем документацию ежеквартально в соответствии с изменениями законодательства"
    },
    {
      icon: "🔒",
      title: "Безопасность данных",
      description: "Все документы передаются по защищенным каналам связи"
    },
    {
      icon: "⚡",
      title: "Быстрая отправка",
      description: "Получите необходимые документы в течение 1 часа после запроса"
    }
  ];

  return (
    <main>
      <section className="documents-hero">
        <div className="container">
          <div className="documents-header">
            <h1>Документы и лицензии</h1>
            <p className="documents-subtitle">
              Полная документация для вашей бухгалтерии и юридического отдела. 
              <br />Все документы соответствуют требованиям законодательства РФ.
            </p>
          </div>
        </div>
      </section>

      <section className="documents-content">
        <div className="container">
          <div className="documents-grid">
            {documents.map((category, categoryIndex) => (
              <div key={categoryIndex} className="document-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="category-documents">
                  {category.items.map((document, docIndex) => (
                    <div key={docIndex} className="document-item">
                      <div className="document-info">
                        <h3 className="document-name">{document.name}</h3>
                        <p className="document-description">{document.description}</p>
                        <div className="document-meta">
                          <span className="document-type">{document.type}</span>
                          <span className="document-size">{document.size}</span>
                        </div>
                      </div>
                      <div className="document-actions">
                        <button className="button-primary document-download">
                          Скачать
                        </button>
                        <button className="button-secondary document-preview">
                          Предварительный просмотр
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      <section className="documents-features">
        <div className="container">
          <div className="features-grid">
            {additionalInfo.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="documents-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Нужны дополнительные документы?</h2>
            <p>Если вам требуются специфические документы или справки, свяжитесь с нами — мы подготовим их в кратчайшие сроки.</p>
            <div className="cta-buttons">
              <Link href="/contacts" className="button-primary">
                Связаться с нами
              </Link>
              <a href="tel:+73830000000" className="button-secondary">
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Documents;
