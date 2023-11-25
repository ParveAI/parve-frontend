import { useRouter } from "next/router";
import Layout from "@/shared/Layout";

import "@/styles/globals.css";
import "@/styles/fonts.css";

const outOfLayoutRoutes = ["/login", "/register"];

import ToastProvider from "@/shared/ToastProvider";

const Providers = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
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
