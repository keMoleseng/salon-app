import styles from '../styles/staff.module.css';
import Image from 'next/image';

const staff = {
    'Lucy': '/staff11.jpg', 
    'Lebo': '/staff33.jpg', 
    'Lerato': '/staff22.jpg'
};

const images = Object.keys(staff).map((item, i) => {
    return (<div className={styles.staff_container}>
                <Image className={styles.staff_img}
                    src={staff[item]}
                    key={i} 
                    width={350}
                    height={300}
                />
                <h2 className={styles.subHeading}>{item}</h2>
            </div>
    )
})

export default function Staff() {
    return (
        <div id="our_staff" className={styles.staff}>
            <h2 className={styles.subHeading}>Meet Our Beauticians</h2>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.allStaff}>
                {images}
            </div>
        </div>

    )
}