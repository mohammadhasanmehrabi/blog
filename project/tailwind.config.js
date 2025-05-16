/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5F0E8',
          100: '#E6DFD1',
          200: '#D8CEBA',
          300: '#C9BDA3',
          400: '#B0A183',
          500: '#97866C',
          600: '#7D6E59',
          700: '#635747',
          800: '#493F34',
          900: '#302822',
        },
        cream: {
          50: '#FFFCF6',
          100: '#FFF8E8',
          200: '#FFF3D6',
          300: '#FFEEC4',
          400: '#FFE9B3',
          500: '#FFE4A1',
          600: '#E5CB8F',
          700: '#CCB27D',
          800: '#B2996B',
          900: '#997F59',
        },
        gold: {
          50: '#FEF9E7',
          100: '#FCF3D0',
          200: '#FAE7A0',
          300: '#F7DC71',
          400: '#F5D041',
          500: '#F2C511',
          600: '#CCA00E',
          700: '#A67C0B',
          800: '#805708',
          900: '#593305',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      height: {
        'hero': 'calc(100vh - 5rem)',
        'hero-sm': 'calc(80vh - 5rem)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'menu-pattern': "url('https://images.pexels.com/photos/6802974/pexels-photo-6802974.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'about-pattern': "url('https://images.pexels.com/photos/4349865/pexels-photo-4349865.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
    },
  },
  plugins: [],
};