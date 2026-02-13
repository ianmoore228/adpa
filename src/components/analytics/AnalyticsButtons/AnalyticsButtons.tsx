import { data } from "./data";
import { MenuButton } from "@/shared/components/MenuButton";

export const AnalyticsButtons = () => {
  return (
    <div className="analytics-buttons">
      {data.map((item) => {
        return (
          <MenuButton
            shadowColor="rgba(93, 255, 255,"
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
