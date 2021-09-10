"use strict";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const qs = require("querystring");
const axios = require("axios");

const app = express();
app.use(cors());

// local map to save
// Spotify access token
const localStore = {};

// Client Id and Client Secret
// base64 encoded
const credentials = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

// axios instance
const instance = axios.create({
  baseURL: process.env.SPOTIFY_OAUTH_URL,
  timeout: 2000,
  headers: {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

/*
 * Authorize resolver which
 * handles @code and redeem
 * it for API access token.
 *
 * After Code-flow is completed,
 * server will redirect to client.
 * */
const redirectResolveCallback = (req, res) => {
  return instance
    .post(
      "/api/token",
      qs.stringify({
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      })
    )
    .then((response) => {
      localStore.session = response?.data;
      res.redirect(`${process.env.CLIENT_URL}${process.env.CLIENT_RESOLVER}`);
    })
    .catch((err) =>
      res.send(`<h1>${err?.response?.data?.error_description}</h1>`)
    );
};

/*
 * Returns
 * @accessToken for Spotify API
 * */
const tokenRequestCallback = (_, res) => {
  res.send(localStore.session || { error: "no data available" }).status(200);
};

// Application Routes
app.get("/resolve", redirectResolveCallback);
app.get("/token", tokenRequestCallback);

app.listen(8000, () => {
  console.log("listening at port 8000...");
});
