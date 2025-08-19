import { ContentAgent } from '../agents/content-agent.js';
import { UIAgent } from '../agents/ui-agent.js';
import { UIMCP } from '../mcp/ui-mcp.js';
import { FormMCP } from '../mcp/form-mcp.js';
import { LogicMCP } from '../mcp/logic-mcp.js';

export class FormSection {
  constructor() {
    this.contentAgent = new ContentAgent();
    this.uiAgent = new UIAgent();
    this.uiMCP = new UIMCP();
    this.formMCP = new FormMCP();
    this.logicMCP = new LogicMCP();
  }

  render() {
    const formContent = this.contentAgent.getFormContent();
    const colors = this.uiAgent.getColorScheme();
    const spacing = this.uiAgent.getSpacing();
    
    const section = this.uiMCP.createComponent('section', 'form-section');
    
    const formHTML = `
      <div class="form-section__container">
        <div class="form-section__header">
          <h2 class="form-section__title">${formContent.title}</h2>
          <p class="form-section__subtitle">${formContent.subtitle}</p>
        </div>
        <form class="contact-form" id="contactForm">
          ${formContent.fields.map(field => {
            if (field.type === 'textarea') {
              return `
                <div class="form-group">
                  <label for="${field.name}" class="form-label">${field.label}</label>
                  <textarea 
                    id="${field.name}" 
                    name="${field.name}" 
                    class="form-textarea" 
                    placeholder="${field.placeholder || field.label}"
                    ${field.required ? 'required' : ''}
                    rows="3"
                  ></textarea>
                </div>
              `;
            } else {
              return `
                <div class="form-group">
                  <label for="${field.name}" class="form-label">${field.label}</label>
                  <input 
                    type="${field.type}" 
                    id="${field.name}" 
                    name="${field.name}" 
                    class="form-input" 
                    placeholder="${field.placeholder || field.label}"
                    ${field.required ? 'required' : ''}
                  />
                </div>
              `;
            }
          }).join('')}
          <button type="submit" class="form-submit">${formContent.submitText}</button>
          <p class="form-privacy">${formContent.privacyText}</p>
        </form>
      </div>
    `;
    
    section.innerHTML = formHTML;
    
    // Добавляем стили
    this.uiMCP.addStyles(section, {
      padding: `${spacing.xxl} ${spacing.md}`,
      backgroundColor: 'white'
    });
    
    // Добавляем обработчик формы
    this.bindFormEvents();
    
    return section;
  }

  bindFormEvents() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Валидация
      const validation = this.formMCP.validateForm(data);
      if (!validation.isValid) {
        alert(validation.errors.join('\n'));
        return;
      }
      
      // Отправка формы
      try {
        const result = await this.formMCP.submitForm(data);
        if (result.success) {
          alert(result.message);
          form.reset();
          
          // Трекинг конверсии
          this.logicMCP.trackConversion('form_submit', 'contact_form');
        }
      } catch (error) {
        alert('Ошибка при отправке формы. Попробуйте позже.');
      }
    });
  }
}
