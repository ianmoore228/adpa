import dispatcherIcon from "images/RequestsButtons/dispatcher-icon.png";
import feedbackIcon from "images/RequestsButtons/feedback-icon.png";
import ratingIcon from "images/RequestsButtons/rating-icon.png";
import routingIcon from "images/RequestsButtons/routing-icon.png";

export const data = [
  {
    id: 1,
    img: dispatcherIcon,
    class: "requests-button -dispatcher",
    textFirst: "Единое окно",
    textSecond: "диспетчера",
    path: "/requests/dispatcher",
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.2,
  },
  {
    id: 2,
    img: ratingIcon,
    class: "requests-button -rating",
    textFirst: "Оценка",
    textSecond: "качества работы",
    path: "",
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.4,
  },
  {
    id: 3,
    img: routingIcon,
    class: "requests-button -routing",
    textFirst: "Маршрутизация",
    textSecond: "и контроль",
    path: "",
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.2,
  },

  {
    id: 4,
    img: feedbackIcon,
    class: "requests-button -feedback",
    textFirst: "",
    textSecond: "Обратная связь",
    path: "",
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    delay: 0.4,
  },
];
