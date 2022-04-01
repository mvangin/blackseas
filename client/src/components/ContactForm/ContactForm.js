import React, { useState } from 'react'
import api from '../../api'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import classes from "./contactForm.module.css"

function ContactForm({ show = true, onHide }) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    function handleClose() {
        setEmail("")
        setName("")
        setContent("")
        onHide();
    }

    function handleSubmit(e) {
        e.preventDefault();

        let payload = { email, name, content }
        api.contactPost(payload)
    }

    return (
        <Modal
            onHide={handleClose}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact Us
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className={`${classes.contactForm}`} >
                    <label>
                        <input
                            placeholder="Email"
                            className={`${classes.postInput}`}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }} />
                    </label>
                    <label>
                        <input
                            placeholder="Name"
                            className={`${classes.postInput}`}
                            value={name}
                            onChange={(e) => { setName(e.target.value); }} />
                    </label>
                    <label>
                        <textarea
                            placeholder="Content"
                            className={`${classes.postInput}`}
                            value={content}
                            onChange={(e) => { setContent(e.target.value); }} />
                    </label>
                </form>

            </Modal.Body>
            <Modal.Footer
                className={`${classes.contactFooter}`}>
                <Button
                    variant={"outline-primary"}
                    onClick={handleSubmit}>
                    Send Message</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactForm