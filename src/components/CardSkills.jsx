import { Card } from "flowbite-react";
import { MdOutlineWeb } from "react-icons/md";

export const CardSkills = () => {
	return (
		<>
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
						Static websites, Landing page, Business profile, Portfolio
					</h3>
				</div>
			</Card>
		</>
	);
};
