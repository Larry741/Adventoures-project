
import classes from "./HeaderVideo.module.css";

const HeaderVideo = () => {

  return (
    <div className={classes.video}>
      <video className={classes.content} src='../../public/img/nat-heroBg.mp4' autoPlay muted loop>
        {/* <source src={video} type="video/mp4" /> */}
        {/* <source src="img/video.webm" type="video/webm" /> */}
        Your browser is not supported!
      </video>
    </div>
  );
}

export default HeaderVideo;