const Button = ({children, className}) => {
    return (
        <button className={`border transition outline-none bg-gray-700 text-gray-100 text-xl hover:bg-gray-100 hover:text-gray-800 font-bold p-6 my-4 ${className}`}>{children}</button>

    )
}

export default Button;