import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import { WidthContextProvider } from "../components/store/width-context";

import Navbar from '../components/Navbar/Navbar';

import store from '../components/store';

import '../styles/globals.scss';

import image1 from "../public/img/Destination__amazon.jpg";
import image2 from "../public/img/Destination__california.jpg";
import image3 from "../public/img/destination__vietnam.jpg";
import image4 from "../public/img/Destinations__troll-pennisula.jpg";
import image5 from "../public/img/Destinations-Scandinavia1.jpg";
import image6 from "../public/img/destination__fiji.jpg";
import image7 from "../public/img/destination__grand-canyon.jpg";
import image8 from "../public/img/destination__morroco.jpg";
import image9 from "../public/img/destination__chile.jpg";

export const renderData = [
  {
    destination: "Amazon",
    imageSrc: image1,
    id: 'm1',
  },
  {
    destination: "California",
    imageSrc: image2,
    id: 'm2',
  },
  {
    destination: "Vietnam",
    imageSrc: image3,
    id: 'm3',
  },
  {
    destination: "Norway",
    imageSrc: image4,
    id: 'm4',
  },
  {
    destination: "Scandinavia",
    imageSrc: image5,
    id: 'm5',
  },
  {
    destination: "Fiji",
    imageSrc: image6,
    id: 'm6',
  },
  {
    destination: "Grand-canyon",
    imageSrc: image7,
    id: 'm7',
  },
  {
    destination: "Morroco",
    imageSrc: image8,
    id: 'm8',
  },
  {
    destination: "Chile",
    imageSrc: image9,
    id: 'm9',
  },
];

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <WidthContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </WidthContextProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp
