import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

import logo from "../images/onycom-logo.svg";
import certification1 from "../images/certification1.svg";
import certification2 from "../images/certification2.svg";
import certification3 from "../images/certification3.svg";
import certification4 from "../images/certification4.svg";
import certification5 from "../images/certification5.svg";

export default function CertifiCarousel() {
  return (
    <div className="contents">
      <div className="logo-box">
        <img src={logo} alt="onycom logo" className="w-28 h-28 z-10" />
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={certification1} alt="ICT기금사업 우수성과 창출기업" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certification2} alt="인공지능 프레임워크/플랫폼 최우수상" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certification3} alt="대한민국 IT 브랜드 대상" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certification4} alt="웹어워드 코리아" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certification5} alt="글로벌 SaaS 육성 프로젝트 사업 대상" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
