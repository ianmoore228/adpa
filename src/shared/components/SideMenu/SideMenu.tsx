import menuBg from "images/SideMenu/menu-bg.png";
import { data } from "./data";
import { useState } from "react";
import { NavLink } from "react-router";

export const SideMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="sidemenu-content">
      <img src={menuBg} className="sidemenu-bg" />

      <div className="sidemenu-buttons">
        {data.map((item) => {
          return (
            <NavLink
              to={`/${item.path}`}
              key={item.id}
              className={!isActive ? item.class : item.classActive}
              onClick={() =>{ setIsActive(!isActive)}}
            >
              <img className={item.imgClass} src={item.img} />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
