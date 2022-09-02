import styles from '../styles/treatment.module.css'
import Image from 'next/image';
import Controls from './control/Controls';

const TREATMENTS = [
    { treatment: 'Hair', img: '/hair_dryer (2).png', link: '/hair' },
    { treatment: 'Make Up', img: '/kiss.png', link: '/makeup' },
    { treatment: 'Spa', img: '/cloud (1).png', link: '/spa' }
]

const logosImg = TREATMENTS.map((treatment, i) => {
    return (<div className={styles.treatment_container}>
                <span className={styles.logo_container} key={i}>
                    <Image 
                        src={treatment.img} 
                        alt="Treatments logo"
                        width={85}
                        height={85}   
                    />
                </span>
                <Controls.LinkButton
                    href={treatment.link}
                    text={treatment.treatment}
                />
            </div>)
})

export default function Treatment() {
    return (
        <div id="treatments" className={styles.treatments}>
            <h2 className={styles.subHeading} >Choose a Treatment</h2>
            <span className={styles.all_treatments}>
                {logosImg}
            </span>
        </div>
    )
}