import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/aaronsHarris">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aaron-harris-577867218/">
              <i className="fa fa-linkedin"></i>
            </a>

            <div className="profile-detail-names">
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
                                  I build applications with front end and back end operations
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
