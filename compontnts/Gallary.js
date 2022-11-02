import React, { useState } from "react";

export default function Gallary1() {
  const [tabIndex, setTabIndex] = useState("residence");
  const [subTabIndex, setSubTabIndex] = useState("");

  const handleTabChange = tab => {
    setTabIndex(tab);
    setSubTabIndex("");
  };
  const handleSubTabChange = subTab => setSubTabIndex(subTab);

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <div className="agileits-title">
          <h3>Our Gallery</h3>
          <ul className="nav nav-tabs">
            <li
              className={tabIndex === "residence" ? "active" : 0}
              onClick={() => handleTabChange("residence")}
            >
              <a>Residence</a>
            </li>
            <li
              className={tabIndex === "office" ? "active" : 0}
              onClick={() => handleTabChange("office")}
            >
              <a>Office</a>
            </li>
            <li
              className={tabIndex === "saloon" ? "active" : 0}
              onClick={() => handleTabChange("saloon")}
            >
              <a>Saloon</a>
            </li>
            <li
              className={tabIndex === "restaurant" ? "active" : 0}
              onClick={() => handleTabChange("restaurant")}
            >
              <a>Restaurant</a>
            </li>
          </ul>
        </div>
        <div
          style={{ display: `${tabIndex === "residence" ? "block" : "none"}` }}
          className="gallery-grids-row tab-pane fade in active"
        >
          <div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("home1")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/home/ashok_vora/1.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Mr.Ashok Vora's Home</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("home2")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/home/suresh_sorathiya/1.jpg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Mr.Suresh Sorathiya's Home</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("home3")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/home/madhukant_shah/1.jpeg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Mr.Madhukant Shah's Home</p>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{ display: `${subTabIndex === "home1" ? "block" : "none"}` }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/1.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/1.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/2.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/2.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/3.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/3.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/4.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/4.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/5.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/5.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/6.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/6.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/7.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/7.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/8.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/8.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/9.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/9.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/10.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/10.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/11.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/11.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/12.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/12.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/18.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/18.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/13.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/13.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/14.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/14.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/15.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/15.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/16.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/16.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/ashok_vora/17.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/ashok_vora/17.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ display: `${subTabIndex === "home2" ? "block" : "none"}` }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/1.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/1.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/2.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/2.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/3.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/3.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/4.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/4.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/5.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/5.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/6.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/6.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/7.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/7.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/8.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/8.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/9.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/9.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/10.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/10.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/11.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/11.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/12.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/12.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/13.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/13.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/14.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/14.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/15.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/15.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/16.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/16.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/17.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/17.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/suresh_sorathiya/18.jpg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/suresh_sorathiya/18.jpg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ display: `${subTabIndex === "home3" ? "block" : "none"}` }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/1.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/1.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/2.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/2.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/3.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/3.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/4.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/4.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/5.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/5.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/6.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/6.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/7.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/7.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/8.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/8.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/9.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/9.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/10.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/10.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/11.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/11.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/12.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/12.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/13.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/13.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/14.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/14.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/15.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/15.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/16.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/16.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/17.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/17.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/18.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/18.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/19.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/19.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/20.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/20.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/21.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/21.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/22.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/22.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/23.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/23.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/24.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/24.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/25.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/25.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/26.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/26.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/27.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/27.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/28.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/28.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/29.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/29.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/home/madhukant_shah/30.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/home/madhukant_shah/30.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>{" "}
        <div
          style={{ display: `${tabIndex === "office" ? "block" : "none"}` }}
          className="gallery-grids-row tab-pane fade in active"
        >
          {" "}<div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("office1")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/office/virali_mehta/1.jpeg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Virali Mehta's Office</p>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              display: `${subTabIndex === "office1" ? "block" : "none"}`
            }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/office/virali_mehta/1.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/office/virali_mehta/1.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/office/virali_mehta/2.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/office/virali_mehta/2.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/office/virali_mehta/3.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/office/virali_mehta/3.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/office/virali_mehta/4.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/office/virali_mehta/4.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/office/virali_mehta/5.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/office/virali_mehta/5.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div
          style={{ display: `${tabIndex === "saloon" ? "block" : "none"}` }}
          className="gallery-grids-row tab-pane fade in active"
        >
          <div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("saloon1")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/saloon/rakhi_shah/1.jpeg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Rakhi Shah's Saloon</p>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              display: `${subTabIndex === "saloon1" ? "block" : "none"}`
            }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/1.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/1.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/2.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/2.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/4.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/4.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/3.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/3.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/5.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/5.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/saloon/rakhi_shah/6.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/saloon/rakhi_shah/6.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: `${tabIndex === "restaurant" ? "block" : "none"}` }}
          className="gallery-grids-row tab-pane fade in active"
        >
          <div
            className="col-sm-4 col-xs-4 gallery-grid"
            style={{ display: `${subTabIndex === "" ? "block" : "none"}` }}
            onClick={() => handleSubTabChange("restaurant1")}
          >
            <div className="wpf-demo-4">
              <a className="item-hover">
                <img
                  src="images/restaurant/tulsi_restaurant/1.jpeg"
                  className="img-responsive"
                  alt=""
                />
                <div className="view-caption">
                  <p>Tulsi Restaurant</p>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              display: `${subTabIndex === "restaurant1" ? "block" : "none"}`
            }}
          >
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/1.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/1.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/2.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/2.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/3.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/3.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/4.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/4.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/5.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/5.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/16.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/16.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/6.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/6.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/7.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/7.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/8.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/8.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/9.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/9.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/10.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/10.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/17.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/17.jpeg"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 gallery-grid">
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/11.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/11.jpeg"
                    className="img-responsive"
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/12.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/12.jpeg"
                    className="img-responsive"
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/13.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/13.jpeg"
                    className="img-responsive"
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/14.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/14.jpeg"
                    className="img-responsive"
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
              <div className="wpf-demo-4">
                <a
                  href="images/restaurant/tulsi_restaurant/15.jpeg"
                  className="jzBoxLink item-hover"
                >
                  <img
                    src="images/restaurant/tulsi_restaurant/15.jpeg"
                    className="img-responsive"
                  />
                  <div className="view-caption">
                    <p>View Full</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
