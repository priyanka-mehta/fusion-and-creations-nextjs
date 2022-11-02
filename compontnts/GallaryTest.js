import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const residenceImages = [
  {
    src: "images/home/ashok_vora/1.jpg",
    caption: "Mr.Ashok Vora's Home"
  },
  {
    src: "images/home/suresh_sorathiya/1.jpg",
    caption: "Mr.Suresh Sorathiya's Home"
  },
  {
    src: "images/home/madhukant_shah/1.jpeg",
    caption: "Mr.Madhukant Shah's Home"
  }
];

const officeImages = [
  {
    src: "images/office/virali_mehta/1.jpeg",
    caption: "Virali Mehta's Office"
  }
];

const saloonImages = [
  {
    src: "images/saloon/rakhi_shah/1.jpeg",
    caption: "Rakhi Shah's Saloon"
  }
];

const restaurantImages = [
  {
    src: "images/restaurant/tulsi_restaurant/1.jpeg",
    caption: "Tulsi Restaurant"
  }
];

export default function GallaryComponent() {
  const [tabIndex, setTabIndex] = useState("residence");
  const [flag, setFlag] = useState(false);

  const handleTabChange = tab => setTabIndex(tab);

  const handleClickDetail = () => {
    setFlag(true);
  };

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
        <div className="tab-content">
          <div class="gallery-grids-row tab-pane fade in active">
            {tabIndex === "residence" &&
              residenceImages.map((i, key) => {
                return (
                  <div class="col-sm-4 col-xs-4 gallery-grid" key={key}>
                    <div class="wpf-demo-4">
                      {!flag
                        ? <a class="item-hover">
                            <img
                              src={i.src}
                              class="img-responsive"
                              alt=""
                              onClick={handleClickDetail}
                            />
                            <div class="view-caption">
                              <p>
                                {i.caption}
                              </p>
                            </div>
                          </a>
                        : <a
                            // href={i.src}
                            class="jzBoxLink item-hover"
                          >
                            {/* <img
                              src={i.src}
                              class="img-responsive"
                              alt=""
                            /> */}
                            <div class="view-caption">
                              <p>View Full</p>
                            </div>
                          </a>}
                    </div>
                  </div>
                );
              })}
            {tabIndex === "office" &&
              officeImages.map((i, key) => {
                return (
                  <div class="col-sm-4 col-xs-4 gallery-grid" key={key}>
                    <div class="wpf-demo-4">
                      <a class="item-hover">
                        <img src={i.src} class="img-responsive" alt="" />
                        <div class="view-caption">
                          <p>
                            {i.caption}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            {tabIndex === "saloon" &&
              saloonImages.map((i, key) => {
                return (
                  <div class="col-sm-4 col-xs-4 gallery-grid" key={key}>
                    <div class="wpf-demo-4">
                      <a class="item-hover">
                        <img src={i.src} class="img-responsive" alt="" />
                        <div class="view-caption">
                          <p>
                            {i.caption}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            {tabIndex === "restaurant" &&
              restaurantImages.map((i, key) => {
                return (
                  <div class="col-sm-4 col-xs-4 gallery-grid" key={key}>
                    <div class="wpf-demo-4">
                      <a class="item-hover">
                        <img src={i.src} class="img-responsive" alt="" />
                        <div class="view-caption">
                          <p>
                            {i.caption}
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

{
  /* <img src="images/coming_soon.jpg" className="img-responsive" alt="" /> */
}

// const [index, setIndex] = useState(-1);

// const currentImage = images[index];
// const nextIndex = (index + 1) % images.length;
// const nextImage = images[nextIndex] || currentImage;
// const prevIndex = (index + images.length - 1) % images.length;
// const prevImage = images[prevIndex] || currentImage;

// const handleClick = index => setIndex(index);
// const handleClose = () => setIndex(-1);
// const handleMovePrev = () => setIndex(prevIndex);
// const handleMoveNext = () => setIndex(nextIndex);

{
  /* <Gallery
images={images}
  onClick={handleClick}
  enableImageSelection={false}
/>
{!!currentImage &&
  <Lightbox
    mainSrc={currentImage.original}
    imageTitle={currentImage.caption}
    mainSrcThumbnail={currentImage.src}
    nextSrc={nextImage.original}
    nextSrcThumbnail={nextImage.src}
    prevSrc={prevImage.original}
    prevSrcThumbnail={prevImage.src}
    onCloseRequest={handleClose}
    onMovePrevRequest={handleMovePrev}
    onMoveNextRequest={handleMoveNext}
  />} */
}
