import React from "react";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import { MonitorCog } from "lucide-react";
import { Cog } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { MoveRight } from "lucide-react";

const mainMenu = [
  {
    title: "시험성적서",
    btnTxt: "발급받기",
    icon: <ClipboardList size={48} />,
    name: "icon",
  },
  {
    title: "웹/앱 성능 모니터링",
    btnTxt: "체험하기",
    icon: <MonitorCog size={48} />,
    name: "icon",
  },
  {
    title: "웹/앱 테스트 자동화",
    btnTxt: "체험하기",
    icon: <Cog size={48} />,
    name: "icon",
  },
  {
    title: "빅데이터",
    btnTxt: "분석받기",
    icon: <BrainCircuit size={48} />,
    name: "icon rotate",
  },
];

const MainMenu = () => {
  return (
    <div className="main-menu">
      {mainMenu.map((menu, index) => (
        <div className="menu-inner">
          <Link to={menu.url} key={index} className="menu-box">
            <div className="title-box">
              <figure className={menu.name}>{menu.icon}</figure>
              <p>{menu.title}</p>
            </div>
            <div className="button-box">
              <button type="button">{menu.btnTxt}</button>
              <MoveRight size={24} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
