import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        if(document.querySelector("form input.user-input").value !== ""){
            emailjs.sendForm('service_xafy41a', 'template_leltwb7', form.current, 'TSmL_Ezqv323M6J3q // i have stopped it')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                document.querySelector("form input.user-input").value = "";
        }
    };

    return (
        <div className='contact'>
            <div className="left-c">
                <div>
                    <span className='stroke-text'>ready to </span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body </span>
                    <span className='stroke-text'>with us?</span>
                </div>
            </div>
            <div className="right-c">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='email' name='user-email' className='user-input' placeholder='Enter your Email Address here' />
                    <button type="submit" className='btn'>join now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
