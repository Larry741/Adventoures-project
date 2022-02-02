import HeaderCaption from "./HeaderCaption/HeaderCaption";
import HeaderScrollDown from "./HeaderScrollDown/HeaderScrollDown";
import HeaderTourBtn from "./HeaderTourBtn/HeaderTourBtn";
import HeaderVideo from "./HeaderVideo/HeaderVideo";
import HeaderForm from "./HeaderForm/HeaderForm";
import Navbar from "./Navbar/Navbar";

const MainHeader = (props) => {
  return (
    <>
      <Navbar />
      <HeaderVideo />
      <HeaderForm />
      <HeaderCaption />
      <HeaderTourBtn />
      <HeaderScrollDown />
    </>
  );
};

export default MainHeader;