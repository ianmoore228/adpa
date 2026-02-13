export const dataHeaders = [
  {
    id: 1,
    text: "Номер заявки",
  },
  {
    id: 2,
    text: "Источник заявки",
  },
  {
    id: 3,
    text: "Классификация",
  },
  {
    id: 4,
    text: "Ответственный",
  },
  {
    id: 5,
    text: "Актуальные фото",
  },
];

interface DataRowsProps {
  id: number;
  path: string;
  cells: {
    cellId: number;
    text: string;
    class: string;
    //Показываем что это - массив!
  }[];
}

// Без [] работать не будет. Потому что это массив
export const dataRows: DataRowsProps[] = [
  {
    id: 1,
    path: "/requests/dispatcher/request",
    cells: [
      {
        cellId: 1,
        text: "№ 148 от 20.09.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Электронная почта",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Платная",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Смирнов Р. К.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
  {
    id: 2,
    path: "",
    cells: [
      {
        cellId: 1,
        text: "№ 156 от 17.10.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Сайт",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Платная",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Карпов С. А.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
  {
    id: 3,
    path: "",
    cells: [
      {
        cellId: 1,
        text: "№ 161 от 23.10.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Телефон",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Аварийная",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Серов К. Ю.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
  {
    id: 4,
    path: "",
    cells: [
      {
        cellId: 1,
        text: "№ 161 от 23.10.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Телефон",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Аварийная",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Серов К. Ю.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
  {
    id: 5,
    path: "",
    cells: [
      {
        cellId: 1,
        text: "№ 174 от 08.11.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Личное обращение",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Гарантия",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Яналов С. В.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
  {
    id: 6,
    path: "",
    cells: [
      {
        cellId: 1,
        text: "№ 179 от 14.11.2025",
        class: "cell -cell",
      },
      {
        cellId: 2,
        text: "Мессенджер MAX",
        class: "cell -cell",
      },
      {
        cellId: 3,
        text: "Платная",
        class: "cell -cell",
      },
      {
        cellId: 4,
        text: "Смирнов Р. К.",
        class: "cell -cell -name",
      },
      {
        cellId: 5,
        text: "https:/carshari...",
        class: "cell -cell -link",
      },
    ],
  },
];
