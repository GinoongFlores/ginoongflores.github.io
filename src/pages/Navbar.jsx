import { Link } from "react-scroll";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import "../index.css";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	const NavLinks = [
		{
			name: "About",
			link: "about",
		},
		{
			name: "Skills",
			link: "skills",
		},
		{
			name: "Project",
			link: "projects",
		},
		{
			name: "Contact",
			link: "contact",
		},
	];

	const mapLinks = NavLinks.map((navlink, index) => {
		return (
			<li key={index} className="p-4 cursor-pointer">
				<Link to={navlink.link} smooth={true} key={index}>
					{navlink.name}
				</Link>
			</li>
		);
	});

	const mapLinksResponsive = NavLinks.map((navlink, index) => {
		return (
			<li
				key={index}
				className="p-4 border-b border-gray-600 cursor-pointer text-center"
			>
				<Link to={navlink.link} smooth={true} key={index}>
					{navlink.name}
				</Link>
			</li>
		);
	});

	return (
		<>
			<div className="sticky top-0 flex justify-between items-center h-24 container mx-auto bg-black">
				<h1 className="w-full text-2xl font-bold invisible md:visible">
					ginoongflores
				</h1>
				<ul className="hidden md:flex">{mapLinks}</ul>
				{/* mobile menu */}
				<div onClick={toggleMenu} className="block md:hidden z-10">
					{showMenu ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu size={20} />
					)}
				</div>
				<ul
					className={
						showMenu
							? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 ease-in-out duration-500 bg-black bg-opacity-90"
							: "ease-in-out duration-500 fixed left-[-100%]"
					}
				>
					<h1 className="w-full text-2xl font-bold m-4 text-center">
						ginoongflores
					</h1>
					{mapLinksResponsive}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
