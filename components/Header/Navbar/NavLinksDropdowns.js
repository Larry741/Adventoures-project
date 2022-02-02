import NavLinksDropdownLists from "./NavLinksDropdownLists";

import classes from "./NavLinksDropdowns.module.css";

const NavLinksDropdowns = (props) => {

  return (
    <div className={classes['nav-box']+ '' +'text__primary'}>
      <span id="dropdown-2btn" className={classes.dropbtn+ ' ' +classes['dropdown-btn']}>
        {props.linkData}
      </span>
      <div id={props.linkData} className={classes['dropdown__content']+ ' ' +classes['dropdown-content-2']}>
        {/* <div className="nav__row">
          {props.array.map((item) => (
            <NavLinksDropdownLists />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NavLinksDropdowns;
