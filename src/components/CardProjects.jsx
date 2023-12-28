import React from 'react';
import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';

import ThemeContext from '../contexts/ThemeContext';

const CardProjects = ({ imgAlt, imgSrc, description, visitLink, visitRepo, title }) => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <>
      <Card
        className={`max-w-sm h-full border-0 ${isDarkMode ? 'bg-[#212529]' : 'custom-shadow'}`}
        imgAlt={imgAlt}
        imgSrc={`/img/projects/${imgSrc}`}>
        <div className="flex flex-col justify-between items-center h-full border-0">
          <div className="flex flex-col gap-4 text-justify">
            <h5 className="text-xl font-bold text-white-900 dark:text-white">{title}</h5>
            <p className="font-normal text-white-700 dark:text-gray-400">{description}</p>
          </div>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href={visitLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-gray-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer">
              Visit
            </a>
            <a
              href={visitRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-white rounded-lg hover:bg-gray-800 border-gray-300 bg-gray-700 px-4 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 cursor-pointer">
              View in GitHub
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};

CardProjects.propTypes = {
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  visitRepo: PropTypes.string,
};

export default CardProjects;
