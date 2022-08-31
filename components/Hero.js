import styles from "../styles/hero.module.css";
import Image from 'next/image';
import styled from "styled-components";

const Button = styled.button`
    color: white;
    font-size: 1.05em;
    font-weight: 500;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
    background: transparent;
    width: auto;
    cursor: pointer
`

export default function Hero() {
    return (
        <div id="#hero" className={styles.hero_container}>
            <div className={styles.hero_image}>
                <Image 
                    src="/image.jpg"
                    alt=""
                    width={650}
                    height={200}
                    />
                <div className={styles.header_banner} >
                    <p className={styles.heading}>BEAUTY & HAIR</p>
                    <p className={styles.banner_body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut placerat est. Mauris gravida erat massa, et feugiat augue tempor eget.</p>  
                    <a href="#treatments"><Button type='button' >Treatments</Button></a>
                </div>
            </div>
            <div className={styles.hero_description}>
                <h1 className={styles.description_heading}>The Beauty Bar</h1>
                <p className={styles.description_body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis augue nisl. Sed faucibus neque vel nibh fermentum, nec consectetur nisl blandit. </p>
                
            </div>
        </div>
    )
}