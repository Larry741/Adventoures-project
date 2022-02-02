import Link from "next/link";
import Listitems from "../../UI/Listitems";

import classes from './NavLinksDropdownLists.module.css'

const NavLinksDropdownLists = (props) => {
  return (
    <ul className="list">
      <div className="column">
        <div className="content">
          <Listitems>
            <h4 className="list-header">{}</h4>
          </Listitems>
          {props.array.map((item) => (
            <Listitems>
              <Link>{}</Link>
            </Listitems>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default NavLinksDropdownLists;
