import registryIcon from "images/B2bButtons/registry-icon.png"
import usageIcon from "images/B2bButtons/usage-icon.png"

export const data = [
    {
        id: 1,
        class: "b2b-button -registry",
        img: registryIcon,
        textFirst: "Реестр",
        textSecond: "договоров с РСО",
        textThird: "и подрядчиками",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0,
    },
    {
        id: 2,
        class: "b2b-button -usage",
        img: usageIcon,
        textFirst: "Коммерческое",
        textSecond: "использование мест",
        textThird: "общего пользования",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.2,
    },
]