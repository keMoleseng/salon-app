import styled from 'styled-components';

export default function Input(props) {
    const {text, name, placeholder, type, value, onChange} = props;
    
    return(
        <Span>
            <label>{text}</label>
            <UserInput
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                form="appointments"
                required
            />
        </Span>
    )
} 

const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: 'Oswald', sans-serif; 
    @media screen and (max-width: 600px) {
        width: auto;
        align-self: center;
    } 
`
const UserInput = styled.input`
    color: black;
    font-size: 1em;
    font-weight: 500
    margin: 1em;
    padding: 0.05em 1em;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    width: 125%;
    font-family: 'Oswald', sans-serif; 
    @media screen and (max-width: 600px) {
        width: auto;
        align-self: center;
    }  
`
