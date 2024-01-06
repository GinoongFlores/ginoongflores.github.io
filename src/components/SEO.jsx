import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function SEO({
	title = "ginoongflores | Christian Paul Flores",
	description = "Christian Paul Flores. Portfolio Website. A thriving student community leader in a student tech organization. Also, I aim to help businesses and individuals increase their online presence by offering web-related projects at reasonable costs.",
	name = "ginoongflores | Christian Paul Flores",
	type = "website",
	url = "https://ginoongflores.github.io/",
	image = "/img/profiles/dp.png",
}) {
	return (
		<Helmet>
			{/* standard metadata tags */}
			<title>{title}</title>
			<meta name="robots" content="index, follow" />
			<meta name="description" content={description} />
			<meta name="author" content={name} />
			<meta name="type" content={type} />
			<meta
				name="keywords"
				content="ginoongflores, christian paul flores, Christian Paul Flores, GinoongFlores, ginoong. flores, ginoongflores website, web developer cdo, web developer cagayan de oro city"
			/>
			<link rel="canonical" href={url} />
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
