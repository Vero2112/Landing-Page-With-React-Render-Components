import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
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
				<div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
					<Card
						name="Card title"
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
					<Card
						name={"Card title"}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"The village weaver (Ploceus cucullatus), also known as the spotted-backed weaver or black-headed weaver (the latter leading to easy confusion with P. melanocephalus), is a species of bird in the family Ploceidae found in much of sub-Saharan Africa. It has also been introduced to Portugal as well as to the islands of Hispaniola, Martinique, Puerto Rico, Mauritius and Réunion."
						}
						button="Find more!"
					/>
					<Card
						name={"Card title"}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
						text={
							"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}
						button="Find more!"
					/>
					<Card
						name={"Card title"}
						src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Eisvogel_kingfisher.jpg"
						text={
							"The common kingfisher (Alcedo atthis), also known as the Eurasian kingfisher and river kingfisher, is a small kingfisher with seven subspecies recognized within its wide distribution across Eurasia and North Africa. It is resident in much of its range, but migrates from areas where rivers freeze in winter."
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
