import logo from "../spotify-logo-png-7053.png";
import "../App.scss";

const Loading = () => {
  return (
    <header className="page-container">
      <img src={logo} className="logo-main" alt="logo" />
      <p>
        We're setting all up for you...
        <br />
      </p>
    </header>
  );
};

export default Loading;
