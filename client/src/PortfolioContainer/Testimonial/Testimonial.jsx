import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations.js";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What people are saying"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
                      <OwlCarousel className="owl-carousel" id="testimonial-carousel">
                          
                          
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Aaron is deffinately a great person to have on the team.
                      He always has time to help and is a blast to work with.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167870/moonshine_vnrcdl.png"
                      alt="client"
                    />
                    <h5>MoonShine</h5>
                    <p>CEO TheCrick</p>
                  </div>
                </div>
                          </div>
                          

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Aaron is deffinately a great person to have on the team.
                      He always has time to help and is a blast to work with.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167870/moonshine_vnrcdl.png"
                      alt="client"
                    />
                    <h5>MoonShine</h5>
                    <p>CEO TheCrick</p>
                  </div>
                </div>
                          </div>
                          

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Aaron is deffinately a great person to have on the team.
                      He always has time to help and is a blast to work with.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167870/moonshine_vnrcdl.png"
                      alt="client"
                    />
                    <h5>MoonShine</h5>
                    <p>CEO TheCrick</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
