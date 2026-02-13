import { DashboardName } from "@/shared/components/DashboardName"
import { B2bButtons } from "@/components/b2b/B2bButtons"

export const B2bPage = () => {
    return (
        <div className="b2b-page">
        <DashboardName/>
        <B2bButtons/>
        </div>
    )
}