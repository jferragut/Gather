import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<button className="btn btn-primary ml-auto">Login</button>
				</nav>
			</header>
		);
	}
}
