import styles from '../styles/about.module.css';
import Image from 'next/image';

export default function About(){
    return(
        <>
            <span id="about_us" className={styles.about_container}>
                <h1 className={styles.heading}>About Us</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper justo sit amet nisi aliquam convallis. In scelerisque leo tortor, at tincidunt elit sollicitudin in. Suspendisse odio lacus, venenatis vel ullamcorper vel, convallis nec enim. Proin posuere lorem vitae magna congue, non ultricies nibh tempus. Duis commodo vulputate mattis. Pellentesque orci sem, feugiat quis elementum vitae, venenatis non nulla. Aliquam a augue nec mauris viverra ullamcorper ut eget tortor.</p>
                <Image src="/image22.jpg" width={750} height={200} />
            </span>
        </>
    )
}