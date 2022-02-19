import { BsArrowDown } from "react-icons/bs";
import classes from "./HeaderScrollDown.module.scss";

const HeaderScrollDown = () => {
  return (
    <div className={classes["header__direction"]}>
      <span className="material-icons">
        <BsArrowDown />
      </span>
    </div>
  );
};

export default HeaderScrollDown;
