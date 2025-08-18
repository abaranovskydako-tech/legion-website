import React from 'react';

const Contacts = () => {
  return (
    <main className="container" style={{padding:'24px 0'}}>
      <h1>Контакты</h1>
      <div className="card" style={{marginTop:12}}>
        <p><strong>Адрес:</strong> Новосибирск, ул. Примерная, 1</p>
        <p><strong>Телефон:</strong> <a href="tel:+73832123456">+7 (383) 212-34-56</a></p>
        <p><strong>Email:</strong> <a href="mailto:sales@legion.ru">sales@legion.ru</a></p>
        <form className="form" onSubmit={(e)=>e.preventDefault()} style={{marginTop:12}}>
          <input className="input" placeholder="Ваше имя" />
          <input className="input" placeholder="Телефон" />
          <textarea className="textarea" placeholder="Опишите задачу"></textarea>
          <button className="button-cta">Отправить</button>
        </form>
      </div>
    </main>
  );
};

export default Contacts;
