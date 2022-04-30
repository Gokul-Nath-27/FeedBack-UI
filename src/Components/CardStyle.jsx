import PropTypes from 'prop-types'

const CardStyle = ({children, darkmode}) => {
    return (
        <div 
            className="mb-8 max-w-screen-md relative container bg-slate-100 sm:mx-auto text-center text-black p-10 rounded-xl"
            style={{
                backgroundColor:(darkmode)? "rgba(0,0,0,0.4)": "#fff",
                color: (darkmode)? "#fff": "#000"
            }}
            >
            {children}
        </div>
    )
}

CardStyle.defaultProps = {
    darkmode: true
}
CardStyle.propTypes = {
    children: PropTypes.node.isRequired,
    darkmode: PropTypes.bool
}
export default CardStyle
