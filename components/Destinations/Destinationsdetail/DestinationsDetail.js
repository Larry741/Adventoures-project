import Image from "next/image";
import Link from "next/link";
import Button from "../../UI/Button";

import classes from './DestinationsDetail.module.scss';

const DestinationsDetail = (props) => {

  return (
    <div
      className={`${classes["destinations__content-column"]} ${
        classes[`destinations__content-column-${props.index + 1}`]
      }`}
    >
      <Image
        className={classes['destinations__content-pics']}
        src={props.data.imageSrc}
        alt="amazon"
        layout="fill"
      />
      <span className="heading__secondary">{props.data.destination}</span>
      <Link  href="#" passHref={true}>
        <Button des={"btn-white"}>EXPLORE</Button>
      </Link>
    </div>
  );
};

export default DestinationsDetail;
