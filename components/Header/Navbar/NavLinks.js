import NavLinksDropdowns from "./NavLinksDropdowns";

import classes from './NavLinks.module.css';

const NavLinks = (props) => {

  return (
    <div className={classes.navlinks}>
      {props.linkData.map((item) => (
        <NavLinksDropdowns key={item} linkData={item} />
      ))}
    </div>
  );
}

export default NavLinks;