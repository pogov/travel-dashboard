import {createGlobalStyle, ThemeProvider} from 'styled-components'
import type { AppProps } from 'next/app'
import './_app.css'
import { createTheme } from '../styles/theme';
import useDarkMode from '../src/hooks/useDarkMode';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #FFFFFF;
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
  const { theme, toggleMode } = useDarkMode();
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={createTheme(theme)}>
        <Component {...pageProps} toggleMode={toggleMode}/>
      </ThemeProvider>
    </>
  )
}
export default MyApp
