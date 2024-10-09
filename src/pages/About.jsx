import { Carousel } from "flowbite-react";

const About = () => {
	return (
		<>
			<div id="about">
				<div className="container py-20 md:py-60">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="test">
							<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
								<Carousel slideInterval={3000}>
									<img
										src="/img/community/gdsc-sticdo-speaker.jpg"
										alt="GDSC STI CDO"
									/>
									<img
										src="/img/community/gdsc-sticdo.jpg"
										alt="GDSC STI CDO"
									/>
									<img
										src="/img/community/campus-experts-1.jpg"
										alt="GitHub Campus Expert"
									/>
									<img
										src="/img/community/campus-experts-2.jpg"
										alt="GitHub Campus Expert"
									/>
									<img src="/img/community/test1.jpg" alt="..." />
								</Carousel>
							</div>
						</div>

						<div className="test2 place-self-center">
							<div className="relative bottom-6">
								<h1 className="text-3xl text-center">My Story</h1>
							</div>

							<p className="text-justify text-md md:text-xl">
								My breakthrough began as a student community leader at Google
								Developer Student Clubs (GDSC) STI College Cagayan de Oro in
								2021. In this role, I organized and led tech events on topics
								such as TensorFlow, Flutter, and Android, and I successfully
								managed an online hackathon during the COVID-19 pandemic. These
								experiences honed my skills in event planning, community
								engagement, and technical education.
							</p>

							<p className="text-justify text-md md:text-xl mt-6">
								Currently, I am a GitHub Campus Expert, where I continue to
								foster technological awareness in the student community. I lead
								workshops and events on AI coding tools, git, and GitHub,
								empowering students and professionals to enhance their technical
								skills and collaborate effectively. My goal is to bridge the gap
								between technology and people, driving innovation and growth
								within the tech community.
							</p>
						</div>
					</div>
					{/* skills & services */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
				</div>
			</div>
		</>
	);
};

export default About;
