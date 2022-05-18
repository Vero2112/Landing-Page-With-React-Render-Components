import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div class="jumbotron bg-light text-dark p-4">
			<h1 class="display-4">A Warm Welcome!</h1>
			<p class="lead">
				Lorem ipsum dolor sit amet, consectetur adipisciing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat.
			</p>
			<a class="btn btn-primary btn-lg" href="#" role="button">
				Call to action
			</a>
		</div>
	);
};

export default Jumbotron;
