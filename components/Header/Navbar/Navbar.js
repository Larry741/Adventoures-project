import { useState } from "react";
import reactDom from "react-dom";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

import NavLinks from "./NavLinks";
import ProfileBox from "./ProfileBox";

import classes from "./Navbar.module.scss";
import image from "../../../public/img/favicon.png";

const data = ["Things to do", "Destinations", "Places to stay", "Experiences"];

const NavBar = (props) => {

  return (
    <div
      id="navBar"
      style={{
        backgroundColor: props.isSticky ? "rgba(227, 157, 69, .9)" : "",
      }}
      className={`${classes.navbar} ${props.isSticky ? "sticky" : ""}`}
    >
      <div className={classes["box"]}>
        <Link href="/">
          <a>
            <Image src={image} alt="Logo" width={70} height={70} />
          </a>
        </Link>
      </div>
      <NavLinks
        setSticky={props.setSticky}
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        linkData={data}
        showModal={props.showModal}
        modalShouldBeActive={props.modalShouldBeActive}
      />
      <ProfileBox
        setSticky={props.setSticky}
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        showModal={props.showModal}
        modalShouldBeActive={props.modalShouldBeActive}
      />
    </div>
  );
};

const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [navLinkIsActive, setNavLinkIsActive] = useState({
    cont1: false,
    cont2: false,
    cont3: false,
    cont4: false,
    cont5: false,
  });
  
  const showModal = useSelector((state) => state.modal.showModal);

  const modalShouldBeActive =
    navLinkIsActive.cont1 ||
    navLinkIsActive.cont2 ||
    navLinkIsActive.cont3 ||
    navLinkIsActive.cont4 ||
    navLinkIsActive.cont5 ? true : false;

  const stickySectionHandler = (arg) => {
    setIsSticky(arg);
  };

  return (
    <>
      {isSticky ? (
        reactDom.createPortal(
          <NavBar
            isSticky={isSticky}
            isActive={navLinkIsActive}
            setSticky={stickySectionHandler}
            setIsActive={setNavLinkIsActive}
            showModal={showModal}
            modalShouldBeActive={modalShouldBeActive}
          />,
          document.body
        )
      ) : (
        <NavBar
          isSticky={isSticky}
          isActive={navLinkIsActive}
          setSticky={stickySectionHandler}
          setIsActive={setNavLinkIsActive}
          showModal={showModal}
          modalShouldBeActive={modalShouldBeActive}
        />
      )}
    </>
  );
};

export default Navbar;
