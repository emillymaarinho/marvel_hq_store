

const Input = ({ type, text, name, value, placeholder, handleChange }) => {
    return (
        <div >
            <label for={name}>{text}</label>
            <input autoComplete="off" maxLength={30} type={type} id={name} value={value} placeholder={placeholder}
                onChange={handleChange} name={name}/>
        </div>
    )
}

export default Input