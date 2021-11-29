import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations.js";

export default function Testimonial(props) {
//   let fadeInScreenHandler = (screen) => {
//     if (screen.fadeScreen !== props.id) return;
//     Animations.animations.fadeInScreen(props.id);
//   };
//   const fadeInSubscription =
//     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: 0,
    animationin: "bounceInRight",
    animationout: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What people are saying"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Aaron is deffinately a great person to have on the team.
                      He always has time to help and is a blast to work with.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
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
                    <ul className="stars list-unstyled">
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
                    <ul className="stars list-unstyled">
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
