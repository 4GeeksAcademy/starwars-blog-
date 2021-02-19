import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ShipCard = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => actions.starShipDescription(props.ship.url));

	return (
		<Col id={props.id}>
			<Card>
				<Card.Img variant="top" src="" />
				<Card.Body>
					<Card.Title>{props.ship.name}</Card.Title>
					<Card.Text>
						<p>Model: {store.starShip.model}</p>
						<p>Class: {store.starShip.starship_class}</p>
						<p>Length: {store.starShip.length}</p>
					</Card.Text>
					<Link to={"/single" + props.ship.uid}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button variant="outline-warning" className="likeBtn">
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

ShipCard.propTypes = {
	index: PropTypes.number,
	ship: PropTypes.object,
	id: PropTypes.number
};

export default ShipCard;
