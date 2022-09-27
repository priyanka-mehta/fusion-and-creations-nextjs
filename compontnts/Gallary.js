import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    src: "images/home/ashok_vora/1.jpg",
    original: "images/home/ashok_vora/1.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  }
];

export default function GallaryComponent() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <div className="agileits-title">
          <h3>Our Gallery</h3>
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#home-gallary">Residence</a>
            </li>
            <li>
              <a href="#office-gallary">Office</a>
            </li>
            <li>
              <a href="#saloon-gallary">Saloon</a>
            </li>
            <li>
              <a href="#restaurant-gallary">Restaurant</a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <img src="images/coming_soon.jpg" className="img-responsive" alt="" />
          <Gallery
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
            />}
        </div>
      </div>
    </div>
  );
}
