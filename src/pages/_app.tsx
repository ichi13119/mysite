import "../styles/globals.scss";
import { AppProps } from "next/app";
import Layout from "components/layout";

import usePageView from "../hooks/usePageView";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
