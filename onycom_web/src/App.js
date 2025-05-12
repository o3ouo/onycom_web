import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // 오른쪽 클릭 방지
  document.oncontextmenu = function () {
    return false;
  };

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
