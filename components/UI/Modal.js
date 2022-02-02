import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import style from "./Modal.module.css";

const ModalDom = (props) => {
  return (
    <div
      id="modal"
      onClick={props.closeModalHandler}
      className={style.modal}
    ></div>
  );
};

const Modal = (props) => {
  const closeModalHandler = () => {
    // if (event.target.closest("div").id !== "modal") {
    //   return;
    // }
    props.onModalReact();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalDom closeModalHandler={closeModalHandler} />,
        document.body
      )}
    </Fragment>
  );
};

export default Modal;
