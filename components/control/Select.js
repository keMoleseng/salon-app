import styles from '../../styles/booking.module.css';
import styled from 'styled-components';

const UserSelect = styled.select`
    color: black;
    font-size: 1em;
    font-weight: 500
    margin: 1em;
    padding: 0.05em 1em;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    width: 50%;

    font-family: 'Oswald', sans-serif;  
`

const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: start
`

export default function Select(props) {
    const { text, name, options, onChange, value } = props;


    return(
        <Span>
            <label>{text}</label>
            <UserSelect name={name} onChange={onChange} value={value} className={styles.input_select}>
                <option value="">Please select an option</option>
                {options.map(option => (
                    <option key={option.id} value={option.title}>{option.title}</option>
                ))}   
            </UserSelect>
        </Span>
    )
}