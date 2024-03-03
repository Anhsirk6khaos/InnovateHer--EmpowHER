import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LandingPage = ({ showEmpowher = true }) => {
  return (
    <div className="landing-page">
      <div className="overlap">
        <div className="background-frame">
          <img className="background-group" alt="Background group" src="background-group.png" />
        </div>
        <div className="exclipse-group">
          <div className="eclipse-women-avatar">
            <div className="eclipse-assets">
              <div className="overlap-group">
                <img className="ellipse" alt="Ellipse" src="ellipse-3.png" />
                <img className="img" alt="Ellipse" src="ellipse-4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="contac-group">
          <div className="nav-group">
            <div className="nav">
              <div className="text-wrapper">Home</div>
              <div className="div">Social</div>
              <div className="div">Education</div>
              <div className="div">Personal</div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-frame">
              <div className="text-wrapper-2">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="quote-group">
          <div className="quote-frame">
            <div className="quote">
              <div className="text-wrapper-3">EmpowHER</div>
              <p className="empower-protect">
                &#34;Empower. Protect. Shine. Our app is every woman&#39;s shield in the digital world.&#34;
              </p>
            </div>
          </div>
        </div>
        <img className="nav-image" alt="Nav image" src="nav-image.svg" />
        <img className="mask-group" alt="Mask group" src="mask-group.png" />
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  showEmpowher: PropTypes.bool,
};
