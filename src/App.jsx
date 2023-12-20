import "./index.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
	return (
		<>
			<div className="h-screen">
				<Navbar />
				<Home />
				<About />
				<Skills />
				<Projects />
			</div>
		</>
	);
}

export default App;
