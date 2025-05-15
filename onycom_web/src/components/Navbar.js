import { Link } from "react-router-dom";
import { menuItemsData } from "../data/menuItemsData";

const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) =>
        submenu.type === "divider" ? (
          <hr key={index} className="divider" />
        ) : (
          <li key={index} className="sub-items">
            <Link to={`/${submenu.url}`}>{submenu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

const MenuItems = ({ items, isActive }) => {
  return (
    <li
      className={`menu-items ${isActive ? "active" : ""}`}
      onMouseEnter={(e) => e.currentTarget.classList.add("open")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("open")}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isActive}
            tabIndex={-1}
          >
            {items.title}
          </button>
          {Dropdown && <Dropdown submenus={items.submenu} />}
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
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems key={index} items={menu} isActive={false} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
