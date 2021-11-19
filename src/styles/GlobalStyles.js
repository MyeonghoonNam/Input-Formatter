import { css } from '@emotion/react'
import emotionReset from 'emotion-reset'

export const GlobalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  button:active {
    outline: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }
`
