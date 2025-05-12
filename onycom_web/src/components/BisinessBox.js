import React from "react";

const card = [
  {
    title: "Software Quality Assurance",
    span: "고객 맞춤형 품질 검증 컨설팅, 아웃소싱 제공",
    txt: [
      "TMMi 프레임워크 및 국제 표준 기반",
      "단말기, 앱, 시스템, 음성인식 AI, loT, 통신사 규격 검증",
      "KDLAS 국제 공인시험성적서 발행",
    ],
    keywords: ["SQA", "성능 검증", "품질 검증", "Test"],
  },
  {
    title: "Smart Solution",
    span: "기업 생산성을 높여주는 스마트 솔루션 개발/공급",
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
    title: "Big Data",
    span: "빅데이터 분석 서비스 및 기술 개발",
    txt: [
      "인공지능 기반 빅데이터 분석 솔루션 'Ankus'",
      "Library, Analyzer, Optimizer, 분석 컨설팅",
      "KDLAS 국제 공인시험성적서 발행",
    ],
    keywords: ["맞춤 분석 컨설팅", "분석 서비스 개발", "기술 개발", "인공지능"],
  },
];
const BusinessBox = () => {
  return (
    <>
      {card.map((item, index) => (
        <div className="content-box" key={index}>
          <div className="text-box">
            <h3>{item.title}</h3>
            <span>{item.span}</span>
            <p>{item.txt[0]}</p>
            <p>{item.txt[1]}</p>
            <p>{item.txt[2] ? item.txt[2] : null}</p>
          </div>
          <hr />
          <div className="keywords-box">
            {item.keywords?.map((k, index) => (
              <p key={index}>{k}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default BusinessBox;
