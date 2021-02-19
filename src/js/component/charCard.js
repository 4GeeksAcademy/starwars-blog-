import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const CharCard = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => actions.charDescription(props.character.url));

	return (
		<Col>
			{props.character.uid == props.id ? (
				<Card>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>{props.character.name}</Card.Title>
						<Card.Text>
							<p>Gender: {store.character.gender}</p>
							<p>Hair Color: {store.character.hair_color}</p>
							<p>Eye Color: {store.character.eye_color}</p>
						</Card.Text>
						<Link to={"/single" + props.character.uid}>
							<Button variant="outline-primary">Learn More</Button>
						</Link>
						<Button variant="outline-warning" className="likeBtn">
							&#9825;
						</Button>
					</Card.Body>
				</Card>
			) : (
				""
			)}
		</Col>
	);
};

CharCard.propTypes = {
	index: PropTypes.number,
	character: PropTypes.object,
	id: PropTypes.number
};

export default CharCard;
