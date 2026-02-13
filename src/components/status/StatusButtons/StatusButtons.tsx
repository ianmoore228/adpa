import { data } from "./data";
import { MenuButton } from "@/shared/components/MenuButton";

export const StatusButtons = () => {
  return (
    <div className="status-buttons">
      {data.map((item) => {
        return (
          <MenuButton
            shadowColor="rgba(255, 169, 93,"
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
