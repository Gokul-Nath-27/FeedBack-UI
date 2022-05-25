import { createContext, useState } from "react";
import feedBackData from "../Data/data";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [darkmode, setDarkmode] = useState(true)
    const [feedback, setFeedback] = useState(feedBackData)
    const handleDelete = (id) => {
        if(window.confirm("Do you want to delete?")){
          const filteredItems = feedback.filter( item => item.id !== id )
          setFeedback(filteredItems)
        }}
    const handleThemeMode = () => {
        (darkmode)? setDarkmode(false): setDarkmode(true)
        }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                setFeedback,
                handleDelete,
                handleThemeMode,
                darkmode,
                setDarkmode
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
