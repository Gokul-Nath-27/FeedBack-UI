import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

const Stats = () => {
    const { feedback } = useContext(FeedbackContext)
    return (
        <div className="flex justify-between container mx-auto max-w-screen-md my-4 font-bold">
            <p><span>{feedback.length}</span> Reviews</p>
            <p>Average Rating:<span>{
                (!feedback || feedback.length === 0)? 0 :
                (feedback.map((item) => (item.rating)).reduce((acc, curVal) => ((acc + curVal)),0)/feedback.length).toFixed(2)
                }</span></p>
        </div>
    )
}

export default Stats
