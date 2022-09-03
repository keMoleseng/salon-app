import styled from 'styled-components';

export default function Footer(){
    return (
        <Text>This project was designed and coded by <Anchor href='https://www.linkedin.com/in/moleseng-mokgosi-ab506b11b/'>Moleseng Mokgosi</Anchor></Text>
    )
}

const Text = styled.p`
    font-size: 0.9rem;
    z-index: 999;
`

const Anchor = styled.a`
    text-decoration: none;
`