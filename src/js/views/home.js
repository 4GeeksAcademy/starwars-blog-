import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCarousel from "../component/cardCarousel";
import "../../styles/home.scss";
import Context from "../store/appContext";
import context from "react-bootstrap/esm/AccordionContext";

export const Home = () => {
	return (
		<Context.Consumer>
			<Container>
				<Row>
					<Col>
						<h2 className="carouselHeading">Character</h2>
						<span>{JSON.stringify(context.store)}</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<CardCarousel />
					</Col>
				</Row>
			</Container>
		</Context.Consumer>
	);
};
