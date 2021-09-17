import logo from "../spotify-logo-png-7053.png";
import "../App.scss";

import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Loading = () => {
  const theme = useContext(ThemeContext);
  return (
    <header
      className="page-container"
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <img src={logo} className="logo-main" alt="logo" />
      <p>
        We're setting all up for you...
        <br />
      </p>
    </header>
  );
};

export default Loading;
