import React from 'react';
import Button from '../components/Button';
import classes from './Products.module.css';

import printer from '../assets/product icons/printer.png';
import copyMachine from '../assets/product icons/copy machine.png';
import mug from '../assets/product icons/mug.png';
import passport from '../assets/product icons/passport.png';
import portrait from '../assets/product icons/portrait.png';
import scanner from '../assets/product icons/scanner.png';

export default function Products() {
	return (
		<div className={classes.products}>
			<h1>Products</h1>
			<div>
				<Button>
					<img src={copyMachine} alt='copy machine icon' />
					Copying
				</Button>
				<Button>
					<img src={printer} alt='printer icon' />
					Printing
				</Button>
				<Button>
					<img src={scanner} alt='scanner icon' />
					Scanning
				</Button>
				<Button>
					<img src={portrait} alt='portrait icon' />
					Portraits
				</Button>
				<Button>
					<img src={mug} alt='mug icon' />
					Photo Gifts
				</Button>
				<Button>
					<img src={passport} alt='passport icon' />
					Passport Photos
				</Button>
			</div>
		</div>
	);
}
