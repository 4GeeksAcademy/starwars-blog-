import React from "react";
import { Link } from "react-router-dom";

export const Single = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4" />

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
