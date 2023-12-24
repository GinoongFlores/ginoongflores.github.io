import { Carousel } from "flowbite-react";

const About = () => {
	return (
		<>
			<div name="about">
				<div className="container py-40">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="test">
							<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
								<Carousel slideInterval={3000}>
									<img src="/img/community/campus-experts-1.jpg" alt="..." />
									<img src="/img/community/campus-experts-2.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
								</Carousel>
							</div>
						</div>
						<div className="test2 place-self-center">
							<h1 className="text-3xl text-center py-4">My Story</h1>
							<p className="text-justify text-xl">
								My breakthrough began as a student community leader at a tech
								organization called GDSC STI CDO and GitHub Campus Expert, where
								I continuously aimed to increase technological awareness in the
								student community. Yet, I realized there is a need to provide
								web services to businesses and professionals using my nurtured
								and continuous learning in web development.
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
