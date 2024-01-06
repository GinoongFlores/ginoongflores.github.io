import { notableProjectsData, otherProjectsData } from "../data/Data";
import CardProjects from "../components/CardProjects";
import AccordionCopy from "../components/AccordionCopy";

const Projects = () => {
	return (
		<>
			<div id="projects">
				<div className="container py-20 md:py-60">
					<h1 className="mb-10 text-3xl">Notable Projects</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
						{notableProjectsData.map((card, index) => {
							return <CardProjects key={index} {...card} />;
						})}
					</div>
					<div className="py-5">
						<AccordionCopy
							CardData={otherProjectsData}
							CardLayout={CardProjects}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
