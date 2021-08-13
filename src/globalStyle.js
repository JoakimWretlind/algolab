import { createGlobalStyle } from 'styled-components';
import Cinzel from './components/fonts/CinzelRegular.ttf';
import Code from './components/fonts/Code.otf';
import CocoL from './components/fonts/CocoGothicLight.ttf';
import CocoUL from './components/fonts/CocoGothicUltralight.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cinzel';
    src: url(${Cinzel});
    font-display: swap;
  };
  @font-face {
    font-family: 'Code';
    src: url(${Code});
    font-display: swap;
  };
  @font-face {
    font-family: 'CocoGothicL';
    src: url(${CocoL});
    font-display: swap;
  };
  @font-face {
    font-family: 'CocoGothic';
    src: url(${CocoUL});
    font-display: swap;
  };

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;