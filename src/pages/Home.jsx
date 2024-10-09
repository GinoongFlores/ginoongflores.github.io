import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<>
			<div className="container md:py-60">
				<div className="grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-6 place-items-center content-stretch">
					<div className="content">
						<h1 className="text-2xl sm:text-5xl py-6">I&apos;m Christian!</h1>
						<p className="leading-relaxed text-justify text-lg md:text-xl">
							I am a Bachelor of Science in Information Technology graduate from
							STI College Cagayan de Oro, with over three years of experience in
							web development and student leadership. My journey began in
							college, where I honed my skills in building static websites and
							web applications. Additionally, I have demonstrated strong
							leadership abilities as a Google Developer Student Clubs (
							<a
								href="https://dscsticdo.github.io/"
								target="_blank"
								className="text-blue-500 hover:text-green-500"
							>
								GDSC
							</a>
							) Lead and a{" "}
							<a
								href="https://githubcampus.expert/ginoongflores/"
								target="_blank"
								className="text-blue-500 hover:text-red-500"
							>
								{" "}
								GitHub Campus Expert
							</a>
							, fostering a thriving student tech community and mentoring fellow
							students and professionals.
						</p>
						<p className="leading-relaxed text-justify text-lg md:text-xl mt-6">
							I seek opportunities in web development and people-centric roles
							such as project or product management within a tech organization.
							I am passionate about leveraging my technical and leadership
							skills to contribute to innovative projects and drive team
							success.
						</p>

						<h2 className="text-2xl sm:text-3xl py-6">
							<Typewriter
								options={{
									strings: [
										"A `Student Community Leader`",
										"A `Seasonal Web developer`",
										"An `Aspiring Product Manager`",
									],
									loop: true,
									delay: 50,
									autoStart: true,
								}}
							/>
						</h2>
					</div>
					<img
						src="/img/profiles/dp.jpg"
						alt="profile picture"
						className="rounded-full border-solid border-2 border-green-500"
						width={400}
					/>
				</div>
			</div>
			{/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
		</>
	);
}
