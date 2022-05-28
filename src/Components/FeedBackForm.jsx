import CardStyle from "./CardStyle"
import { useState, useEffect, useContext} from "react"
import FeedbackContext from "../Context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';
import Button from './Button'
import RatingRadioBtn from "./RatingRadioBtn"
const FeedBackForm = () => {
    const {feedback, setFeedback, darkmode, feedbackEdit, updateEditedFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [selected, setselected] = useState(10)
    
    useEffect(()=>{
        if(text.trim() === "") {
            setDisabled(true)
            setMessage(null)
        } else if(text.trim() !== "" && text.trim().length <= 10){
            setDisabled(true)
            setMessage("FeedBack must have atleast 10 characters")
        } else{
            setMessage(null)
            setDisabled(false)
        }
    },[text])

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setDisabled(false)
            setText(feedbackEdit.item.text)
            setselected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const handleRating = (e) => {
        setselected(+e.target.innerText)
    }
    const addFeedback = (newfeedback) => {
        const UpdatedFeedBack = [newfeedback, ...feedback]
        setFeedback(UpdatedFeedBack)
        setText("")
        setselected(10)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const newfeedback = {
            text: text,
            rating: selected,
            id: uuidv4()
        }
        if(feedbackEdit.edit === true){
            updateEditedFeedback(feedbackEdit.item.id, newfeedback)
            setText("")
            setselected(10)
        }else{
            addFeedback(newfeedback)
        }

    }
    return (
        <CardStyle darkmode={darkmode}>
            <form action="" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold">How would you rate our service?</h1>
                <RatingRadioBtn selected={selected} setselected={setselected} handleRating={handleRating}/>
                <div className="w-4/5 mx-auto my-2 flex sm:flex-row justify-between border-slate-700 border px-4 py-2 rounded-lg">
                    <input
                        onChange={handleTextChange}
                        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                        className="w-4/5 border-none focus:outline-none"
                    />
                    <Button
                        type='submit'
                        isDisabled={disabled}
                        onSubmit={handleSubmit}
                    >
                        Send
                    </Button>
                </div>
                {message && <div style={{color:  darkmode ? 'papayawhip': 'red' }}>{message}</div>}
            </form>
        </CardStyle>
    )
}

export default FeedBackForm
