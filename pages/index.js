import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../components/store/authSlice";

import Adventure from "../components/Adventures/Adventure";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";
import { useRouter } from "next/router";

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Adventours</title>
        <meta
          name="description"
          content="Visit anywhere in the world, your only limitation is your imagination"
        />
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
