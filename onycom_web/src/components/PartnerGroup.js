import React from "react";

const PartnerGroup = ({ img, title, text }) => {
  return (
    <div className="partner-box">
      <div className="partner-inner">
        <figure className="logo-round">
          <img src={img || "/path/to/default/image.png"} alt="partner-logo" />
        </figure>

        <div className="text-box">
          <h3>{title}</h3>
          {text && text.length > 0 ? (
            text.map((txt, index) => <p key={index}>{txt}</p>)
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerGroup;
