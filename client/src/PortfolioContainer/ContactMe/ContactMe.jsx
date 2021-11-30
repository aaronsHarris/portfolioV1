import { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../assets/ContactMe/mailz.jpeg";
import load1 from "../../assets/ContactMe/load2.gif";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
export default function ContactMe(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)




  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
            
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
              <div className="back-form">
                  <div className="img-back">
                      <h4>Send your Email here!</h4>
                      <img src={imgBack} alt="email" />
                  </div>
                  <form action="">
                      <p>{banner}</p>
                      <label htmlFor="name">Name</label>
                      <input type="text"
                      onChange={handleName}
                      value={name}
                      />

                      <label htmlFor="email">Email</label>
                      <input type="email" onChange={handleEmail}
                      value={email}/>

                      <label htmlFor="message">Message</label>
                      <textarea type="text" onChange={handleMessage}
                      value={message}/>

                      <div className="send-btn">
                          <button type='submit'>
                              send
                              <i className='fa fa-paper-plane' />
                              
                          </button>
                      </div>
                  </form>

              </div>
      </div>
    </div>
  );
}
