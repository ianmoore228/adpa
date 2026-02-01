import img from "images/logo.svg"

export const DashboardGreeting = () =>
{
    return (
        <div className="dashboard-greeting">
            <img className="logo" src={img}/>
            <h1 className="text">Добро пожаловать!</h1>
        </div>
    )
}