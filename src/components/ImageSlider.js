import React, {useState} from 'react';
import classes from './ImageSlider.module.css';

const sliderData = [
	{
		image: '/welcome.png',
		id: 1,
		alt: 'welcome image',
	},
	{
		image: '/xmas promo.png',
		id: 2,
		alt: 'christmas promotional image',
	},
	{
		image: '/promo1.png',
		id: 3,
		alt: 'promotional image',
	},
];

export default function ImageSlider() {
	const [current, setCurrent] = useState(0);
	const length = sliderData.length;

	function previousSlideHandler() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	function nextSlideHandler() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	if (sliderData.length <= 0) {
		return null;
	}

	return (
		<section className={classes.slider}>
			<button onClick={previousSlideHandler} className={classes.left}>
				&larr;
			</button>
			<button onClick={nextSlideHandler} className={classes.right}>
				&rarr;
			</button>

			{sliderData.map((slide, index) => {
				return (
					<div
						key={index}
						className={index === current ? 'slide active' : 'slide'}
					>
						{index === current && (
							<img src={slide.image} alt={slide.alt} />
						)}
					</div>
				);
			})}
		</section>
	);
}
