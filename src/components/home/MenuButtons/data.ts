import requestsImg from "images/MenuButtons/requests.png";
import hcsImg from "images/MenuButtons/hcs.png";
import statusImg from "images/MenuButtons/status.png";
import b2bImg from "images/MenuButtons/b2b.png";
import analyticsImg from "images/MenuButtons/analytics.png";

export const data = [
  {
    id: 1,
    class: "home-button -requests",
    path: "/requests",
    img: requestsImg,
    textFirst: "Работа",
    textSecond: "с заявками",
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0,
    shadowColor: "rgba(23, 255, 58,",
  },
  {
    id: 2,
    class: "home-button -hcs",
    path: "/hcs",
    img: hcsImg,
    textFirst: "",
    textSecond: "ЖКХ",
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.2,
    shadowColor: "rgba(255, 130, 195,",
  },
  {
    id: 3,
    class: "home-button -status",
    path: "/status",
    img: statusImg,
    textFirst: "Статус",
    textSecond: "по персоналу",
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.4,
    shadowColor: "rgba(255, 169, 93,",
  },
  {
    id: 4,
    class: "home-button -b2b",
    path: "/b2b",
    img: b2bImg,
    textFirst: "",
    textSecond: "B2B",
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.2,
    shadowColor: "rgba(93, 101, 255,",
  },
  {
    id: 5,
    class: "home-button -analytics",
    path: "/analytics",
    img: analyticsImg,
    textFirst: "",
    textSecond: "Аналитика",
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.4,
    shadowColor: "rgba(93, 255, 255,",
  },
];
