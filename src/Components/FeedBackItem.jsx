import CardStyle from "./CardStyle"
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

const FeedBackItem = ({ text, rating, id, handleDelete, darkmode}) => {
    const {handleEdit} = useContext(FeedbackContext)
    return (
        <CardStyle darkmode={darkmode}>
            <div className="font-medium absolute -top-3 -left-3 h-10  w-10 rounded-full bg-brightPink text-gray-700  flex justify-around items-center">{rating}</div>
            <button
                className="absolute top-3 right-3 text-red-800"
                onClick = {() => handleDelete(id)}
            >
                <FaTimes/>
            </button>
            <button 
                onClick={()=> handleEdit(id,text,rating) } 
                className="absolute top-3 right-8 text-gray-400"
            >
                <FaEdit/>
            </button>

            <div>{text}</div>
        </CardStyle>
    )
}


export default FeedBackItem
