import { RequestsButtons } from "@/components/requests/RequestsButtons"
import { DashboardName } from "@/shared/components/DashboardName"

export const RequestsPage = () => {
    return (
        <div className="requests-page">
        <DashboardName/>
        <RequestsButtons/>
        </div>
    )
}