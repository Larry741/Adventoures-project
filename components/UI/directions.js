import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./directions.module.scss";

const Direction = ({ leftDirectionHandler, rightDirectionHandler, leftBtnDisabled, rightBtnDisabled }) => {
  return (
    <div className={styles.containerControl1}>
      <div className={styles.pointer}>
        <button
          disabled={leftBtnDisabled}
          onClick={leftDirectionHandler}
          className={styles.line1}
        ></button>
        <span className={styles.control}>
          <button
            onClick={leftDirectionHandler}
            disabled={leftBtnDisabled}
            className={styles.button}
          >
            <FaAngleLeft />
          </button>
        </span>
      </div>
      <div className={styles.pointer}>
        <span className={styles.control} >
          <button
            disabled={rightBtnDisabled}
            onClick={rightDirectionHandler}
            className={styles.button}
          >
            <FaAngleRight />
          </button>
        </span>
        <button
          disabled={rightBtnDisabled}
          onClick={rightDirectionHandler}
          className={styles.line2}
        ></button>
      </div>
    </div>
  );
};

export default Direction;