import React from "react";
import { useGlobalContext } from "./context";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button
        onClick={toggleDarkTheme}
        className="dark-toggle
      "
      >
        {isDarkTheme ? (
          <BsMoonFill className="toggle-icon" />
        ) : (
          <BsSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
