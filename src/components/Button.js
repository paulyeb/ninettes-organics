const Button = ({children, className}) => {
    return (
        <button className={`border outline-none bg-gray-700 text-gray-100 text-xl hover:bg-gray-600 active:bg-gray-100 active:text-gray-800 font-bold p-6 mx-8 my-4 ${className}`}>{children}</button>

    )
}

export default Button;