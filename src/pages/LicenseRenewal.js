import React from 'react';
import Accordion from '../components/Accordion';

import classes from './LicenseRenewal.module.css';

export default function LicenseRenewal() {
	const accordionData = [
		{
			question: 'Can I renew my license before the expiry date?',
			content: `Driver's licence can only be renewed within 30 days of the expiration date.`,
		},
		{
			question: `What do I need to renew my driver's licence?`,
			content: `You only need one Passport Size photo (no later than 6 months), and two copies of your driver's licence (both sides).`,
		},
		{
			question: 'Does my photo need to be signed by a JP?',
			content: `No.`,
		},
		{
			question: 'How do I start the process?',
			content: `Come see us. We are located at 12 Greendale Blvd, Unit 2, Greendale, St Catherine (2km from the tax office).`,
		},
		{
			question: 'How do I pay for this service?',
			content: `You can pay by cash or Bank Transfer.`,
		},
	];

	return (
		<div className={classes.license}>
			<h1>License Renewal</h1>
			<p className={classes.info}>
				You can renew your driver's licence from the comfort of our
				office. Avoid the hassle of the Tax Office. Schedule a pickup of
				your licence. You can do so by calling 876-488-1300 or email:
				ezphotosprints@gmail.com. Follow us on Instagram or Facebook for
				all the latest updates.
			</p>
			<div className={classes.accordion}>
				{accordionData.map(({question, content}) => (
					<Accordion
						key={question}
						question={question}
						content={content}
					/>
				))}
			</div>
		</div>
	);
}
