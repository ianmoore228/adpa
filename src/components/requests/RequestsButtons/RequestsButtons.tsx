import emergencyIcon from "images/RequestsButtons/emergency-icon.png";
import { data } from "./data";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { MenuButton } from "@/shared/components/MenuButton";

export const RequestsButtons = () => {
  const isMobile = useMediaQuery({ maxWidth: 1080 });

  return (
    <div className="requests-buttons">
      {!isMobile ? (
        <>
          <div className="buttons-container -left">
            <MenuButton
              item={{
                id: "emergency",
                path: "#",
                img: emergencyIcon,
                textFirst: "Аварийно-диспетчерская",
                textSecond: "служба",
                initial: { x: -60, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                delay: 0,
                class: "requests-button -emergency",
              }}
              shadowColor="rgba(23, 255, 58,"
              shadowBlur={35}
            />
          </div>
          <div className="buttons-container -right">
            {data.map((item) => {
              return (
                <MenuButton
                  shadowColor="rgba(23, 255, 58,"
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="buttons-container -left">
            <motion.button
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="requests-button -emergency"
            >
              <img className="img" src={emergencyIcon} />
              <p className="text">Аварийно-диспетчерская служба</p>
            </motion.button>
          </div>
          <div className="buttons-container -right">
            {data.map((item) => {
              return (
                <motion.a
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    delay: 0.2 * item.id,
                  }}
                  href={item.path}
                  key={item.id}
                  className={item.class}
                >
                  <img src={item.img} className="img" />
                  <div className="text-container">
                    <p className="text">{item.textFirst}</p>
                    <p className="text">{item.textSecond}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
