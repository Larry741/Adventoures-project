import Link from "next/link";
import Button from "../../UI/Button";
import classes from "./HeaderTourBtn.module.scss";

const HeaderTourBtn = () => {

  return (
    <div className={`${classes['header__button-box']} center text__primary`}>
      <Link href='#' passHref={true}>
        <Button des={"btn-white"}>DISCOVER OUR TOURS</Button>
      </Link>
    </div>
  );
}

export default HeaderTourBtn;