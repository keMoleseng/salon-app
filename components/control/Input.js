import styles from '../../styles/booking.module.css';

export default function Input(props) {
    const {text, name, placeholder, type, value, onChange} = props;
    
    return(
        <>
            <label>{text}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                form="appointments"
                className={styles.input_select}
                required
            />
        </>
    )
} 