import { Carousel, Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CardCarousel = props => {
	let properties = props.properties;

	return (
		<Carousel>
			<Carousel.Item>
				<Card>
					<Card.Img variant="top" src="" />
					<Card.Body>
						<Card.Title>
							<span>{JSON.stringify(properties)}</span>
						</Card.Title>
						<Card.Text>
							<p>Gender: </p>
							<p>Hair Color: </p>
							<p>Eye Color: </p>
						</Card.Text>
						<Button variant="outline-primary">Learn More</Button>
						<Button variant="outline-warning" className="likeBtn">
							&#9825;
						</Button>
					</Card.Body>
				</Card>
			</Carousel.Item>
		</Carousel>
	);
};

CardCarousel.propTypes = { properties: PropTypes.array };

export default CardCarousel;
