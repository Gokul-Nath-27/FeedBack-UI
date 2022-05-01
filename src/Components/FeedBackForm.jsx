import CardStyle from "./CardStyle"
import { useState, useEffect} from "react"
import Button from './Button'
import RatingRadioBtn from "./RatingRadioBtn"
const FeedBackForm = ({darkmode}) => {
    const [text, setText] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [selected, setselected] = useState(10)

    
    useEffect(()=>{
        if(text.trim() === "") {
            setDisabled(true)
            setMessage(null)
        } else if(text.trim() !== "" && text.length <= 10){
            setDisabled(true)
            setMessage("FeedBack must have atleast 10 characters")
        } else{
            setMessage(null)
            setDisabled(false)
        }
    },[text])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const handleRating = (e) => {
        console.log(+e.target.innerText)
        setselected(+e.target.innerText)
    }
    const addFeedback = (e) => {
        
        e.preventDefault()
        console.log('clicked')
    }
    return (
        <CardStyle darkmode={darkmode}>
            <form action="">
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
                        addFeedback={addFeedback}
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
