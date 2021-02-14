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
							<span className="navbar-brand m-3 h1">
								<img
									src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/star-wars-logo.png"
									alt="Star Wars logo"
									width="80"
								/>
							</span>
						</Link>
						<div className="ml-auto">
							<Link to="/demo">
								<button className="btn btn-primary">Favorites</button>
							</Link>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
