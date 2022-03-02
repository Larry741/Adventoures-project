import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store/authSlice";
import Image from "next/image";
import useInput from "../hooks/use-input";

import image from "../../public/img/Destination__california.jpg";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
  const router = useRouter();
  const isLogIn = router.query.signup === "" ? false : true;
  console.log(isLogIn);
  
  const [isLogin, setIsLogin] = useState(isLogIn);
  const dispatch = useDispatch();
  const {
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameValueChangeHandler,
    reset: resetName,
  } = useInput((value) => value.length > 3);
  const {
    enteredValue: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailValueChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    enteredValue: enteredPassword,
    inputIsValid: passwordIsValid,
    inputIsInvalid: passwordIsInvalid,
    inputBlurHandler: passwordInputBlurHandler,
    valueChangeHandler: passwordValueChangeHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && value.length > 6);

  const signupFormIsValid = emailIsValid && passwordIsValid && nameIsValid;
  const loginFormIsValid = emailIsValid && passwordIsValid;

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (isLogin && !loginFormIsValid) {
      console.log("isLogin");
      return;
    }

    if (!isLogin && !signupFormIsValid) {
      console.log("isSignup");
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
      res
        .json()
        .then((data) => {
          throw new Error(data.error.message);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      res.json().then((data) => {
        if (isLogin) {
          dispatch(authSliceActions.logIn(data.idToken));
          router.push("/");
        } else {
          setIsLogin(true);
        }
      });
    }
    resetName()
    resetEmail();
    resetPassword();
  };;

  const inputfocusHandler = (event) => {
    event.target.previousElementSibling.id = `${classes["label-focus"]}`;
  }

  const switchAuthModeHandler = (event) => {
    event.preventDefault();
    resetEmail();
    resetName();
    resetPassword();
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <div className={classes.row}>
        <div className={classes.image}>
          <Image src={image} layout='responsive' alt="mountains" />
        </div>
        <form onSubmit={submitFormHandler} className={classes.form}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          {!isLogin && (
            <div
              className={`${classes.control} ${
                nameIsInvalid && classes.invalid
              }`}
            >
              <label htmlFor="name">Full name</label>
              <input
                onFocus={inputfocusHandler}
                onChange={nameValueChangeHandler}
                onBlur={nameInputBlurHandler}
                type="text"
                id="name"
                value={enteredName}
                placeholder="Full name"
              />
            </div>
          )}
          <div
            className={`${classes.control} ${
              emailIsInvalid && classes.invalid
            }`}
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              onFocus={inputfocusHandler}
              onChange={emailValueChangeHandler}
              onBlur={emailInputBlurHandler}
              type="text"
              id="email"
              value={enteredEmail}
              required
              placeholder="E-Mail Address"
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsInvalid && classes.invalid
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              onFocus={inputfocusHandler}
              onChange={passwordValueChangeHandler}
              onBlur={passwordInputBlurHandler}
              minLength={7}
              type="password"
              id="password"
              value={enteredPassword}
              required
              placeholder="Password"
            />
          </div>
          <div className={classes.actions}>
            <button className={classes.login}>
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
