const styledComponentTheme = {
  theme: {
    colors: {
      blue1:      '#21354B',
      blue2:      '#2A5989',
      blue3:      '#2971C7',
      blue4:      '#8DC5F6',
      blue5:      '#F1F9FF', 
      orange1:    '#603C23',
      orange2:    '#A85A2A',
      orange3:    '#EE6F2D',
      orange4:    '#F4B182',
      orange5:    '#FEFBF3',
      navyblue1:  '#111C40',
      navyblue2:  '#1D3273',
      navyblue3:  '#3255BF',
      navyblue4:  '#CBD3F0',
      navyblue5:  '#F3F5FB',
      green1:     '#315648',
      green2:     '#3E896C',
      green3:     '#6DBB9E',
      green4:     '#ACE6D2',
      green5:     '#EFFAF3',
      red1:       '#51170C',
      red2:       '#8C2919',
      red3:       '#B93824',
      red4:       '#EE8477',
      red5:       '#FFF4F2',
      grey1:      '#2D2D2E',
      grey2:      '#66676C',
      grey3:      '#939599',
      grey4:      '#D2D3D6',
      grey5:      '#F2F4F5',
      white:      '#F3F5FB',
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
  },
};

const classnamesTheme = {};

const twinMacroTheme = {};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: styledComponentTheme, // or styledComponentTheme or twinMacroTheme
  variants: {
    extend: {},
  },
  plugins: [],
}
