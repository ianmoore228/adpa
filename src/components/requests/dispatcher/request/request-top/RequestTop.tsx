export const RequestTop = () => {
  return (
    <>
      <div className="info-container -common">
        <h3>Общее</h3>
        <div>
            <label>Статус</label>
            <input>Активный</input>
        </div>
        <div>
            <label>Адрес объекта</label>
            <input>г. Калининград, ул. Ленина, дом 134А</input>
        </div>
        <div>
            <label>Тип неисправности</label>
            <input>Гарантийный ремонт</input>
        </div>
      </div>
      <div className="info-container -employees">
        <h3>Сотрудники</h3>

      </div>
    </>
  );
};
