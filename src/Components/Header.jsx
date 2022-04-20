import PropTypes from 'prop-types'

const Header = ({ text }) => {
    return (
        <>
            <header 
                className="mb-8 font-bold text-center block bg-opacity-70 bg-black text-brightPink text-2xl p-3"
            >   
            {text}
            </header>
        </>
        

    )
}

Header.defaultProps = {
    text : "FeedBack UI"
}

Header.prototyes = {
    text : PropTypes.string
}
export default Header
