import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => actions.planetDescription(props.planet.url));

	return (
		<Col>
			<Card>
				<Card.Img variant="top" src="" />
				<Card.Body>
					<Card.Title>{props.planet.name}</Card.Title>
					<Card.Text>
						<p>Population: {store.planet.population}</p>
						<p>Terrain: {store.planet.terrain}</p>
					</Card.Text>
					<Link to={"/single" + props.planet.uid}>
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

PlanetCard.propTypes = {
	index: PropTypes.number,
	planet: PropTypes.object,
	id: PropTypes.number
};

export default PlanetCard;
