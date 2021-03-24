const extension = {
  colors: {
    blue: {
      '1':      '#21354B',
      '2':      '#2A5989',
      '3':      '#2971C7',
      '4':      '#8DC5F6',
      '5':      '#F1F9FF', 
    },
    orange: {
      '1':    '#603C23',
      '2':    '#A85A2A',
      '3':    '#EE6F2D',
      '4':    '#F4B182',
      '5':    '#FEFBF3',
    },
    navyblue: {
      '1':  '#111C40',
      2:  '#1D3273',
      3:  '#3255BF',
      4:  '#CBD3F0',
      5:  '#F3F5FB',
    },
    green: {
      1:     '#315648',
      2:     '#3E896C',
      3:     '#6DBB9E',
      4:     '#ACE6D2',
      5:     '#EFFAF3',
    },
    red: {
      1:       '#51170C',
      2:       '#8C2919',
      3:       '#B93824',
      4:       '#EE8477',
      5:       '#FFF4F2',
    },
    grey: {
      1:      '#2D2D2E',
      2:      '#66676C',
      3:      '#939599',
      4:      '#D2D3D6',
      5:      '#F2F4F5',
    },
    white:    '#FFFFFF',
  },
  spacing: {
    xxs:  '4px',
    xs:   '8px',
    s:    '16px',
    m:    '24px',
    l:    '32px',
    xl:   '48px',
    xxl:  '64px',
  },
  fontFamily: {
    sans: 'Helvetica Neue',
  }
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: extension
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
