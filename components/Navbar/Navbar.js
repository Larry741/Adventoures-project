import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

import NavLinks from "./NavLinks";
import ProfileBox from "./ProfileBox";

import classes from "./Navbar.module.scss";
import image from "../../public/img/favicon.png";

const data = ["Things to do", "Destinations", "Places to stay", "Experiences"];

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
      <div
        id="navBar"
        style={{
          backgroundColor: isSticky ? "rgba(227, 157, 69, .9)" : "",
        }}
        className={`${classes.navbar}`}
      >
        <div className={classes["box"]}>
          <Link href="/">
            <a>
              <Image src={image} alt="Logo" layout="fill" priority />
            </a>
          </Link>
        </div>
        <NavLinks
          setSticky={stickySectionHandler}
          isActive={navLinkIsActive}
          setIsActive={setNavLinkIsActive}
          linkData={data}
          showModal={showModal}
          modalShouldBeActive={modalShouldBeActive}
        />
        <ProfileBox
          setSticky={stickySectionHandler}
          isActive={navLinkIsActive}
          setIsActive={setNavLinkIsActive}
          showModal={showModal}
          modalShouldBeActive={modalShouldBeActive}
        />
      </div>
      <div className={classes.clearFix}></div>
    </>
  );
};

export default Navbar;
