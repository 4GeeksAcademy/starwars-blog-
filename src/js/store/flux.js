const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			planets: [],
			planet: [],
			starShips: [],
			starShip: []
		},
		actions: {
			// Use getActions to call a function within a function

			getPeopleData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/people`, settings);
				const json = await request.json();
				const data = json;
				setStore({ people: data.results });
			},

			getCharacterDescription: async url => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ character: data.result.properties });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},

			getPlanetsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/planets`, settings);
				const json = await request.json();
				const data = json;
				setStore({ planets: data.results });
			},

			getPlanetDescription: async url => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ planet: data.result.properties });
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url);
			},

			getStarShipsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/starships`, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShips: data.results });
			},

			getStarShipDescription: async url => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShip: data.result.properties });
			},

			starShipDescription: url => {
				getActions().getStarShipDescription(url);
			}
		}
	};
};

export default getState;
