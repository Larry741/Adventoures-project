import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

import { modalSliceActions } from "../store/modalSlice";
import Modal from "../UI/Modal";

import classes from './ProfileBox.module.scss';

const ProfileBox = (props) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const NavbarRef = useRef(null);
  const { data: session, status } = useSession();
  
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

  const switchToAuthPage = (arg1, event) => {
    props.setIsActive({
      cont1: false,
      cont2: false,
      cont3: false,
      cont4: false,
      cont5: false,
    });
    router.push(arg1);
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
          <RiAccountCircleFill />
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
            <button onClick={switchToAuthPage.bind(null, "/auth?signup")}>
              Sign up
            </button>
            <button onClick={switchToAuthPage.bind(null, "/auth")}>
              Log in
            </button>
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