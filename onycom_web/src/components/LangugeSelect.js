import React, { useState } from "react";
import langImg from "../images/lang.png";
import koImg from "../images/ko.png";
import enImg from "../images/en.png";
import jaImg from "../images/ja.png";

const options = [
  { code: "ko", img: koImg, label: "KR" },
  { code: "en", img: enImg, label: "US" },
  { code: "ja", img: jaImg, label: "JP" },
];

const LanguageSelect = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="selected" onClick={() => setOpen(!open)}>
        <img
          src={selected ? selected.img : langImg}
          alt="selected"
          className="flag"
        />
      </div>
      {open && (
        <ul className="options">
          {options.map((opt) => (
            <li key={opt.code} onClick={() => handleSelect(opt)}>
              <img src={opt.img} alt={opt.label} className="flag" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
