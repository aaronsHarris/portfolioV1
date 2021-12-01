import "./Resume.css";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import { useState, useEffect } from "react";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div>
              {props.link ? (
                <a className="heading-date" href={props.link} target="_blank">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "Node.js", ratingPercentage: 75 },
    { skill: "HTMl", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Ruby", ratingPercentage: 70 },
    { skill: "Rails", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "MyHero Character Creater",
      duration: { fromDate: "", toDate: "" },
      description:
        "MyHero is a creator creation app where users create a custom character for their next table top role play game.",
      subHeading: "Technologies used: React JS, Airtable, Tailwind CSS",
      link: "https://myheroapp.netlify.app/",
    },
    {
      title: "DevUp Ecommerce Wesite",
      duration: { fromDate: "", toDate: "" },
      description:
        "DevUp is an Ecommerce site to find your perfect at Home Office setup.",
      subHeading: "Technologies used: MERN Stack, Tailwind CSS",
      link: "https://devupapp.netlify.app/",
    },
    {
      title: "UpCoook Recipe App",
      duration: { fromDate: "", toDate: "" },
      description:
        "Full Stack recipe app where users can quickly find recipes and cooking knowledge.",
      subHeading: "Featuring: React JS, Ruby on Rails, Framer Motion",
      link: "https://upcook.netlify.app/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"General Assembly"}
        subHeading={"Software Engineering Certificate of Completion"}
        fromDate={"Aug 2021"}
        toDate={"Nov 2021"}
      />
      <ResumeHeading
        heading={"Lee College"}
        subHeading={"Studied Bussiness Management"}
        fromDate={"Aug 2011"}
        toDate={"Dec 2011"}
      />
      <ResumeHeading
        heading={"Art Institute"}
        subHeading={"Studied Culinary Arts"}
        fromDate={"Aug 2008"}
        toDate={"May 2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"General Assembly"}
          subHeading={"FULL STACK DEVELOPER FELLOW"}
          fromDate={"Aug 2021"}
          toDate={"Nov 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I Worked in Software Engineering Immersive Program and learned all
            the latest core knowledge of several coding langauges.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Worked on daily labs and exercises in the MERN Stack and Ruby on
            Rails
          </span>
          <br />
          <span className="resume-description-text">
            -Studied and executed dailly Javascript Algorithms
          </span>
          <br />
          <span className="resume-description-text">
            -We had an amazing culture between our cohort and established an
            awesome, supportive network for our future coding journey.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
    <ResumeHeading
      heading="Cycling"
      description="I average about 100 miles a week tearing up the streets of Houston"
    />
    <ResumeHeading
      heading="Cooking"
      description="I love Cooking all sorts of cuisine and love sharing meals with friends and family"
    />
    <ResumeHeading
      heading="Table Top RPGs"
      description="I play Dungeons and Dragons with my friends every week"
    />
  </div>,

  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
