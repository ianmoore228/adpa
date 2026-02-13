import monitoringIcon from "images/AnanlyticsButtons/monitoring-icon.png"
import economicsIcon from "images/AnanlyticsButtons/economics-icon.png"
import analyticsIcon from "images/AnanlyticsButtons/analytics-icon.png"

export const data = [
    {
        id: 1,
        class: "analytics-button -monitoring",
        img: monitoringIcon,
        textFirst: "Финансовый",
        textSecond: "мониторинг",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0,
    },
    {
        id: 2,
        class: "analytics-button -economics",
        img: economicsIcon,
        textFirst: "",
        textSecond: "Экономика дома",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.2,
    },
    {
        id: 3,
        class: "analytics-button -analytics",
        img: analyticsIcon,
        textFirst: "Аналитика",
        textSecond: "аварийности",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.4,
    }
]