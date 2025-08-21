import { ContentAgent } from '../agents/content-agent.js';
import { UIAgent } from '../agents/ui-agent.js';
import { UIMCP } from '../mcp/ui-mcp.js';

export class FooterSection {
  constructor() {
    this.contentAgent = new ContentAgent();
    this.uiAgent = new UIAgent();
    this.uiMCP = new UIMCP();
  }

  render() {
    const footerContent = this.contentAgent.getFooterContent();
    const colors = this.uiAgent.getColorScheme();
    const spacing = this.uiAgent.getSpacing();
    
    const footer = this.uiMCP.createComponent('footer', 'footer');
    
    const footerHTML = `
      <div class="footer__container">
        <div class="footer__content">
          <div class="footer__company">
            <h3 class="footer__company-name">${footerContent.company}</h3>
            <p class="footer__company-description">${footerContent.description}</p>
          </div>
          
          <div class="footer__contacts">
            <h4 class="footer__contacts-title">Контакты</h4>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">📞</span>
              <a href="tel:${footerContent.contacts.phone}" class="footer__contact-link">
                ${footerContent.contacts.phone}
              </a>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">✉️</span>
              <a href="mailto:${footerContent.contacts.email}" class="footer__contact-link">
                ${footerContent.contacts.email}
              </a>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">📍</span>
              <span class="footer__contact-text">${footerContent.contacts.address}</span>
            </div>
          </div>
          
          <div class="footer__links">
            <h4 class="footer__links-title">Разделы</h4>
            <ul class="footer__links-list">
              ${footerContent.links.map(link => `
                <li class="footer__links-item">
                  <a href="${link.href}" class="footer__links-link">${link.text}</a>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <div class="footer__bottom">
          <p class="footer__copyright">
            © ${new Date().getFullYear()} ${footerContent.company}. Все права защищены.
          </p>
        </div>
      </div>
    `;
    
    footer.innerHTML = footerHTML;
    
    // Добавляем стили
    this.uiMCP.addStyles(footer, {
      backgroundColor: colors.secondary,
      color: 'white',
      padding: `${spacing.xl} ${spacing.md}`,
      marginTop: spacing.xxl
    });
    
    return footer;
  }
}

