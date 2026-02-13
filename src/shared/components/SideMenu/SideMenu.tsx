import menuBg from "images/SideMenu/menu-bg.png";
import { data } from "./data";
import { useState } from "react";
import { useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

export const SideMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 1250 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", duration: 0.5 },
    }),
  };

  const MotionNavLink = motion(NavLink);
  return (
    <>
      {isMobile ? (
        <>
          <div className="hamburger-wrapper">
            <div className="hamburger-container">
              <input
                onChange={(e) => {
                  setIsMenuOpen(e.target.checked);
                }}
                type="checkbox"
                id="checkbox1"
                className="checkbox1 visuallyHidden"
              />
              <label htmlFor="checkbox1">
                <div className="hamburger hamburger1">
                  <span className="bar bar1"></span>
                  <span className="bar bar2"></span>
                  <span className="bar bar3"></span>
                  <span className="bar bar4"></span>
                </div>
              </label>
            </div>
          </div>

          <div
            className="sidemenu-container"
            style={{ right: isMenuOpen ? "0" : "-82px" }}
          >
            <nav className="sidemenu-content">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isMenuOpen
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={menuBg}
                className="sidemenu-bg"
              />

              <div className="sidemenu-buttons">
                {data.map((item, i) => (
                  <MotionNavLink
                    key={item.id}
                    to={item.path}
                    className={!isActive ? item.class : item.classActive}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isMenuOpen ? "visible" : "hidden"}
                    custom={i}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsActive(!isActive);
                      document.getElementById("checkbox1").checked = false;
                    }}
                  >
                    <img
                      className={item.imgClass}
                      src={
                        location.pathname === item.path
                          ? item.imgActive
                          : item.img
                      }
                    />
                  </MotionNavLink>
                ))}
              </div>
            </nav>
          </div>
        </>
      ) : (
        <div className="sidemenu-container" style={{ right: "0" }}>
          <nav className="sidemenu-content">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={menuBg}
              className="sidemenu-bg"
            />

            <div className="sidemenu-buttons">
              {data.map((item, i) => (
                <MotionNavLink
                  whileHover={{ scale: 1.1 }}
                  key={item.id}
                  to={item.path}
                  className={!isActive ? item.class : item.classActive}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  onClick={() => setIsActive(!isActive)}
                >
                  <img
                    className={item.imgClass}
                    src={
                      location.pathname === item.path
                        ? item.imgActive
                        : item.img
                    }
                  />
                </MotionNavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
