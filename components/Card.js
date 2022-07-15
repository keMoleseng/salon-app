import styles from '../styles/card.module.css';
import Image from "next/image";

const treatments = [
    {
        title: 'Hair Care',
        img: '/hair_dryer (2).png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pulvinar sem, eget consectetur tortor. Fusce rhoncus iaculis iaculis.',
        price: 'R350 - R500'

    },
    {
        title: 'Make Up',
        img: '/kiss.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pulvinar sem, eget consectetur tortor. Fusce rhoncus iaculis iaculis.',
        price: 'R150 - R250'
    },
    {
        title: 'Spa Treatment',
        img: '/cloud (1).png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pulvinar sem, eget consectetur tortor. Fusce rhoncus iaculis iaculis.',
        price: 'R500 - R1000'
    }

]

const card = treatments.map((treatment, i) => (
    <div className={styles.card_container}>
       <div className={styles.img_bg}>
            <Image
                src = {treatment.img}
                alt={treatment.title}
                width={90}
                height={90}
            />
        </div>
        <h4 className={styles.card_title}>{treatment.title}</h4>
        <p className={styles.card_description}>{treatment.description}</p>
        <p className={styles.card_price}>{treatment.price}</p>
        <span>Book Now</span>
    </div>
))

export default function Card() {
    return (
        <div className={styles.cards}>
           {card}  
            
        </div>
    )
}