import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import InfoContent from "../components/InfoContent";
import BusinessBox from "../components/BisinessBox";
import { newsData } from "../data/newsData";
import CustomerStories from "../components/CustomerStories";

import "swiper/css";
import "swiper/css/pagination";

import testReport from "../images/testReport-icon.png";
import monitoring from "../images/monitoring-icon.png";
import testforte from "../images/testforte-icon.png";
import bigData from "../images/bigData-icon.png";
import esgManagement from "../images/esg-management.png";
import esgEco from "../images/esg-eco.png";
import esgSafety from "../images/esg-safety.png";

import onycomVideo from "../video/onycom_video.gif";

const mainMenu = [
  { title: "시험성적서", btnTxt: "발급받기", icon: testReport },
  { title: "웹/앱 성능 모니터링", btnTxt: "체험하기", icon: monitoring },
  { title: "웹/앱 테스트 자동화", btnTxt: "체험하기", icon: testforte },
  { title: "빅데이터", btnTxt: "분석받기", icon: bigData },
];

const NewsBox = ({ att, title, text, btnName }) => {
  return (
    <div className={`news-box ${btnName}`}>
      <div className="img-or-case">{att}</div>
      <div className="text-box">
        <h3>{title}</h3>
        {text.map((txt, index) => (
          <p className="text" key={index}>
            {txt}
          </p>
        ))}
        <button className="btn">{btnName} →</button>
      </div>
    </div>
  );
};

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
            <SwiperSlide>
              <div className="slide-bg"></div>
              <div className="slide-txt">
                <h4>테스트부터 토탈 인티그레이션까지</h4>
                <p>
                  고객 맞춤형 QA 컨설팅과 최적화된 시스템 구축으로 안정적인 성장
                  파트너가 되어드립니다.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg"></div>
              <div className="slide-txt">
                <h4>글로벌 시장을 여는 통로</h4>
                <p>
                  ICT 솔루션 수출·현지화·유통까지. 현지 시장의 성공 파트너가
                  되어드립니다.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="main-menu">
            {mainMenu.map((menu, index) => (
              <Link to={menu.url} key={index} className="menu-box">
                <div className="title-box">
                  <figure>
                    <img src={menu.icon} alt={menu.title} />
                  </figure>
                  <p>{menu.title}</p>
                </div>
                <button type="button">{menu.btnTxt}</button>
              </Link>
            ))}
          </div>
        </section>

        <section className="business">
          <div className="inner">
            <h2>What We Do</h2>
            <div className="content-wrap">
              <BusinessBox />
            </div>
          </div>
        </section>

        <section className="video-box">
          <img src={onycomVideo} alt="onycom video" />
        </section>

        <InfoContent />

        <section className="news">
          <div className="inner">
            <h2>
              <span>News & Events</span>
              Gain insights to fuel your business
            </h2>
            <div className="contents">
              <div className="first-box">
                <h3>
                  'KOLAS' 데이터 품질 분야 국제 공인시험기관 자격 인정 획득
                </h3>
                <p>ISO/IEC25024: Measurement of data quality</p>
                <button>Read the news →</button>
              </div>

              {newsData.map((news, index) => (
                <NewsBox
                  key={index}
                  title={news.title}
                  text={news.text}
                  btnName={news.btnName}
                  att={news.att}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="esg">
          <div className="inner">
            <h2>Environmental, Social & Governance</h2>
            <div className="contents">
              <div className="text-box">
                <h3>인간, 환경, 사회의 조화를 통한 미래 사회로의 공헌</h3>
                <p>
                  1. 구성원은 높은 윤리관과 준법정신을 바탕으로 업무수행에
                  있어서 윤리경영을 실천한다.
                </p>
                <p>
                  2. 구성원은 회사의 재산 및 정보자산을 본인의 사적인 목적을
                  위해서 사용하지 아니하며, 본인과 회사의 이해가 상충되는 없무
                  수행 시 회사 이익을 우선한다.
                </p>
                <p>
                  3. 구성원은 이해관계자로부터의 금품, 향응, 개인적 편의를
                  수수하지 않는다.
                </p>
                <p>
                  4. 구성원은 준법정신을 바탕으로 모든 상거래에 있어 제반 법규를
                  준수한다.
                </p>
                <p>
                  5. 회사는 구성원 개개인의 기본권을 존중하며, 임직원 각자를
                  독립되고 존업함 인격체로서 대한다.
                </p>
                <p>
                  6. 회사는 실력 및 성과에 따른 공정한 평가/보상체계를 통해
                  근로의욕을 고취한다.
                </p>
              </div>
              <div className="img-box">
                <figure>
                  <img src={esgManagement} alt="ESG 경영 방침" />
                </figure>
                <figure>
                  <img src={esgEco} alt="환경경영 방침" />
                </figure>
                <figure>
                  <img src={esgSafety} alt="안전보건경영 방침" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <CustomerStories />
      </div>
    </div>
  );
}

export default Main;
