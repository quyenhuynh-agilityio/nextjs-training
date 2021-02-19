module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      raleWay: ['Raleway', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      s: '15px',
      base: '1rem',
      lg: '1.125rem',
      xl: '28px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '45px',
      '6xl': '4rem',
    },
    width: {
      176: '176px',
      230: '230px',
      1141: '1141px',
      1147: '1147px',
    },
    spacing: {
      10: '10px',
      30: '30px',
      64: '64px',
      80: '80px',
      125: '125px',
      35: '35px',
      100: '100px',
      122: '122px',
      5: '5px',
      10: '10px',
      16: '16px',
      auto: '0 auto',
    },
    extend: {
      colors: {
        red: {
          100: '#e2574c',
        },
        gray: {
          70: '#3c3c3c',
          80: '#797979',
          90: '#e6e6e6',
          100: '#303030',
          110: '#f3f3f3',
          120: '#f6f6f6',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
