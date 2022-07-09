import React from "react";
import propTypes from "prop-types";
//create your first component
const Card = (props) => {
	return (
		<div className="card-group">
			<div className="col">
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
Card.propTypes = {
	name: propTypes.string,
	src: propTypes.string,
	text: propTypes.string,
};
export default Card;
