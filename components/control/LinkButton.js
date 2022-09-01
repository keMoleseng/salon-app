import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;
    font-size: 1em;
    font-weight: 500;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
    background: transparent;
    width: 50%;
    cursor: pointer;
    &:hover {
        color: #cf9a78;
        background-color: white;
    }
`

export default function LinkButton(props) {
    const { href, text } = props;

    return (
        <Link href={href}>
            <StyledButton type='button'>{text}</StyledButton> 
        </Link>
    )
}