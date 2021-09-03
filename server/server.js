"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");

// local map to save
// Spotify access token
const localStore = {};
const credentials = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`.toString(
    "base64"
  )
);

// axios instance
const instance = axios.create({
  baseURL: process.env.SPOTIFY_OAUTH_URL,
  timeout: 5000,
  headers: {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const getAccessToken = (code) => {
  return instance
    .post("/api/token", {
      code: code,
      grant_type: "authorization_code",
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

app.get("/resolve", (req, res) => {
  const token = getAccessToken(req.query.code);
});

app.listen(8000, () => {
  console.log("listening at port 8000...");
});
