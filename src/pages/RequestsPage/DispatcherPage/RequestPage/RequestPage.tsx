import { Request } from "@/components/requests/dispatcher/request"
import { ReturnButton } from "@/shared/components/ReturnButton"

export const RequestPage = () => {
    return (
        <div className="request-page">
            <Request/>
            <ReturnButton/>
        </div>
    )
}