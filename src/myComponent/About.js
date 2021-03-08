import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";

AOS.init();

const About = () => {
  //contents will be loaded with a fading effect
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Me</h1>
          <p data-aos="fade-up">
            I am a CS student and pursuing my interest in Computer Science and
            take it to the level where I can make some significant contribution
            in the field of computer science that helps the masses.Also I am
            good at desigining stuffs and have a keen interest in gadgets.
          </p>

          <div className="row">
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
                  aacfahim@gmail.com
                </span>

                <span>
                  <i className="fas fa-mobile-alt" />
                  +8801795606454
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> Mirpur, Dhaka,
                  Bangladesh
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
