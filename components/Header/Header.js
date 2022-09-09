import HeaderCaption from "./HeaderCaption/HeaderCaption";
import HeaderTourBtn from "./HeaderTourBtn/HeaderTourBtn";
import HeaderForm from "./HeaderForm/HeaderForm";

import classes from './Header.module.scss'

const Header = (props) => {
  return (
    <section id="section__header" className={classes["section__header"]}>
      <HeaderForm />
      <HeaderCaption />
      <HeaderTourBtn />
    </section>
  );
};

export default Header;