import { useEffect, useState } from "react";
import Image from "next/image";
import AdventureCards from "./AdventureCards/AdventureCards";

import classes from "./Adventure.module.scss";
import image1 from "../../public/img/adventures-Usaka-desert-peru.jpg";
import image2 from "../../public/img/adventures-Great-barrier-reef.jpg";
import image3 from "../../public/img/adventures-troll-peninsula-iceland-large.jpg";
import image4 from "../../public/img/adventures-colorado-rapidss.jpg";
import image5 from "../../public/img/adventures-jungle-walk-Amazon.jpg";

import image12 from "../../public/img/adventures-Usaka-desert-peru-b.jpg";
import image22 from "../../public/img/adventures-Great-barrier-reef-b.jpg";
import image32 from "../../public/img/adventures-troll-peninsula-iceland-large-b.jpg";
import image42 from "../../public/img/adventures-colorado-rapidss-b.jpg";
import image52 from "../../public/img/adventures-jungle-walk-Amazon-b.jpg";

import awardsPic1 from "../../public/img/awards (6).jpg";
import awardsPic2 from "../../public/img/awards (4).jpg";
import awardsPic3 from "../../public/img/awards (3).jpg";
import awardsPic4 from "../../public/img/Awards (1).jpg";
import awardsPic5 from "../../public/img/awards (5).png";
import awardsPic6 from "../../public/img/awards (7).png";
import awardsPic7 from "../../public/img/awards (2).png";
import Button from "../UI/Button";

const cardDetails = [
  {
    title1: "Sandboarding The",
    title2: "Usaka Desert",
    image: image1,
    image2: image12,
    tourDetails: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty:easy",
    ],
  },
  {
    title1: "Scuba Diving The",
    title2: "Great Barrier Reef",
    image: image4,
    image2: image42,
    tourDetails: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty:easy",
    ],
  },
  {
    title1: "Ski Touring The",
    title2: "troll-peninsula",
    image: image3,
    image2: image32,
    tourDetails: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty:easy",
    ],
  },
  {
    title1: "Navigating The",
    title2: "Rapids of colorado",
    image: image2,
    image2: image22,
    tourDetails: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty:easy",
    ],
  },
  {
    title1: "Jungle Walk The",
    title2: "Amazon Rainforest",
    image: image5,
    image2: image52,
    tourDetails: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty:easy",
    ],
  },
];

const Adventure = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const cardsBox = document.getElementById("adventures__box");

    const showCards = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSlideIn(true);
        }
      });
    };

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    let observer = new IntersectionObserver(showCards, options);

    observer.observe(cardsBox);
  }, []);


  return (
    <section className={classes.adventures}>
      <div className={classes.design}></div>
      <div className={`${classes["design"]} ${classes["design-2"]}`}></div>
      <div className={`${"center"} ${classes["heading-bg"]}`}>
        <h2
          className={`${
            classes["adventures__heading"]
          } ${"heading__secondary"}`}
        >
          LIVE UNFORGETTABLE EXPERIENCES IN <br />
          NATURE
        </h2>
      </div>
      <div className={classes["adventures__heading-2"]}>
        <h3 className={"heading__secondary-2"}>ADVENTURES</h3>
      </div>
      <div
        id="adventures__box"
        className={`${classes["adventures__box"]} ${"margin-b-medium"}`}
      >
        {cardDetails.map((card, idx) => {
          return (
            <AdventureCards
              key={card.title1}
              slide={slideIn}
              index={idx}
              details={card}
            />
          );
        })}
      </div>
      <div className="center margin-b-large">
        <Button des={"btn-orange"} href="#">
          View all Adventures
        </Button>
      </div>
      <div className={classes["adventures__awards-box"]}>
        <Image
          layout="responsive"
          className={classes["adventures__awards-box-rounded"]}
          src={awardsPic1}
          alt="awards"
        />
        <Image
          layout="responsive"
          className={classes["adventures__awards-box-rounded"]}
          src={awardsPic2}
          alt="awards"
        />
        <Image
          layout="responsive"
          className={classes["adventures__awards-box-rounded"]}
          src={awardsPic3}
          alt="awards"
        />
        <Image
          layout="responsive"
          className={classes["adventures__awards-box-rounded"]}
          src={awardsPic4}
          alt="awards"
        />
        <Image layout="responsive" src={awardsPic5} alt="awards" />
        <Image layout="responsive" src={awardsPic6} alt="awards" />
        <Image layout="responsive" src={awardsPic7} alt="awards" />
      </div>
    </section>
  );
};

export default Adventure;
