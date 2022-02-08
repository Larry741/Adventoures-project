import { useCallback, useEffect, useState, useRef } from "react";

import classes from "./HeaderFormCalender.module.scss";

const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

let currDateMilliseconds = currDate.getTime();
let seventhDayMilliseconds = 437042826;
let futureDate = new Date(currDateMilliseconds + seventhDayMilliseconds);

let futureMonth = { value: futureDate.getMonth() };
let futureYear = { value: futureDate.getFullYear() }
let futureDay = { value: futureDate.getDate() };


const HeaderFormCalender = (props) => {
  
  const [futureDayVal, setFutureDayVal] = useState(futureDay.value);
  const calendarRef = useRef(null);
  const monthPickerRef = useRef(null);
  const yearPickerRef = useRef(null);
  const monthListRef = useRef(null);


  const id = props.id;
  
  useEffect(() => {
    calendarRef.current = document.getElementById(id);
    monthListRef.current = calendarRef.current.querySelector(
      id === "cal1" ? "#month-list-1" : "#month-list-2"
    );
    monthPickerRef.current = calendarRef.current.querySelector(
      id === "cal1" ? "#month-picker-1" : "#month-picker-2"
    );

    month_names.forEach((e, index) => {
      let month = document.createElement("div");
      month.innerHTML = `<div data-month="${index}">${e}</div>`;
      month.querySelector("div").onclick = (event) => {
        event.stopPropagation();
        monthListRef.current.classList.remove(classes.show);
        curr_month.value = index;
        generateCalendar(index, +yearPickerRef.current.innerText);
      };
      monthListRef.current.appendChild(month);
    });

    generateCalendar(curr_month.value, curr_year.value);

  }, [id, generateCalendar]);

  const generateCalendar = useCallback((month, year, calDay) => {
    let calendar_days = calendarRef.current.querySelector(
      id === "cal1" ? "#calendar-days-1" : "#calendar-days-2"
    );
    yearPickerRef.current = calendarRef.current.querySelector(
      id === "cal1" ? "#year-1" : "#year-2"
    );

    const isLeapYear = (year) => {
      return (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
      );
    };

    const getFebDays = (year) => {
      return isLeapYear(year) ? 29 : 28;
    };

    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    calendar_days.innerHTML = "";

    if (id === "cal1") {
      let currDate = new Date();
      !month && month !== 0 ? (month = currDate.getMonth()) : null;
      !calDay && calDay !== 0 ? (calDay = currDate.getDate()) : null

      let curr_month = `${month_names[month]}`;
      monthPickerRef.current.innerHTML = curr_month;
      yearPickerRef.current.innerHTML = year;

      // get first day of month

      let first_day = new Date(year, month, 1);

      for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement("div");
        if (i >= first_day.getDay()) {
          day.classList.add("cal");
          day.innerHTML = i - first_day.getDay() + 1;
          day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`;
          if (
            i - first_day.getDay() + 1 === calDay &&
            id === "cal1" &&
            year === currDate.getFullYear() &&
            month === currDate.getMonth()
          ) {
            day.classList.add(classes["curr-date"]);
          }
        }
        calendar_days.appendChild(day);
      }
    } else if (id === "cal2") {
      // get the current date + 7 days
      !month && month !== 0 ? (month = futureMonth.value) : null;
      !calDay && calDay !== 0 ? (calDay = futureDayVal) : null;

      let curr_month = `${month_names[month]}`;
      monthPickerRef.current.innerHTML = curr_month;
      yearPickerRef.current.innerHTML = year;

      const first_day2 = new Date(year, month, 1);

      for (
        let i = 0;
        i <= days_of_month[month] + first_day2.getDay() - 1;
        i++
      ) {
        let day = document.createElement("div");
        if (i >= first_day2.getDay()) {
          day.classList.add("cal");
          day.innerHTML = i - first_day2.getDay() + 1;
          day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`;
          if (i - first_day2.getDay() + 1 === calDay) {
            day.classList.add(classes["curr-date"]);
          }
        }
        calendar_days.appendChild(day);
      }
    }
  }, [id, futureDayVal]);

  const chooseDateHandler = (event) => {
    event.stopPropagation();
    const targetDate = event.target;

    if (targetDate.className !== "cal") {
      return;
    }

    const evaluateTarget = (id) => {
      const childDiv = document.getElementById(id).children;
      const divsArray = Array.from(childDiv);
      divsArray.forEach((div) => {
        div.classList.remove(classes["curr-date"]);
      });
    }
    
    if (id === 'cal1') {
      evaluateTarget('calendar-days-1');
    } else {
      evaluateTarget('calendar-days-2');
    }
    
    setFutureDayVal(+targetDate.innerText);
    targetDate.classList.add(classes["curr-date"]);

    if (id === 'cal1') {
      props.onChoose(
        {
          day: +targetDate.innerText,
          month: monthPickerRef.current.innerText,
          year: yearPickerRef.current.innerText
        },
        ""
      );
    } else if (id === 'cal2') {
      props.onChoose("", {
        day: +targetDate.innerText,
        month: monthPickerRef.current.innerText,
        year: yearPickerRef.current.innerText,
      });
    }
  };

  const pickMonthHandler = (event) => {
    event.stopPropagation();
    monthListRef.current.classList.add(classes.show);
  }

  const preYearChangeHandler = (event) => {
    event.stopPropagation();
    if (id === 'cal1') {
      --curr_year.value;
      generateCalendar(curr_month.value, curr_year.value);
    } else {
      --futureYear.value;
      generateCalendar(futureMonth.value, futureYear.value)
    }
  }

  const nextYearChangeHandler = (event) => {
    event.stopPropagation();
    if (id === "cal1") {
      ++curr_year.value;
      generateCalendar(curr_month.value, curr_year.value);
    } else {
      ++futureYear.value;
      generateCalendar(futureMonth.value, futureYear.value);
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation();
  }


  return (
    <div onClick={stopPropagation} className={`${classes["calendar"]} ${classes[id]}`} id={id}>
      <div className={classes["calendar-header"]}>
        <span
          onClick={pickMonthHandler}
          className={classes["month-picker"]}
          id={id === "cal1" ? "month-picker-1" : "month-picker-2"}
        >
          February
        </span>
        <div className={classes["year-picker"]}>
          <span
            onClick={preYearChangeHandler}
            className={classes["year-change"]}
            id={id === "cal1" ? "prev-year-1" : "prev-year-2"}
          >
            <pre></pre>
          </span>
          <span id={id === "cal1" ? "year-1" : "year-2"}>2021</span>
          <span
            onClick={nextYearChangeHandler}
            className={classes["year-change"]}
            id={id === "cal1" ? "next-year-1" : "next-year-2"}
          >
            <pre></pre>
          </span>
        </div>
      </div>
      <div className={classes["calendar-body"]}>
        <div className={classes["calendar-week-day"]}>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div
          onClick={chooseDateHandler}
          className={classes["calendar-days"]}
          id={id === "cal1" ? "calendar-days-1" : "calendar-days-2"}
        ></div>
      </div>
      <div
        className={classes["month-list"]}
        id={id === "cal1" ? "month-list-1" : "month-list-2"}
      ></div>
    </div>
  );
};

export default HeaderFormCalender;
