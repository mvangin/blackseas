import React from 'react';
import classes from './ContactUs.module.css';
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ScrollAnimation from 'react-animate-on-scroll';

function ContactUs() {
	const [contactModalShow, setContactModalShow] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	function onMessageSent() {
		setMessageSent(true);
	}

	return (
		<>
			<div className={`${classes.diagonal}`}>
				{messageSent ? (
					<div className="d-flex align-items-center flex-wrap">
						<div className={`${classes.content} w-50`}>
							<div className={`${classes.contactUsContainer}`}>
								<h3
									className={`${classes.contactHeader}  pt-4 w-75 mx-auto`}
								>
									Thank you for getting in touch with Black
									Seas Consultancy.
								</h3>
								<span className="pt-3 d-block">
									{' '}
									Your inquiry will be directed to the
									appropriate team.{' '}
								</span>
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex align-items-center justify-content-center flex-wrap">
						<div className={`${classes.content} w-50`}>
							<div className={`${classes.contactUsContainer}`}>
								<h1
									className={`${classes.contactHeader}  w-75 mx-auto`}
								>
									<ScrollAnimation
										animateOnce={true}
										animateIn={'slideInLeft'}
									>
										Learn how we can help you reach your
										<span className=""> goals </span>
									</ScrollAnimation>
								</h1>
							</div>
						</div>
						<ScrollAnimation
							animateOnce={true}
							animateIn={'slideInRight'}
						>
							<ContactForm
								handleMessageSent={onMessageSent}
								messageSent={messageSent}
								show={contactModalShow}
								onHide={() => setContactModalShow(false)}
							/>
						</ScrollAnimation>
					</div>
				)}
			</div>
		</>
	);
}

export default ContactUs;
