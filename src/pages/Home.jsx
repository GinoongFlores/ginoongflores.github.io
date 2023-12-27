import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<>
			<div className="container py-20 md:py-60">
				<div className="grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-6 place-items-center content-stretch">
					<div className="content">
						<h1 className="text-2xl sm:text-5xl py-6">I&apos;m Christian!</h1>
						<p className="leading-relaxed text-justify text-lg md:text-xl">
							A graduating IT student taking a Bachelor of Science in
							Information Technology at STI College Cagayan de Oro, a thriving
							student community leader in a student tech organization. Also, I
							aim to help businesses and individuals increase their online
							presence by offering web-related projects at reasonable costs.
						</p>
						<h1 className="text-2xl sm:text-3xl py-6">
							<Typewriter
								options={{
									strings: [
										"A `Student Community Leader`",
										"An `Aspiring Web developer`",
									],
									loop: true,
									delay: 50,
									autoStart: true,
								}}
							/>
						</h1>
					</div>
					<img
						src="/img/profiles/dp.png"
						alt="profile picture"
						className="rounded-full border-solid border-2 border-green-500"
						width={350}
					/>
				</div>
			</div>
			{/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
		</>
	);
}
