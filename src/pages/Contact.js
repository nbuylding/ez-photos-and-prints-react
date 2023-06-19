import React, {useState} from 'react';
import logo from '../assets/Logo.png';
import classes from './Contact.module.css';

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function submitHandler(e) {
		e.preventDefault();
		setSubmitted(true);
	}

	return (
		<div>
			<form className={classes.form} onSubmit={submitHandler}>
				<label htmlFor='name'>Name: </label>
				<input type='text' id='name' />
				<label htmlFor='email'>Email: </label>
				<input type='email' id='email' />
				<textarea placeholder='Enter message here...'></textarea>
				<button type='submit' className={classes.button}>
					Submit
				</button>
				{submitted && <p>Submitted!</p>}
			</form>
			<img src={logo} alt='site logo' className={classes.logo} />
		</div>
	);
}
