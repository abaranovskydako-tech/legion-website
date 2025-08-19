(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();class a{constructor(){this.name="UI Agent",this.role="User Interface Designer"}getColorScheme(){return{primary:"#2563eb",secondary:"#1e40af",accent:"#f59e0b",success:"#10b981",warning:"#f59e0b",error:"#ef4444",neutral:"#6b7280"}}getTypography(){return{heading:"Inter, system-ui, sans-serif",body:"Inter, system-ui, sans-serif",sizes:{h1:"3rem",h2:"2.25rem",h3:"1.875rem",body:"1rem",small:"0.875rem"}}}getSpacing(){return{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"4rem"}}}class c{constructor(){this.name="Content Agent",this.role="Content Strategist"}getHeroContent(){return{title:"Legion",subtitle:"Профессиональный подбор персонала для вашего бизнеса",description:"Находим лучших специалистов для ваших задач. Грузчики, фасовщики, комплектовщики и другие рабочие специальности.",cta:"Получить консультацию",urgency:"Бесплатно • 15 минут"}}getFeaturesContent(){return[{icon:"🚀",title:"Быстрый подбор",description:"Находим персонал за 24-48 часов"},{icon:"✅",title:"Проверенные кандидаты",description:"Все соискатели проходят предварительную проверку"},{icon:"💰",title:"Выгодные условия",description:"Конкурентные цены без скрытых комиссий"},{icon:"🔄",title:"Гарантия замены",description:"Бесплатная замена в течение 30 дней"},{icon:"📞",title:"24/7 поддержка",description:"Круглосуточная помощь по всем вопросам"},{icon:"📊",title:"Отчётность",description:"Полная прозрачность по каждому проекту"}]}getFormContent(){return{title:"Получите бесплатную консультацию",subtitle:"Наш эксперт свяжется с вами в течение 15 минут",fields:[{name:"name",label:"Ваше имя",type:"text",required:!0},{name:"phone",label:"Номер телефона",type:"tel",required:!0},{name:"company",label:"Название компании",type:"text",required:!0},{name:"comment",label:"Опишите ваши потребности",type:"textarea",required:!1}],submitText:"Получить консультацию",privacyText:"Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных"}}getFooterContent(){return{company:'ООО "Легион"',description:"Профессиональный подбор персонала с 2015 года",contacts:{phone:"+7 (495) 123-45-67",email:"info@legion-staff.ru",address:"г. Москва, ул. Примерная, д. 1"},links:[{text:"О компании",href:"#about"},{text:"Услуги",href:"#services"},{text:"Отзывы",href:"#reviews"},{text:"Контакты",href:"#contacts"}]}}}class g{constructor(){this.name="SEO Agent",this.role="Search Engine Optimization Specialist"}getMetaTags(){return{title:"Legion - Подбор персонала | Грузчики, фасовщики, комплектовщики",description:"Профессиональный подбор персонала для бизнеса. Находим грузчиков, фасовщиков, комплектовщиков за 24-48 часов. Бесплатная консультация.",keywords:"подбор персонала, грузчики, фасовщики, комплектовщики, аутсорсинг персонала, Москва",ogTitle:"Legion - Быстрый подбор персонала для бизнеса",ogDescription:"Находим лучших специалистов за 24-48 часов. Бесплатная консультация.",ogImage:"/assets/hero.jpg"}}getStructuredData(){return{"@context":"https://schema.org","@type":"LocalBusiness",name:"Legion",description:"Профессиональный подбор персонала",url:"https://legion-website-final.onrender.com",telephone:"+7 (495) 123-45-67",email:"info@legion-staff.ru",address:{"@type":"PostalAddress",addressLocality:"Москва",addressCountry:"RU"},serviceType:"Подбор персонала",areaServed:"Москва и Московская область"}}getKeywords(){return["подбор персонала","грузчики","фасовщики","комплектовщики","аутсорсинг персонала","временный персонал","подбор рабочих","складской персонал"]}}class h{constructor(){this.name="SEO MCP",this.type="Search Engine Optimization"}generateMetaTags(e){return`
      <meta name="title" content="${e.title}">
      <meta name="description" content="${e.description}">
      <meta name="keywords" content="${e.keywords}">
      <meta property="og:title" content="${e.ogTitle}">
      <meta property="og:description" content="${e.ogDescription}">
      <meta property="og:image" content="${e.ogImage}">
      <meta property="og:type" content="website">
      <meta name="twitter:card" content="summary_large_image">
    `}generateStructuredData(e){return`<script type="application/ld+json">${JSON.stringify(e)}<\/script>`}optimizeContent(e){return e.replace(/\s+/g," ").trim().toLowerCase()}}class l{constructor(){this.name="UI MCP",this.type="User Interface"}createComponent(e,o,s){const t=document.createElement(e);return o&&(t.className=o),s&&(t.innerHTML=s),t}addStyles(e,o){Object.assign(e.style,o)}createButton(e,o,s){const t=this.createComponent("button",o,e);return s&&t.addEventListener("click",s),t}createInput(e,o,s,t=!1){const n=this.createComponent("input",s);return n.type=e,n.placeholder=o,n.required=t,n}createTextarea(e,o,s=3){const t=this.createComponent("textarea",o);return t.placeholder=e,t.rows=s,t}}class f{constructor(){this.name="Form MCP",this.type="Form Management"}validateForm(e){const o=[];return(!e.name||e.name.trim().length<2)&&o.push("Имя должно содержать минимум 2 символа"),(!e.phone||!this.isValidPhone(e.phone))&&o.push("Введите корректный номер телефона"),(!e.company||e.company.trim().length<2)&&o.push("Название компании обязательно"),{isValid:o.length===0,errors:o}}isValidPhone(e){return/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e.replace(/\s/g,""))}formatPhone(e){return e.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+7 ($2) $3-$4-$5")}submitForm(e){return console.log("Отправка формы:",e),new Promise(o=>{setTimeout(()=>{o({success:!0,message:"Форма успешно отправлена! Мы свяжемся с вами в течение 15 минут."})},1e3)})}}class m{constructor(){this.name="Logic MCP",this.type="Business Logic"}calculateResponseTime(e){return{high:"2-4 часа",medium:"4-8 часов",low:"24 часа"}[e]||"24 часа"}estimateCost(e,o,s){const n={грузчики:800,фасовщики:900,комплектовщики:1e3,упаковщики:850}[s]||800,i=n*e,p=i*o;return{daily:i,total:p,perWorker:n}}generateProposal(e){const{company:o,needs:s,urgency:t}=e;return{company:o,needs:s,urgency:t,responseTime:this.calculateResponseTime(t),nextSteps:["Анализ требований","Подбор кандидатов","Презентация резюме","Согласование условий","Начало работы"]}}trackConversion(e,o){const s={action:e,value:o,timestamp:new Date().toISOString(),session:this.getSessionId()};return console.log("Conversion event:",s),s}getSessionId(){return this.sessionId||(this.sessionId="session_"+Math.random().toString(36).substr(2,9)),this.sessionId}}class _{constructor(){this.contentAgent=new c,this.uiAgent=new a,this.uiMCP=new l}render(){const e=this.contentAgent.getHeroContent(),o=this.uiAgent.getColorScheme(),s=this.uiAgent.getSpacing(),t=this.uiMCP.createComponent("section","hero"),n=`
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">${e.title}</h1>
          <p class="hero__subtitle">${e.subtitle}</p>
          <p class="hero__description">${e.description}</p>
          <div class="hero__actions">
            <button class="hero__cta hero__cta--primary">${e.cta}</button>
            <span class="hero__urgency">${e.urgency}</span>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__icon">🏢</div>
        </div>
      </div>
    `;return t.innerHTML=n,this.uiMCP.addStyles(t,{background:`linear-gradient(135deg, ${o.primary} 0%, ${o.secondary} 100%)`,color:"white",padding:`${s.xxl} ${s.md}`,minHeight:"80vh",display:"flex",alignItems:"center"}),t}}class y{constructor(){this.contentAgent=new c,this.uiAgent=new a,this.uiMCP=new l}render(){const e=this.contentAgent.getFeaturesContent();this.uiAgent.getColorScheme();const o=this.uiAgent.getSpacing(),s=this.uiMCP.createComponent("section","features"),t=`
      <div class="features__container">
        <h2 class="features__title">Почему выбирают Legion?</h2>
        <div class="features__grid">
          ${e.map(n=>`
            <div class="feature-card">
              <div class="feature-card__icon">${n.icon}</div>
              <h3 class="feature-card__title">${n.title}</h3>
              <p class="feature-card__description">${n.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;return s.innerHTML=t,this.uiMCP.addStyles(s,{padding:`${o.xxl} ${o.md}`,backgroundColor:"#f8fafc"}),s}}class C{constructor(){this.contentAgent=new c,this.uiAgent=new a,this.uiMCP=new l,this.formMCP=new f,this.logicMCP=new m}render(){const e=this.contentAgent.getFormContent();this.uiAgent.getColorScheme();const o=this.uiAgent.getSpacing(),s=this.uiMCP.createComponent("section","form-section"),t=`
      <div class="form-section__container">
        <div class="form-section__header">
          <h2 class="form-section__title">${e.title}</h2>
          <p class="form-section__subtitle">${e.subtitle}</p>
        </div>
        <form class="contact-form" id="contactForm">
          ${e.fields.map(n=>n.type==="textarea"?`
                <div class="form-group">
                  <label for="${n.name}" class="form-label">${n.label}</label>
                  <textarea 
                    id="${n.name}" 
                    name="${n.name}" 
                    class="form-textarea" 
                    placeholder="${n.placeholder||n.label}"
                    ${n.required?"required":""}
                    rows="3"
                  ></textarea>
                </div>
              `:`
                <div class="form-group">
                  <label for="${n.name}" class="form-label">${n.label}</label>
                  <input 
                    type="${n.type}" 
                    id="${n.name}" 
                    name="${n.name}" 
                    class="form-input" 
                    placeholder="${n.placeholder||n.label}"
                    ${n.required?"required":""}
                  />
                </div>
              `).join("")}
          <button type="submit" class="form-submit">${e.submitText}</button>
          <p class="form-privacy">${e.privacyText}</p>
        </form>
      </div>
    `;return s.innerHTML=t,this.uiMCP.addStyles(s,{padding:`${o.xxl} ${o.md}`,backgroundColor:"white"}),this.bindFormEvents(),s}bindFormEvents(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",async o=>{o.preventDefault();const s=new FormData(e),t=Object.fromEntries(s.entries()),n=this.formMCP.validateForm(t);if(!n.isValid){alert(n.errors.join(`
`));return}try{const i=await this.formMCP.submitForm(t);i.success&&(alert(i.message),e.reset(),this.logicMCP.trackConversion("form_submit","contact_form"))}catch{alert("Ошибка при отправке формы. Попробуйте позже.")}})}}class v{constructor(){this.contentAgent=new c,this.uiAgent=new a,this.uiMCP=new l}render(){const e=this.contentAgent.getFooterContent(),o=this.uiAgent.getColorScheme(),s=this.uiAgent.getSpacing(),t=this.uiMCP.createComponent("footer","footer"),n=`
      <div class="footer__container">
        <div class="footer__content">
          <div class="footer__company">
            <h3 class="footer__company-name">${e.company}</h3>
            <p class="footer__company-description">${e.description}</p>
          </div>
          
          <div class="footer__contacts">
            <h4 class="footer__contacts-title">Контакты</h4>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">📞</span>
              <a href="tel:${e.contacts.phone}" class="footer__contact-link">
                ${e.contacts.phone}
              </a>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">✉️</span>
              <a href="mailto:${e.contacts.email}" class="footer__contact-link">
                ${e.contacts.email}
              </a>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">📍</span>
              <span class="footer__contact-text">${e.contacts.address}</span>
            </div>
          </div>
          
          <div class="footer__links">
            <h4 class="footer__links-title">Разделы</h4>
            <ul class="footer__links-list">
              ${e.links.map(i=>`
                <li class="footer__links-item">
                  <a href="${i.href}" class="footer__links-link">${i.text}</a>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
        
        <div class="footer__bottom">
          <p class="footer__copyright">
            © ${new Date().getFullYear()} ${e.company}. Все права защищены.
          </p>
        </div>
      </div>
    `;return t.innerHTML=n,this.uiMCP.addStyles(t,{backgroundColor:o.secondary,color:"white",padding:`${s.xl} ${s.md}`,marginTop:s.xxl}),t}}const d=new g,u=new h,b=new m,$=new _,S=new y,M=new C,w=new v;function x(){console.log("🚀 Инициализация сайта Legion с агентами CREW AI...");const r=document.getElementById("app");if(!r){console.error("Контейнер #app не найден!");return}r.innerHTML="",r.appendChild($.render()),r.appendChild(S.render()),r.appendChild(M.render()),r.appendChild(w.render()),P(),b.trackConversion("page_load","homepage"),console.log("✅ Сайт успешно инициализирован!")}function P(){const r=d.getMetaTags(),e=d.getStructuredData(),o=document.head;document.title=r.title;const s=u.generateMetaTags(r);o.insertAdjacentHTML("beforeend",s);const t=u.generateStructuredData(e);o.insertAdjacentHTML("beforeend",t),console.log("🔍 SEO оптимизация применена")}document.addEventListener("DOMContentLoaded",x);
