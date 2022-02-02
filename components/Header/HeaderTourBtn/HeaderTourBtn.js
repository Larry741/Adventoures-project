
import classes from "./HeaderTourBtn.module.css";

const HeaderTourBtn = () => {

  return (
    <div className={classes["header__button-box"]+ ' ' +'center'}>
      <button className="btn btn-white">
        <span className="text__primary">DISCOVER OUR TOURS</span>
      </button>
    </div>
  );
}

export default HeaderTourBtn;