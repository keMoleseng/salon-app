import styled from "styled-components"

export default function ValidityMsg(props){
    const { error } = props

    return (
        <Container>
            <Text>{error}</Text>
        </Container>
    )
}

const Container = styled.div`
    border: 2px solid #cf9a78;
    background-color: white;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding: 0 10px;
    width: fit-content;
    @media screen and (max-width: 600px) {
        width: fit-content;
        align-self: center;
        padding: 0 15px;
    }
`

const Text = styled.text`
    font-size: 0.8rem;
    
`