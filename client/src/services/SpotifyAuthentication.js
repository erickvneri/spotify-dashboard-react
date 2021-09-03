import axios from "axios";

import constants from "../lib/constants";

// Spotify OAuth Service
// axios instance
const instance = axios.create({
  baseURL: constants.spotifyOAuthUrl,
  timeout: 5000,
});

const SpotifyOAuthService = {
  getSpotifyLogin: async function () {
    const options = {
      params: {
        client_id: constants.spotifyClientId,
        redirect_uri: `${constants.serverUrl}${constants.spotifyRedirectEndpoint}`,
        scope: constants.spotifyOAuthScopes,
        response_type: "token",
      },
    };

    return instance.get(constants.spotifyAuthorizeEP, options).then().catch();
  },
};

export default SpotifyOAuthService;
