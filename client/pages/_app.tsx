import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
