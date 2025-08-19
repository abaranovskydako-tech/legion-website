(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class l{constructor(e,t={}){this.container=e,this.options={title:t.title||"Получите бесплатную консультацию по подбору персонала",subtitle:t.subtitle||"15 минут",buttonText:t.buttonText||"Оставить заявку",modalTitle:t.modalTitle||"Бесплатная консультация",...t},this.init()}init(){this.render(),this.bindEvents()}render(){this.container.innerHTML=`
      <div class="tripwire" data-component="tripwire">
        <div class="tripwire__content">
          <div class="tripwire__icon">🎯</div>
          <div class="tripwire__text">
            <h3 class="tripwire__title">${this.options.title}</h3>
            <p class="tripwire__subtitle">${this.options.subtitle}</p>
            <p class="tripwire__description">
              Наш эксперт проанализирует ваши потребности и предложит 
              оптимальное решение для подбора персонала
            </p>
          </div>
          <button class="tripwire__button" data-action="open-tripwire">
            ${this.options.buttonText}
          </button>
        </div>
      </div>
    `,this.createModal()}createModal(){if(document.getElementById("tripwire-modal"))return;const e=`
      <div id="tripwire-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="tripwireTitle">
        <div class="modal tripwire-modal">
          <div class="modal-header">
            <h3 id="tripwireTitle">${this.options.modalTitle}</h3>
            <button class="modal-close" data-action="close-tripwire" aria-label="Закрыть">✕</button>
          </div>
          <div class="modal-body">
            <form class="form tripwire-form" novalidate>
              <div class="form-group">
                <label for="tripwire-name" class="form-label">Ваше имя</label>
                <input 
                  type="text" 
                  id="tripwire-name" 
                  name="name" 
                  class="form-input" 
                  placeholder="Имя" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-phone" class="form-label">Номер телефона</label>
                <input 
                  type="tel" 
                  id="tripwire-phone" 
                  name="phone" 
                  class="form-input" 
                  placeholder="+7 (___) ___-__-__" 
                  inputmode="tel" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-company" class="form-label">Название компании</label>
                <input 
                  type="text" 
                  id="tripwire-company" 
                  name="company" 
                  class="form-input" 
                  placeholder="Компания" 
                  required
                />
              </div>
              <div class="form-group">
                <label for="tripwire-needs" class="form-label">Опишите ваши потребности</label>
                <textarea 
                  id="tripwire-needs" 
                  name="needs" 
                  class="form-textarea" 
                  placeholder="Например: нужны грузчики на склад, 10 человек, на 2 недели"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                Получить консультацию
              </button>
              <small class="form-note">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </small>
            </form>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",e)}bindEvents(){this.container.addEventListener("click",e=>{e.target.matches('[data-action="open-tripwire"]')&&this.openModal()}),document.addEventListener("click",e=>{(e.target.matches('[data-action="close-tripwire"]')||e.target.id==="tripwire-modal")&&this.closeModal()}),document.addEventListener("submit",e=>{e.target.matches(".tripwire-form")&&(e.preventDefault(),this.handleFormSubmit(e.target))})}openModal(){const e=document.getElementById("tripwire-modal");e&&(e.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{const t=e.querySelector("#tripwire-name");t&&t.focus()},100))}closeModal(){const e=document.getElementById("tripwire-modal");e&&(e.style.display="none",document.body.style.overflow="")}handleFormSubmit(e){const t=new FormData(e),o=Object.fromEntries(t.entries());if(!o.name||!o.phone||!o.company){alert("Пожалуйста, заполните обязательные поля");return}if(o.phone.length<10){alert("Пожалуйста, введите корректный номер телефона");return}this.saveLead({...o,source:"tripwire",timestamp:new Date().toISOString()}),this.showSuccessMessage()}saveLead(e){JSON.parse(localStorage.getItem("leads")||"[]").push(e),localStorage.setItem("leads",JSON.stringify(e)),console.log("Tripwire lead saved:",e)}showSuccessMessage(){const e=document.getElementById("tripwire-modal");if(e){const t=e.querySelector(".modal-body");t.innerHTML=`
        <div class="success-message">
          <div class="success-icon">🎉</div>
          <h4>Заявка принята!</h4>
          <p>Наш специалист свяжется с вами в течение 10 минут для бесплатной консультации.</p>
          <p>Мы подготовим индивидуальное предложение по подбору персонала для вашей компании.</p>
          <button class="btn btn-primary" data-action="close-tripwire">Закрыть</button>
        </div>
      `}}}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("tripwire-container");s&&new l(s,{title:"Получите бесплатную консультацию по подбору персонала",subtitle:"15 минут",buttonText:"Оставить заявку",modalTitle:"Бесплатная консультация"})});
