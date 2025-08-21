import { ContentAgent } from '../agents/content-agent.js';
import { UIAgent } from '../agents/ui-agent.js';
import { UIMCP } from '../mcp/ui-mcp.js';

export class FeaturesSection {
  constructor() {
    this.contentAgent = new ContentAgent();
    this.uiAgent = new UIAgent();
    this.uiMCP = new UIMCP();
  }

  render() {
    const features = this.contentAgent.getFeaturesContent();
    const colors = this.uiAgent.getColorScheme();
    const spacing = this.uiAgent.getSpacing();
    
    const section = this.uiMCP.createComponent('section', 'features');
    
    const featuresContent = `
      <div class="features__container">
        <h2 class="features__title">Почему выбирают Legion?</h2>
        <div class="features__grid">
          ${features.map(feature => `
            <div class="feature-card">
              <div class="feature-card__icon">${feature.icon}</div>
              <h3 class="feature-card__title">${feature.title}</h3>
              <p class="feature-card__description">${feature.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    section.innerHTML = featuresContent;
    
    // Добавляем стили
    this.uiMCP.addStyles(section, {
      padding: `${spacing.xxl} ${spacing.md}`,
      backgroundColor: '#f8fafc'
    });
    
    return section;
  }
}

