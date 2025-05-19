import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { infoContentsData } from "../data/infoContentsData";

const InfoContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {infoContentsData.map((item, index) => (
        <section
          className="info-contents"
          key={index}
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <div className="content-box">
            <div className="text-box">
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <span>{item.span}</span>
              </div>
              <button className="learn-more">자세히 알아보기</button>
            </div>
            <div
              className="img-box"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          </div>
        </section>
      ))}
    </>
  );
};

export default InfoContent;
