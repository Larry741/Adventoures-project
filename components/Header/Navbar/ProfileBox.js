import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalSliceActions } from "../../store/modalSlice";
import Modal from "../../UI/Modal";

import classes from './ProfileBox.module.scss';

const ProfileBox = (props) => {
  const [profileLinkIsActive, setProfileLinkIsActive] = useState(false);
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  const showModal = useSelector((state) => state.showModal);

  const { cont5 } = props.isActive;

  useEffect(() => {
    sectionRef.current = document.getElementById("section__header");
  }, []);

  const closeProfile = () => {
    dispatch(modalSliceActions.closeModal());
    // sectionRef.current.classList.remove(`${classes.sticky}`);
    props.setSticky(1);
    setProfileLinkIsActive(false);
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
    // sectionRef.current.classList.add(`${classes.sticky}`);
    props.setSticky();
    setProfileLinkIsActive(true);
    
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

  return (
    <div className={classes.profileBox}>
      {profileLinkIsActive && showModal ? <Modal onModalReact={closeProfile} /> : ""}
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
        style={{ display: cont5 ? 'block' : ''}}
        id={classes["dropdown-content-1"]}
        className={`${classes["dropdown-content-1"]}`}
      >
        <Link href="#">Sign up</Link>
        <Link href="#">Log in</Link>
        <hr />
        <Link href="#">Help</Link>
      </div>
    </div>
  );
}

export default ProfileBox;