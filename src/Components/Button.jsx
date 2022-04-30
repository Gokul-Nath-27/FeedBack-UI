const Button = ({ children, type, isDisabled,addFeedback }) => {
    return (
        <button 
            onClick={addFeedback}
            type={type}
            disabled={isDisabled}
            style= {{backgroundColor: (isDisabled)? "gray" : null}}
            className={`w-1/6 border-none bg-rose-400 py-1 rounded-lg text-white cursor-pointer`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'text'
}

export default Button
