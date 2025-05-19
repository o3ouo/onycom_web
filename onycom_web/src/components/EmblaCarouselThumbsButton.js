import React from "react";

export const Thumb = (props) => {
  const { selected, url, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--elected" : ""
      )}
    >
      <img
        src={url}
        alt={`Slide_btn_img ${index + 1}`}
        onClick={onClick}
        className="embla-thumbs__slide__img"
      />
    </div>
  );
};
