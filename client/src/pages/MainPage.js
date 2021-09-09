import { useState } from "react";
import "../App.css";

// ApiService
import ApiService from "../services/SpotifyAuthentication";

// Custom hooks
import useTokenEffect from "../hooks/useTokenEffect";

const MainPage = () => {
  const [token, setToken] = useState("");

  useTokenEffect(token, setToken);

  return <header className="App-header">{token}</header>;
};

export default MainPage;
