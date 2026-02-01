import requestsImg from "images/MenuButtons/requests.png"
import hcsImg from "images/MenuButtons/hcs.png"
import statusImg from "images/MenuButtons/status.png"
import b2bImg from "images/MenuButtons/b2b.png"
import analyticsImg from "images/MenuButtons/analytics.png"

export const data = [
    {
        id: 1,
        class: "home-button -requests",
        img: requestsImg,
        textFirst: "Работа", 
        textSecond: "с заявками", 
    },
    {
        id: 2,
        class: "home-button -hcs",
        img: hcsImg,
        textFirst: "", 
        textSecond: "ЖКХ",        
    },
    {
        id: 3,
        class: "home-button -status",
        img: statusImg,
        textFirst: "Статус", 
        textSecond: "по персоналу", 
    },
    {
        id: 4,
        class: "home-button -b2b",
        img: b2bImg,
        textFirst: "", 
        textSecond: "B2B", 
    },
    {
        id: 5,
        class: "home-button -analytics",
        img: analyticsImg,
        textFirst: "", 
        textSecond: "Аналитика", 
    }
]