import React from 'react';

const About = () => {
  return (
    <main className="container" style={{padding:'24px 0'}}>
      <h1>О компании</h1>
      <p>LegioN — B2B-аутсорсинг линейного персонала. Работаем по Новосибирску и области, закрываем заявки в день обращения.</p>
      <div className="card" style={{marginTop:12}}>
        <h3>Почему мы</h3>
        <ul>
          <li>Резерв обученных сотрудников</li>
          <li>Собственный координатор на объекте</li>
          <li>Официальное оформление и документы</li>
          <li>Гарантии качества и замены</li>
        </ul>
      </div>
    </main>
  );
};

export default About;
