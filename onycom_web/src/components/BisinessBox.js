import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const card = [
  {
    title: "소프트웨어 품질 보증",
    span: "고객 맞춤형 품질 검증 컨설팅, 아웃소싱 제공",
    txt: [
      "TMMi 프레임워크 및 국제 표준 기반",
      "KDLAS 국제 공인시험성적서 발행",
    ],
    keywords: ["SQA", "성능 검증", "품질 검증", "Test"],
  },
  {
    title: "스마트 솔루션",
    span: "기업 생산성을 높여주는 스마트 솔루션 개발",
    txt: [
      "원격 모바일 테스트 자동화 솔루션 'TestFort'",
      "프론트엔드 성능 매니지먼트 솔루션 IMQA",
    ],
    keywords: [
      "통합 모니터링 솔루션",
      "IMQA",
      "TestFort",
      "모바일 테스트 자동화 솔류션",
    ],
  },
  {
    title: "빅 데이터",
    span: "빅데이터 분석 서비스 및 기술 개발",
    txt: [
      "인공지능 기반 빅데이터 분석 솔루션 'Ankus'",
      "Library, Analyzer, Optimizer, 분석 컨설팅",
    ],
    keywords: ["맞춤 분석 컨설팅", "분석 서비스 개발", "기술 개발", "인공지능"],
  },
];
const BusinessBox = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {card.map((item, index) => (
        <div
          className="content-inner"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          <div className="content-box" key={index}>
            <div className="text-box">
              <h3>{item.title}</h3>
              <span>{item.span}</span>
              <p>{item.txt[0]}</p>
              <p>{item.txt[1]}</p>
              <p>{item.txt[2] ? item.txt[2] : null}</p>
            </div>
            <div className="keywords-box">
              {item.keywords?.map((k, index) => (
                <p key={index}>{k}</p>
              ))}
            </div>
          </div>
          <div className="top"></div>
        </div>
      ))}
    </>
  );
};

export default BusinessBox;
