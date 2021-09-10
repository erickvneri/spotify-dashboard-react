import logo from "../spotify-logo-png-7053.png";
import "../App.css";
import { useHistory } from "react-router";

// Querystring formatter
import qs from "querystring";

// Spotify Authorize URL constants
import constants from "../lib/constants";

// UI Material Components
import { Button } from "@material-ui/core";

function LoginPage() {
  // Spotify OAuth2.0 page URL
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

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Spotify personal dashboard.
        <br />
        <sub>
          {" "}
          by <a href="https://github.com/erickvneri">erickvneri</a>
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
