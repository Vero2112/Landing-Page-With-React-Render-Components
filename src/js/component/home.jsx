import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cardsgroups from "./cardsgroups.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
// import Navbar from "./navbar.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			{" "}
			<Navbar />
			<div className="container fluid p-4">
				<Jumbotron />
				<div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
					<Cardsgroups
						name="index"
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a	natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
					<Cardsgroups
						name={"hola"}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a	natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
					<Cardsgroups
						name={"df"}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a	natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
					<Cardsgroups
						name={"fsf"}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a	natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
