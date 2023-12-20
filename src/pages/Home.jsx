import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<>
			<div name="/">
				<div className="container py-40">
					<div className="grid grid-rows-1 md:grid-cols-2 place-items-center content-stretch">
						<div className="text-center">
							<h1 className="text-2xl sm:text-5xl py-4">I&apos;m Tian/Chan!</h1>
							<p className="leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Doloremque at molestias tenetur, in consectetur fugiat ullam
								autem molestiae temporibus possimus?
							</p>
							<h1 className="text-2xl sm:text-3xl py-5">
								<Typewriter
									options={{
										strings: [
											"A `Student Leader`",
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
			</div>
			{/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
		</>
	);
}
