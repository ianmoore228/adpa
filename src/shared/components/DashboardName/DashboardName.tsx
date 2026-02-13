import requestsImg from "images/MenuButtons/requests.png";
import hcsImg from "images/MenuButtons/hcs.png";
import statusImg from "images/MenuButtons/status.png";
import b2bImg from "images/MenuButtons/b2b.png";
import analyticsImg from "images/MenuButtons/analytics.png";
import { useLocation } from "react-router";
import { StaggeredFade } from "@/shared/animation/StaggeredFade";
import { motion } from "framer-motion";

export const DashboardName = () => {
  const location = useLocation();
  const path: string = location.pathname;

  interface DashboardInfo {
    [path: string]: [img: string, text: string];
  }

  const dashboardInfo: DashboardInfo = {
    "/requests": [requestsImg, "Работа с заявками"],
    "/hcs": [hcsImg, "ЖКХ"],
    "/status": [statusImg, "Статус по персоналу"],
    "/b2b": [b2bImg, "B2B"],
    "/analytics": [analyticsImg, "Аналитика"],
  };

  return (
    <div className="name-wrapper">
      <div className="name-container">
        <motion.img
          initial={{ x: -60, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.7,
            type: "spring",
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          src={dashboardInfo[path][0]}
          className="icon"
        />

        <StaggeredFade text={dashboardInfo[path][1]} className="title" />
      </div>
    </div>
  );
};
