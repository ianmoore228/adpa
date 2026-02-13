import img from "images/logo.svg";
import { StaggeredFade } from "@/shared/animation/StaggeredFade";
import { motion } from "framer-motion";

export const DashboardGreeting = () => {
  return (
    <div className="dashboard-greeting">
      <motion.img className="logo" src={img}
      
      // initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: "spring" }}
      
      initial={{ scale: 1, opacity: 0 }}
      animate={{
        // y: 0,
        opacity: 1,
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 0.7,
        type: "spring",
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      
      />

      <StaggeredFade
        text="Добро пожаловать!"
        className="text"
      />
    </div>
  );
};
