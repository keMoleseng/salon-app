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
        <div className="contact--container">
            <h1 className="contact--heading">Contact Us</h1>
            <span>
                <span className="address"></span>
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
        </div>
    )
}