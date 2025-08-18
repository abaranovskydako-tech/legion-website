import React from 'react';

const Documents = () => {
  return (
    <main className="container" style={{padding:'24px 0'}}>
      <h1>Документы</h1>
      <div className="card" style={{marginTop:12}}>
        <ul>
          <li><a href="#" onClick={(e)=>e.preventDefault()}>Типовой договор аутсорсинга (PDF)</a></li>
          <li><a href="#" onClick={(e)=>e.preventDefault()}>Политика обработки персональных данных (PDF)</a></li>
          <li><a href="#" onClick={(e)=>e.preventDefault()}>Реквизиты компании (PDF)</a></li>
        </ul>
      </div>
    </main>
  );
};

export default Documents;
