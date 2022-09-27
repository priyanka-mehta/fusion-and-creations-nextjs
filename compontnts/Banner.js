import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner jarallax">
      <div className="banner-info">
        <div className="banner-top">
          <div className="container">
            <div className="navbar-header banner-logo">
              <Link href="/">
                <a>
                  <h1>
                    Fusion and Creations <span>The Designing Studio</span>
                  </h1>
                </a>
              </Link>
            </div>
            <div className="banner-top-right">
              <div className="agileinfo-social-grids">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/viralimehta1994/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/fusion_and_creations/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* <!-- banner-text --> */}
        <div className="banner-text">
          {/* <!-- top-navigation --> */}
          <div className="main">
            <div className="container">
              <nav id="menu" className="nav top-nav">
                <button className="navtoogle">
                  <span className="icon-menu glyphicon glyphicon-menu-hamburger">
                    {" "}
                  </span>{" "}
                  Menu
                </button>
                <ul>
                  <li>
                    <Link href="/">
                      <a>
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="icon-home glyphicon glyphicon-home"
                          />
                        </span>
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#about" className="scroll">
                      <span className="icon">
                        <i
                          aria-hidden="true"
                          className="icon-services glyphicon glyphicon-info-sign"
                        />
                      </span>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="scroll">
                      <span className="icon">
                        <i
                          aria-hidden="true"
                          className="icon-portfolio glyphicon glyphicon-cog"
                        />
                      </span>
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="scroll">
                      <span className="icon">
                        <i
                          aria-hidden="true"
                          className="icon-blog glyphicon glyphicon-picture"
                        />
                      </span>
                      <span>Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="scroll">
                      <span className="icon">
                        <i
                          aria-hidden="true"
                          className="icon-contact glyphicon glyphicon-envelope"
                        />
                      </span>
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <Script id="test" src="js/modernizr.custom.js"></Script> */}
            </div>
          </div>
          {/* <!-- //top-navigation --> */}
        </div>
        {/* <!-- //banner-text --> */}
        <div className="clearfix"> </div>
        <p className="w3-agilephn">
          <span className="glyphicon glyphicon-earphone" /> +91 8141310606{" "}
        </p>
      </div>
    </div>
  );
}
