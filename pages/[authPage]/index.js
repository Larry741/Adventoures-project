import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthForm from "../../components/Auth/AuthForm";
import { authSliceActions } from "../../components/store/authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    if (token) {
      dispatch(authSliceActions.logIn(token));
    }
    if (isLoggedIn) {
      router.push("/");
    }
  });

  return (
    <>
      <AuthForm />
    </>
  );
};

export default AuthPage;
