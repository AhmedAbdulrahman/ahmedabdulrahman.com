/* eslint-disable import/prefer-default-export */
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
      background: transparent;
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

    html *,
    body * {
      /* cursor: none; */
    }

    html {
      /* cursor: none; */
      font-family: sans-serif; // 1
      -ms-text-size-adjust: 100%; // 2
      -webkit-text-size-adjust: 100%; // 2
    }

    body {
      /* cursor: none; */
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 1rem;
      line-height: 1.625;
      overflow-x: hidden;
      transition: color 0.15s, background-color 0.15s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-y: none;
    }

    body::-webkit-scrollbar {
      width: 8px;
    }
    body::-webkit-scrollbar-thumb {
      background-color: ${p.colors.accent};
      border-radius: 6px;
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

    /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
    html.has-scroll-smooth {
      overflow: hidden;
    }

    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .has-scroll-smooth body {
      overflow: hidden;
    }

    /* Specifying the scroll container manually */
    .has-scroll-smooth #___gatsby,
    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh;
    }

    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 11px;
      height: 100vh;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0;
    }
    .c-scrollbar:hover {
      transform: scaleX(1.45);
    }
    .c-scrollbar:hover,
    .has-scroll-scrolling .c-scrollbar,
    .has-scroll-dragging .c-scrollbar {
      opacity: 1;
    }

    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${p.colors.accent};
      width: 7px;
      border-radius: 10px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab;
      z-index: 2;
    }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }

    html[data-direction="up"] header {
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-bottom: .1rem solid rgba(0,0,0,.1);
        transition: backdrop-filter .6s,opacity .4s;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: 100;
      }
  }
  `;
