import DestinationsComponent from '../../components/Destinations/DestinationsComponent/DestinationsComponent';

import classes from "./index.module.scss";
import { renderData } from "../../pages/_app";
import Navbar from '../../components/Header/Navbar/Navbar';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const DestinationsPage = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(router.route, isAuthenticated);


  return (
    <>
      <Navbar />
      <section className={classes.clear} />
      <section>
        <h2 className='center'>All Destinations</h2>
      </section>
      <section className={classes.dest}>
        {renderData.map((destination, index) => {
          return <DestinationsComponent key={index} data={destination} />;
        })}
      </section>
    </>
  );
}

export default DestinationsPage;