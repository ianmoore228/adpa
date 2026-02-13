import { data } from "./data";
import { MenuButton } from "@/shared/components/MenuButton";

export const HcsButtons = () => {
  return (
    <div className="hcs-buttons">
      {data.map((item) => {
        return (
          <MenuButton
            shadowColor="rgba(255, 130, 195,"
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
