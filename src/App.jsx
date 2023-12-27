import "./index.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import SectionContext from "./context/SectionContext";
import { useState } from "react";

function App() {
	const [currentSection, setCurrentSection] = useState("home");
	return (
		<>
			<SectionContext.Provider value={{ currentSection, setCurrentSection }}>
				<HelmetProvider>
					{/* <SEO /> */}
					<Navbar />
					<Home />
					<About />
					<Skills />
					<Projects />
					<Footer />
				</HelmetProvider>
			</SectionContext.Provider>
		</>
	);
}

export default App;
