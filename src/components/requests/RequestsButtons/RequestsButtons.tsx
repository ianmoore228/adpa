import emergencyIcon from "images/RequestsButtons/emergency-icon.png";
import { data } from "./data";
import { NavLink } from "react-router";

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
            <NavLink to={item.path} key={item.id} className={item.class}>
              <img src={item.img} className="icon" />
              <div className="text-container">
                <p className="text">{item.textTop}</p>
                <p className="text">{item.textBottom}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};