import styled from "styled-components";

const Button = styled.button`

`

export default function FormButton(props) {
    const { text, type } = props;
    return(
        <Button
            type={type}
        >
            {text}
        </Button>
    )
}