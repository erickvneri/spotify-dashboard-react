import axios from "axios";

import constants from "../lib/constants";

// Spotify OAuth Service
// axios instance
const spotifyInstance = axios.create({
  baseURL: constants.spotifyOAuthUrl,
  timeout: 5000,
});

const ApiService = {
  getAccessToken: async function () {
    return axios.get(`${constants.serverUrl}${constants.serverTokenPath}`);
  },
};

export default ApiService;
