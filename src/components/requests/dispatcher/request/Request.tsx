import { RequestTop } from "./request-top/RequestTop";
import { RequestBottom } from "./reuest-bottom/RequestBottom";

export const Request = () => {
  return (
    <div className="request-wrapper">
      <h1 className="title">Заявка №148 от 20.09.2025</h1>

      <div className="request-container">
        <RequestTop />
        <RequestBottom />
      </div>
    </div>
  );
};
