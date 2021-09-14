import { useState } from "react";
import "../App.scss";

// Custom hooks
import useTokenEffect from "../hooks/useTokenEffect";

const Home = () => {
  const [token, setToken] = useState("");

  useTokenEffect(token, setToken);

  return (
    <header className="page-container">
      Hello world!
      <br />
      message: {token ? token : "No session token granted"}
    </header>
  );
};

export default Home;
