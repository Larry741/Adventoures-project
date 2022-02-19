import Link from "next/link";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

import { authSliceActions } from "../../store/authSlice";
import { modalSliceActions } from "../../store/modalSlice";
import Modal from "../../UI/Modal";

import classes from './ProfileBox.module.scss';

const ProfileBox = (props) => {
  const dispatch = useDispatch();
  const NavbarRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
    const eventTarget = event.target.closest('div').id;

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
    <div className={classes.profileBox} id={'dropdown-1btn'} onClick={openProfile}>
      {props.showModal && props.modalShouldBeActive ? (
        <Modal onModalReact={closeProfile} />
      ) : (
        ""
      )}
      {isAuthenticated ? <span className={classes['material-icons-2']} ><FaTwitter/></span> :
      <span className={classes['material-icons-3']} > <FiLogIn/></span>}
      <div
        style={{ display: cont5 ? "block" : "" }}
        id={classes["dropdown-content-1"]}
        className={`${classes["dropdown-content-1"]}`}
      >
        {!isAuthenticated && (
          <>
            <Link href="/login?signup">Sign up</Link>
            <Link href="/login">Log in</Link>
          </>
        )}
        {isAuthenticated && <button onClick={logOutHandler}>Log out</button>}
        <hr />
        <Link href="#">Help</Link>
      </div>
    </div>
  );
}

export default ProfileBox;