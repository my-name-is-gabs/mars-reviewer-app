/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['SourceSans3'],
        poppins: ['Poppins'],
      },
      textColor: {
        primary: '#8137b2',
        danger: '#C42727',
        info: '#3B63B8',
        success: '#0F6401',
      },
      backgroundColor: {
        primary: '#8137b2',
        danger: '#C42727',
        info: '#3B63B8',
        success: '#0F6401',
      },
      outlineColor: {
        primary: '#8137b2',
        danger: '#C42727',
        info: '#3B63B8',
        success: '#0F6401',
      },
    },
  },
  plugins: [],
};
