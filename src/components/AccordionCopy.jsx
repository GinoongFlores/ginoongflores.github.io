import { Accordion } from "flowbite-react";

import PropTypes from "prop-types";

const AccordionCopy = ({ CardData, CardLayout }) => {
	return (
		<>
			<Accordion>
				<Accordion.Panel>
					<Accordion.Title>Other Projects</Accordion.Title>
					<Accordion.Content>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
							{CardData.map((card, index) => {
								return <CardLayout key={index} {...card} />;
							})}
						</div>
					</Accordion.Content>
				</Accordion.Panel>
			</Accordion>
		</>
	);
};

AccordionCopy.propTypes = {
	CardData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	CardLayout: PropTypes.func.isRequired,
};

export default AccordionCopy;
