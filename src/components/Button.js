import React from 'react';
import classes from './Button.module.css';

export default function Button(props) {
	function chatButtonHandler() {
		window.open('https://wa.me/18764881300', '_blank');
	}
	return (
		<button
			className={classes.button}
			role='link'
			onClick={chatButtonHandler}
		>
			{props.children}
		</button>
	);
}
