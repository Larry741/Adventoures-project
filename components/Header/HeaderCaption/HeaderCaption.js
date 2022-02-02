
import classes from "./HeaderCaption.module.css";

const HeaderCaption = () => {

  return (
    <h1 className={classes["header__something"]}>
      <span
        className={(classes["header__heading"]+ ' ' +"heading__primary")}
      >
        Every great adventure requires planning,
      </span>
      <span className={classes['header__heading-2']+ ' ' +'heading__primary'}>
        luckily it couldn’t be easier with us.
      </span>
    </h1>
  );
}

export default HeaderCaption;