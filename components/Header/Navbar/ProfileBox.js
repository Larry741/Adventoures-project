import Link from "next/link";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

import { modalSliceActions } from "../../store/modalSlice";
import Modal from "../../UI/Modal";

import classes from './ProfileBox.module.scss';

const ProfileBox = (props) => {
  const dispatch = useDispatch();
  const NavbarRef = useRef(null);
  const { data: session, status } = useSession();

  // console.log(session, status);

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

  const logOutHandler = (event) => {
    event.preventDefault();

    signOut({callbackUrl: '/', redirect: false})
    closeProfile();
  }

  return (
    <div
      className={classes.profileBox}
      id={"dropdown-1btn"}
      onClick={openProfile}
    >
      {props.showModal && props.modalShouldBeActive ? (
        <Modal onModalReact={closeProfile} />
      ) : (
        ""
      )}
      {status == "authenticated" ? (
        <span className={classes["material-icons-2"]}>
          <FaTwitter />
        </span>
      ) : (
        <span className={classes["material-icons-3"]}>
          {" "}
          <FiLogIn />
        </span>
      )}
      <div
        style={{ display: cont5 ? "block" : "" }}
        id={classes["dropdown-content-1"]}
        className={`${classes["dropdown-content-1"]}`}
      >
        {status !== "authenticated" && (
          <>
            <Link href="/login?signup">Sign up</Link>
            <Link href="/login">Log in</Link>
          </>
        )}
        {status == "authenticated" && (
          <button onClick={logOutHandler}>Log out</button>
        )}
        <hr />
        <Link href="#">Help</Link>
      </div>
      {/* <button
        onClick={() => {
          setShowMenu((prevState) => !prevState);
        }}
        className={classes.menu}
      >
        <HiMenu />
      </button> */}
    </div>
  );
}

export default ProfileBox;