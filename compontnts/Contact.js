import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="agileits-title">
          <h3>Contact Us</h3>
          <p>
            How we can help you. We like to talk and on the strength of that you
            are invited for a coffee at our office.
          </p>
        </div>
        <div className="contact-info">
          <div className="col-md-4 contact-grids">
            <div className="cnt-address">
              <h3>Address</h3>
              <h4>D-105/106, 1st Floor</h4>
              <p>
                B.B.Z. S-51, Zanda Chowk,
                <span className="w3ls-text">CG 09-123</span>
                Gandhidham - Kutch (370201)
              </p>
              <h4>Get In Touch</h4>
              <p>
                Mobile: 8141310606
                {/* <!-- Fax: +122 234 567 1111 --> */}
                <span>
                  E-mail:{" "}
                  <a href="mailto:viralimehta61@gmail.com">
                    viralimehta61@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-8 contact-grids">
            <h4 className="cnt-text">How to reach us</h4>
            <p>
              If you have any questions or would like to schedule a meet, please
              feel free to mail us with this form and we will get back to you
              soon.
            </p>
            <div className="contact-form">
              <h3>Drop Us a Message</h3>
              <form method="post">
                <textarea
                  placeholder="Message"
                  required=""
                  aria-label="message"
                />
                <input
                  type="text"
                  placeholder="Name"
                  required=""
                  id="name"
                  aria-label="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required=""
                  id="email"
                  aria-label="email"
                />
                <input type="button" value="SEND" onClick="sendEmail()" />
              </form>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="map">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14683.100380408854!2d70.1393281!3d23.0687056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a9ad61bb0dd1414!2sFusion%20And%20Creations!5e0!3m2!1sen!2sin!4v1583262845588!5m2!1sen!2sin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
