import { DispatcherTable } from "@/components/requests/dispatcher/DispatcherTable"
import { ReturnButton } from "@/shared/components/ReturnButton"

export const DispatcherPage = () => {
    return (
        <div className="dispatcher-page">
        <DispatcherTable/>
        <ReturnButton/>
        </div>
    )
}