import Head from "next/head";
import Adventure from "../components/Adventures/Adventure";
import Destinations from "../components/Destinations/Destinations";
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Tour App</title>
        <meta
          name="description"
          content="Visit anywhere in the world, your only limitation is your imagination"
        />
      </Head>
      <Header />
      <Destinations />
      <Adventure />
      <Stories />
    </>
  );
};

export default HomePage;
