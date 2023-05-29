import { useRouter } from "next/router";
import Layout from "@/shared/Layout";

import { ThemeProvider } from "styled-components";
import { theme } from "@/config/ThemeConfig";

import "@/styles/globals.css";
import "@/styles/fonts.css";

const outOfLayoutRoutes = ["/login"];

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function App({ Component, pageProps }) {
  let { pathname } = useRouter();

  let isOutOfLayout = outOfLayoutRoutes.includes(pathname);
  if (isOutOfLayout)
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );

  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
