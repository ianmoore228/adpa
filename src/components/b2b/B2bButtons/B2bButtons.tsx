import { data } from "./data";
import { MenuButton } from "@/shared/components/MenuButton";

export const B2bButtons = () => {
  return (
    <div className="b2b-buttons">
      {data.map((item) => {
        return (
          <MenuButton
            shadowColor="rgba(93, 101, 255,"
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
