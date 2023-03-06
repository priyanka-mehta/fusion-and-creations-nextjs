import React, { useState } from "react";
import {
  gallaryMenu,
  office1Images,
  office2Images,
  residence1Images,
  residence2Images,
  residence3Images,
  restaurant1Images,
  saloon1Images
} from "../public/helper";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

export default function Gallary1() {
  const [tabIndex, setTabIndex] = useState("residence");
  const [subTabIndex, setSubTabIndex] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [activeViewFull, setActiveViewFull] = useState("");

  const handleTabChange = tab => {
    setTabIndex(tab);
    setSubTabIndex("");
  };

  const handleSubTabChange = subTab => setSubTabIndex(subTab);

  const handleViewFull = (key, imgArray) => {
    setIsOpen(true);
    setStartIndex(key);
    setActiveViewFull(imgArray);
  };

  let tabDetail = gallaryMenu.find(i => i.tabName === tabIndex);

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <div className="agileits-title">
          <h3>Our Gallery</h3>
          {isOpen &&
            <div
              className="modal show"
              tabIndex="-1"
              aria-labelledby="exampleModalLiveLabel"
              style={{ display: "block" }}
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="fa fa-close"
                      aria-label="Close"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <div className="modal-body">
                    <ImageGallery
                      items={activeViewFull}
                      useBrowserFullscreen={false}
                      startIndex={startIndex}
                    />
                  </div>
                </div>
              </div>
            </div>}
          <ul className="nav nav-tabs">
            {gallaryMenu.map((i, key) => {
              return (
                <li
                  className={tabIndex === i.tabName ? "active" : 0}
                  onClick={() => handleTabChange(i.tabName)}
                >
                  <a>
                    {i.tabName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`gallery-grids-row tab-pane fade in active ${tabIndex ===
          "residence"
            ? "d-block"
            : "d-none"}`}
        >
          {tabDetail.subTab.map((i, key) => {
            return (
              <div
                className={`col-sm-4 col-xs-4 gallery-grid ${subTabIndex === ""
                  ? "d-block"
                  : "d-none"}`}
                onClick={() => handleSubTabChange(i.subTabName)}
              >
                <div className="wpf-demo-4">
                  <a className="item-hover">
                    <img src={i.src} className="img-responsive" alt="" />
                    <div className="view-caption">
                      <p>
                        {i.caption}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: `${subTabIndex === "residence1" ? "block" : "none"}`
            }}
          >
            {residence1Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p
                          onClick={() => handleViewFull(key, residence1Images)}
                        >
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: `${subTabIndex === "residence2" ? "block" : "none"}`
            }}
          >
            {residence2Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p
                          onClick={() => handleViewFull(key, residence2Images)}
                        >
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: `${subTabIndex === "residence3" ? "block" : "none"}`
            }}
          >
            {residence3Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p
                          onClick={() => handleViewFull(key, residence3Images)}
                        >
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="clearfix"> </div>
        </div>{" "}
        <div
          className={`gallery-grids-row tab-pane fade in active ${tabIndex ===
          "office"
            ? "d-block"
            : "d-none"}`}
        >
          {tabDetail.subTab.map((i, key) => {
            return (
              <div
                className={`col-sm-4 col-xs-4 gallery-grid ${subTabIndex === ""
                  ? "d-block"
                  : "d-none"}`}
                onClick={() => handleSubTabChange(i.subTabName)}
              >
                <div className="wpf-demo-4">
                  <a className="item-hover">
                    <img src={i.src} className="img-responsive" alt="" />
                    <div className="view-caption">
                      <p>
                        {i.caption}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: `${subTabIndex === "office1" ? "block" : "none"}`
            }}
          >
            {office1Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p onClick={() => handleViewFull(key, office1Images)}>
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: `${subTabIndex === "office2" ? "block" : "none"}`
            }}
          >
            {office2Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p
                          onClick={() => handleViewFull(key, office2Images)}
                        >
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="clearfix"> </div>
        </div>
        <div
          className={`gallery-grids-row tab-pane fade in active ${tabIndex ===
          "saloon"
            ? "d-block"
            : "d-none"}`}
        >
          {tabDetail.subTab.map((i, key) => {
            return (
              <div
                className={`col-sm-4 col-xs-4 gallery-grid ${subTabIndex === ""
                  ? "d-block"
                  : "d-none"}`}
                onClick={() => handleSubTabChange(i.subTabName)}
              >
                <div className="wpf-demo-4">
                  <a className="item-hover">
                    <img src={i.src} className="img-responsive" alt="" />
                    <div className="view-caption">
                      <p>
                        {i.caption}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: `${subTabIndex === "saloon1" ? "block" : "none"}`
            }}
          >
            {saloon1Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p onClick={() => handleViewFull(key, saloon1Images)}>
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`gallery-grids-row tab-pane fade in active ${tabIndex ===
          "restaurant"
            ? "d-block"
            : "d-none"}`}
        >
          {tabDetail.subTab.map((i, key) => {
            return (
              <div
                className={`col-sm-4 col-xs-4 gallery-grid ${subTabIndex === ""
                  ? "d-block"
                  : "d-none"}`}
                onClick={() => handleSubTabChange(i.subTabName)}
              >
                <div className="wpf-demo-4">
                  <a className="item-hover">
                    <img src={i.src} className="img-responsive" alt="" />
                    <div className="view-caption">
                      <p>
                        {i.caption}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: `${subTabIndex === "restaurant1" ? "block" : "none"}`
            }}
          >
            {restaurant1Images.map((i, key) => {
              return (
                <div className="col-sm-4 col-xs-4 gallery-grid" key={i.index}>
                  <div className="wpf-demo-4">
                    <a className="jzBoxLink item-hover">
                      <img src={i.original} className="img-responsive" alt="" />
                      <div className="view-caption">
                        <p
                          onClick={() => handleViewFull(key, restaurant1Images)}
                        >
                          View Full
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
