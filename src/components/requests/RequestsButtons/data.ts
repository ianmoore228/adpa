import dispatcherIcon from "images/RequestsButtons/dispatcher-icon.png"
import feedbackIcon from "images/RequestsButtons/feedback-icon.png"
import ratingIcon from "images/RequestsButtons/rating-icon.png"
import routingIcon from "images/RequestsButtons/routing-icon.png"

export const data = [
    {
        id: 1,
        img: dispatcherIcon,
        class: "requests-button -dispatcher",
        textTop: "Единое окно",
        textBottom: "диспетчера"
    },
    {
        id: 2,
        img: ratingIcon,
        class: "requests-button -rating",
        textTop: "Оценка",
        textBottom: "качества работы"
    },
    {
        id: 3,
        img: routingIcon,
        class: "requests-button -routing",
        textTop: "Маршрутизация",
        textBottom: "и контроль"
    },

    {
        id: 4,
        img: feedbackIcon,
        class: "requests-button -feedback",
        textTop: "",
        textBottom: "Обратная связь"
    },
]