import { useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import './AboutMe.css'


export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a full stack developer that wants to help create the future of tech. As a Chef and business manager in the hospitality industry I always thrived in the fiery pace of the kitchen or the customer satisfaction of the dining room. I love pushing myself in my personal life with cycling and being creative through writing or comedy. As a software engineer I will consistently bring my fire and passion for the customer and innovative products to my work",
    highlights: {
      bullets: [
        "Full Stack and mobile development",
        "Interactive Front End Design",
        "React Development",
        "Building REST API",
        "Managing Database",
        "OOP Development",
      ],
      heading: "Here are a few Highlights:",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me</button>
              <a
                href="../../assets/Current resume dec19 (1).pdf"
                download="../../assets/Current resume dec19 (1).pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
