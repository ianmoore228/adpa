import devicesIcon from "images/HcsButtons/devices-icon.png"
import epassportIcon from "images/HcsButtons/epassport-icon.png"
import interactionIcon from "images/HcsButtons/interaction-icon.png"

export const data = [
    {
        id: 1,
        class: "hcs-button -epassport",
        img: epassportIcon,
        textFirst: "Электронный",
        textSecond: "паспорт дома",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0,
    },
    {
        id: 2,
        class: "hcs-button -devices",
        img: devicesIcon,
        textFirst: "",
        textSecond: "Приборы учёта",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.2,
    },
    {
        id: 3,
        class: "hcs-button -interaction",
        img: interactionIcon,
        textFirst: "Взаимодействие",
        textSecond: "с ГИС ЖКХ",
        initial: { y: -60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        delay: 0.4,
    }
]