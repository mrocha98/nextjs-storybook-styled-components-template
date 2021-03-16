import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

export type GlobalStyleProps = {
  removeBg?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  /********************* fonts setup *********************/
  /* https://google-webfonts-helper.herokuapp.com/fonts */
  /* rubik-300 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/rubik-v12-latin-300.woff2') format('woff2');
  }
  /* rubik-regular - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/rubik-v12-latin-regular.woff2') format('woff2');
  }
  /* rubik-700 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/rubik-v12-latin-700.woff2') format('woff2');
  }
  /*******************************************************/
  ${({ theme, removeBg }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`
