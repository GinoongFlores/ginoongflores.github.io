// Content for the portfolio. Edit here — the page maps over these arrays.
// Image paths are relative to /public.

export const stack = [
	{ group: "Web development", items: ["HTML/CSS", "JavaScript", "React", "Astro", "Tailwind CSS"] },
	{ group: "Tools & analytics", items: ["Git / GitHub", "Google Analytics", "Microsoft Clarity", "Figma"] },
];

export const projects = [
	{
		title: "GDSC STI CDO Website",
		meta: "Community landing page · 2022",
		img: "/img/projects/dscsticdo-website.png",
		alt: "GDSC STI CDO website",
		link: "https://dscsticdo.github.io/",
	},
	{
		title: "Panaghiusa Website",
		meta: "Solution Challenge 2022",
		img: "/img/projects/panaghiusa-website.png",
		alt: "Panaghiusa website",
		link: "https://panaghiusa.netlify.app/",
	},
	{
		title: "Sample Coffee",
		meta: "Landing page · 2023",
		img: "/img/projects/coffe-sample.jpg",
		alt: "Sample Coffee website",
		link: "https://flwebdev-own-cafe.pages.dev/",
	},
	{
		title: "Password Generator",
		meta: "Utility tool · 2023",
		img: "/img/projects/passwordGenerator-website.png",
		alt: "Password Generator website",
		link: "https://ginoongflores-password-generator.netlify.app/",
	},
];

export const experience = [
	{
		period: "2022 — Now",
		now: true,
		title: "GitHub Campus Expert",
		points: [
			"Lead workshops on AI coding tools, git, and GitHub.",
			"Foster technological awareness across the regional student community.",
		],
	},
	{
		period: "2021 — 2022",
		now: false,
		title: "GDSC Lead — STI College CDO",
		points: [
			"Organized and led tech events on TensorFlow, Flutter, and Android.",
			"Managed an online hackathon during the COVID-19 pandemic.",
		],
	},
];

export const achievements = [
	{
		title: "GitHub Campus Expert — accepted 2022",
		desc: "One of few Campus Experts in the Philippines.",
	},
	{
		title: "Google Solution Challenge 2022 — Panaghiusa",
		desc: "Built the landing page for our chapter's entry.",
	},
	{
		title: "Online hackathon organizer — 2021",
		desc: "Ran a fully-remote hackathon during the pandemic.",
	},
];

export const gallery = [
	{ img: "/img/community/gdsc-sticdo-speaker.jpg", alt: "Speaking at GDSC STI CDO" },
	{ img: "/img/community/campus-experts-1.jpg", alt: "GitHub Campus Experts" },
	{ img: "/img/community/gdsc-sticdo.jpg", alt: "GDSC STI CDO community" },
	{ img: "/img/community/campus-experts-2.jpg", alt: "Campus Experts meetup" },
];

export const socials = {
	email: "christian@evalics.com",
	github: "https://github.com/ginoongflores",
	linkedin: "https://www.linkedin.com/in/christian-paul-flores/",
	instagram: "https://www.instagram.com/ginoongflores/",
	devto: "https://dev.to/ginoongflores",
};
