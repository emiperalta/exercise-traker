import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark">
			<Link to="/" className="navbar__logo">ExercTracker</Link>
			<ul className="navbar__nav">
				<li className="nav__items">
					<Link to="/" className="nav__link">Exercises</Link>
				</li>
				<li className="nav__items">
					<Link to="/create" className="nav__link">Create Exercise Log</Link>
				</li>
				<li className="nav__items">
					<Link to="/user" className="nav__link">Create User</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;