import React from "react";
import { MoveRight } from "lucide-react";
import { newsData } from "../data/newsData";

import bgCircle from "../images/bg-circle.svg";

const NewsBox = ({ att, title, text, btnName, img }) => {
  return (
    <div className={`news-box ${att}`}>
      <div className="img-or-case">
        {img ? <img src={img} alt={title} /> : att}
      </div>
      <div className="text-box">
        <h3>{title}</h3>
        <div className="bottom-box">
          {text.map((txt, index) => (
            <p className="text" key={index}>
              {txt}
            </p>
          ))}
          <div className="btn-box">
            <button className="btn">{btnName} </button>
            <MoveRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="news">
      <div className="bg-circle">
        <img src={bgCircle} alt="bg circle" />
      </div>
      <div className="inner">
        <h2>
          <span>News & Events</span>
          비즈니스에 활력을 불어넣는 통찰력을 얻으세요
        </h2>
        <div className="contents">
          <div className="first-box">
            <h3>'KOLAS' 데이터 품질 분야 국제 공인시험기관 자격 인정 획득</h3>
            <p>데이터 정확성, 완전성, 일관성 등 15개 측정 표준</p>
            <div className="btn-box">
              <button>이벤트로 이동하기</button>
              <MoveRight size={24} />
            </div>
          </div>
          <div className="card-wrap">
            {newsData.map((news, index) => (
              <NewsBox
                key={index}
                title={news.title}
                text={news.text}
                btnName={news.btnName}
                att={news.att}
                img={news.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
