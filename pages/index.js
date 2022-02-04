import Head from "next/head";
import Destinations from "../components/Destinations/Destinations";
import MainHeader from "../components/Header/MainHeader";

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
      <MainHeader />
      <Destinations />
    </>
  );
};

export default HomePage;
