import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; 

import { authSliceActions } from "../store/authSlice";

const AuthGuard = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   if (!initializing) {
  //     //auth is initialized and there is no user
  //     if (!user) {
  //       // remember the page that user tried to access
  //       dispatch(authSliceActions.setRedirect(router.route));
  //       // setRedirect(router.route);
  //       router.push("/signin");
  //     }
  //   }
  // }, [router, user, dispatch]);

  console.log(router.route, isAuthenticated);
  if (isAuthenticated && router.route === "/login") {
    router.push("/");
    return null;
  }

  if (!isAuthenticated && router.route === "/login") {
    // dispatch(authSliceActions.setRedirect(router.route));
    return <>{children}</>;
  }

  // if auth initialized with a valid user show protected page
  if (isAuthenticated && user.idToken) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

export default AuthGuard;
