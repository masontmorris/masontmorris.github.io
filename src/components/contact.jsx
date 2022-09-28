import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const FORM_ENDPOINT = "";

const contactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    // if (submitted) {
    //     return (
    //         <Container>
    //             <h1>Thank you! I'll be in touch with you as soon as possible.</h1>
    //         </Container>
    //     );
    // }
    return (
        <Container>
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit()} method="POST" target="_blank" className="contact-form">
                <input type="text" className="contact-form-input" id="form-name" placeholder="Your name" name="name" />
            </form>
        </Container>
    );
};

export default contactForm;
