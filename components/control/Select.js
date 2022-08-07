import styles from '../../styles/booking.module.css';

export default function Select(props) {
    const { text, name, options, onChange, value } = props;


    return(
        <>
            <label>{text}</label>
            <select name={name} onChange={onChange} value={value} className={styles.input_select}>
                <option value="">Please select an option</option>
                {options.map(option => (
                    <option key={option.id} value={option.title}>{option.title}</option>
                ))}   
            </select>
        </>
    )
}