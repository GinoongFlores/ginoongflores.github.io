import { projectsData } from "../data/Data";
import CardProjects from "../components/CardProjects";

const Projects = () => {
	return (
		<>
			<div name="projects">
				<div className="container py-40">
					<h1 className="mb-10 text-3xl">Notable Projects</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
						{projectsData.map((card, index) => {
							return <CardProjects key={index} {...card} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
