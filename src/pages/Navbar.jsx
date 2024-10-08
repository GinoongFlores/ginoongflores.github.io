import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillUpCircle } from "react-icons/ai";
import ReactGA from "react-ga4";
import { CiDark } from "react-icons/ci";
import { CiSun } from "react-icons/ci";

import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);

		ReactGA.send({
			hitType: "pageview",
			page: window.location.pathname,
		});
	};
	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	const scrollToTop = () => {
		scroll.scrollToTop({ delay: 150, smooth: true });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

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
			name: "Projects",
			link: "projects",
		},
		{
			name: "Contact",
			link: "contact",
		},
	];
	useEffect(() => {
		const navbarlinksActive = () => {
			let position = window.scrollY + 180;
			NavLinks.forEach((navlink) => {
				let section = document.getElementById(navlink.link);
				if (!section) return;
				if (
					position >= section.offsetTop &&
					position <= section.offsetTop + section.offsetHeight
				) {
					document
						.querySelector(`.${navlink.link}-link`)
						.classList.add("active-link");
				} else {
					document
						.querySelector(`.${navlink.link}-link`)
						.classList.remove("active-link");
				}
			});
		};

		window.addEventListener("scroll", navbarlinksActive);
		return () => {
			window.removeEventListener("scroll", navbarlinksActive);
		};
	}, []);

	const mapLinks = NavLinks.map((navlink, index) => {
		return (
			<li key={index} className="p-6 cursor-pointer">
				<Link
					className={`${navlink.link}-link`}
					href={`#${navlink.link}`}
					to={navlink.link}
					smooth={true}
					duration={500}
					key={index}
				>
					{navlink.name}
				</Link>
			</li>
		);
	});

	const mapLinksResponsive = NavLinks.map((navlink, index) => {
		return (
			<Link
				to={navlink.link}
				smooth={true}
				key={index}
				onClick={toggleMenu}
				className="p-4 border-b border-gray-600 cursor-pointer text-center block text-white"
			>
				{navlink.name}
			</Link>
		);
	});

	return (
		<>
			<nav
				className={`sticky z-20 top-0 flex justify-between items-center h-24 container mx-auto ${
					isDarkMode ? "bg-black" : "bg-white"
				}`}
			>
				<div className="flex items-center gap-4 ">
					<h1 className="w-full text-2xl font-bold invisible md:visible">
						@ginoongflores
					</h1>

					<div
						onClick={toggleTheme}
						className="cursor-pointer md:left-0  relative left-[-190px]"
					>
						{isDarkMode ? <CiDark size={25} /> : <CiSun size={25} />}
					</div>
				</div>

				<ul className="hidden md:flex">{mapLinks}</ul>
				{/* mobile menu */}
				<div onClick={toggleMenu} className="block md:hidden z-10">
					{showMenu ? (
						<AiOutlineClose size={20} className="text-white" />
					) : (
						<AiOutlineMenu size={20} />
					)}
				</div>

				<div
					className={
						showMenu
							? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 ease-in-out duration-500 bg-black bg-opacity-90"
							: "ease-in-out duration-500 fixed left-[-100%]"
					}
				>
					<h1 className="w-full text-2xl font-bold m-4 text-center text-white">
						ginoongflores
					</h1>
					{mapLinksResponsive}
				</div>
			</nav>
			<div>
				<button
					className={`z-10 rounded-full fixed bottom-5 right-5 md:right-10 transition-all duration-500 ${
						scrollPosition > 800
							? "opacity-100 transform-gpu translate-y-0"
							: "opacity-0 transform-gpu -translate-y-2"
					} `}
					onClick={scrollToTop}
				>
					<AiFillUpCircle className="border-0 w-10 h-10  text-2xl md:text-4xl" />
				</button>
			</div>
		</>
	);
};

export default Navbar;
