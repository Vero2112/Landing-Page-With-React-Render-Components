import React from "react";

//create your first component
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light  ">
				<a className="navbar-brand col-9 ms-2" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse col-3 text-end"
					id="navbarSupportedContent">
					<ul className="navbar-nav text-end ms-5 ">
						<li className="nav-item active ">
							<a className="nav-link text-end" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-end" href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link  text-end" href="#">
								Services
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link  text-end" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
