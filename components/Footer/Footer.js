import { useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import FooterContent from "./FooterDetails/FooterContent";

import classes from './Footer.module.scss';
import image1 from "../../public/img/facebook-icon.png";
import image2 from "../../public/img/twitter-icon.png";
import image3 from "../../public/img/instagram-icon.png";

import image1b from "../../public/img/facebook-icon1.png";
import image2b from "../../public/img/twitter-icon1.png";
import image3b from "../../public/img/instagram-icon1.png";

const footerContent = [
  {
    title: "SUPPORT",
    contents: [
      "Help Center",
      "Cancellation options",
      "Neighborhood Support",
      "Trust & Safety",
    ],
  },
  {
    title: "ABOUT",
    contents: [
      "How we work",
      "Newsroom",
      "Investors",
      "Careers",
      "Founders Letter",
    ],
  },
  {
    title: "ACTIVITIES",
    contents: [
      "Diving",
      "Surfing",
      "Skiing",
      "Hiking",
      "Sandboarding",
      "Jungle Walking",
      "Kayaking",
    ],
  },
  {
    title: "CONTACT US",
    contents: [
      "Contact us",
      "Talk to us on Live Chat",
      "Request a free brochure!",
      "Digital Brochure",
      "Custom Travel",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
];

const Footer = () => {
  const [ imageWasHovered, setImageWasHovered ] = useState({
    image1: false,
    image2: false,
    image3: false
  });

  const revertImageUrlHandler = (event) => {
    const eventTarget = event.target.id;

    setImageWasHovered((prevState) => {
      return {
        image2: false,
        image3: false,
        image1: false,
      };
    });
  }

  const changeImageUrlHandler = (event) => {
    const eventTarget = event.target.id;

    if (eventTarget === "right1") {
      setImageWasHovered((prevState) => {
        return {
          image2: false,
          image3: false,
          image1: true,
        };
      })
    } else if (eventTarget === "right2") {
      setImageWasHovered((prevState) => {
        return {
          image2: true,
          image3: false,
          image1: false,
        };
      });
    } else if (eventTarget === "right3") {
      setImageWasHovered((prevState) => {
        return {
          image2: false,
          image3: true,
          image1: false,
        };
      });
    }
  }

  return (
    <footer className={`${classes["footer"]} ${"text__primary-small"}`}>
      <div
        className={`${classes["footer__contact-box"]} tertiaryText margin-b-medium-2`}
      >
        <span>USA OR CANADA: 1-600-437-8349</span>
        <span>INTERNATIONAL: 1-782-649-5329</span>
      </div>
      <div className={classes["footer__box"]}>
        {footerContent.map((content) => {
          return <FooterContent key={content.title} data={content} />;
        })}
      </div>
      <div className={`${classes["footer__content-text"]} small-text center`}>
        <p>
          Adventours is an independent tour company championing outdoor
          lifestyle, environmental stewardship and regenerative living. We
          encourage people to connect with the natural world in meaningful ways
          so they may become active stewards of our planet.
        </p>
      </div>
      <div className={classes["footer__content-copyright"]}>
        <span className={`${classes["left"]} small-text`}>
          <span>
            <RiCopyrightLine />
          </span>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Sitemap</Link>
        </span>
        <span
          className={classes["right"]}
          onMouseEnter={changeImageUrlHandler}
          onMouseLeave={revertImageUrlHandler}
        >
          <span
            onMouseEnter={changeImageUrlHandler}
            onMouseLeave={revertImageUrlHandler}
          >
            <Link href="#">
              <a>
                <Image
                  id="right1"
                  width={30}
                  height={30}
                  src={!imageWasHovered.image1 ? image1 : image1b}
                  alt="facebook-icon"
                />
              </a>
            </Link>
          </span>
          <span
            onMouseEnter={changeImageUrlHandler}
            onMouseLeave={revertImageUrlHandler}
          >
            <Link href="#">
              <a>
                <Image
                  id="right2"
                  width={30}
                  height={30}
                  src={!imageWasHovered.image2 ? image2 : image2b}
                  alt="twitter-icon"
                />
              </a>
            </Link>
          </span>
          <span
            onMouseEnter={changeImageUrlHandler}
            onMouseLeave={revertImageUrlHandler}
          >
            <Link href="#">
              <a>
                <Image
                  id="right3"
                  width={30}
                  height={30}
                  src={!imageWasHovered.image3 ? image3 : image3b}
                  alt="instagram-icon"
                />
              </a>
            </Link>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
