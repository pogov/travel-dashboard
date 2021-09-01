import {createGlobalStyle, ThemeProvider} from 'styled-components'
import type { AppProps } from 'next/app'
import './_app.css'
import { theme } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #F6F7FB;
  ;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider> 
    </>
  )
}
export default MyApp
