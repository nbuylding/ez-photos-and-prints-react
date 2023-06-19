import React, {useState} from 'react';
import classes from './Accordion.module.css';

export default function Accordion({question, content}) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={classes.accordionItem}>
			<div
				className={classes.accordionQuestion}
				onClick={() => setIsActive(!isActive)}
			>
				<div>
					{question}
					<span style={{float: 'right', fontSize: '18px'}}>
						{isActive ? '↑' : '↓'}
					</span>
				</div>
			</div>
			{isActive && (
				<p
					className={classes.accordionContent}
					style={{
						backgroundColor: 'white',
						color: 'black',
						padding: '20px',
					}}
				>
					{' '}
					{content}
				</p>
			)}
		</div>
	);
}
