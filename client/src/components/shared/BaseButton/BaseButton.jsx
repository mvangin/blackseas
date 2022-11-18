import Button from 'react-bootstrap/Button';
import React from 'react';
import classes from './BaseButton.module.css';

function BaseButton({ buttonText, variant, onClick, arrow, className}) {
	return (
		<Button
			onClick={onClick}
			variant={variant ?? 'none'}
			className={`${classes.link}  ${className}`}
		>
			<span className={`${classes.linkText}`}> {buttonText} </span>{' '}
			{arrow && <span className={classes.arrow}> &#x2192; </span>}
		</Button>
	);
}

export default BaseButton;
