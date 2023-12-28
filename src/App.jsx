import "./index.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import ReactGA from "react-ga4";

function App() {
	ReactGA.initialize("G-VG662YF08V");
	return (
		<>
			<HelmetProvider>
				<SEO />
				<Navbar />
				<Home />
				<About />
				<Skills />
				<Projects />
				<Footer />
			</HelmetProvider>
		</>
	);
}

export default App;
