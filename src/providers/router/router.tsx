import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { App } from "@/App";
import { RequestsPage } from "@/pages/RequestsPage";
import { HcsPage } from "@/pages/HcsPage";
import { StatusPage } from "@/pages/StatusPage";
import { B2bPage } from "@/pages/B2bPage";
import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { DispatcherPage } from "@/pages/RequestsPage/DispatcherPage";
import { RequestPage } from "@/pages/RequestsPage/DispatcherPage/RequestPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/requests", element: <RequestsPage />},
      { path: "/requests/dispatcher", element: <DispatcherPage /> },
      { path: "/requests/dispatcher/request", element: <RequestPage /> },
      { path: "/hcs", element: <HcsPage /> },
      { path: "/status", element: <StatusPage /> },
      { path: "/b2b", element: <B2bPage /> },
      { path: "/analytics", element: <AnalyticsPage /> },
    ],
  },
]);
