import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import style from "./Modal.module.scss";

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
        document.getElementById('__next')
      )}
    </Fragment>
  );
};

export default Modal;
