import Image from "next/image";

import classes from "./StoriesDetails.module.scss";

const StoriesDetails = (props) => {

  return (
    <div className={`${classes["stories__box"]} ${"margin-b-medium"}`}>
      <div className={classes["stories__container"]}>
        <Image
          src={props.data.image}
          className={classes["stories__container-pic"]}
          alt="clients picture"
          width={180}
          height={200}
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
        <h2 className="heading__tertiary">{props.data.title}</h2>
        <p className="mediumSmallText">
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