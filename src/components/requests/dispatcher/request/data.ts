interface DataProps {
    id: number;
    class: string;
    title: string;
    points: {
        id: number;
        placeholder: string;
        label: string;
    }[]
}

export const data : DataProps[] = [
    {
        id: 1,
        class: "info-container -common",
        title: "Общее",
        points: [
            {
                id: 1,
                placeholder: "Активный",
                label: "Статус"
            },
            {
                id: 2,
                placeholder: "г. Калининград, ул. Ленина, дом 134А",
                label: "Адрес объекта"
            },
            {
                id: 3,
                placeholder: "Гарантийный ремонт",
                label: "Тип неисправности"
            },
        ]
    },
    {
        id: 2,
        class: "info-container -employees",
        title: "Сотрудники",
        points: [
            {
                id: 1,
                placeholder: "Смирнов Руслан Константинович",
                label: "Ответсвенный"
            },
            {
                id: 2,
                placeholder: "Смирнов Р. К., Инванов К. С., Карамзин П. М., Селеванов С. Л.",
                label: "Сотрудники, задействованные на объкте"
            },
            {
                id: 3,
                placeholder: "https:/carshari...",
                label: "Чат с сотрудником"
            },
            {
                id: 4,
                placeholder: "https:/carshari...",
                label: "Чат с заказчиком"
            },
        ]
    },
    {
        id: 3,
        class: "info-container -date",
        title: "Сроки",
        points: [
            {
                id: 1,
                placeholder: "17. 03. 2026",
                label: "Сроки план"
            },
            {
                id: 2,
                placeholder: "----",
                label: "Сроки факт"
            },
            {
                id: 3,
                placeholder: "",
                label: "Причина задержки"
            },
        ]
    },
    {
        id: 4,
        class: "info-container -budget",
        title: "Бюджет",
        points: [
            {
                id: 1,
                placeholder: "",
                label: "Смета"
            },
            {
                id: 2,
                placeholder: "",
                label: "Бюджет план"
            },
            {
                id: 3,
                placeholder: "",
                label: "Бюджет факт"
            },
        ]
    },
    {
        id: 5,
        class: "info-container -photos",
        title: "Фотофиксация",
        points: [
            {
                id: 1,
                placeholder: "https:/carshari...",
                label: "Фото до"
            },
            {
                id: 2,
                placeholder: "https:/carshari...",
                label: "Фото после"
            }
        ]
    }
]