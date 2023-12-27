import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useContext } from "react";
import SectionContext from "../context/SectionContext";

export default function SEO() {
	const { currentSection } = useContext(SectionContext);

	let title, description, name, type, url, image;

	switch (currentSection) {
		case "home":
			title = "Home";
			description =
				"A graduating IT student taking a Bachelor of Science in Information Technology at STI College Cagayan de Oro, a thriving student community leader in a student tech organization. Also, I aim to help businesses and individuals increase their online presence by offering web-related projects at reasonable costs.";
			name = "Christian Flores";
			break;
		case "about":
			title = "About";
			break;
		case "skills":
			title = "Skills";
			break;
		case "projects":
			title = "Projects";
			break;
		case "contact":
			title = "Contact";
			break;
		default:
			title = "ginoongflores";
			description =
				"A graduating IT student taking a Bachelor of Science in Information Technology at STI College Cagayan de Oro, a thriving student community leader in a student tech organization. Also, I aim to help businesses and individuals increase their online presence by offering web-related projects at reasonable costs.";
			name = "Christian Paul Flores";
			type = "website";
			url = "ginoongflores.github.io";
			image = "/img/profiles/dp.png";
	}
	return (
		<Helmet>
			{/* standard metadata tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={name} />
			<meta name="type" content={type} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content="ginoongflores" />
			{/* Twitter */}
			<meta property="twitter:creator" content={name} />
			<meta property="twitter:card" content={type} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.string,
};
