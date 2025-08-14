export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf7f7',
          100: '#fcebeb',
          200: '#f7d5d5',
          300: '#f0b3b3',
          400: '#e68585',
          500: '#d45757',
          600: '#c03939',
          700: '#a02929',
          800: '#852525',
          900: '#702424',
        },
        secondary: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#cccccc',
          500: '#999999',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        accent: {
          50: '#fef9f0',
          100: '#fef0db',
          200: '#fcdbbb',
          300: '#f9be8b',
          400: '#f59a59',
          500: '#f17b34',
          600: '#e35b1c',
          700: '#bc4718',
          800: '#96391b',
          900: '#793019',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'text-gradient': 'linear-gradient(135deg, #d45757, #f17b34)',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
