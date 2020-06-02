import { css } from '@emotion/core';

export const globalStyles = p =>
  css`
    /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */

    // @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:600&display=swap');

    :root {
      --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
      --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
      font-size: inherit;
    }

    ::selection {
      background: ${p.colors.selection};
      color: #fff;
    }

    :root {
      -ms-overflow-style: -ms-autohiding-scrollbar;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      cursor: default;
      font-size: 0.625rem;
      line-height: 1.4;
    }

    html {
      font-family: sans-serif; // 1
      -ms-text-size-adjust: 100%; // 2
      -webkit-text-size-adjust: 100%; // 2
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 1rem;
      line-height: 1.625;
      overflow-x: hidden;
      transition: color 0.15s, background-color 0.15s;
    }

    p {
      color: ${p.colors.primary};
      margin: 10px 0;
    }

    button,
    a {
      position: relative;
      cursor: pointer;
      text-decoration: none;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
      vertical-align: middle;
    }

    dl,
    ol,
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    input,
    textarea,
    select,
    button {
      font-family: 'Text', Serif;
    }

    .underline {
      text-decoration: underline;
    }

    button,
    input,
    select,
    textarea {
      color: inherit;
      font-family: inherit;
      font-style: inherit;
      font-weight: inherit;
    }

    code,
    kbd,
    pre,
    samp {
      font-family: monospace;
    }

    fieldset,
    button {
      appearance: none;
      border: none;
      outline: none;
      background: transparent;
    }

    table {
      border-collapse: separate;
      border-spacing: 0;
    }

    audio:not([controls]) {
      display: none;
    }

    details {
      display: block;
    }

    input {
      &:focus,
      &:active {
        outline: none;
      }
      &[type='number'] {
        width: auto;
      }
    }

    img.Image__Zoom ~ div {
      background: transparent !important;
    }

    p.dropcap:first-letter {
      font-family: 'Recoleta', Serif;
      font-weight: 600;
      font-style: normal;
      font-size: 6em;
      float: left;
      margin-right: 4px;
      margin-top: 22px;
      line-height: 0.5;
      text-transform: uppercase;
      color: #3a5c21;
    }
  `;
