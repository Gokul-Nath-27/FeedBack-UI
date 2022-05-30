import { useDomEvent } from "framer-motion";
import { createContext, useState } from "react";
import feedBackData from "../Data/data";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [darkmode, setDarkmode] = useState(true)
    const [feedback, setFeedback] = useState(feedBackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const handleDelete = (id) => {
        if(window.confirm("Do you want to delete?")){
          const filteredItems = feedback.filter( item => item.id !== id )
          setFeedback(filteredItems)
        }}

    const handleThemeMode = () => {
        (darkmode)? setDarkmode(false): setDarkmode(true)
        }
    
    const handleEdit = (id, text, rating) => {
        const item = {
            id,
            text,
            rating
        }
        setFeedbackEdit({
            item: item,
            edit:true
        })
        
    }

    const updateEditedFeedback = (id, updatedObj) => {
        setFeedback(feedback.map((item)=> (
            (item.id === id) ? {...item, ...updatedObj} : item)
            ))
        setFeedbackEdit({
            item:{},
            edit:false
        })
        
    }

    

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                setFeedback,
                handleDelete,
                handleThemeMode,
                darkmode,
                setDarkmode,
                handleEdit,
                feedbackEdit,
                updateEditedFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
