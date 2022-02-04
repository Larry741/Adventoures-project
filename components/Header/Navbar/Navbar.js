import { useState } from "react";
import Image from "next/image";

import NavLinks from "./NavLinks";
import ProfileBox from "./ProfileBox";

import classes from './Navbar.module.scss';
import image from '../../../public/img/favicon.png';

const data = ['Things to do', 'Destinations', 'Places to stay', 'Experiences']

const Navbar = (props) => {
  const [ isSticky, setIsSticky ] = useState(false);
   const [navLinkIsActive, setNavLinkIsActive] = useState({
     cont1: false,
     cont2: false,
     cont3: false,
     cont4: false,
     cont5: false
   });

  const stickySectionHandler = (arg) => {
    setIsSticky(!arg ? true : false);
  } 
  
  return (
    <div
      id="navBar"
      style={{ backgroundColor: isSticky ? "rgba(227, 157, 69, .9)" : "" }}
      className={`${classes.navbar}`}
    >
      <div className={classes["box"]}>
        <Image src={image} alt="Logo" width={70} height={70} />
      </div>
      <NavLinks
        setSticky={stickySectionHandler}
        isActive={navLinkIsActive}
        setIsActive={setNavLinkIsActive}
        linkData={data}
      />
      <ProfileBox
        setSticky={stickySectionHandler}
        isActive={navLinkIsActive}
        setIsActive={setNavLinkIsActive}
      />
    </div>
  );
}

export default Navbar;