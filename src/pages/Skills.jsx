import { Card } from "flowbite-react";
import { MdOutlineWeb } from "react-icons/md";

const Skills = () => {
	return (
		<>
			<div id="skills">
				<div className="container py-20 md:py-60">
					<h1 className="mb-10 text-3xl">Skills & Services</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-stretch">
						<Card className="max-w-sm bg-[#212529] h-full border-0">
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
									I'm keen and eager to build coded static websites such as
									landing pages and portfolio websites for businesses and
									professionals.
								</h3>
							</div>
						</Card>

						<Card className="max-w-sm bg-[#212529] h-full border-0">
							<div className="flex flex-col pb-10 items-center h-full">
								<MdOutlineWeb
									alt="Bonnie image"
									size={96}
									className="mb-3 text-white"
								/>
								<h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
									SEO
								</h5>
								<span className="text-sm text-gray-400 dark:text-gray-400 text-center">
									I am constantly improving my SEO skillset using Google
									Analytics and Microsoft Clarity.
								</span>
							</div>
						</Card>

						<Card className="max-w-sm bg-[#212529] h-full border-0">
							<div className="flex flex-col pb-10 items-center h-full">
								<MdOutlineWeb
									alt="Bonnie image"
									size={96}
									className="mb-3 text-white"
								/>
								<h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
									Content & Technical Writing
								</h5>
								<span className="text-sm text-gray-400 dark:text-gray-400 text-center">
									I aspired to write web content for my client's landing pages
									and am looking to contribute to technical writing using my
									skills as an IT student.
								</span>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
