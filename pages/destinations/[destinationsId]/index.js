import Image from "next/image";

import { renderData } from "../../_app";

import classes from './index.module.scss';
import image from "../../../public/img/Destination__amazon.jpg";

const DestinationDetail = (props) => {
  
  return (
    <>
      <section className={classes.clear} />
      <section>
        <h1 className="center margin-b-medium">{props.destination}</h1>
        <div
          className={`${classes["destinations__content-column"]} ${
            classes[`destinations__content-column-${props.id + 1}`]
          }`}
        >
          <div style={{ width: "50rem", height: "50rem" }}>
            <Image
              className={classes["destinations__content-pics"]}
              src={props.imageSrc}
              alt="amazon"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths = () => {
  
  const paths = renderData.map(dest => {
    return {
      params: {
        destinationsId: dest.id
      }
    }
  })

  return {
    fallback: 'blocking',
    paths: paths
  };
}

export const getStaticProps = async (context) => {
  const selectDestination = renderData.find(dest => dest.id === context.params.destinationsId); 
 
  return {
    props: selectDestination,
  };
}

export default DestinationDetail;