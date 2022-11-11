import React, { useState } from 'react';
import api from '../../api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './contactForm.module.css';

function ContactForm({ show = true, onHide }) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
	const [messageSent, setMessageSent] = useState(false);
	const [validationErrors, setValidationErrors] = useState('');

	function handleClose() {
		onHide();
		setEmail('');
		setName('');
		setContent('');
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (!email.length | !name.length) {
			setValidationErrors('Name and Email are required.');
			return;
		}

		let payload = { email, name, content };

		try {
			api.contactPost(payload).then((res) => {
				setMessageSent(true);
			});
		} catch (error) {
			console.debug(error);
		}
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
					<Modal.Title className={`${classes.modalTitle}`}>
						{!messageSent && 'Contact Us'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{messageSent ? (
						<div className={`${classes.messageSent}`}>
							Message Sent! We will get back to you soon.
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className={`${classes.contactForm}`}
						>
							<label>
								<input
									required={true}
									placeholder="Name"
									className={`${classes.postInput}`}
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</label>
							<label>
								<input
									required={true}
									placeholder="Email"
									className={`${classes.postInput}`}
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</label>
							<label>
								<textarea
									rows={5}
									placeholder="Content"
									className={`${classes.postInput}`}
									value={content}
									onChange={(e) => {
										setContent(e.target.value);
									}}
								/>
							</label>
							{validationErrors && <div className="text-danger mt-2"> {validationErrors} </div>}
						</form>
					)}
				</Modal.Body>
				<Modal.Footer className={`${classes.contactFooter}`}>
					{messageSent ? (
						<Button
							variant="success"
							className={`${classes.sendButton}`}
							onClick={handleClose}
						>
							Close
						</Button>
					) : (
						<Button
							variant="success"
							className={`${classes.sendButton} `}
							onClick={handleSubmit}
						>
							Send Message
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ContactForm;
