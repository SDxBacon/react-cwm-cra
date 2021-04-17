import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 10vmin;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

  @font-face {
    font-display: swap;
    font-family: GenYoMinTWTTF;
    src: local('GenYoMinTWTTF'),
      url(${process.env.PUBLIC_URL}/fonts/GenYoMin-R.woff) format('WOFF');
  }

  @font-face {
    font-display: swap;
    font-family: GenYoMin TW TTF;
    src: local('GenYoMin TW TTF'),
      url(${process.env.PUBLIC_URL}/fonts/GenYoMin-R.woff) format('WOFF');
  }

  @font-face {
    font-display: swap;
    font-family: GenYoGothicTWTTF;
    src: local('GenYoGothicTWTTF'),
      url(${process.env.PUBLIC_URL}/fonts/GenYoGothic-R.woff) format('WOFF');
  }

  @font-face {
    font-display: swap;
    font-family: 'AdobeTextPro';
    src: url(${process.env.PUBLIC_URL}/fonts/AdobeTextPro-Regular.woff)
        format('woff'),
      url(${process.env.PUBLIC_URL}/fonts/AdobeTextPro-Regular.ttf)
        format('truetype');
  }
  
  h2 {
    color: #566c6c;
    font-family: GenYoMinTWTTF;
    font-weight: bold;
    margin: 0;

    
    ${media.greaterThan('large')`
      font-size: ${pxToRem(35)};
      line-height: ${pxToRem(41)};
      letter-spacing: ${pxToRem(1.75)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(22)};
      line-height: ${mPxToRem(25)};
      letter-spacing: ${mPxToRem(1.1)};
    `}
  }

  h3 {
    color: #566c6c;
    font-family: GenYoMinTWTTF;
    font-weight: 500;
    margin: 0;

    ${media.greaterThan('large')`
      font-size: ${pxToRem(25)};
      line-height: ${pxToRem(29)};
      letter-spacing: ${pxToRem(1.25)};
    `}

    ${media.lessThan('large')`
      font-size: ${mPxToRem(15)};
      line-height: ${mPxToRem(17)};
      letter-spacing: ${mPxToRem(0.75)};
    `}
  }

  *.only-mobile {
    ${media.greaterThan('large')`
      display: none;
    `}
  }

  *.only-desktop {
    ${media.lessThan('large')`
      display: none;
    `}
  }

`;

export default GlobalStyle;
