
import classes from "./HeaderVideo.module.scss";

const HeaderVideo = () => {

  return (
    <div className={classes.video}>
      <video className={classes.content} autoPlay muted loop>
        <source src='/img/nat-heroBg.mp4' type="video/mp4" />
        {/* <source src="img/video.webm" type="video/webm" /> */}
        Your browser is not supported!
      </video>
    </div>
  );
}

export default HeaderVideo;