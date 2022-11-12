import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e7fe2340-3edd-11ed-a10f-d1a38bd15d37";

const ContactForm = () => {
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
        <Card id="contact">
            <h2>Contact me</h2>
            <Form action={FORM_ENDPOINT} method="POST" target="_blank" id="contact-form">
                <input type="text" className="form-input form-control" id="form-name" placeholder="Your name" name="name" value={name} onChange={handleChange} />
                <input type="email" className="form-input form-control" id="form-email" placeholder="Your email" name="email" value={email} onChange={handleChange} />
                <div style={{ display: "flex" }}>
                    <input type="checkbox" className="form-checkbox form-check" name="companyCheckbox" checked={companyCheckbox} onChange={handleChange} />
                    <label htmlFor="companyCheckbox" className="form-check-label">
                        Are you reaching out on behalf of a company?
                    </label>
                </div>
                {companyCheckbox && <input type="text" className="form-input form-control" id="form-company" placeholder="Your company" name="company" value={company} onChange={handleChange} />}
                <textarea className="form-input form-control" id="form-message" placeholder="Your message" name="message" value={message} onChange={handleChange} />
                <button type="submit" className="form-button btn btn-dark" id="form-submit">
                    Submit
                </button>
            </Form>
        </Card>
    );
};

export default ContactForm;
