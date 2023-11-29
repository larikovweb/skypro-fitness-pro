import { css, Global } from '@emotion/react';
import { FC } from 'react';
import { calcFluidFontSize } from './mixins';
import StratosSkyengWoff2 from '../assets/fonts/Stratos.woff2';
import emotionReset from 'emotion-reset';
import {
  $desktopWidth,
  $mainBackgroundColor,
  $mainFont,
  $mainFontColor,
  $mainFontSize,
  $phoneWidth,
  $tableWidth,
} from './variables';
import { SCREEN_LG, SCREEN_MD, SCREEN_SM } from '../utils/consts';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      ${emotionReset}
      @font-face {
        font-family: 'Stratos';
        src: local('Stratos'), url('${StratosSkyengWoff2}') format('woff2');
        font-weight: 400;
        font-style: normal;
      }

      html {
        font-family: ${$mainFont};
        font-size: ${$mainFontSize};
        scroll-behavior: smooth;
        @media screen and (max-width: ${$desktopWidth}) {
          /* font-size: ${calcFluidFontSize(11.0223, 21.3333, SCREEN_MD, SCREEN_LG)}; */
          font-size: 16px;
        }
        @media screen and (max-width: ${$tableWidth}) {
          font-size: ${calcFluidFontSize(9.9999, 20.6666, SCREEN_SM, SCREEN_MD)};
        }
        @media screen and (max-width: ${$phoneWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 20.48, 280, SCREEN_SM)};
        }
      }

      * {
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
      }

      input,
      button {
        outline: none;
        border: none;
        font-family: ${$mainFont};
      }

      body {
        position: relative;
        background: ${$mainBackgroundColor};
        color: ${$mainFontColor};
      }

      #root {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      }
    `}
  />
);
