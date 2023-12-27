import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div id="contact" className="container">
				<div className="py-20 md:py-80">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 place-items-stretch md:place-items-center">
						<div className="contact-content">
							<h1 className="text-4xl">Contact</h1>
							<p className="text-xl leading-relaxed py-5">
								I would be delighted and eager to help your business and
								professional aspects by creating web pages to elevate your
								business online. Send me an email or click the email icon so we
								can get the work done.
							</p>
						</div>
						<div className="f1lex flex-col gap-4 text-lg">
							<a
								href="mailto:florespaul161@gmail.com"
								className="inline-flex items-center gap-3"
							>
								<AiOutlineMail
									size={24}
									className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600"
								/>
								florespaul161@gmail.com
							</a>

							<div className="inline-flex items-center gap-3">
								<a href="#" target="_blank">
									<FaMapMarkerAlt
										size={24}
										className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600"
									/>
								</a>
								<p>Cagayan de Oro City, Misamis Oriental, Philippines, 9000.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 md:flex-row justify-between items-center text-center border-t border-gray-600 py-4">
					<p className="text-sm">
						Copyright &copy; 2023 Christian Paul H. Flores. All Rights Reserved
					</p>
					<div className="text-lg inline-flex gap-4">
						<a
							href="https://www.facebook.com/christianpaulh.flores/"
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebookSquare className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600" />
						</a>
						<a
							href="https://www.instagram.com/ginoongflores"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagramSquare className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600" />
						</a>
						<a
							href="https://www.linkedin.com/in/christian-paul-flores/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600" />
						</a>
						<a
							href="https://www.linkedin.com/in/christian-paul-flores/"
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitterSquare className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
