import React from "react";

export default function About() {
  return (
    <div id="about" className="welcome">
      <div className="container">
        <div className="agileits-title">
          <h2>About us</h2>
          <p>
            We grow by making decisions that are rooted in business strategy.{" "}
          </p>
        </div>
        <div className="w3ls-row alert">
          <div className="col-md-6 welcome-w3left">
            <img src="images/aboutus.jpeg" className="img-responsive" alt="" />
          </div>
          <div className="col-md-6 welcome-w3right">
            <div className="welcome-agiletext">
              <h4> About Fusion and Creations </h4>
              <p className="about-font">
                Fusion and Creation is leading contemporary interior design firm
                in gandhidham since 2019. FUSION AND CREATION believes that ant
                place you spend time in directly affects your being. The place
                along with its interior affects what you think, how you think,
                what you do, how you interact with people, how motivated you are
                and a million other aspects of your daily life.
              </p>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}
