import devicesIcon from "images/HcsButtons/devices-icon.png"
import epassportIcon from "images/HcsButtons/epassport-icon.png"
import interactionIcon from "images/HcsButtons/interaction-icon.png"

export const data = [
    {
        id: 1,
        class: "hcs-button -epassport",
        img: epassportIcon,
        textTop: "Электронный",
        textBottom: "паспорт дома"
    },
    {
        id: 2,
        class: "hcs-button -devices",
        img: devicesIcon,
        textTop: "",
        textBottom: "Приборы учёта"
    },
    {
        id: 3,
        class: "hcs-button -interaction",
        img: interactionIcon,
        textTop: "Взаимодействие",
        textBottom: "с ГИС ЖКХ"
    }
]