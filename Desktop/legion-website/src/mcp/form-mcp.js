export class FormMCP {
  constructor() {
    this.name = 'Form MCP';
    this.type = 'Form Management';
  }

  validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Имя должно содержать минимум 2 символа');
    }
    
    if (!formData.phone || !this.isValidPhone(formData.phone)) {
      errors.push('Введите корректный номер телефона');
    }
    
    if (!formData.company || formData.company.trim().length < 2) {
      errors.push('Название компании обязательно');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  isValidPhone(phone) {
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  formatPhone(phone) {
    return phone.replace(/\D/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');
  }

  submitForm(formData) {
    // Имитация отправки формы
    console.log('Отправка формы:', formData);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Форма успешно отправлена! Мы свяжемся с вами в течение 15 минут.'
        });
      }, 1000);
    });
  }
}
