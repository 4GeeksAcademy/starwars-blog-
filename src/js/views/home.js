import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCarousel from "../component/cardCarousel";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const getCategoryData = async category => {
		const request = await fetch(`https://www.swapi.tech/api/${category}`, { method: "GET" });
		const json = await request.json;
		const data = json;
		console.log(data);
		switch (category) {
			case "people":
				setCharacters(data.results);
				console.log(characters);
				break;
			case "planets":
				setPlanets(data.results);
				break;
			case "starships":
				setVehicles(data.result);
		}
	};

	useEffect(() => {
		getCategoryData("people");
	});

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="carouselHeading">Character</h2>
					<span>{JSON.stringify(characters)}</span>
				</Col>
			</Row>
			<Row>
				<Col>
					<CardCarousel />
				</Col>
			</Row>
		</Container>
	);
};
