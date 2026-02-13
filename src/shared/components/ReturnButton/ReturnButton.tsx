import arrow from "images/back-arrow.svg"
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'

export const ReturnButton = () => {
    const navigate = useNavigate()

    return (
        <motion.button
        whileHover={{scale: 1.1}}
        onClick={() => navigate(-1)} className="return-button"><img className="icon" src={arrow}/>Назад</motion.button>
    )
}