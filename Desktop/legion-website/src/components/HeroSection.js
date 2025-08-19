import { ContentAgent } from '../agents/content-agent.js';
import { UIAgent } from '../agents/ui-agent.js';
import { UIMCP } from '../mcp/ui-mcp.js';

export class HeroSection {
  constructor() {
    this.contentAgent = new ContentAgent();
    this.uiAgent = new UIAgent();
    this.uiMCP = new UIMCP();
  }

  render() {
    const content = this.contentAgent.getHeroContent();
    const colors = this.uiAgent.getColorScheme();
    const spacing = this.uiAgent.getSpacing();
    
    const hero = this.uiMCP.createComponent('section', 'hero');
    
    const heroContent = `
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">${content.title}</h1>
          <p class="hero__subtitle">${content.subtitle}</p>
          <p class="hero__description">${content.description}</p>
          <div class="hero__actions">
            <button class="hero__cta hero__cta--primary">${content.cta}</button>
            <span class="hero__urgency">${content.urgency}</span>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__icon">🏢</div>
        </div>
      </div>
    `;
    
    hero.innerHTML = heroContent;
    
    // Добавляем стили
    this.uiMCP.addStyles(hero, {
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      color: 'white',
      padding: `${spacing.xxl} ${spacing.md}`,
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    });
    
    return hero;
  }
}
