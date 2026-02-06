import arrow from "images/back-arrow.svg"
import { useNavigate } from 'react-router';

export const ReturnButton = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} className="return-button"><img className="icon" src={arrow}/>Назад</button>
    )
}