import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { modalSliceActions } from "../store/modalSlice";
import Modal from "../UI/Modal";

import classes from "./NavLinks.module.scss";

const NavLinks = (props) => {
  const dispatch = useDispatch();
  const NavbarRef = useRef(null);
  
  const { cont1, cont2, cont3, cont4} = props.isActive;

  useEffect(() => {
    NavbarRef.current = document.getElementById("navBar");
  }, []);

  const closeNavBarHandler = () => {
    dispatch(modalSliceActions.closeModal());
    NavbarRef.current.classList.remove(`${"sticky"}`);
    props.setSticky(false);
    props.setIsActive({
      cont1: false,
      cont2: false,
      cont3: false,
      cont4: false,
      cont5: false,
    });
  }

  const openNavBarHandler = (event) => {
    const eventTarget = event.target.id;

    if (
      eventTarget !== "dropdown-1btn" &&
      eventTarget !== "dropdown-2btn" &&
      eventTarget !== "dropdown-3btn" &&
      eventTarget !== "dropdown-4btn"
    ) {
      return;
    }

    dispatch(modalSliceActions.showModal());
    NavbarRef.current.classList.add(`${"sticky"}`);
    props.setSticky(true);

    if (eventTarget === "dropdown-1btn") {
      props.setIsActive({
        cont1: true,
        cont2: false,
        cont3: false,
        cont4: false,
        cont5: false,
      });

    } else if (eventTarget === "dropdown-2btn") {
      props.setIsActive({
        cont1: false,
        cont2: true,
        cont3: false,
        cont4: false,
        cont5: false,
      });
    } else if (eventTarget === "dropdown-3btn") {
      props.setIsActive({
        cont1: false,
        cont2: false,
        cont3: true,
        cont4: false,
        cont5: false,
      });
    } else if (eventTarget === "dropdown-4btn") {
      props.setIsActive({
        cont1: false,
        cont2: false,
        cont3: false,
        cont4: true,
        cont5: false,
      });
    }
  };


  return (
    <div className={classes["navlinks"]}>
      {props.showModal && props.modalShouldBeActive ? <Modal zIndex={16} onModalReact={closeNavBarHandler} /> : ""}
      <div
        className={`${classes["navBar__container-nav-box"]} "text__primary"`}
      >
        <span
          onClick={openNavBarHandler}
          id={"dropdown-1btn"}
          className={`${classes["dropbtn"]} ${
            cont1 && classes["active-dbtn"]
          } smaller-text`}
        >
          Things to do
        </span>
        <div
          id={classes["dropdown-content-2"]}
          className={`${classes["dropdown__content"]}`}
          style={{ display: cont1 ? "block" : "" }}
        >
          <div className={classes["nav__row"]}>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>CORE ADVENTURES</h4>
                  </li>
                  <li>
                    <a href="#">Whitewater Rafting Trips</a>
                  </li>
                  <li>
                    <a href="#">Dory Trips</a>
                  </li>
                  <li>
                    <a href="#">Sea Kayaking Trips</a>
                  </li>
                  <li>
                    <a href="#">Hiking Trips</a>
                  </li>
                  <li>
                    <a href="#">Multi-Sport Trips</a>
                  </li>
                  <li>
                    <a href="#">Guided Fishing Trips</a>
                  </li>
                  <li>
                    <a href="#">Whitewater Guide Schools</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>TOP 1 DAY ADVENTURES</h4>
                  </li>
                  <li>
                    <a href="#">South Fork American River, CA</a>
                  </li>
                  <li>
                    <a href="#">Middle Fork American River, CA</a>
                  </li>
                  <li>
                    <a href="#">Split Mountain Canyon, UT</a>
                  </li>
                  <li>
                    <a href="#">Merced River, CA</a>
                  </li>
                  <li>
                    <a href="#">Tuolumne River, CA</a>
                  </li>
                  <li>
                    <a href="#">Upper Navua Gorge, Fiji</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>SPECIAL INTERESTS</h4>
                  </li>
                  <li>
                    <a href="#">Adult-Only & Women’s Trips</a>
                  </li>
                  <li>
                    <a href="#">Astronomy</a>
                  </li>
                  <li>
                    <a href="#">Beer Vacations</a>
                  </li>
                  <li>
                    <a href="#">Wilderness Gourmet</a>
                  </li>
                  <li>
                    <a href="#">Wine Tasting</a>
                  </li>
                  <li>
                    <a href="#">Specialty Trips & Unique Experiences</a>
                  </li>
                  <li className={classes["list-header"]}>
                    <h4>FAMILIES AND GROUPS</h4>
                  </li>
                  <li>
                    <a href="#">Family Adventure Vacations</a>
                  </li>
                  <li>
                    <a href="#">Private & Charter Trips</a>
                  </li>
                  <li>
                    <a href="#">Scouting Trips</a>
                  </li>
                  <li>
                    <a href="#">Bachelor & Bachelorette Parties</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>COLLECTIONS</h4>
                  </li>
                  <li>
                    <a href="#">American River Rafting</a>
                  </li>
                  <li>
                    <a href="#">American Whitewater Classics</a>
                  </li>
                  <li>
                    <a href="#">Hidden Canyons</a>
                  </li>
                  <li>
                    <a href="#">Road Trips</a>
                  </li>
                  <li>
                    <a href="#">Wildlife Viewing</a>
                  </li>
                  <li>
                    <a href="#">Wild & Scenic Rivers</a>
                  </li>
                  <li>
                    <a href="#">World Heritage Sites</a>
                  </li>
                  <li>
                    <a href="#">7 Whitewater Wonders</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${classes["navBar__container-nav-box"]} ${"text__primary"}`}
        href="#"
      >
        <span
          onClick={openNavBarHandler}
          id={"dropdown-2btn"}
          className={`${classes["dropbtn"]} ${
            cont2 && classes["active-dbtn"]
          } smaller-text`}
        >
          Destinations
        </span>
        <div
          id={classes["dropdown-content-3"]}
          className={`${classes["dropdown__content"]}`}
          style={{ display: cont2 ? "block" : "" }}
        >
          <div className={classes["nav__row"]}>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>UNITED STATES</h4>
                  </li>
                  <li>
                    <a href="#">Alaska</a>
                  </li>
                  <li>
                    <a href="#">Arizona – Grand Canyon</a>
                  </li>
                  <li>
                    <a href="#">California</a>
                  </li>
                  <li>
                    <a href="#">Colorado</a>
                  </li>
                  <li>
                    <a href="#">Idaho</a>
                  </li>
                  <li>
                    <a href="#">Oregon</a>
                  </li>
                  <li>
                    <a href="#">Utah</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>INTERNATIONAL</h4>
                  </li>
                  <li>
                    <a href="#">Argentina</a>
                  </li>
                  <li>
                    <a href="#">Canada</a>
                  </li>
                  <li>
                    <a href="#">Chile</a>
                  </li>
                  <li>
                    <a href="#">Costa Rica</a>
                  </li>
                  <li>
                    <a href="#">Croatia</a>
                  </li>
                  <li>
                    <a href="#">Cuba</a>
                  </li>
                  <li>
                    <a href="#">Fiji</a>
                  </li>
                  <li>
                    <a href="#">Galápagos</a>
                  </li>
                  <li>
                    <a href="#">Mexico – Baja</a>
                  </li>
                  <li>
                    <a href="#">Morocco</a>
                  </li>
                  <li>
                    <a href="#">Peru</a>
                  </li>
                  <li>
                    <a href="#">Zambia & Botswana</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>NATIONAL PARKS</h4>
                  </li>
                  <li>
                    <a href="#">National Park Adventures</a>
                  </li>
                  <li>
                    <a href="#">Arches</a>
                  </li>
                  <li>
                    <a href="#">Canyonlands</a>
                  </li>
                  <li>
                    <a href="#">Dinosaur</a>
                  </li>
                  <li>
                    <a href="#">Grand Canyon</a>
                  </li>
                  <li>
                    <a href="#">Yosemite</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>MOST POPULAR RIVERS</h4>
                  </li>
                  <li>
                    <a href="#">Colorado River – Cataract Canyon, UT</a>
                  </li>
                  <li>
                    <a href="#">Colorado River – Westwater Canyon, UT</a>
                  </li>
                  <li>
                    <a href="#">Green River – Desolation Canyon, UT</a>
                  </li>
                  <li>
                    <a href="#">Green River – Gates of Lodore, CO</a>
                  </li>
                  <li>
                    <a href="#">Lower Salmon River, ID</a>
                  </li>
                  <li>
                    <a href="#">Main Salmon River, ID</a>
                  </li>
                  <li>
                    <a href="#">Tuolumne River, CA</a>
                  </li>
                  <li>
                    <a href="#">Yampa River, CO</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${classes["navBar__container-nav-box"]} ${"text__primary"}`}
        href="#"
      >
        <span
          onClick={openNavBarHandler}
          id={"dropdown-3btn"}
          className={`${classes["dropbtn"]} ${
            cont3 && classes["active-dbtn"]
          } smaller-text`}
        >
          Places to stay
        </span>
        <div
          id={classes["dropdown-content-4"]}
          className={`${classes["dropdown__content"]}`}
          style={{ display: cont3 ? "block" : "" }}
        >
          <div className={classes["nav__row"]}>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>CORE ADVENTURES</h4>
                  </li>
                  <li>
                    <a href="#">Whitewater Rafting Trips</a>
                  </li>
                  <li>
                    <a href="#">Dory Trips</a>
                  </li>
                  <li>
                    <a href="#">Sea Kayaking Trips</a>
                  </li>
                  <li>
                    <a href="#">Hiking Trips</a>
                  </li>
                  <li>
                    <a href="#">Multi-Sport Trips</a>
                  </li>
                  <li>
                    <a href="#">Guided Fishing Trips</a>
                  </li>
                  <li>
                    <a href="#">Whitewater Guide Schools</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>TOP 1 DAY ADVENTURES</h4>
                  </li>
                  <li>
                    <a href="#">South Fork American River, CA</a>
                  </li>
                  <li>
                    <a href="#">Middle Fork American River, CA</a>
                  </li>
                  <li>
                    <a href="#">Split Mountain Canyon, UT</a>
                  </li>
                  <li>
                    <a href="#">Merced River, CA</a>
                  </li>
                  <li>
                    <a href="#">Tuolumne River, CA</a>
                  </li>
                  <li>
                    <a href="#">Upper Navua Gorge, Fiji</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>SPECIAL INTERESTS</h4>
                  </li>
                  <li>
                    <a href="#">Adult-Only & Women’s Trips</a>
                  </li>
                  <li>
                    <a href="#">Astronomy</a>
                  </li>
                  <li>
                    <a href="#">Beer Vacations</a>
                  </li>
                  <li>
                    <a href="#">Wilderness Gourmet</a>
                  </li>
                  <li>
                    <a href="#">Wine Tasting</a>
                  </li>
                  <li>
                    <a href="#">Specialty Trips & Unique Experiences</a>
                  </li>
                  <li className={classes["list-header"]}>
                    <h4>FAMILIES AND GROUPS</h4>
                  </li>
                  <li>
                    <a href="#">Family Adventure Vacations</a>
                  </li>
                  <li>
                    <a href="#">Private & Charter Trips</a>
                  </li>
                  <li>
                    <a href="#">Scouting Trips</a>
                  </li>
                  <li>
                    <a href="#">Bachelor & Bachelorette Parties</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>COLLECTIONS</h4>
                  </li>
                  <li>
                    <a href="#">American River Rafting</a>
                  </li>
                  <li>
                    <a href="#">American Whitewater Classics</a>
                  </li>
                  <li>
                    <a href="#">Hidden Canyons</a>
                  </li>
                  <li>
                    <a href="#">Road Trips</a>
                  </li>
                  <li>
                    <a href="#">Wildlife Viewing</a>
                  </li>
                  <li>
                    <a href="#">Wild & Scenic Rivers</a>
                  </li>
                  <li>
                    <a href="#">World Heritage Sites</a>
                  </li>
                  <li>
                    <a href="#">7 Whitewater Wonders</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${classes["navBar__container-nav-box"]} ${"text__primary"}`}
        href="#"
      >
        <span
          onClick={openNavBarHandler}
          id={"dropdown-4btn"}
          className={`${classes["dropbtn"]} ${
            cont4 && classes["active-dbtn"]
          } smaller-text`}
        >
          Experiences
        </span>
        <div
          id={classes["dropdown-content-5"]}
          className={`${classes["dropdown__content"]}`}
          style={{ display: cont4 ? "block" : "" }}
        >
          <div className={classes["nav__row"]}>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>THE OARS EXPERIENCE</h4>
                  </li>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Multi-Day Adventures</a>
                  </li>
                  <li>
                    <a href="#">One-Day Rafting Adventures</a>
                  </li>
                  <li>
                    <a href="#">Lodge-Based & International Adventures</a>
                  </li>
                  <li>
                    <a href="#">Safety & Responsibility</a>
                  </li>
                  <li>
                    <a href="#">
                      Essential Eligibility Criteria for River Trips
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Essential Eligibility Criteria for Sea Kayaking Trips
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Essential Eligibility Criteria for Hiking Trips
                    </a>
                  </li>
                  <li>
                    <a href="#">Our Boats</a>
                  </li>
                  <li>
                    <a href="#">River & Activity Ratings</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>ACTIVITIES</h4>
                  </li>
                  <li>
                    <a href="#">Diving</a>
                  </li>
                  <li>
                    <a href="#">Surfing</a>
                  </li>
                  <li>
                    <a href="#">Skiing</a>
                  </li>
                  <li>
                    <a href="#">Hiking</a>
                  </li>
                  <li>
                    <a href="#">Sandboarding</a>
                  </li>
                  <li>
                    <a href="#">Jungle Walking</a>
                  </li>
                  <li>
                    <a href="#">Kayaking</a>
                  </li>
                  <li>
                    <a href="#">Fishing</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>ACTIVITIES</h4>
                  </li>
                  <li>
                    <a href="#">Diving</a>
                  </li>
                  <li>
                    <a href="#">Surfing</a>
                  </li>
                  <li>
                    <a href="#">Skiing</a>
                  </li>
                  <li>
                    <a href="#">Hiking</a>
                  </li>
                  <li>
                    <a href="#">Sandboarding</a>
                  </li>
                  <li>
                    <a href="#">Jungle Walking</a>
                  </li>
                  <li>
                    <a href="#">Kayaking</a>
                  </li>
                  <li>
                    <a href="#">Fishing</a>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={classes["nav__row-list"]}>
              <div className={classes["nav__column"]}>
                <div className={classes["nav__content"]}>
                  <li className={classes["list-header"]}>
                    <h4>ACTIVITIES</h4>
                  </li>
                  <li>
                    <a href="#">Diving</a>
                  </li>
                  <li>
                    <a href="#">Surfing</a>
                  </li>
                  <li>
                    <a href="#">Skiing</a>
                  </li>
                  <li>
                    <a href="#">Hiking</a>
                  </li>
                  <li>
                    <a href="#">Sandboarding</a>
                  </li>
                  <li>
                    <a href="#">Jungle Walking</a>
                  </li>
                  <li>
                    <a href="#">Kayaking</a>
                  </li>
                  <li>
                    <a href="#">Fishing</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
