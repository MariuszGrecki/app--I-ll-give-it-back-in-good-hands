import React from 'react';
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact__background"></div>
                <ContactForm/>
            </div>
            <div className="footer">
                <div className="footer__text">Copyright by Coders Lab</div>
                <div className="footer__facebook"></div>
                <div className="footer__instagram"></div>
            </div>
        </>
    );
};

export default Contact;