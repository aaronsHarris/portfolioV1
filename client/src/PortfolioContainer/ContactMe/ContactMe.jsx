import Typical from "react-typical";
import imgBack from "../../assets/ContactMe/mailz.jpeg";
import load1 from "../../assets/ContactMe/load2.gif";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Keep in Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Gen In Touch 📧", 1000]} />
          </h2>
          <a href="https://github.com/aaronsHarris">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aaron-harris-577867218/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
