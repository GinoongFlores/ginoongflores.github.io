import React from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContext;
