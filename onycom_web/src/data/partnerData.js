import samsungElectronics from "../images/p-samsung.svg";
import skTelecom from "../images/p-sktelecom.svg";
import ktDs from "../images/p-kt-ds.svg";
import aptner from "../images/p-aptner.svg";
import doosan from "../images/p-doosan.svg";

export const partnerData = [
  {
    title: "삼성전자",
    text: ["무선단말 기능 자동화", "해외 통신 테스트"],
    img: samsungElectronics,
    category: ["제조", "플랫폼"],
  },
  {
    title: "SK telecom",
    text: ["에이닷 인공지능", "NUGU Aoto 성능 검증"],
    img: skTelecom,
    category: ["통신", "플랫폼"],
  },
  {
    title: "KT ds",
    text: ["웹/앱 서비스 성능", "단말 규격 검증"],
    img: ktDs,
    category: ["통신", "플랫폼"],
  },
  {
    title: "아파트너",
    text: ["아파트 관리 솔루션", "입주 예약, 사전 점검"],
    img: aptner,
    category: ["제조", "통신", "플랫폼", "금융"],
  },
  {
    title: "두산 중공업",
    text: ["MMIS", "안전/비안전 계통 테스트"],
    img: doosan,
    category: ["플랫폼", "금융", "보안", "게임"],
  },
];
