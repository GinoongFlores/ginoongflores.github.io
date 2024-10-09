import { CardSkills } from "../components/CardSkills";
import { skills } from "../data/skills";

const Skills = () => {
	return (
		<>
			<div id="skills">
				<div className="container py-20 md:py-60">
					<h1 className="mb-10 text-3xl">Skills & Services</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-stretch">
						{skills.map((skill, index) => (
							<CardSkills key={index} {...skill} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
