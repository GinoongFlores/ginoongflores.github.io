import { Carousel } from "flowbite-react";

const About = () => {
	return (
		<>
			<div name="about" className="py-40">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="test">
							<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
								<Carousel slideInterval={3000}>
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
									<img src="/img/community/test1.jpg" alt="..." />
								</Carousel>
							</div>
						</div>
						<div className="test2 place-self-center">
							<h1 className="text-3xl text-center py-4">My Story</h1>
							<p className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
								officiis magni quibusdam dignissimos aut consequatur
								voluptatibus quae aperiam, dicta optio.
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
