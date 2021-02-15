import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCarousel from "../component/cardCarousel";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [info, setInfo] = useState([]);

	const getPeopleData = async () => {
		const settings = {
			method: "GET",
			headers: { "Content-Type": "aplication/json" }
		};

		const request = await fetch(`https://www.swapi.tech/api/people`, settings);
		const json = await request.json();
		const data = json;

		setCharacters(data);
	};

	const getInfo = async () => {
		const settings = {
			method: "GET",
			headers: { "Content-Type": "aplication/json" }
		};

		const request = await fetch(`https://www.swapi.tech/api/people/1`, settings);
		const json = await request.json();
		const data = json;

		setInfo(data.result);
	};

	useEffect(() => {
		getPeopleData();
		getInfo();
	});

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="carouselHeading">Character</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<CardCarousel properties={info.properties} />
				</Col>
			</Row>
		</Container>
	);
};
