import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Head from "next/head";
import Layout from "@/components/Layout";
import { MatchProvider } from "@/context/MatchContext";
import { AuthProvider } from "@/context/AuthContext";
import { SelectedGamesProvider } from "@/context/SelectedGameContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>BetWeb</title>
        </Head>
        <SelectedGamesProvider>
          <AuthProvider>
            <MatchProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MatchProvider>
          </AuthProvider>
        </SelectedGamesProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
