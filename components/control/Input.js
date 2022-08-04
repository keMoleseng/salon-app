export default Input(props) {
    const {text, name, placeholder, type} = props;
    
    return(
        <>
            <label>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                form="appointments"
                required
            />
        </>
    )
} 