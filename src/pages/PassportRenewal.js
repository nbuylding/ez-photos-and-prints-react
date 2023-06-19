import React from 'react';
import Accordion from '../components/Accordion';

import classes from './PassportRenewal.module.css';

export default function PassportRenewal() {
	const accordionData = [
		{
			question: 'Who can use this service?',
			content:
				'Anyone whose Passport is expired or will expire in 6 months or less. Anyone whose an adult and has a Passport issued after September 03, 2001.',
		},
		{
			question: 'Who should NOT use this service?',
			content:
				'Anyone whose Passport has been reported lost or stolen. Anyone whose Passport is damaged. Anyone who has legally changed their name or marital status since their current Passport was issued.',
		},
		{
			question: 'The Process',
			content: `We guide you through an approximately 10 mins process of information gathering, and then we'll take care of the rest!`,
		},
		{
			question: 'In-Office Application Assistance',
			content:
				'Eliminate multi-stops and save time! Taxo Express provides one-stop assistance to renew Adult Jamaican Passports. Just take the required documents and get your passport photos taken on the spot. In-office application is recommended for less tech-savvy applicants or persons wishing to utilize alternate payment options.',
		},
		{
			question:
				'What are the PICA fees to renew my Jamaican Passport Online?',
			content:
				'PICA fees to renew your Adult Passport online: Regular 7 Business days: J$6,500 or 3 Business days: J$9,500',
		},
		{
			question: 'What do I need to renew my Jamaican Passport Online?',
			content:
				'You will require the following: Your current passport, your birth certificate, and a digital passport size photograph (Included with your package)',
		},
		{
			question:
				'Will I be charged a delivery fee, if I apply online and opt to have my passport delivered?',
			content:
				'Yes, you will be charged a standard island-wide delivery fee of J$1,800 islandwide.',
		},
		{
			question: 'Is there a service fee and what is the cost?',
			content: `Yes, there's a convenience fee of J$2500 and is subject to change at any time.`,
		},
		{
			question:
				'I have a handwritten blue passport which I received before September 2001. Can I renew this passport online?',
			content: `Unfortunately, you will not be able to renew your passport online. Only Adult Jamaican passports issued after September 2001 can be renewed online. You should visit a PICA Office or Jamaican Overseas Consulate/Embassy/Mission to renew your Handwritten Blue passport. You may obtain the application form and requirements from PICA's website.`,
		},
		{
			question: 'Can I come in-office to do this service?',
			content: `Yes. We are located at 12 Greendale Blvd, Unit 2, Greendale, St Catherine (2km from the tax office).`,
		},
		{
			question: 'How soon will I get my passport if I apply online?',
			content: `The fastest online service is three (3) business days.`,
		},
	];

	return (
		<div className={classes.passport}>
			<h1>Passport Renewal</h1>
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
