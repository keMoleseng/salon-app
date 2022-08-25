import styled from "styled-components";

const PopupBox = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`

const Box = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: snow;
    border-radius: 4px;
    padding: 20px;
    border: 2px solid #cf9a78;
    overflow: auto;
`

const Span = styled.span`
    content: 'x';
    cursor: pointer;
    position: fixed;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ff605c;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    
    font-size: 15px;
`

export default function Popup(props) {
    const { content, onClick } = props;
    return (
        <PopupBox>
            <Box>
                <Span onClick={onClick}>x</Span>
                {content}
            </Box>
        </PopupBox>
    )
}