import styles from '../styles/contact.module.css';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

export default function ContactUs(){
    const form = useRef();

    const SERVICE_ID = 'service_qr6wjnq';
    const TEMPLATE_ID = 'template_1t9bxim';
    const PUBLIC_KEY = 'krMgm_CqfiR1Q8z8N';
    console.log(form.current)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };

    return(
        <div id="contact_us" className={styles.contact_container}>
            <h1 className={styles.contact_heading}>Contact Us</h1>
            <h2>We'd love to hear from you!</h2>
            <span className={styles.contact_address_form}>
                <span className={styles.address_container}>
                    <span className={styles.address_heading}>
                        <i className={`fa-solid fa-map-pin ${styles.pin}`} />
                        <h3>Come Visit Us</h3>
                    </span>
                    <p className={styles.address_body}>982 Lorem Ipsum Ave, LI</p>
                    <p className={styles.address_body}>Cape Town</p>
                    <p className={styles.address_body}>0083</p>
                    <p className={styles.address_body}>SOUTH AFRICA</p>
                    <span className={styles.brands_container}>
                        <i className= {`fa-brands fa-pinterest ${styles.brand}`} />
                        <i className={`fa-brands fa-instagram ${styles.brand}`} />
                        <i className={`fa-brands fa-facebook ${styles.brand}`} />
                        <i className={`fa-brands fa-twitter ${styles.brand}`} />
                    </span>
                </span>
                <span className={styles.form_container}>
                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        
                            <input 
                                    type="text" 
                                    name="user_name"
                                    placeholder='Name'
                                    className={`${styles.name} ${styles.input_box}`}
                                    required
                                    />
                            <input 
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    className={`${styles.email} ${styles.input_box}`}
                                    required
                            />
                       
                        <textarea id="opinion"
                                    name="message"
                                    placeholder='Message'
                                    className={styles.textarea}
                                    required
                        /> 
                        <button id ="btn" type='submit' className={styles.submit_btn} value='Send'>
                            SEND
                        </button>
                    </form>
                </span>
            </span>
            <Footer />
            {/* <span className={styles.footer_closing}> 2022 <i className='fa-solid fa-copyright' /> <a className={styles.linkedIn} href='https://www.linkedin.com/in/moleseng-mokgosi-ab506b11b/' >Moleseng Mokgosi</a>. All Rights Reserved.</span> */}
        </div>
    )
}