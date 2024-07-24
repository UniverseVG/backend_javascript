require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const gitHubData = {
  login: "UniverseVG",
  id: 72432752,
  node_id: "MDQ6VXNlcjcyNDMyNzUy",
  avatar_url: "https://avatars.githubusercontent.com/u/72432752?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/UniverseVG",
  html_url: "https://github.com/UniverseVG",
  followers_url: "https://api.github.com/users/UniverseVG/followers",
  following_url:
    "https://api.github.com/users/UniverseVG/following{/other_user}",
  gists_url: "https://api.github.com/users/UniverseVG/gists{/gist_id}",
  starred_url: "https://api.github.com/users/UniverseVG/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/UniverseVG/subscriptions",
  organizations_url: "https://api.github.com/users/UniverseVG/orgs",
  repos_url: "https://api.github.com/users/UniverseVG/repos",
  events_url: "https://api.github.com/users/UniverseVG/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/UniverseVG/received_events",
  type: "User",
  site_admin: false,
  name: "GM Varun",
  company: null,
  blog: "https://varungm.vercel.app",
  location: "Bengaluru",
  email: null,
  hireable: null,
  bio: "Full Stack Web Developer",
  twitter_username: "GMVarun2",
  public_repos: 33,
  public_gists: 0,
  followers: 4,
  following: 0,
  created_at: "2020-10-06T06:25:33Z",
  updated_at: "2024-05-19T11:14:31Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("varun gm");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/github", (req, res) => {
  res.json(gitHubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
