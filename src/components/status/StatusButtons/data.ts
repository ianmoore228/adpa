import managementIcon from "images/StatusButtons/management-icon.png"
import kpiIcon from "images/StatusButtons/kpi-icon.png"
import workplaceIcon from "images/StatusButtons/workplace-icon.png"

export const data = [
    {
        id: 1,
        class: "status-button -management",
        img: managementIcon,
        textFirst: "Управление",
        textSecond: "сменами",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0,
    },
    {
        id: 2,
        class: "status-button -kpi",
        img: kpiIcon,
        textFirst: "",
        textSecond: "KPI сотрудников",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.2,
    },
    {
        id: 3,
        class: "status-button -workplace",
        img: workplaceIcon,
        textFirst: "Мобильное",
        textSecond: "рабочее место",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.4,
    }
]