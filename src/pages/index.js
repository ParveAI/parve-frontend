import Head from "next/head";

import HomeView from "./home";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | ParveAI</title>
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
