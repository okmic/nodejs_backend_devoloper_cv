export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff', 
          500: '#8b5cf6',
          600: '#7c3aed',
          900: '#4c1d95'
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate'
      }
    }
  }
}