import managementIcon from "images/StatusButtons/management-icon.png"
import kpiIcon from "images/StatusButtons/kpi-icon.png"
import workplaceIcon from "images/StatusButtons/workplace-icon.png"

export const data = [
    {
        id: 1,
        class: "status-button -management",
        img: managementIcon,
        textTop: "Управление",
        textBottom: "сменами"
    },
    {
        id: 2,
        class: "status-button -kpi",
        img: kpiIcon,
        textTop: "",
        textBottom: "KPI сотрудников"
    },
    {
        id: 3,
        class: "status-button -workplace",
        img: workplaceIcon,
        textTop: "Мобильное",
        textBottom: "рабочее место"
    }
]