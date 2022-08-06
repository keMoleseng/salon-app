export default function Button(props) {
    const {name, value, text} = props;
    return(
        <button
            name={name}
            value={value}
            type={type}
        >
            {text}
        </button>
    )
}