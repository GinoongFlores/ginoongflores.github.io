import { Card } from "flowbite-react";
import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

export const CardSkills = ({ title, description, Icon }) => {
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<>
			<Card
				className={`max-w-sm h-full border-0 ${
					isDarkMode ? "bg-[#212529]" : "custom-shadow"
				} `}
			>
				<div className="flex flex-col pb-10 items-center h-full">
					<Icon alt="Bonnie image" size={96} className="mb-3" />
					<h2 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
						{title}
					</h2>
					<p
						className={`text-sm text-center ${
							isDarkMode ? "text-gray-400 dark:text-gray-400" : "text-gray-600"
						}`}
					>
						{description}
					</p>
				</div>
			</Card>
		</>
	);
};
