import {data} from "./data";

export const B2bButtons = () => {
  return (
    <div className="b2b-buttons">
      {data.map((item) => {
        return (
          <button key={item.id} className={item.class}>
            <img src={item.img} className="icon" />
            <div className="text-container">
              <p className="text">{item.textTop}</p>
              <p className="text">{item.textMiddle}</p>
              <p className="text">{item.textBottom}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
