import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const baseFontSize = 16;

export const lightTheme = {
  background: '#ffffff',
  backgroundOpaque: 'rgba(255,255,255, 0.5)',
  primaryFont: '#363636',
  secondaryFont: '#1f4068',
  headerAccent: '#5cdb95',
  accent: '#1F6CC7',
  contrast: '#050505',
  blackOpaque: 'rgba(5,5,5, 0.2)',
  menuBackground: '#1F6CC7',
  menuBorder: '#1F6CC7',
  menuFontColor: '#ffffff',
  black: '#050505',
  opaqueContrast: 'rgba(31,108,199, 0.7)',
  alert: '#cf1b1b',
};

export const darkTheme = {
  background: '#200C90',
  backgroundOpaque: 'rgba(32,12,144, 0.3)',
  primaryFont: '#ffffff',
  secondaryFont: '#D9D9D9',
  headerAccent: '#5cdb95',
  accent: '#5cdb95',
  contrast: '#ffffff',
  blackOpaque: 'rgba(5,5,5, 0.2)',
  menuBackground: '#200C90',
  menuBorder: '#ffffff',
  menuFontColor: '#ffffff',
  black: '#050505',
  opaqueContrast: 'rgba(255,255,255, 0.3)',
  alert: '#cf1b1b',
};

export const globalTheme = {
  baseFontSize: `${baseFontSize}px`,
  fonts: {
    roboto: 'Roboto, monospace',
    montserrat: 'Montserrat, monospace',
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    extraBold: '700',
    black: '900',
  },
  breakpoints: {
    small: '576',
    medium: '768',
    large: '992',
    extraLarge: '1200',
  },
  globalValues: {
    sidebar: 400,
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    max-width:100%;
    width: 100%;
    display: block;
  }

  ul {
      padding: 0;
      margin: 0;
    }

  button, input, textarea {
    outline: none;
    border: 1px solid transparent;

    &:focus, &:active {
     border-color: ${({ theme }) => theme.accent};
    }
  }

  /* override default */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
    -moz-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
  }

  a {
    text-decoration: none;
    outline: 1px solid transparent;

    &:focus, &:active {
      outline-color: ${({ theme }) => theme.secondaryFont};
    }
  }


  html {
    font-size: ${baseFontSize}px;
  }

  body {
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.primaryFont};
    line-height: 1.6;
    background: ${({ theme }) => theme.background};
  }
`;
