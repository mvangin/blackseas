import React, { useState } from 'react';
import api from '../../api';
import BaseButton from '../shared/BaseButton/BaseButton';
import classes from './contactForm.module.css';

function ContactForm({ messageSent, handleMessageSent}) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
	const [validationErrors, setValidationErrors] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		if (!email.length | !name.length) {
			setValidationErrors('Name and Email are required.');
			return;
		}

		let payload = { email, name, content };

		try {
			api.contactPost(payload).then((res) => {
				handleMessageSent();
			});
		} catch (error) {
			console.debug(error);
		}
	}

	return (
		<div id="contact-form" className={`${classes.contactFormContainer}`}>
			<div>
				<h3 className="text-white">{!messageSent && 'Contact Us'}</h3>
				<div>
					{!messageSent &&
						<form
							onSubmit={handleSubmit}
							className={`${classes.contactForm}`}
						>
							<div className="d-flex justify-content-around">
								<label>
									<input
										required={true}
										placeholder="Full Name"
										className={`${classes.postInput} ${classes.postInputSmall}`}
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
										className={`${classes.postInput} ${classes.postInputSmall}`}
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</label>
							</div>
							<label>
								<textarea
									rows={5}
									placeholder="Message"
									className={`${classes.postInput}`}
									value={content}
									onChange={(e) => {
										setContent(e.target.value);
									}}
								/>
							</label>
							{validationErrors && (
								<div className="text-danger mt-2">
									{validationErrors}
								</div>
							)}
						</form>}
					
				</div>
				<div className={`${classes.contactFooter}`}>
					{!messageSent && (
						<BaseButton
							onClick={handleSubmit}
							variant="primary"
							className="text-white"
							buttonText={'Get in touch'}
							arrow="true"
						></BaseButton>
					)}
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
