
import classes from "./HeaderCaption.module.scss";

const HeaderCaption = () => {

  return (
    <h1 className={`${classes["header__something"]} heading__primary`}>
      <span className={classes["header__heading"]}>
        Every great adventure requires planning,
      </span>
      <span className={classes["header__heading-2"]}>
        luckily it couldn’t be easier with us.
      </span>
    </h1>
  );
}

export default HeaderCaption;