import requestsImg from "images/MenuButtons/requests.png"

export const DashboardName = () => {
    return (
        <div className="name-wrapper">
            <div className="name-container">
            <img src={requestsImg} className="icon"/>
            <h1 className="title">Работа с заявками</h1>
            </div>
        </div>
    )
}