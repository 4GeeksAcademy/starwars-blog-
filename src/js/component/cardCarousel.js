import { Carousel, Card, Button } from "react-bootstrap";

const CardCarousel = () => {
	<Carousel>
		<Carousel.Item>
			<Card>
				<Card.Img variant="top" src="" />
				<Card.Body>
					<Card.Title />
					<Card.Text />
					<Button variant="outline-primary">Learn More</Button>
					<Button variant="outline-warning" className="likeBtn">
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Carousel.Item>
	</Carousel>;
};
export default CardCarousel;
