import StoriesDetails from "./StoriesDetails/StoriesDetails";
import Button from "../UI/Button";

import classes from './Stories.module.scss';
import image1 from "../../public/img/nat-8.jpg";
import image2 from '../../public/img/nat-9.jpg'

const comments = [
  {
    name: "mary",
    surname: "Smith",
    title: "I HAD THE BEST WEEK EVER WITH MY FAMILY",
    image: image1
  },
  {
    name: "John",
    surname: "Doe",
    title: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
    image: image2
  },
];

const Stories = () => {
  return (
  <section className={classes["section__stories"]}>
      <div className={classes["stories"]}>
        <div className={`${classes["tours__heading"]} ${"center"}`}>
          <h2 className="heading__secondary margin-b-large">
            WHAT OUR USERS SAY ABOUT US
          </h2>
        </div>
        {comments.map((comment) => {
          return <StoriesDetails key={comment.name} data={comment} />
        })}
        <Button des={"btn-1"} className="margin-b-big text__primary">
          READ ALL STORIES &rarr;
        </Button>
      </div>
    </section>
  );
};

export default Stories;
