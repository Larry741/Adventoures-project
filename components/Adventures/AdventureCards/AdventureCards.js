import Image from "next/image";
import Link from "next/link";
import Button from "../../UI/Button";

import classes from "./AdventureCards.module.scss";

const AdventureCards = (props) => {  

  return (
    <div className={`${classes["adventures__cards"]} ${props.slide ? classes[`slide-${props.index}`] : ''}`}>
      <div className={classes["adventures__cards-rotate"]}>
        <div className={`${classes['adventures__cards-side']} ${classes['adventures__cards-side-front']}`}>
          <Image
            className="img-1"
            src={props.details.image}
            alt={props.details.title2}
            layout="fill"
          />
          <div className={`${classes['adventures__heading-3']} ${'heading__tertiary'}`}>
            <span className={`${classes['front-text']} ${classes[`front-text-${props.index+1}${1}`]}`}>
              {props.details.title1}
            </span>
            <span className={`${classes['front-text']} ${classes[`front-text-${props.index+1}${2}`]}`}>
              {props.details.title2}
            </span>
          </div>
        </div>
        <div className={`${classes['adventures__cards-side']} ${classes['adventures__cards-side-back']}`}>
          <div className={`${classes['bg']} ${classes[`bg-${props.index + 1}`]}`}>
            <div className={`${classes['img']} ${classes['img-b-1']}`}>
              <Image
                src={props.details.image2}
                alt={props.details.title2}
                layout="intrinsic"
              />
            </div>
            <ul className={`${classes['adventures__cards-side-list']} ${'center'}`}>
              {props.details.tourDetails.map((det, idx) => {
                return <li key={idx}>{det}</li>;
              })}
            </ul>
            <Link href="#" passHref={true}>
              <Button des={"btn-white"}>Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCards;
