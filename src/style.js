import {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    background-color: hsl(0, 0%, 5%);
}


:root {
    --black: hsl(0, 0%, 5%);
    --white: hsl(0, 0%, 75%);
}

::-moz-selection { background: yellow; color: var(--black) }
::selection { background: yellow; color: var(--black); }

body{
    min-height: 100vh;
    background-color: var(--black);
    color: var(--white);
    font-family: proxima-nova, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    @media (min-width: 1500px){
        font-size: 20px;
    }
}


a{
    text-decoration: underline;
    color: var(--white)
}

strong {
  font-weight: 700;
}


em{
  font-family: proxima-nova, sans-serif;
font-weight: 300;
font-style: italic;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 1.6187em;
    // font-weight: 500;

  }

  p {
    font-size: 1em;
    text-align: justify;
    /* margin-bottom: 1rem; */
    font-weight: 300;
    line-height: 1.4;
    color: var(--white);

    @media (max-width: 500px){
    }

  }

  button{
    color:     color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
    transition: background-color 0.5s ease-in-out;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:hover{
    background-color: var(--white);
    color: var(--black);
    transition: background-color 0.5s ease-in-out;
  }

  button:active{
    transform: scale(.9);
  }

`

// GRIDS and LAYOUT
export const Grid = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const Col2_2 = css`
  grid-column: 7 / 13;

  @media (max-width: 950px) {
    grid-column: 2;
  }

  @media (max-width: 500px) {
    grid-column: 1;
  }
`

export const Col2_1 = css`
  grid-column: 1 / 7;

  @media (max-width: 950px) {
    grid-column: 1;
  }

  @media (max-width: 500px) {
    grid-column: 1;
  }
`

export const Marginals = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: 7vw;
  padding-right: 7vw;
`
