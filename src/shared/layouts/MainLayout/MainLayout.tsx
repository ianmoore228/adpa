import type { ReactNode } from "react";
import { type FC } from "react";
import { SideMenu } from "@/shared/components/SideMenu";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
          <SideMenu />
        <div className="menu-container">{children}</div>
    </main>
  );
};
