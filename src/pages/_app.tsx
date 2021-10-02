import { AppProps } from "next/app";

import Layout from "components/Layout";

import usePageView from "../hooks/usePageView";
import { useGoogleAdsense } from "hooks/useGoogleAdsense";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  useGoogleAdsense()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
