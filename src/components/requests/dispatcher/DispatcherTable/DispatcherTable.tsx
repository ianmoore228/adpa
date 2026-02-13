import burgerIcon from "images/burger-icon.svg";
import { dataRows, dataHeaders } from "./data";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export const DispatcherTable = () => {
  const navigate = useNavigate();

  function navigateRequest(path: string) {
    if (path == "/requests/dispatcher/request") {
      navigate("/requests/dispatcher/request");
    }
  }

  return (
    <div className="dispatchertable-container">
      <motion.button whileHover={{ scale: 1.1 }} className="filter-button">
        Фильтры <img src={burgerIcon} />
      </motion.button>
      <table className="dispatcher-table">
        <thead className="table-head">
          <tr className="table-row">
            {dataHeaders.map((item, index) => {
              return (
                <motion.th
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    delay: 0.1 * index,
                  }}
                  className="header -cell"
                  key={item.id}
                >
                  {item.text}
                </motion.th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          {dataRows.map((row, indexr) => {
            return (
              <motion.tr
                whileHover={
                  row.path === "/requests/dispatcher/request"
                    ? {
                        boxShadow: "0 0 23px rgba(255, 255, 255, 0.44)",
                        cursor: "pointer",
                      }
                    : {}
                }
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  delay: 0.2 * indexr,
                }}
                onClick={() => navigateRequest(row.path)}
                className="table-row"
                key={row.id}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <motion.td
                      key={cell.cellId}
                      className={cell.class}
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        delay: 0.2 * indexr + index * 0.1,
                      }}
                    >
                      {cell.text}
                    </motion.td>
                  );
                })}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
