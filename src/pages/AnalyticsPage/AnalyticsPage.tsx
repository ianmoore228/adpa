import { DashboardName } from "@/shared/components/DashboardName";
import { AnalyticsButtons } from "@/components/analytics/AnalyticsButtons";

export const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <DashboardName />
      <AnalyticsButtons />
    </div>
  );
};
