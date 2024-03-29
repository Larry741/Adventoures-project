import { useCallback, useEffect, useRef, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcSearch } from "react-icons/fc";
import WidthContext from "../../store/width-context";

import HeaderFormCalender from "./HeaderFormCalender";
import { modalSliceActions } from "../../store/modalSlice";

import classes from "./HeaderForm.module.scss";
import Modal from "../../UI/Modal";

const HeaderForm = () => {
  const [cal1StateDay, setCal1StateDay] = useState("Start Date");
  const [cal1StateMonth, setCal1StateMonth] = useState("");
  const [cal1StateYear, setCal1StateYear] = useState("");
  const [cal2StateDay, setCal2StateDay] = useState("End Date");
  const [cal2StateMonth, setCal2StateMonth] = useState("");
  const [cal2StateYear, setCal2StateYear] = useState("");
  const [formIsActive, setFormIsActive] = useState(false);
  const [elIsActive, setElIsActive] = useState({
    el1: false,
    el2: false,
    el3: false,
    el4: false,
  });
  const [combinedDate, setCombinedDate] = useState({
    cal1StateDay: "Start Date",
    cal1StateMonth: "",
    cal1StateYear: "",
    cal2StateDay: "End Date",
    cal2StateMonth: "",
    cal2StateYear: "",
  });
  const input1Ref = useRef(null);
  const subDateRef = useRef(null);
  const dispatch = useDispatch();
  const showCalendar = useSelector((state) => state.modal.showCalendar);
  const showModal = useSelector((state) => state.modal.showModal);
  const formContainerRef = useRef(null);
  const { docWidth } = useContext(WidthContext);

  useEffect(() => {
    formContainerRef.current = document.getElementById("formParent");
  });

  const showCalHandler = () => {
    dispatch(modalSliceActions.showCalendar());
  };

  const closeCalHandler = useCallback(
    (dateData1, dateData2) => {
      if (dateData1 && !dateData2) {
        if (docWidth > 553) {
          setCal1StateDay(dateData1.day);
          setCal1StateMonth(dateData1.month);
          setCal1StateYear(dateData1.year);
          const nextDiv = document.getElementById(classes["box-3"]);
          nextDiv.click();
        } else {
          subDateRef.current = dateData1;
        }
      } else if (dateData2 && !dateData1) {
        if (docWidth > 553) {
          if (!cal1StateYear) {
            const curDate = new Date();
            setCal1StateDay(curDate.getDate());
            setCal1StateMonth(
              curDate.toLocaleString("default", { month: "short" })
            );
            setCal1StateYear(curDate.getFullYear());
          }

          setCal2StateDay(dateData2.day);
          setCal2StateMonth(dateData2.month);
          setCal2StateYear(dateData2.year);
          dispatch(modalSliceActions.closeCalendar());
        } else {
          if (!subDateRef.current.month) {
            const curDate = new Date();

            subDateRef.current = {
              day: curDate.getDate(),
              month: curDate.toLocaleString("default", { month: "short" }),
              year: curDate.getFullYear(),
            };
          }

          setCombinedDate({
            cal1StateDay: subDateRef.current.day,
            cal1StateMonth: subDateRef.current.month,
            cal1StateYear: subDateRef.current.year,
            cal2StateDay: dateData2.day,
            cal2StateMonth: dateData2.month,
            cal2StateYear: dateData2.year,
          });
        }
        const nextDiv = document.getElementById(classes["box-4"]);
        nextDiv.click();
      }
    },
    [cal1StateYear, dispatch, docWidth]
  );

  const formCloseModalHandler = useCallback(
    (event) => {
      // event.stopPropagation();

      formContainerRef.current.style.zIndex = 15;

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
    },
    [dispatch]
  );

  const formOpenModalHandler = useCallback((event) => {
    const targetDiv = event.target.closest("div");
    if (
      targetDiv.id !== classes["box-1"] &&
      targetDiv.id !== classes["box-2"] &&
      targetDiv.id !== classes["box-3"] &&
      targetDiv.id !== classes["box-4"]
    ) {
      return;
    }

    formContainerRef.current.style.zIndex = 19;

    dispatch(modalSliceActions.showModal());

    if (targetDiv.id === classes["box-1"]) {
      setFormIsActive(true);
      input1Ref.current.focus();
      dispatch(modalSliceActions.closeCalendar());
      setElIsActive((prevState) => {
        return {
          el2: false,
          el3: false,
          el4: false,
          el1: true,
        };
      });
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
  });

  const styles = ` ${formIsActive && classes["inactive_hov"]}`;

  return (
    <div
      id="formParent"
      className={
        classes.formContainer + " " + "text" + " " + "text__primary-small"
      }
    >
      <div onClick={formOpenModalHandler} id="formContainer">
        <form
          id="form"
          style={{ backgroundColor: formIsActive ? "#EAEAEA" : "" }}
          className={`${classes["form"]} smaller-text`}
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
              ref={input1Ref}
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
            <span>Duration</span>
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
            {docWidth < 553 ? (
              <span className={classes.appear}>
                {combinedDate.cal1StateDay +
                  " " +
                  combinedDate.cal1StateMonth +
                  " " +
                  combinedDate.cal1StateYear +
                  " - " +
                  combinedDate.cal2StateDay +
                  " " +
                  combinedDate.cal2StateMonth +
                  " " +
                  combinedDate.cal2StateYear}
              </span>
            ) : (
              <span id="cal2Output">
                {cal2StateDay + " " + cal2StateMonth + " " + cal2StateYear}
              </span>
            )}
          </div>
          <div
            id={classes["box-4"]}
            className={`${styles} ${elIsActive.el4 && classes["active-hov"]}`}
          >
            <span className={classes["text"]}>
              <span>Adventure</span>
            </span>
            <button
              id="button"
              className={formIsActive ? classes["button-Expand"] : ""}
              type="submit"
            >
              <span className={classes["material-icons"]}>
                <FcSearch />
              </span>
              <span
                style={{ display: formIsActive && "block" }}
                className="text__primary"
              >
                Search
              </span>
            </button>
          </div>
        </form>
      </div>
      {showModal && formIsActive ? (
        <Modal zIndex={18} onModalReact={formCloseModalHandler} />
      ) : (
        ""
      )}
      {showCalendar ? (
        <div
          onClick={formCloseModalHandler}
          className={classes["calendarContainer"]}
          id="calendarContainer"
        >
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
