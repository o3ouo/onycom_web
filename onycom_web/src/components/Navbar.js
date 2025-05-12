import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItemsData } from "../data/menuItemsData";

const Dropdown = ({ submenus, selectedSubUrl, setSelectedSubUrl }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) =>
        submenu.type === "divider" ? (
          <hr key={index} className="divider" />
        ) : (
          <li
            key={index}
            className={`sub-items ${
              selectedSubUrl === submenu.url ? "active" : ""
            }`}
          >
            <Link
              to={`/${submenu.url}`}
              onClick={() => setSelectedSubUrl(submenu.url)}
            >
              {submenu.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

const MenuItems = ({
  items,
  index,
  openIndex,
  setOpenIndex,
  selectedSubUrl,
  setSelectedSubUrl,
  isActive,
}) => {
  const isOpen = openIndex === index;

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
    if (!isOpen && items.submenu) {
      const firstValid = items.submenu.find((item) => item.type !== "divider");
      if (firstValid) setSelectedSubUrl(firstValid.url);
    }
  };

  return (
    <li className={`menu-items ${isActive ? "active" : ""}`}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            onClick={handleClick}
          >
            {items.title}
          </button>
          {isOpen && (
            <Dropdown
              submenus={items.submenu}
              selectedSubUrl={selectedSubUrl}
              setSelectedSubUrl={setSelectedSubUrl}
            />
          )}
        </>
      ) : (
        <Link to={items.url} className="blog">
          {items.title}
        </Link>
      )}
    </li>
  );
};

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\//, "");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedSubUrl, setSelectedSubUrl] = useState("");

  // URL 기준으로 메뉴 활성화 초기화
  useEffect(() => {
    const foundIndex = menuItemsData.findIndex((menu) =>
      menu.submenu?.some(
        (item) => item.type !== "divider" && item.url === currentPath
      )
    );
    setOpenIndex(foundIndex);

    const foundSub = menuItemsData[foundIndex]?.submenu?.find(
      (item) => item.type !== "divider" && item.url === currentPath
    );
    if (foundSub) {
      setSelectedSubUrl(foundSub.url);
    }
  }, [currentPath]);

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          const isActive = index === openIndex;
          return (
            <MenuItems
              key={index}
              items={menu}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              selectedSubUrl={selectedSubUrl}
              setSelectedSubUrl={setSelectedSubUrl}
              isActive={openIndex === index}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
