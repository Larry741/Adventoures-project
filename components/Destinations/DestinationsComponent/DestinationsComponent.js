import Image from "next/image";
import Link from "next/link";

import classes from "./DestinationsComponent.module.scss";

const DestinationsComponent = (props) => {

  return (
    <div
      className={`${classes["destinations__content-column"]} ${
        classes[`destinations__content-column-${props.index + 1}`]
      }`}
    >
      <Image
        className={classes["destinations__content-pics"]}
        src={props.data.imageSrc}
        alt="amazon"
        layout="fill"
      />
      <span className="heading__secondary">{props.data.destination}</span>
      <Link href={`/destinations/${props.data.id}`}>
        <a className="btn btn-white">EXPLORE</a>
      </Link>
    </div>
  );
};

export default DestinationsComponent;
