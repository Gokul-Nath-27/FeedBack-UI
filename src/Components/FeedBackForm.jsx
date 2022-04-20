import CardStyle from "./CardStyle"
import { useState } from "react"
const FeedBackForm = () => {
    const [text, setText] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value, console.log(text))
    }
    return (
        <CardStyle darkmode={true}>
            <form action="">
                <h1 className="text-xl font-bold">How would you rate our service?</h1>
                <div className="w-4/5 mx-auto my-2 flex sm:flex-row justify-between border-slate-700 border px-4 py-2 rounded-lg">
                    <input
                        onChange={handleTextChange}
                        style={{backgroundColor: 'rgba(0,0,0,0.01)'}} 
                        type="text" 
                        placeholder="Write a review"
                        value={text}
                        className="w-4/5 border-none focus:outline-none"
                        /> 
                    <button
                        onClick={(e) =>(e.preventDefault())}
                        type="submit"
                        className="w-1/6 bg-gray-500 hover:bg-rose-300 py-1 rounded-lg text-white"
                        >
                            Send
                    </button>
                </div>
            </form>
        </CardStyle>
    )
}

export default FeedBackForm
