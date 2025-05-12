import React from "react";
import { infoContentsData } from "../data/infoContentsData";

const InfoContent = () => {
  return (
    <>
      {infoContentsData.map((item, index) => (
        <section className="info-contents" key={index}>
          <div className="info-inner">
            <div className="content-box">
              <div className="text-box">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <span>{item.span}</span>
                </div>
                <button className="learn-more">Learn more</button>
              </div>
              <div
                className="img-box"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default InfoContent;
