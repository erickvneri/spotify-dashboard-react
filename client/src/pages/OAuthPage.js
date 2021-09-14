import logo from "../spotify-logo-png-7053.png";
import "../App.scss";

// Querystring formatter
import qs from "querystring";

// Spotify Authorize URL constants
import constants from "../lib/constants";

// UI Material Components
import { Button, Link } from "@material-ui/core";

function LoginPage() {
  const loginRedirectCallback = () => {
    const authorizeUrl =
      `${constants.spotifyOAuthUrl}${constants.spotifyAuthorizeEP}?`.concat(
        qs.stringify({
          client_id: constants.spotifyClientId,
          redirect_uri: constants.spotifyRedirectUri,
          response_type: "code",
          scopes: constants.spotifyOAuthScopes,
        })
      );

    // Open new tab to authenticate
    window.location.href = authorizeUrl;
  };

  const authorRedirectCallback = () => {
    window.open("https://github.com/erickvneri");
  };

  return (
    <header className="page-container">
      <img src={logo} className="logo-main" alt="Spotify logo" />
      <p>
        Spotify personal dashboard.
        <br />
        <sub>
          {" "}
          by{" "}
          <Link color={"primary"} onClick={authorRedirectCallback}>
            {"erickvneri"}
          </Link>
        </sub>
      </p>

      <Button
        color={"primary"}
        onClick={loginRedirectCallback}
        size={"medium"}
        variant={"contained"}
      >
        Login
      </Button>
    </header>
  );
}

export default LoginPage;
