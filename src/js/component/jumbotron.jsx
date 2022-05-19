import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light text-dark p-4">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipisciing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action
			</a>
		</div>
	);
};

export default Jumbotron;
