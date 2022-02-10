import Head from "next/head";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../components/store/authSlice";

import Adventure from "../components/Adventures/Adventure";
import Destinations from "../components/Destinations/Destinations";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    if (token) {
      dispatch(authSliceActions.logIn(token));
    }
  })

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
      <Footer />
    </>
  );
};

export default HomePage;
