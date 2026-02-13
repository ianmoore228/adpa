import { DashboardName } from "@/shared/components/DashboardName"
import { StatusButtons } from "@/components/status/StatusButtons"

export const StatusPage = () => {
    return (
        <div className="status-page">
        <DashboardName/>
        <StatusButtons/>
        </div>
    )
}