import React from 'react';
import classes from './FooterNavigation.module.css';

export default function FooterNavigation() {
	return (
		<footer>
			<div>
				<div className={classes.footContainer}>
					<div>
						<h3>Store Address</h3>
						<h4>
							12 Greendale Blvd <br />
							Audreens Plaza, Unit 2 <br />
							Greendale, St Catherine
						</h4>
					</div>
					<div>
						<h3>Phone Number</h3>
						<h4>876-488-1300</h4>
					</div>
					<div>
						<h3>Email</h3>
						<a
							href='mailto: ezphotosprints@gmail.com'
							className={classes.emailLink}
						>
							ezphotosprints@gmail.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
