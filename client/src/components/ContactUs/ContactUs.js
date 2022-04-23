import React from "react"
import Button from "react-bootstrap/Button"
import classes from "./ContactUs.module.css"
import { useState } from "react"
import ContactForm from "../ContactForm/ContactForm"

function ContactUs() {

    const [contactModalShow, setContactModalShow] = useState(false);

    return (
        <>
            <div className={`${classes.diagonal}`}>
                <div className={`${classes.content} mt-4 pt-4`}>
                    <div className={`${classes.contactUsContainer}`}>
                        <h1 className={`${classes.contactHeader}`}>
                            Learn how we can help you reach your
                            <span className=""> goals </span>
                        </h1>
                        <Button
                            onClick={() => setContactModalShow(true)}
                            variant="outline-success"
                            className="w-25 mt-4" >
                            <b> Get in touch </b>
                        </Button>
                    </div>
                </div>
            </div>
            <ContactForm
                show={contactModalShow}
                onHide={() => setContactModalShow(false)}
            />
        </>
    )
}

export default ContactUs;