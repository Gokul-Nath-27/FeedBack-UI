import FeedBackItem from "./FeedBackItem"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

const FeedBackList = () => {
    const { feedback, handleDelete, darkmode} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p className="text-center relative top-16">NO FEEDBACK YET!</p>
    }
    return (
        <AnimatePresence> 
            { 
                feedback.map(({id, text, rating}) => {
                    return (
                        <motion.div
                            key={id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity:0}}
                        >
                            <FeedBackItem 
                                key={id} 
                                id={id}
                                text={text} 
                                rating={rating}
                                handleDelete={handleDelete}
                                darkmode={darkmode}
                            />
                        </motion.div>
                        )}) 
                        }
        </AnimatePresence>
        
    )
    
} 

export default FeedBackList
