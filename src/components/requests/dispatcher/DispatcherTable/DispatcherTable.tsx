import burgerIcon from "images/burger-icon.svg";
import { dataRows, dataHeaders } from "./data";
import { NavLink } from "react-router";

export const DispatcherTable = () => {
  return (
    <div className="dispatchertable-container">
      <button className="filter-button">
        Фильтры <img src={burgerIcon} />
      </button>
      <table className="dispatcher-table">
        <thead className="table-head">
          <tr className="table-row">
            {dataHeaders.map((item) => {
              return <th className="header -cell" key={item.id}>{item.text}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          {dataRows.map((row) => {
            return (
              <tr className="table-row" key={row.id}>
                {/* Map по ячейкам рядов☝️*/}
                {row.cells.map((cell) => {
                  return <td className={cell.class} key={cell.cellId}><NavLink to={cell.path}>{cell.text}</NavLink></td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
