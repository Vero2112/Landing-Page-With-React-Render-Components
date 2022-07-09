import React from "react";
import propTypes from "prop-types";
//create your first component
const Cardsgroups = (props) => {
	return (
		<div className="card-group">
			<div class="col">
				<div className="card">
					<img
						className="card-img-top"
						src={props.src}
						alt="Card image cap"></img>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.text}</p>
					</div>
					<div className="card-footer">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							{props.button}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
Cardsgroups.propTypes = {
	name: propTypes.string,
	src: propTypes.string,
	text: propTypes.string,
};
export default Cardsgroups;
