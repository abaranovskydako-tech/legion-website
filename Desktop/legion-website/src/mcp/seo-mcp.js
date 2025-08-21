export class SEOMCP {
  constructor() {
    this.name = 'SEO MCP';
    this.type = 'Search Engine Optimization';
  }

  generateMetaTags(content) {
    return `
      <meta name="title" content="${content.title}">
      <meta name="description" content="${content.description}">
      <meta name="keywords" content="${content.keywords}">
      <meta property="og:title" content="${content.ogTitle}">
      <meta property="og:description" content="${content.ogDescription}">
      <meta property="og:image" content="${content.ogImage}">
      <meta property="og:type" content="website">
      <meta name="twitter:card" content="summary_large_image">
    `;
  }

  generateStructuredData(data) {
    return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
  }

  optimizeContent(text) {
    return text
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }
}

