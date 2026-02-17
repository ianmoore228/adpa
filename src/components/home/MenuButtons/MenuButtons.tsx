import { data } from "./data";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { MenuButton } from "@/shared/components/MenuButton";

export const MenuButtons = () => {
  const isMobile = useMediaQuery({ maxWidth: 970 });

  return (
    <div className="menu-buttons">
      <div className="buttons-container">
        {data.map((item, index) =>
          isMobile ? (
            <motion.a
              key={item.id}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                delay: 0.2 * index,
              }}
              href={item.path}
              className={item.class}
            >
              <motion.img className="img" src={item.img} />
              <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  delay: 0.3 * index,
                }}
                className="text-container"
              >
                <p className="text">{item.textFirst}</p>
                <p className="text">{item.textSecond}</p>
              </motion.div>
            </motion.a>
          ) : (
            <MenuButton
              key={item.id}
              item={item}
              shadowColor={item.shadowColor}
            />
          )
        )}
      </div>
    </div>
  );
};
