import Link from "next/link";
import DestinationsComponent from "./DestinationsComponent/DestinationsComponent";

import { renderData } from "../../pages/_app";

import classes from "./Destinations.module.scss";


const Destinations = () => {
  return (
    <section className={classes.destinations}>
      <div className="center heading-bg margin-b-medium">
        <h2 className="advenutres__heading heading__secondary">
          VISIT EXCITING PLACES
        </h2>
      </div>
      <div className={classes["destinations__heading-2"]}>
        <h3 className="heading__secondary-2 margin-b-small">DESTINATIONS</h3>
      </div>
      <div className={`margin-b-medium-2 ${classes["destinations__content"]}`}>
        {renderData.map((item, index) => {
          return (
            <DestinationsComponent
              key={item.destination}
              data={item}
              index={index}
            />
          );
        })}
      </div>
      <div className="center">
        <Link href="/destinations" passHref={true}>
          <a className="btn  btn-orange">View all Destinations</a>
        </Link>
      </div>
    </section>
  );
};

export default Destinations;
