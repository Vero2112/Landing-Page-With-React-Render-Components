import React from "react";

//create your first component
const Footer = () => {
	return (
		<div className="jumbotron bg-light text-dark p-4 text-center">
			<footer className="footer mt-auto py-3 text-center">
				<p>
					Made with <i className="fa fa-heart text-danger" /> by{" "}
					<a href="https://github.com/Vero2112">Vero</a>
				</p>
			</footer>
		</div>
	);
};

export default Footer;
