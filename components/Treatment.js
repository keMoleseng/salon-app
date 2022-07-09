import styles from '../styles/treatment.module.css'
import Image from 'next/image';
import Link from 'next/link';

const TREATMENTS = {
    'Hair': '/hair_dryer (2).png',
    'Make Up': '/kiss.png',
    'Spa':'/cloud (1).png'
}

const logosImg = Object.keys(TREATMENTS).map((treatment, i) => {
    return <div id="treatments" className={styles.treatment_container}>
                <span className={styles.logo_container}>
                    <Image 
                        src={TREATMENTS[treatment]} 
                        alt="Treatments logo"
                        width={90}
                        height={90}
                        key={i}
                    />
                </span>
                <Link href="/booking" className={styles.treatment_btn}><a>{treatment}</a></Link>
            </div>
})

export default function Treatment() {
    return (
        <div className={styles.treatments}>
            <h2 className={styles.subHeading} >Our Treatments</h2>
            <span className={styles.all_treatments}>
                {logosImg}
            </span>
        </div>
    )
}