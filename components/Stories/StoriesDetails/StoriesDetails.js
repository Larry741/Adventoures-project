import Image from "next/image";

import classes from "./StoriesDetails.module.scss";

const StoriesDetails = (props) => {

  return (
    <div className={`${classes["stories__box"]} ${"margin-b-medium"}`}>
      <div className={classes["stories__container"]}>
        <Image
          src={props.data.image}
          className="stories__container-pic"
          alt="clients picture"
          layout="responsive"
        />
        <span
          className={`${
            classes["stories__container-caption"]
          } ${"text__primary-big center"}`}
        >
          {props.data.name} <br /> {props.data.surname}
        </span>
      </div>
      <div className={`${classes["stories__textBox"]}`}>
        <h2 className="text__primary-big">{props.data.title}</h2>
        <p className="text__primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui.
        </p>
      </div>
    </div>
  );
}

export default StoriesDetails;