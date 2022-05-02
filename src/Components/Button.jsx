const Button = ({ children, type, isDisabled }) => {
    return (
        <button 
            type={type}
            disabled={isDisabled}
            style= {{backgroundColor: (isDisabled)? "rgb(107 114 128 / var(--tw-bg-opacity))" : null}}
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
