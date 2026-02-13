import { data } from "./data";
import { RequestContainer } from "./RequestContainer";
import { motion } from "framer-motion";

export const Request = () => {
  return (
    <div className="request-wrapper">
      <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className="title">Заявка №148 от 20.09.2025</motion.h1>

      <div className="request-container">
        {data.map((container, indexc) => (
          <RequestContainer
            key={container.id}
            container={container}
            indexc={indexc}
          />
        ))}
      </div>
    </div>
  );
};
