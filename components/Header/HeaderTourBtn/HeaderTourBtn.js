import Link from "next/link";
import classes from "./HeaderTourBtn.module.scss";

const HeaderTourBtn = () => {

  return (
    <div
      className={`${classes["header__button-box"]} center mediumTertiaryText`}
    >
      <Link href="#">
        <a className={"btn btn-white"}>
          <span>DISCOVER OUR TOURS</span>
        </a>
      </Link>
    </div>
  );
}

export default HeaderTourBtn;