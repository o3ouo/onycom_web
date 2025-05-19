import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import esgTxt from "../images/esg.svg";
import esgManagement from "../images/esg-management.png";
import esgEco from "../images/esg-eco.png";
import esgSafety from "../images/esg-safety.png";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Autoplay } from "swiper/modules";

const Esg = () => {
  return (
    <section className="esg">
      <div className="inner">
        <h2>Environmental, Social & Governance</h2>
        <div className="contents">
          <figure className="text-box">
            <img src={esgTxt} alt="esg" />
          </figure>
          <div className="img-box">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              modules={[EffectFlip, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={esgManagement} alt="esg-management" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={esgEco} alt="esg-eco" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={esgSafety} alt="esg-safety" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Esg;
