import styles from '../styles/header.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;

    @media screen and (max-width: 600px) {
        padding: 0;
        margin: 0;
    }
`
const Button = styled.button`
    background-color: transparent;
    color: black;
    font-size: 30px;
    justify-self: center;
    line-height: 70px;
    border: none;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 600px) {
        display: block;
    }
`
const HeadingContainer = styled.div`
    position: relative; 
    padding: 0.25rem 0rem;
    display: flex;
    justify-content: center;
    border-bottom: 0.1px solid #cf9a78;
    width:100%;
    
    @media screen and (max-width: 600px) {
        padding: 0;
        margin: 0;
        h1{
            margin-top: 0;
            padding-top: 0;
            margin-left: 1rem;
            font-size: 1.3rem;
        }
        Button {
            margin-top: 0;
            padding-top: 0;
            margin-left: auto;
        }

    }
`

export default function Navbar({home}) {
    const [show, setShow] = useState(false);

    return(
        <Header className={styles.header}>
            <HeadingContainer className={styles.heading_container}>
                <h1 className={styles.ownerName}><Link href='/'><a className={styles.link}> Trevor Sorbie</a></Link></h1>
                <Button onClick={() => setShow(!show)}>
                        <i className='fas fa-bars'></i>
                </Button>
            </HeadingContainer>
            { home ?(
                <>
                    <ul className={show ? styles.navExpanded : styles.nav}>
                        <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#hero">Home</a></li>
                        <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#treatments">Treatments</a></li>
                        <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#our_staff">Our Staff</a></li>
                        <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#about_us">About Us</a></li>
                        <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#contact_us">Contact Us</a></li>
                    </ul>
                </>
            )
            :
            (
                <Link href='/'>
                    <ul className={styles.nav} >
                        <li className={styles.nav_item}>
                            <i className="fas fa-angle-double-left"/>
                            <a className={styles.nav_itemConnection}> Take Me Home</a>
                        </li>
                    </ul>
                </Link>
            )
        }
        </Header>
    )
}