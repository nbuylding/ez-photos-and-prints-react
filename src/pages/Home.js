import React from 'react';
import ImageSlider from '../components/ImageSlider';
import classes from './Home.module.css';

export default function Home() {
	return (
		<div className={classes.home}>
			<h1>Welcome to EZ Photos & Prints!</h1>
			<ImageSlider />
		</div>
	);
}
