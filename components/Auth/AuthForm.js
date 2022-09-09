import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn } from "next-auth/react";

import useInput from "../hooks/use-input";

import classes from "./AuthForm.module.scss";
import Navigation from "../navigation/navigation";

const AuthForm = () => {
  const nameLabelRef = useRef(null);
  const emailLabelRef = useRef(null);
  const passwordLabelRef = useRef(null);

  const router = useRouter();
  const isLogIn = router.query.signup === "" ? false : true;

  const [isLogin, setIsLogin] = useState(isLogIn);
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

  useEffect(() => {
    if (isLogin === isLogIn) return;
    setIsLogin(isLogIn);
  }, [isLogIn]);

  const signupFormIsValid = emailIsValid && passwordIsValid && nameIsValid;
  const loginFormIsValid = emailIsValid && passwordIsValid;

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!signupFormIsValid) {
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "post",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/Json",
        },
      });

      if (!response.ok) {
        if (response.status === 500) {
          throw new Error("Server error! we could not complete your request");
        } else if (response.status === 400) {
          throw new Error("Invalid user details");
        } else if (response.status === 409) {
          throw new Error("Email already exists");
        }
        throw new Error("Bad Request");
      }

      const res = await response.json();

      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  const googleloginHandler = async (event) => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  const credentialsLoginHandler = async (event) => {
    event.preventDefault();

    if (!loginFormIsValid) {
      return;
    }

    try {
      const result = await signIn("credentials", {
        callbackUrl: "/",
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      router.replace("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const inputfocusHandler = (event) => {
    event.target.previousElementSibling.id = `${classes["label-focus"]}`;
  };

  const switchAuthModeHandler = (event) => {
    event.preventDefault();

    resetEmail();
    emailLabelRef.current.removeAttribute("id");
    resetName();
    if (nameLabelRef.current) {
      nameLabelRef.current.removeAttribute("id");
    }
    resetPassword();
    passwordLabelRef.current.removeAttribute("id");

    const link = isLogin ? "/auth?signup" : " /auth";
    router.push(link);
  };

  const firstNavigationLink = {
    link: isLogin ? " /auth" : "/auth?signup",
    title: isLogin ? "Sign In" : "Create An Account",
  };

  return (
    <>
      <Navigation firstNavigationLink={firstNavigationLink} />
      <section className={classes.auth}>
        <div className={classes.row}>
          <div className={classes.image}></div>
          <form className={classes.form}>
            <h1 className="heading__secondary-2">
              {isLogin ? "LOGIN" : "SIGN UP"}
            </h1>
            {!isLogin && (
              <div
                className={`${classes.control} ${
                  nameIsInvalid && classes.invalid
                }`}
              >
                <label htmlFor="name" ref={nameLabelRef}>
                  Full name
                </label>
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
              <label htmlFor="email" ref={emailLabelRef}>
                E-Mail Address
              </label>
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
              <label htmlFor="password" ref={passwordLabelRef}>
                Password
              </label>
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
            <div className={`${classes.actions} small-text`}>
              <button
                className={classes.login}
                onClick={isLogin ? credentialsLoginHandler : signupHandler}
              >
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
    </>
  );
};

export default AuthForm;
