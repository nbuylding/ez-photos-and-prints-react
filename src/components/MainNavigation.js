import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/Logo.png';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav className={classes.navBar}>
				<img
					src={logo}
					alt='site logo'
					style={{width: '50px', height: '50px'}}
				/>
				<ul>
					<li>
						<NavLink
							className={classes.navItem}
							to='/'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={classes.navItem}
							to='/products'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
						>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							className={classes.navItem}
							to='/passport-renewal'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
						>
							Passport Renewal
						</NavLink>
					</li>
					<li>
						<NavLink
							className={classes.navItem}
							to='/license-renewal'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
						>
							License Renewal
						</NavLink>
					</li>
					<li>
						<NavLink
							className={classes.navItem}
							to='/contact'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
