import Head from "next/head";

import Adventure from "../components/Adventures/Adventure";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Adventours</title>
        <meta
          name="description"
          content="Visit anywhere in the world, your only limitation is your imagination"
        />
        <link rel="icon" href="/logo-black.png" />
      </Head>
      <Header />
      <Destinations />
      <Adventure />
      <Stories />
      <Footer />
    </>
  );
};

export default HomePage;
