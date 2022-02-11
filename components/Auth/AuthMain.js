import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authSliceActions } from "../store/authSlice";

const AuthMain = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("idToken");
    if (token) {
      dispatch(authSliceActions.logIn(token));
    }
  });

  return <>{children}</>;
}

export default AuthMain;