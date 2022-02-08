import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../store/authSlice";
import useInput from "../hooks/use-input";

import classes from "./AuthForm.module.scss";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const {
    enteredValue: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailValueChangeHandler,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));
  const {
    enteredValue: enteredPassword,
    inputIsValid: passwordIsValid,
    inputIsInvalid: passwordIsInvalid,
    inputBlurHandler: passwordInputBlurHandler,
    valueChangeHandler: passwordValueChangeHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && value.length > 7);
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);


  useEffect(() => {
    // if (isLogin) {
    //   router.query.authPage = ":login";
    // } else {
    //   router.query.authPage = ":signup";
    // }

    router.query.authPage !== ":login" ? setIsLogin(false) : null;
  }, [router, isLogin]);

  const formIsValid = emailIsValid && passwordIsValid;

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const inputData = {
      email: enteredEmail,
      password: enteredPassword,
    };

      let requestUrl;
      isLogin
        ? (requestUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZMFjt27Lg-n98yGQwWk_VMZrFtp-F1xM")
        : (requestUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZMFjt27Lg-n98yGQwWk_VMZrFtp-F1xM");

      const res = await fetch(requestUrl, {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/Json",
        },
      });

      if (!res.ok) {
        res.json()
          .then((data) => {
            throw new Error(data.error.message);
          }).catch(error => {
            console.log(error.message)
          })
      } else {
        res.json().then(data => {
          if (isLogin) {
            dispatch(authSliceActions.logIn(data.idToken))
            router.push('/')
          } else {
            setIsLogin(true);
          }
        })
      }

      resetEmail();
      resetPassword();

  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    console.log('ran')
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            onChange={emailValueChangeHandler}
            onBlur={emailInputBlurHandler}
            type="text"
            id="name"
            value={enteredEmail}
          />
          {emailIsInvalid && <p>Please enter a valid Email</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Your Password</label>
          <input
            onChange={passwordValueChangeHandler}
            onBlur={passwordInputBlurHandler}
            minLength={7}
            type="password"
            id="password"
            value={enteredPassword}
            required
          />
          {passwordIsInvalid && <p>Please enter a valid Password</p>}
        </div>
        <div className={classes.actions}>
          {/* {isLoading ? <p>Loading...</p> : null} */}
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
