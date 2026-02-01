import emergencyIcon from "images/RequestsButtons/emergency-icon.png";
import { data } from "./data";

export const RequestsButtons = () => {
  return (
    <div className="requests-buttons">
      <div className="buttons-container -left">
        <button className="requests-button -emergency">
          <img className="icon" src={emergencyIcon} />
          <p className="text">Аварийно-диспетчерская служба</p>
        </button>
      </div>
      <div className="buttons-container -right">
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
    </div>
  );
};