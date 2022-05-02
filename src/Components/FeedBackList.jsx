import FeedBackItem from "./FeedBackItem"
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"

const FeedBackList = ({feedBack, handleDelete, darkmode}) => {
    if (!feedBack || feedBack.length === 0) {
        return <p className="text-center relative top-16">NO FEEDBACK YET!</p>
    }
    return (
        <AnimatePresence> 
            { 
                feedBack.map(({id, text, rating}) => {
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

FeedBackList.propTypes = {
    feedBack: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired
            }
        )
    )
}

export default FeedBackList
