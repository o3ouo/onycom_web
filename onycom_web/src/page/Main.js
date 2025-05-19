import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import MainMenu from "../components/MainMenu";
import InfoContent from "../components/InfoContent";
import BusinessBox from "../components/BisinessBox";
import EmblaCarousel from "../components/EmblaCarousel";
import News from "../components/News";
import Esg from "../components/Esg";
import PartnerCarousel from "../components/PartnerCarousel";
import "swiper/css";
import "swiper/css/pagination";

function Main() {
  return (
    <div className="main-wrap">
      <div className="main-container">
        <section className="main-section">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-bg"></div>
              <div className="slide-txt">
                <h4>스마트 솔루션으로 생산성을 혁신하다</h4>
                <p>
                  모바일·웹·엔터프라이즈 테스트부터 프로덕트 성능 관리까지,
                  완벽한 자동화로 비즈니스를 가속화합니다.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg"></div>
              <div className="slide-txt">
                <h4>빅데이터로 비즈니스를 재정의하다</h4>
                <p>
                  Data·Analyzer·Optimizer를 아우르는 종합 컨설팅으로 당신의
                  의사결정을 혁신합니다.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <MainMenu />
        </section>

        <section className="business">
          <div className="inner">
            <h2>What We Do</h2>
            <div className="content-wrap">
              <BusinessBox />
            </div>
          </div>
        </section>

        <div className="info-wrap">
          <InfoContent />
        </div>

        <section className="certification">
          <div className="inner">
            <h2>Patent & Certification</h2>
            <div className="contents-box">
              <div className="text-box">
                <h3>최고의 경험을 제공하기 위해 최선을 다하고 있습니다</h3>
                <p>
                  혁신적인 ICT 융합 솔루션 및 기술력을 바탕으로 국내외 다수의
                  특허 및 기업 인증을 보유하고 있습니다.
                </p>
                <button type="button">자세히 알아보기</button>
              </div>
              {/* <CertifiCarousel /> */}
              <EmblaCarousel />
            </div>
          </div>
        </section>

        <News />

        <Esg />

        <PartnerCarousel />
      </div>
    </div>
  );
}

export default Main;
