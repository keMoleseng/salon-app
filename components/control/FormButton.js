import styled from "styled-components";

const Button = styled.button`
    color: ${ props => props.primary ? 'snow': '#cf9a78' };
    font-size: 1em;
    font-weight: 600;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid #cf9a78;
    border-radius: 3px;
    background: ${ props => props.primary ? '#cf9a78' : 'transparent'};
    width: auto;
    cursor: pointer;

    &:hover {
        color: ${ props => props.primary ? '#cf9a78' : 'snow' };
        background: ${ props => props.primary ? 'transparent' : '#cf9a78'};
    }

`

export default function FormButton(props) {
    const { text, type, ...other } = props;
    return(
        <Button
            type={type}
            {...other}
        >
            {text}
        </Button>
    )
}