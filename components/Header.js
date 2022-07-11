import Navbar from "./Navbar";
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.heading_container}>
                <h1 className={styles.ownerName}>Trevor Sorbie</h1>
            </div>
            <Navbar />
        </div>
    )
}