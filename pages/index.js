import Head from "next/head";
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
    </>
  );
};

export default HomePage;
