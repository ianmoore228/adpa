import {data} from "./data";

export const HcsButtons = () => {
  return (
    <div className="hcs-buttons">
      {data.map((item) => {
        return (
          <button key={item.id} className={item.class}>
            <img src={item.img} className="icon" />
            <div className="text-container">
              <p className="text">{item.textTop}</p>
              <p className="text">{item.textBottom}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
