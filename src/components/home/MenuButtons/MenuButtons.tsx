import { data } from "./data";

export const MenuButtons = () => {
  return (
    <div className="menu-buttons">
      <div className="buttons-container">
        {data.map((item) => {
          return (
            <button key={item.id} className={item.class}>
              <img className="img" src={item.img} />
              <div className="text-container">
              <p className="text">{item.textFirst}</p>
              <p className="text">{item.textSecond}</p>
              </div>

            </button>
          );
        })}
      </div>
    </div>
  );
};
