import { useEffect, useState, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import WidthContext from "../store/width-context";

import styles from "./notification.module.scss";

const NotificationDom = ({ children, successState, closeNotification }) => {
  const [updateUi, setUpdateUi] = useState(true);
  const notificationRef = useRef();
  const ctx = useContext(WidthContext);

  useEffect(() => {
    if (updateUi) {
      setUpdateUi(false);
      return;
    }

    showNot();
    document.addEventListener("scroll", showNot);
    return () => {
      document.removeEventListener("scroll", showNot);
    };
  }, [updateUi, ctx.docWidth]);

  const showNot = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (!notificationRef.current) {
      return
    }

    if (scrollTop < 40) {
      if (ctx.docWidth <= 480) {
        notificationRef.current.style.top = "73px";
      } else if (ctx.docWidth <= 666) {
        notificationRef.current.style.top = "73px";
      } else {
        notificationRef.current.style.top = "83.5px";
      }

    } else {
      if (ctx.docWidth <= 800) {
        notificationRef.current.style.top = "67px";
      } else {
        notificationRef.current.style.top = "72px";
      }
    }
  };

  return (
    <span ref={notificationRef} className={`${styles.notification} small-text`}>
      <span className="mediumSmallText">{children}</span>
      <span onClick={closeNotification} className={styles[`${successState}`]}>
        {successState !== "success" ? <IoCloseSharp /> : <FaCheck />}
      </span>
    </span>
  );
};

const Notification = ({ children, successState, closeNotification }) => {
  return (
    <>
      {createPortal(
        <NotificationDom
          closeNotification={closeNotification}
          successState={successState}
        >
          {children}
        </NotificationDom>,
        document.body
      )}
    </>
  );
};

export default Notification;
