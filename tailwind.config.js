/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
    'sm': '400px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    extend: {
      iconColor: {
        'css': '#FAFBFB',
        'html': '#20232A',
        'react': '#33373E',
        'bootstrap': '#F7F7F7',
        'wpf': 'rgba(0, 0, 0, 0.5)',
        'javascript': '#FAFBFB',
        'tailwind': '#20232A',
        'xaml': '#33373E',
        'blazor': '#F7F7F7',
        'sqlserver': 'rgba(0, 0, 0, 0.5)',
        'vscode': '#F7F7F7',
        'vstudio': 'rgba(0, 0, 0, 0.5)',

      },backgroundColor: {
          'btn-bg': '#1d4ed8',
      }
    },
  },
  plugins: [],
}