import { useState } from "react";
import "../App.scss";

// Custom hooks
import useTokenEffect from "../hooks/useTokenEffect";

const MainPage = () => {
  const [token, setToken] = useState("");

  useTokenEffect(token, setToken);

  return (
    <header className="App-header">
      Hello world!
      <br />
      token: {token ? token : "[TODO: TOAST MESSAGE]"}
    </header>
  );
};

export default MainPage;
