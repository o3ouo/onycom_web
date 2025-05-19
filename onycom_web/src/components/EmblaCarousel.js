import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "../components/EmblaCarouselThumbsButton";
import Autoplay from "embla-carousel-autoplay";

import "../css/embla.css";

import certification1 from "../images/certification1.svg";
import certification2 from "../images/certification2.svg";
import certification3 from "../images/certification3.svg";
import certification4 from "../images/certification4.svg";
import certification5 from "../images/certification5.svg";

const imageUrls = [
  certification1,
  certification2,
  certification3,
  certification4,
  certification5,
];

const EmblaCarousel = () => {
  const options = {};
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {imageUrls.map((url, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img">
                <img src={url} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {imageUrls.map((url, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                url={url}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
