import styles from '../styles/header.module.css';
import Link from 'next/link';

export default function Navbar({home}) {
    return(
        <div className={styles.header}>
            <div className={styles.heading_container}>
                <h1 className={styles.ownerName}>Trevor Sorbie</h1>
            </div>
            { home ?(

                <ul className={styles.nav} >
                    <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#hero">Home</a></li>
                    <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#treatmemts">Treatments</a></li>
                    <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#our_staff">Our Staff</a></li>
                    <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#about_us">About Us</a></li>
                    <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#contact_us">Contact Us</a></li>
                </ul>
            )
            :
            (
                <ul className={styles.nav} >
                    <li>
                        <Link href='/'>
                        <li className={styles.nav_item}>
                            <i className='fas fa-angle-double-left'/>
                            <a className={styles.nav_itemConnection}> Take Me Home</a>
                        </li>
                        </Link>
                    </li>
                </ul>
            )
        }
        </div>
    )
}