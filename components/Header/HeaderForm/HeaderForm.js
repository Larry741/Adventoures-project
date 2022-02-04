import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderFormCalender from "./HeaderFormCalender";
import { modalSliceActions } from "../../store/modalSlice";

import classes from "./HeaderForm.module.scss";
import Modal from "../../UI/Modal";

const HeaderForm = () => {
  const [cal1StateDay, setCal1StateDay ] = useState('Add Dates');
  const [cal1StateMonth, setCal1StateMonth] = useState('');
  const [cal1StateYear, setCal1StateYear] = useState("");
  const [cal2StateDay, setCal2StateDay] = useState("Add Dates");
  const [cal2StateMonth, setCal2StateMonth] = useState("");
  const [cal2StateYear, setCal2StateYear] = useState("");
  const [formIsActive, setFormIsActive] = useState(false);
  const [elIsActive, setElIsActive] = useState({
    el1: false,
    el2: false,
    el3: false,
    el4: false
  })
  const dispatch = useDispatch();
  const showCalendar = useSelector((state) => state.showCalendar);
  const showModal = useSelector(state => state.showModal);

  const showCalHandler = () => {
    dispatch(modalSliceActions.showCalendar());
  }

  const closeCalHandler = (dateData1, dateData2) => {
    if (dateData1 && !dateData2) {
      setCal1StateDay(dateData1.day);
      setCal1StateMonth(dateData1.month);
      setCal1StateYear(dateData1.year);
      const nextDiv = document.getElementById(classes["box-3"]);
      nextDiv.click();
    } else if (dateData2 && !dateData1) {
      setCal2StateDay(dateData2.day);
      setCal2StateMonth(dateData2.month);
      setCal2StateYear(dateData2.year);
      dispatch(modalSliceActions.closeCalendar());
      const nextDiv = document.getElementById(classes["box-4"]);
      nextDiv.click();
    }
  };

  const formCloseModalHandler = () => {
    setFormIsActive(false);
    setElIsActive((prevState) => {
      return {
        el2: false,
        el3: false,
        el4: false,
        el1: false,
      };
    });
    dispatch(modalSliceActions.closeModal());
    dispatch(modalSliceActions.closeCalendar());
  }

  const formOpenModalHandler = (event) => {
    const targetDiv = event.target.closest('div');
    if (
      targetDiv.id !== classes["box-1"] &&
      targetDiv.id !== classes["box-2"] &&
      targetDiv.id !== classes["box-3"] &&
      targetDiv.id !== classes["box-4"]
    ) {
      return;
    }
      

    dispatch(modalSliceActions.showModal());

    if (targetDiv.id === classes["box-1"]) {
      setFormIsActive(true);
      dispatch(modalSliceActions.closeCalendar());
      setElIsActive(prevState => {
        return{
          el2: false,
          el3: false,
          el4: false,
          el1: true
        }
      })
    } else if (targetDiv.id === classes["box-2"]) {
      setFormIsActive(true);
      setElIsActive((prevState) => {
        return {
          el3: false,
          el4: false,
          el1: false,
          el2: true,
        };
      });
    } else if (targetDiv.id === classes["box-3"]) {
      setFormIsActive(true);
      setElIsActive((prevState) => {
        return {
          el4: false,
          el1: false,
          el2: false,
          el3: true,
        };
      });
    } else if (targetDiv.id === classes["box-4"]) {
      setFormIsActive(true);
      dispatch(modalSliceActions.closeCalendar());
      setElIsActive((prevState) => {
        return {
          el1: false,
          el2: false,
          el3: false,
          el4: true,
        };
      });
    } 
  }

  const styles = ` ${formIsActive
      && classes["inactive_hov"]}`;

  return (
    <div
      className={
        classes.formContainer + " " + "text" + " " + "text__primary-small"
      }
    >
      <div onClick={formOpenModalHandler} id="formContainer">
        <form
          id="form"
          // style={{ backgroundColor: formIsActive ? "#EAEAEA" : "" }}
          className={classes["form"]}
          action=""
          method="post"
        >
          <div
            id={classes["box-1"]}
            className={`${classes.control} ${styles} ${
              elIsActive.el1 && classes["active-hov"]
            }`}
          >
            <label htmlFor="location">Destinations</label>
            <input
              className=""
              type="text"
              autoComplete="off"
              id="Location"
              name="location"
              placeholder="Where are you going?"
            />
          </div>
          <div
            id={classes["box-2"]}
            className={`${classes.control} ${styles} ${
              elIsActive.el2 && classes["active-hov"]
            }`}
            onClick={showCalHandler}
          >
            <span>Adventure</span>
            <span id="cal1Output">
              {cal1StateDay + " " + cal1StateMonth + " " + cal1StateYear}
            </span>
          </div>
          <div
            id={classes["box-3"]}
            className={`${classes.control} ${styles} ${
              elIsActive.el3 && classes["active-hov"]
            }`}
            onClick={showCalHandler}
          >
            <span>Duration</span>
            <span id="cal2Output">
              {cal2StateDay + " " + cal2StateMonth + " " + cal2StateYear}
            </span>
          </div>
          <div
            id={classes["box-4"]}
            className={`${styles} ${elIsActive.el4 && classes["active-hov"]}`}
          >
            <span className={classes["text"]}>
              <span>Tour</span>
              <span>Month</span>
            </span>
            <button
              id="button"
              className={formIsActive ? classes["button-Expand"] : ""}
              type="submit"
            >
              <span className="material-icons">search</span>
              <span
                style={{ display: formIsActive && " block" }}
                className="text__primary"
              >
                Search
              </span>
            </button>
          </div>
        </form>
      </div>
      {showModal && formIsActive ? <Modal onModalReact={formCloseModalHandler} /> : ""}
      {showCalendar ? (
        <div className={classes["calendarContainer"]}>
          <HeaderFormCalender onChoose={closeCalHandler} id={"cal1"} />
          <HeaderFormCalender onChoose={closeCalHandler} id={"cal2"} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderForm;
