import { MainLayout } from "@/shared/layouts/MainLayout";
import { Outlet } from "react-router";

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};