import requestsImg from "images/MenuButtons/requests.png";
import hcsImg from "images/MenuButtons/hcs.png";
import statusImg from "images/MenuButtons/status.png";
import b2bImg from "images/MenuButtons/b2b.png";
import analyticsImg from "images/MenuButtons/analytics.png";
import { useLocation } from "react-router";

export const DashboardName = () => {
  const location = useLocation();
  const path: string = location.pathname;

  interface DashboardInfo {
     [path : string] : [img : string, text : string]
  }

  const dashboardInfo : DashboardInfo = {
    "/requests" : [requestsImg, "Работа с заявками"],
    "/hcs" : [ hcsImg, "ЖКХ"],
    "/status" : [statusImg, "Статус по персоналу"],
    "/b2b" : [b2bImg, "B2B"],
    "/analytics" : [analyticsImg, "Аналитика"]
  }

  return (
    <div className="name-wrapper">
      <div className="name-container">
        <img src={dashboardInfo[path][0]} className="icon" />
        <h1 className="title">{dashboardInfo[path][1]}</h1>
      </div>
    </div>
  );
};