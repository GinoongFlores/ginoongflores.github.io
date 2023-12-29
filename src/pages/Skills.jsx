import React from "react";
import { Card } from "flowbite-react";
import { MdOutlineWeb } from "react-icons/md";

import ThemeContext from "../contexts/ThemeContext";

const Skills = () => {
	const { isDarkMode } = React.useContext(ThemeContext);

	return (
		<>
			<div id="skills">
				<div className="container py-20 md:py-60">
					<h1 className="mb-10 text-3xl">Skills & Services</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-stretch">
						<Card
							className={`max-w-sm h-full border-0  ${
								isDarkMode ? "bg-[#212529] " : "custom-shadow"
							}`}
						>
							<div className="flex flex-col pb-10 items-center h-full">
								<MdOutlineWeb alt="Bonnie image" size={96} className="mb-3" />
								<h2 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
									Web Development
								</h2>
								<p
									className={`text-sm text-center ${
										isDarkMode
											? "text-gray-400 dark:text-gray-400"
											: "text-gray-600"
									}`}
								>
									I'm keen and eager to build coded static websites such as
									landing pages and portfolio websites for businesses and
									professionals.
								</p>
							</div>
						</Card>

						<Card
							className={`max-w-sm h-full border-0  ${
								isDarkMode ? "bg-[#212529] " : "custom-shadow"
							}`}
						>
							<div className="flex flex-col pb-10 items-center h-full">
								<MdOutlineWeb alt="Bonnie image" size={96} className="mb-3" />
								<h2 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
									SEO
								</h2>
								<p
									className={`text-sm text-center ${
										isDarkMode
											? "text-gray-400 dark:text-gray-400"
											: "text-gray-600"
									}`}
								>
									I am constantly improving my SEO skillset using Google
									Analytics and Microsoft Clarity.
								</p>
							</div>
						</Card>

						<Card
							className={`max-w-sm h-full border-0  ${
								isDarkMode ? "bg-[#212529] " : "custom-shadow"
							}`}
						>
							<div className="flex flex-col pb-10 items-center h-full">
								<MdOutlineWeb alt="Bonnie image" size={96} className="mb-3" />
								<h2 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
									Content & Technical Writing
								</h2>
								<p
									className={`text-sm text-center ${
										isDarkMode
											? "text-gray-400 dark:text-gray-400"
											: "text-gray-600"
									}`}
								>
									I aspired to write web content for my client's landing pages
									and am looking to contribute to technical writing using my
									skills as an IT student.
								</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
