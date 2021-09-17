import { useState, useContext } from "react";
import "../App.scss";

import { ThemeContext } from "../ThemeContext";

// Custom hooks
import useTokenEffect from "../hooks/useTokenEffect";

const Home = () => {
  const [token, setToken] = useState("");
  const theme = useContext(ThemeContext);
  console.log(theme);

  useTokenEffect(token, setToken);

  return (
    <header
      className="page-container"
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      Hello world!
      <br />
      message: {token ? token : "No session token granted"}
    </header>
  );
};

export default Home;
