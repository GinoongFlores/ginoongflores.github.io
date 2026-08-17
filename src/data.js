// Content for the portfolio. Edit here — the page maps over these arrays.
// Image paths are relative to /public.

export const stack = [
	{ group: "Web development", items: ["React", "TypeScript", "Next.js", "Astro", "HTML/CSS", "Tailwind CSS", "Framer"] },
	{ group: "Growth & workflow", items: ["SEO", "AI workflows", "n8n automation", "Project management", "Google Analytics", "Microsoft Clarity"] },
	{ group: "Tools", items: ["Git / GitHub", "Figma"] },
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
		period: "2026 — Now",
		now: true,
		title: "Web Specialist — Evalics",
		points: [
			"Build and ship web applications with React, TypeScript, and Next.js.",
			"Drive SEO and AI-powered workflows to shorten delivery cycles.",
		],
	},
	{
		period: "2025 — Now",
		now: true,
		title: "IT Instructor — Xavier University, Ateneo de Cagayan",
		points: [
			"Teach web development and practical software engineering.",
			"Moved from part-time to full-time and back across three terms.",
		],
	},
	{
		period: "2025",
		now: false,
		title: "Freelance Web Developer — Evalics",
		points: ["Delivered client sites with Tailwind CSS and on-page SEO."],
	},
	{
		period: "2024 — 2025",
		now: false,
		title: "Technical Project Coordinator — Shredder",
		points: [
			"Coordinated delivery of a skiing and snowboarding social platform.",
			"Ran project management and manual testing across releases.",
		],
	},
];

// Volunteer and community roles — kept separate from paid work above.
export const community = [
	{
		period: "2025 — Now",
		now: false,
		title: "Vice President — DevCon Cagayan de Oro",
		points: [
			"Program community events for local developers and professionals.",
		],
	},
	{
		period: "2023 — 2025",
		now: false,
		title: "GitHub Campus Expert",
		points: [
			"Built inclusive spaces for students to learn skills and ship projects together.",
			"Led workshops on AI coding tools, git, and GitHub.",
		],
	},
	{
		period: "2021 — 2022",
		now: false,
		title: "Google Developer Student Clubs Lead",
		points: [
			"Spoke on Google and emerging tech at online and onsite events.",
			"Collaborated with GDSC PH leads and ran a fully-remote hackathon.",
		],
	},
];

export const achievements = [
	{
		title: "GitHub Campus Expert",
		desc: "1 of 250+ worldwide and the 5th in the Philippines.",
	},
	{
		title: "CodeFest 2023 — Local & Cluster Champion, National Finalist",
		desc: "STI College competitive programming team.",
	},
	{
		title: "Plastic 3R Hacks PH — Finalist",
		desc: "Co-built OroKalimpyo, lifting plastic waste recovery 4% in Cagayan de Oro.",
	},
	{
		title: "Google Solution Challenge 2022 — Panaghiusa",
		desc: "Built the landing page for our chapter's entry.",
	},
];

export const gallery = [
	{ img: "/img/community/gdsc-sticdo-speaker.jpg", alt: "Speaking at GDSC STI CDO" },
	{ img: "/img/community/campus-experts-1.jpg", alt: "GitHub Campus Experts" },
	{ img: "/img/community/gdsc-sticdo.jpg", alt: "GDSC STI CDO community" },
	{ img: "/img/community/campus-experts-2.jpg", alt: "Campus Experts meetup" },
];

export const socials = {
	email: "ginoongflores@gmail.com",
	github: "https://github.com/ginoongflores",
	linkedin: "https://www.linkedin.com/in/christian-paul-flores/",
	instagram: "https://www.instagram.com/ginoongflores/",
	devto: "https://dev.to/ginoongflores",
};
