import React from "react";

export default function Feedback() {
  return (
    <div className="feedback jarallax">
      <div className="feedback-agileinfo">
        <div className="container">
          <div className="agileits-title w3title2">
            <h3>Feedback</h3>
            <p>What people feel for us</p>
          </div>
          <div className="agileits-feedback-grids">
            <div className="col-sm-4 feedback-info">
              <div className="feedback-top">
                <p>
                  {" "}Great Mixture of Art and Creativity. Wish you touch the
                  sky soon. Best Interior Designer ever met. All the best for
                  your future projects.
                </p>
              </div>
              <div className="feedback-grids">
                <div className="feedback-img">
                  <img src="images/feedback/the_magical_touch.jpeg" alt="" />
                </div>
                <div className="feedback-img-info">
                  <h5>The Magical Touch</h5>
                  <p>Gandhidham</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-sm-4 feedback-info">
              <div className="feedback-top">
                <p>
                  {" "}Very dedicated and creative team to work with. Adorable
                  designs and presence of mind to pick up new idea.{" "}
                </p>
              </div>
              <div className="feedback-grids">
                <div className="feedback-img">
                  <img src="images/feedback/nilesh_sheth.jpeg" alt="" />
                </div>
                <div className="feedback-img-info">
                  <h5>Nilesh Sheth</h5>
                  <p>Gandhidham</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-sm-4 feedback-info">
              <div className="feedback-top">
                <p>
                  Amazing and talented designer in the town. Love her color
                  sense, use of any material and her perspective is just beyond
                  words.{" "}
                </p>
              </div>
              <div className="feedback-grids">
                <div className="feedback-img">
                  <img src="images/feedback/user.jpeg" alt="" />
                </div>
                <div className="feedback-img-info">
                  <h5>Priya Agarwal</h5>
                  <p>Gandhidham</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
