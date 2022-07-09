import styles from '../styles/header.module.css'

export default function Navbar() {
    return(
        <>
            <ul className='nav' >
                <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#hero">Home</a></li>
                <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#treatmemts">Treatments</a></li>
                <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#our_staff">Our Staff</a></li>
                <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#about_us">About Us</a></li>
                <li className={styles.nav_item}><a className={styles.nav_itemConnection} href="#contact_us">Contact Us</a></li>
            </ul>
        </>
    )
}