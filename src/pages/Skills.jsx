import { Card, Kbd } from "flowbite-react";
import { MdOutlineWeb } from "react-icons/md";

const Skills = () => {
	return (
		<>
			<div name="skills">
				<div className="container py-40">
					<h1 className="mb-10 text-3xl">Skills & Services</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-stretch">
						<div className="webdev">
							<Card className="max-w-sm bg-black h-full">
								<div className="flex flex-col pb-10 items-center h-full">
									<MdOutlineWeb
										alt="Bonnie image"
										size={96}
										className="mb-3 text-white"
									/>
									<h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
										Web Development
									</h5>
									<h3 className="text-sm text-gray-400 dark:text-gray-400 text-center">
										Static websites, Landing page, Business profile, Portfolio
									</h3>
									<h5 className="mt-4 self-start">Skills & tools</h5>
									<div className="mt-4 flex space-x-3 lg:mt-3">
										<div className="flex flex-wrap gap-1 md:gap-2 items-center">
											<Kbd>HTML & CSS</Kbd>
											<Kbd>Javascript</Kbd>
											<Kbd>ReactJs</Kbd>
											<Kbd>Bootstrap</Kbd>
											<Kbd>Tailwind CSS</Kbd>
										</div>
									</div>
								</div>
							</Card>
						</div>
						<div className="seo">
							<Card className="max-w-sm bg-black h-full">
								<div className="flex flex-col pb-10 items-center">
									<MdOutlineWeb
										alt="Bonnie image"
										size={96}
										className="mb-3 text-white"
									/>
									<h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
										SEO
									</h5>
									<span className="text-sm text-gray-400 dark:text-gray-400 text-center">
										Static websites, Landing page, Business profile, Portfolio
									</span>
								</div>
							</Card>
						</div>
						<div className="content&writing">
							<Card className="max-w-sm bg-black h-full">
								<div className="flex flex-col pb-10 items-center">
									<MdOutlineWeb
										alt="Bonnie image"
										size={96}
										className="mb-3 text-white"
									/>
									<h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
										Content & Technical Writing
									</h5>
									<span className="text-sm text-gray-400 dark:text-gray-400 text-center"></span>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
