
import Link from "next/link";
import classes from "./FooterContent.module.scss";

const FooterContent = (props) => {

  return (
    <ul className={classes["footer__content-list"]}>
      <li className={`${classes["list-header"]} small-text`}>
        <h4>{props.data.title}</h4>
      </li>
      {props.data.contents.map((content, index) => {
        return (
          <li className="mediumSmallText" key={index}>
            <Link href="#">{content}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterContent;