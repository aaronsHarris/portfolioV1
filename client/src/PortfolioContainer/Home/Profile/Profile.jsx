import Typical from "react-typical";
import ScrollService from "../../../utils/ScrollService";
import './Profile.css'


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/aaronsHarris">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aaron-harris-577867218/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <div className="profile-details-names">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Aaron</span>
              </span>
              
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Enthuistastic Dev 😎",
                      1000,
                      "Full Stack Dev ✅",
                      1000,
                      "MERN Stack Dev 🌐",
                      1000,
                      "React Dev ⚛️",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  I love to build smart and beautiful websites.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me</button>
              <a
                href="../../assets/Current resume dec19 (1).pdf"
                download="../../../assets/AaronsHarrisResume.docx.pdf"
              >
                <button className="btn highlighted-btn">Get Resume <i className="fa fa-arrow-down"></i></button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
