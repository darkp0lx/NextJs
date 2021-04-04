// import App from 'next/app'
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";
import theme from "../styles/theme";

import { StateProvider } from "../store/stateProvider";
import reducer, { initialState } from "../store/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
          ></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
