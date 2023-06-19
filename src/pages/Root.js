import React from 'react';
import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

export default function Root() {
	return (
		<div>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<FooterNavigation />
		</div>
	);
}
