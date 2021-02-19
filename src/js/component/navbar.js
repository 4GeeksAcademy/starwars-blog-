import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Navbar = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<nav className="navbar navbar-light bg-light mb-3">
						<Link to="/">
							<span className="navbar-brand m-2 h1">
								<img src="./starwarslogo.png" width="90" />
							</span>
						</Link>
						<div className="ml-auto">
							<button className="btn btn-primary">Favorites</button>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
