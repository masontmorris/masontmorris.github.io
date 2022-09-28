import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e7fe2340-3edd-11ed-a10f-d1a38bd15d37";

const contactForm = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        companyCheckbox: false,
        company: "",
        message: "",
    });
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };
    const { name, email, companyCheckbox, company, message } = formValue;

    return (
        <Container id="contact">
            <form action={FORM_ENDPOINT} method="POST" target="_blank">
                <input type="text" className="form-input" id="form-name" placeholder="Your name" name="name" value={name} onChange={handleChange} />
                <input type="email" className="form-input" id="form-email" placeholder="Your email" name="email" value={email} onChange={handleChange} />
                <label>
                    Are you reaching out on behalf of a company?
                    <input type="checkbox" className="form-checkbox" name="companyCheckbox" checked={companyCheckbox} onChange={handleChange} />
                </label>
                {companyCheckbox && <input type="text" className="form-input" id="form-company" placeholder="Your company" name="company" value={company} onChange={handleChange} />}
                <textarea className="form-input" id="form-message" placeholder="Your message" name="message" value={message} onChange={handleChange} />
                <button type="submit" className="form-button" id="form-submit">
                    Submit
                </button>
            </form>
        </Container>
    );
};

export default contactForm;
