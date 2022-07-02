import '../contact.css';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs(){
    const form = useRef();

    const SERVICE_ID = 'service_x3aurgm';
    const TEMPLATE_ID = 'template_1t9bxim';
    const PUBLIC_KEY = 'krMgm_CqfiR1Q8z8N';

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
        <div id="contact_us" className="contact--container">
            <h1 className="contact--heading">Contact Us</h1>
            <h2>We'd love to hear from you!</h2>
            <span className='contact--address-form'>
                <span className="address--container">
                    <span className='address--heading'>
                        <i className='fa-solid fa-map-pin pin' />
                        <h3>Come Visit Us</h3>
                    </span>
                    <p className='address--body'>982 Lorem Ipsum Ave, LI</p>
                    <p className='address--body'>Cape Town</p>
                    <p className='address--body'>0083</p>
                    <p className='address--body'>SOUTH AFRICA</p>
                    <span className='brands--container'>
                        <i className='fa-brands fa-pinterest brand' />
                        <i className='fa-brands fa-instagram brand' />
                        <i className='fa-brands fa-facebook brand' />
                        <i className='fa-brands fa-twitter brand' />
                    </span>
                </span>
                <span className="form--container">
                    <form ref={form} onSubmit={sendEmail}>
                        
                            <input 
                                    type="text" 
                                    name="user_name"
                                    placeholder='Name'
                                    className='name input-box'
                                    required
                                    />
                            <input 
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    className='email input-box'
                                    required
                            />
                       
                        <textarea id="opinion"
                                    name="message"
                                    placeholder='Message'
                                    form='contactUs'
                                    className='textarea'
                                    required
                        /> 
                        <button id ="btn" type='submit' className='submit-btn'>
                            SEND
                        </button>
                    </form>
                </span>
            </span>
            <span className='footer--closing'> 2022 <i className='fa-solid fa-copyright' /> Trevor Sorbie. All Rights Reserved.</span>
        </div>
    )
}