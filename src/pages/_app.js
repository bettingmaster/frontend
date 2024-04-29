import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>BetWeb</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
