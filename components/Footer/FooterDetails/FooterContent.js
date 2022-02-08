
import Link from "next/link";
import classes from "./FooterContent.module.scss";

const FooterContent = (props) => {

  return (
    <div className={classes["footer__content"]}>
      <ul className={classes["footer__content-list"]}>
        <div
          className={`${classes["footer__container"]} ${classes["footer__container-activities"]}`}
        >
          <li className={classes["list-header"]}>
            <h4>{props.data.title}</h4>
          </li>
          {props.data.contents.map((content, index) => {
            return (
              <li key={index}>
                <Link href='#'>{content}</Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default FooterContent;