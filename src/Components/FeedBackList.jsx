import FeedBackItem from "./FeedBackItem"
import PropTypes from 'prop-types'

const FeedBackList = ({feedBack, handleDelete, darkmode}) => {

    return (!feedBack || feedBack.length === 0)? 
        <p className="text-center relative top-16">NO FEEDBACK YET!</p>
        : feedBack.map(({id, text, rating}) => {
            return <FeedBackItem 
                        key={id} 
                        id={id}
                        text={text} 
                        rating={rating}
                        handleDelete={handleDelete}
                        darkmode={darkmode}
                    />
            } ) 
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
