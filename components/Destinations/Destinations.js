import DestinationsDetail from "./DestinationsDetail";

import classes from "./Destinations.module.scss";
import image1 from '../../public/img/Destination__amazon.jpg';
import image2 from '../../public/img/Destination__california.jpg';
import image3 from '../../public/img/destination__vietnam.jpg';
import image4 from '../../public/img/Destinations__troll-pennisula.jpg';
import image5 from '../../public/img/Destinations-Scandinavia1.jpg';
import image6 from "../../public/img/destination__fiji.jpg";
import image7 from '../../public/img/destination__grand-canyon.jpg';
import image8 from '../../public/img/destination__morroco.jpg';
import image9 from '../../public/img/destination__chile.jpg';


const renderData = [
  {
    destination: 'Amazon',
    imageSrc: image1,
  },{
    destination: 'California',
    imageSrc: image2,
  },{
    destination: 'Vietnam',
    imageSrc: image3,
  },{
    destination: 'Norway',
    imageSrc: image4,
  },{
    destination: 'Scandinavia',
    imageSrc: image5,
  },{
    destination: 'Fiji',
    imageSrc: image6,
  },{
    destination: 'Grand-canyon',
    imageSrc: image7,
  },{
    destination: 'Morroco',
    imageSrc: image8,
  },{
    destination: 'Chile',
    imageSrc: image9,
  }
];

const Destinations = () => {

  return (
    <>
      <section className={classes.destinations}>
        <div className="center heading-bg">
          <h2 className="advenutres__heading heading__secondary">
            VISIT EXCITING PLACES
          </h2>
        </div>
        <div className={classes["destinations__heading-2"]}>
          <h3 className="heading__secondary-2 margin-b-medium">DESTINATIONS</h3>
        </div>
        <div className={`margin-b-medium-2 ${classes['destinations__content']}`}>
          {renderData.map((item, index) => {
            return <DestinationsDetail key={item.destination} data={item} index={index} />;
          })}
        </div>
        <div className="center">
          <a className="btn btn-orange" href="#">
            View all Destinations
          </a>
        </div>
      </section>
    </>
  );
}

export default Destinations;