import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronIcon, CloseIcon } from "./Icons";
import { srcSetFor } from "../content/site";

// Full-screen photo gallery for one project.
// Keys: Esc closes, arrow keys move. On touch screens, swipe left or right.
export default function Lightbox({ title, category, images, start = 0, onClose }) {
  const [index, setIndex] = useState(start);
  const total = images.length;
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const thumbsRef = useRef(null);
  const touchX = useRef(null);

  const go = useCallback((step) => setIndex((v) => (v + step + total) % total), [total]);

  // Lock page scroll and put focus on the close button for as long as the gallery is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "Tab" && dialogRef.current) {
        // Keep keyboard focus inside the gallery.
        const items = dialogRef.current.querySelectorAll("button");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, go]);

  // Keep the active thumbnail in view, and warm up the neighbouring photos.
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip && strip.children[index];
    if (thumb && thumb.scrollIntoView) {
      thumb.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    [1, -1].forEach((step) => {
      const img = new Image();
      img.src = images[(index + step + total) % total].src;
    });
  }, [index, images, total]);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${title} photo gallery`} ref={dialogRef}>
      <div className="lb__top">
        <div>
          <span className="lb__cat">{category}</span>
          <h3 className="lb__title">{title}</h3>
        </div>
        <div className="lb__right">
          <span className="lb__count" aria-live="polite">
            {index + 1} / {total}
          </span>
          <button type="button" className="lb__btn" ref={closeRef} onClick={onClose} aria-label="Close gallery">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div
        className="lb__stage"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={index}
          className="lb__img"
          src={images[index].src}
          srcSet={srcSetFor(images[index].src)}
          sizes="100vw"
          alt={`${title}, photo ${index + 1} of ${total}`}
        />
        <button type="button" className="lb__nav lb__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
          <ChevronIcon dir="left" />
        </button>
        <button type="button" className="lb__nav lb__nav--next" onClick={() => go(1)} aria-label="Next photo">
          <ChevronIcon dir="right" />
        </button>
      </div>

      <div className="lb__thumbs" ref={thumbsRef}>
        {images.map((image, i) => (
          <button
            type="button"
            key={image.thumb}
            className={`lb__thumb${i === index ? " is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          >
            <img src={image.thumb} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
