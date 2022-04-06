import React, { useState } from 'react'
import api from '../../api'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import classes from "./contactForm.module.css"

function ContactForm({ show = true, onHide }) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    function handleClose() {
        setEmail("")
        setName("")
        setContent("")
        onHide();
    }

    function handleSubmit(e) {
        e.preventDefault();

        let payload = { email, name, content }
        api.contactPost(payload).then(res => {
            setMessageSent(true);
        })
    }

    return (
        <div id="contact-form">
            <Modal
                onHide={handleClose}
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className={`${classes.modalTitle}`} >
                    {!messageSent && "Contact Us"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {messageSent ?
                        <div className={`${classes.messageSent}`}>
                            Message Sent! We will get back to you soon.</div>
                        :
                        <form onSubmit={handleSubmit} className={`${classes.contactForm}`} >
                            <label>
                                <input
                                    placeholder="Name"
                                    className={`${classes.postInput}`}
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); }} />
                            </label>
                            <label>
                                <input
                                    placeholder="Email"
                                    className={`${classes.postInput}`}
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); }} />
                            </label>
                            <label>
                                <textarea
                                    rows={5}
                                    placeholder="Content"
                                    className={`${classes.postInput}`}
                                    value={content}
                                    onChange={(e) => { setContent(e.target.value); }} />
                            </label>
                        </form>}

                </Modal.Body>
                <Modal.Footer
                    className={`${classes.contactFooter}`}>
                    {messageSent ? <Button
                        className={`${classes.sendButton}`}
                        onClick={handleClose}>
                        Close </Button> :
                        <Button
                            className={`${classes.sendButton}`}
                            onClick={handleSubmit}>
                            Send Message</Button>}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactForm