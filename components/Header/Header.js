import HeaderCaption from "./HeaderCaption/HeaderCaption";
import HeaderScrollDown from "./HeaderScrollDown/HeaderScrollDown";
import HeaderTourBtn from "./HeaderTourBtn/HeaderTourBtn";
import HeaderVideo from "./HeaderVideo/HeaderVideo";
import HeaderForm from "./HeaderForm/HeaderForm";
import Navbar from "./Navbar/Navbar";

import classes from './Header.module.scss'

const Header = (props) => {
  return (
    <section id="section__header" className={classes["section__header"]}>
      <Navbar />
      <HeaderVideo />
      <HeaderForm />
      <HeaderCaption />
      <HeaderTourBtn />
      <HeaderScrollDown />
    </section>
  );
};

export default Header;