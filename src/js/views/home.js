import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharCard from "../component/charCard";
import PlanetCard from "../component/planetCard";
import ShipCard from "../component/shipCard";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="heading">Characters</h2>
				</Col>
			</Row>
			<Row className="overFlow">
				{store.people
					? store.people.map((elem, index) => <CharCard key={index} id={++index} character={elem} />)
					: ""}
			</Row>
			<Row>
				<Col>
					<h2 className="heading">Planets</h2>
				</Col>
			</Row>
			<Row className="overFlow">
				{store.planets
					? store.planets.map((elem, index) => <PlanetCard key={index} id={++index} planet={elem} />)
					: ""}
			</Row>
			<Row>
				<Col>
					<h2 className="heading">Start Ships</h2>
				</Col>
			</Row>
			<Row className="overFlow">
				{store.starShips
					? store.starShips.map((elem, index) => <ShipCard key={index} id={++index} ship={elem} />)
					: ""}
			</Row>
		</Container>
	);
};
