import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { partnerData } from "../data/partnerData";

const categories = ["제조", "통신", "플랫폼", "금융", "보안", "게임"];

const PartnerCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("제조");
  const intervalRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const SPEED = 100; // px/sec
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // 슬라이드 너비 측정
  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.scrollWidth / 2); // 복제 전 기준
    }
  }, [activeCategory]);

  // 카테고리 자동 순회
  useEffect(() => {
    startAutoCycle();
    return () => clearInterval(intervalRef.current); // 언마운트 시 정리
  }, []);

  // useWindowSize로 현재 화면 크기 판단 후, 보여줄 개수(visibleCount) 결정
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoCycle = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = categories.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 8000);
  };

  const handleCategoryClick = (category) => {
    clearInterval(intervalRef.current);
    setActiveCategory(category);
    startAutoCycle(); // 클릭 후 다시 시작
  };

  // 선택된 카테고리가 포함된 파트너만 필터링
  const filteredData = partnerData.filter((item) =>
    item.category.includes(activeCategory)
  );

  // 롤링이 필요한지 판단
  const isScrollable = filteredData.length > visibleCount;

  // 보여줄 파트너 리스트
  const loopedData = isScrollable
    ? [...filteredData, ...filteredData] // 무한 루프처럼 복제
    : filteredData;

  return (
    <div className="customer-stories">
      <div className="inner">
        <h2>
          <span>Customer Stories</span>
          비즈니스 리더들은 Onycom을 신뢰합니다
        </h2>
        {/* category button */}
        <div className="btn-box">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`btn ${cat === activeCategory ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* content rolling */}
        <div className="partner-view">
          {isScrollable ? (
            <motion.div
              className="partner-wrap"
              ref={slideRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              animate={isScrollable ? { x: ["0%", "-50%"] } : {}}
              transition={
                isScrollable
                  ? {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    }
                  : {}
              }
            >
              {loopedData.map((partner, i) => (
                <div className="partner-box" key={i}>
                  <div className="partner-inner">
                    <figure className="logo-round">
                      <img src={partner.img} alt={partner.title} />
                    </figure>

                    <div className="text-box">
                      <h3>{partner.title}</h3>
                      <ul>
                        {partner.text.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="partner-wrap static">
              {filteredData.map((partner, i) => (
                <div className="partner-box" key={`${partner.title}-${i}`}>
                  <div className="partner-inner">
                    <figure className="logo-round">
                      <img src={partner.img} alt={partner.title} />
                    </figure>

                    <div className="text-box">
                      <h3>{partner.title}</h3>
                      <ul>
                        {partner.text.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
