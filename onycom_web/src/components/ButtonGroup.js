// ButtonGroup.js
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

// AnimatedButton 컴포넌트
const AnimatedButton = React.forwardRef(({ label, onActivate }, ref) => {
  const animatedRef = useRef(null);

  // 외부에서 animatedRef에 접근 가능하게 전달
  React.useImperativeHandle(ref, () => ({
    animate: () => onActivate(animatedRef),
    animatedRef: animatedRef,
  }));

  const handleClick = () => {
    onActivate(animatedRef);
  };

  return (
    <div style={{ display: "inline-block", margin: "5px" }}>
      <svg
        width="140"
        height="60"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <rect
          x="5"
          y="5"
          width="130"
          height="40"
          rx="5"
          ry="5"
          stroke="#ccc"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          ref={animatedRef}
          x="5"
          y="5"
          width="130"
          height="40"
          rx="5"
          ry="5"
          stroke="#0077ff"
          strokeWidth="2"
          fill="none"
          opacity="0"
        />
        <text
          x="70"
          y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fill="#F4F6FA"
        >
          {label}
        </text>
      </svg>
    </div>
  );
});

// ButtonGroup 컴포넌트
const ButtonGroup = ({ setSelectedCategory }) => {
  const buttonRefs = useRef([]);
  const labels = [
    "Manufacturing",
    "Telecom",
    "Platforms",
    "Finance",
    "Security",
    "Gaming",
  ];

  // 자동 애니메이션 순환
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const category = labels[index];
      if (buttonRefs.current[index]) {
        buttonRefs.current[index].animate();
      }
      setSelectedCategory(category); // 자동 순회 시에도 선택 반영
      index = (index + 1) % labels.length;
    }, 6000); // 5초 애니메이션 + 여유 1초

    return () => clearInterval(interval);
  }, [setSelectedCategory]);

  // 모든 버튼 라인 초기화 후, 새로운 버튼 라인 애니메이션 실행
  const handleActivate = (newRef) => {
    buttonRefs.current.forEach((btn) => {
      if (btn?.animatedRef?.current) {
        const el = btn.animatedRef.current;
        const len = el.getTotalLength();
        gsap.killTweensOf(el);
        gsap.set(el, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 0,
        });
      }
    });

    const path = newRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {labels.map((label, index) => (
        <AnimatedButton
          key={index}
          label={label}
          onActivate={(ref) => {
            handleActivate(ref);
            setSelectedCategory(label); // 클릭 시 카테고리 변경
          }}
          ref={(el) => (buttonRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
