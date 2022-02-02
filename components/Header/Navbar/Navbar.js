import Image from "next/image";
import NavLinks from "./NavLinks";
import ProfileBox from "./ProfileBox";

import classes from './Navbar.module.css';
import image from '../../../public/img/favicon.png';

const data = ['Things to do', 'Destinations', 'Places to stay', 'Experiences']

const Navbar = (props) => {
  
  return (
    <div id="navBar" className={classes.navbar}>
      <div className={classes['box']}>
        <Image src={image} alt="Logo" width={70} height={70} />
      </div>
      <NavLinks linkData={data} />
      <ProfileBox />
    </div>
  );
}

export default Navbar;