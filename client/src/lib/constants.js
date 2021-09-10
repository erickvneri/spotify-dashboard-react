import env from "react-dotenv";

const constants = {
  // Server environment.
  // For the moment, this instance
  // will be a express app locally
  // deployed tunneled by ngrok.
  serverUrl: env.SERVER_URL,
  serverClientId: env.SERVER_CLIENT_ID,
  serverClientSecret: env.SERVER_CLIENT_SECRET,

  // Server Paths
  serverTokenPath: "/token",

  // Spotify OAuth base url
  // and /authorize endpoint
  // reference.
  //
  // More information about the
  // Spotify OAuth Flow (code flow)
  // here:
  // https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
  spotifyOAuthUrl: env.SPOTIFY_OAUTH_URL,
  spotifyAuthorizeEP: "/authorize",

  // Spotify API app credentials
  spotifyClientId: env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: env.SPOTIFY_CLIENT_SECRET,

  // Redirect Endpoint for OAuth Code flow.
  spotifyRedirectUri: env.SPOTIFY_REDIRECT_URI,

  // More inforamation at:
  // https://developer.spotify.com/documentation/general/guides/scopes/
  spotifyOAuthScopes: env.SPOTIFY_OAUTH_SCOPES,

  // TODO: fill Spotify API constants
};

export default constants;
