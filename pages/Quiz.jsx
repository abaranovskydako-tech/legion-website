import React from 'react';

const Quiz = () => {
  return (
    <main className="container" style={{padding:'24px 0'}}>
      <h1>Квиз на расчёт</h1>
      <form className="form card" onSubmit={(e)=>e.preventDefault()}>
        <label>
          Сколько человек требуется?
          <input className="input" type="number" min="1" placeholder="Например, 15" />
        </label>
        <label>
          Тип работ
          <select className="select" defaultValue="">
            <option value="" disabled>Выберите</option>
            <option>Грузчики</option>
            <option>Комплектация</option>
            <option>Упаковка</option>
            <option>Подсобные работы</option>
          </select>
        </label>
        <label>
          Когда нужно выйти?
          <input className="input" type="date" />
        </label>
        <label>
          Смена (часы)
          <input className="input" type="text" placeholder="Например, 09:00–18:00" />
        </label>
        <label>
          Контакты
          <input className="input" type="tel" placeholder="+7 ..." />
        </label>
        <button className="button-cta">Получить расчёт</button>
        <small style={{opacity:.7}}>Мы свяжемся с вами в течение 10 минут</small>
      </form>
    </main>
  );
};

export default Quiz;
