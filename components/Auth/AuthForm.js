import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn } from "next-auth/react";

import useInput from "../hooks/use-input";

import image from "../../public/img/Destination__california.jpg";
import classes from "./AuthForm.module.scss";

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

  const signupFormIsValid = emailIsValid && passwordIsValid && nameIsValid;
  const loginFormIsValid = emailIsValid && passwordIsValid;

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!signupFormIsValid) {
      return;
    }

    const res = await fetch("/api/auth/signup", {
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

    if (!res.ok) {
      res
        .json()
        .then((data) => {
          throw new Error(data.message);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      res.json().then((data) => {
        console.log(res);
        setIsLogin(true);
        resetName();
        resetEmail();
        resetPassword();
      });
    }
  };

  const googleloginHandler = async (event) => {
    await signIn('google', {
      callbackUrl: '/',
    });
  };

  const credentialsLoginHandler = async (event) => {
    event.preventDefault();

    if (!loginFormIsValid) {
      return;
    }

    const result = await signIn('credentials', {
      callbackUrl: '/',
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (result.error) {
      return console.log(result.error);
    }
    
    router.replace('/');
  }

  const inputfocusHandler = (event) => {
    event.target.previousElementSibling.id = `${classes["label-focus"]}`;
  }


  const switchAuthModeHandler = (event) => {
    event.preventDefault();
    
    resetEmail();
    emailLabelRef.current.removeAttribute('id');
    resetName();
    if (nameLabelRef.current) {
      nameLabelRef.current.removeAttribute("id");
    }
    resetPassword();
    passwordLabelRef.current.removeAttribute("id");
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <div className={classes.row}>
        <div className={classes.image}>
          <Image src={image} layout="responsive" alt="mountains" />
        </div>
        <form className={classes.form}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          {!isLogin && (
            <div
              className={`${classes.control} ${
                nameIsInvalid && classes.invalid
              }`}
            >
              <label htmlFor="name" ref={nameLabelRef}>Full name</label>
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
            <label htmlFor="email" ref={emailLabelRef}>E-Mail Address</label>
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
            <label htmlFor="password" ref={passwordLabelRef}>Password</label>
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
        <div>
          <button onClick={googleloginHandler}>log in with google</button>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
