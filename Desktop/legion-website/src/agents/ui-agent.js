export class UIAgent {
  constructor() {
    this.name = 'UI Agent';
    this.role = 'User Interface Designer';
  }

  getColorScheme() {
    return {
      primary: '#2563eb',
      secondary: '#1e40af',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      neutral: '#6b7280'
    };
  }

  getTypography() {
    return {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      sizes: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        body: '1rem',
        small: '0.875rem'
      }
    };
  }

  getSpacing() {
    return {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      xxl: '4rem'
    };
  }
}

