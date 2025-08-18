import React from 'react';

const ServiceCard = ({ title, price, items }) => (
  <div className="card">
    <h3>{title}</h3>
    <p><strong>от {price} ₽/час</strong></p>
    <ul>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
    <button className="button-cta">Оставить заявку</button>
  </div>
);

const Services = () => {
  return (
    <main className="container" style={{padding:'24px 0'}}>
      <h1>Услуги</h1>
      <p>Подберём и выведем персонал под ваши задачи: склад, производство, ритейл, мероприятия.</p>
      <div className="grid-3" style={{marginTop:16}}>
        <ServiceCard title="Грузчики" price="350" items={['Погрузка/разгрузка','Перемещение','Подсобные работы']} />
        <ServiceCard title="Комплектовщики" price="380" items={['Сбор заказов','Маркировка','Паллетирование']} />
        <ServiceCard title="Упаковщики" price="360" items={['Фасовка','Стикеровка','Термоусадка']} />
      </div>
    </main>
  );
};

export default Services;
