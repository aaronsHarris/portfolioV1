import "./Resume.css";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import { useState } from "react";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-description-heading">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "Node.js", ratingPercentage: 75 },
    { skill: "HTMl", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Ruby on Rails", ratingPercentage: 50 },
  ];

  const projectDetails = [
    {
      title: "MyHero Character Creation App",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "MyHero is a creator creation app where users create a custom character for their next table top role play game. Featuring Airtable as a database, image upload, and responsive design.",
      subHeading: "Technologies used: React JS, Airtable, Tailwind CSS",
    },
    {
      title: "DevUp Ecommerce Wesite",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "DevUp is curated inventory site to find your perfect at Home Office setup. A Full stack app featuring user auth, full CRUD, sorting, wishlist, image upload, and responsive design. This was a team project with credit to Jessica Choe, Tyler Washington, & Benjamin Jeanb",
      subHeading: "Technologies used: MERN Stack, Tailwind CSS",
    },
    {
      title: "UpCoook Recipe App",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Upcook is a Full Stack recipe app where users can quickly find recipes and cooking knowledge and get cooking. Featuring user auth, Full CRud, image upload, and responsive design",
      subHeading: "Technologies used: React JS, Ruby on Rails, Tailwind CSS",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"General Assembly"}
        subHeading={"Certificate of Completion"}
        fromDate={"Aug 2021"}
        toDate={"Nov 2021"}
      />
      <ResumeHeading
        heading={"Lee College"}
        subHeading={"Studied Bussiness Management"}
        fromDate={"Aug 2011"}
        toDate={""}
      />
      <ResumeHeading
        heading={"Art Institute"}
        subHeading={"Studied Culinary Arts"}
        fromDate={"Aug 2008"}
        toDate={""}
      />
      </div>,
      
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"General Assembly"}
        subHeading={"Software Engineering Fellow"}
        fromDate={"Aug 2021"}
        toDate={"Nov 2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          I Worked in Software Engineering Immersive Program and learned all the
          latest core knowledge of several coding langauges.
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
        </div>,

        <div className="resume-screen-container programming-skills-container"
        key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.ratingPercentage + "%" }}
                        className="active-percentage">

                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            ))}
        </div>,

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
        </div>
    </div>
  ];
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"Everything you want to know"}
        />
      </div>
    </div>
  );
}
