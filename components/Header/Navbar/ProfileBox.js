import Link from "next/link";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authSliceActions } from "../../store/authSlice";
import { modalSliceActions } from "../../store/modalSlice";
import Modal from "../../UI/Modal";

import classes from './ProfileBox.module.scss';

const ProfileBox = (props) => {
  const dispatch = useDispatch();
  const NavbarRef = useRef(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  console.isLoggedIn

  const { cont5 } = props.isActive;

  useEffect(() => {
    NavbarRef.current = document.getElementById("navBar");
  }, []);

  const closeProfile = () => {
    dispatch(modalSliceActions.closeModal());
    NavbarRef.current.classList.remove(`sticky`);
    props.setSticky(false);
    props.setIsActive({
      cont1: false,
      cont2: false,
      cont3: false,
      cont4: false,
      cont5: false,
    });
  }

  const openProfile = (event) => {
    const eventTarget = event.target.id;

    if (
      eventTarget !== "dropdown-1btn") {
      return;
    }

    dispatch(modalSliceActions.showModal());
    NavbarRef.current.classList.add(`sticky`);
    props.setSticky(true);
    
    if (eventTarget === "dropdown-1btn") {
      props.setIsActive({
        cont1: false,
        cont2: false,
        cont3: false,
        cont4: false,
        cont5: true,
      });
    } 
  }

  const logOutHandler = () => {
    dispatch(authSliceActions.logOut());
    closeProfile();
  }

  return (
    <div className={classes.profileBox}>
      {props.showModal && props.modalShouldBeActive ? (
        <Modal onModalReact={closeProfile} />
      ) : (
        ""
      )}
      <span
        onClick={openProfile}
        id="dropdown-1btn"
        className={`material-icons ${classes["material-icons-1"]} 'dropbtn`}
      >
        menu
      </span>
      <span
        onClick={openProfile}
        id="dropdown-1btn"
        className={`material-icons ${classes["material-icons-2"]} 'dropbtn`}
      >
        account_circle
      </span>
      <div
        style={{ display: cont5 ? "block" : "" }}
        id={classes["dropdown-content-1"]}
        className={`${classes["dropdown-content-1"]}`}
      >
        {!isLoggedIn && <>
          <Link href="/:signup">Sign up</Link>
          <Link href="/:login">Log in</Link>
        </>}
        {isLoggedIn && <button onClick={logOutHandler}>Log out</button>}
        <hr />
        <Link href="#">Help</Link>
      </div>
    </div>
  );
}

export default ProfileBox;