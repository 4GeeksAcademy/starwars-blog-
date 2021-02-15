import { Carousel, Card, Button } from "react-bootstrap";
import React from "react";
import { Context } from "../store/appContext";

const CardCarousel = () => {
	return (
		<Context.Consumer>
			<Carousel>
				<Carousel.Item>
					<Card>
						<Card.Img variant="top" src="" />
						<Card.Body>
							<Card.Title>name</Card.Title>
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
		</Context.Consumer>
	);
};

export default CardCarousel;
