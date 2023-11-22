const express = require("express");
const bodyParser = require("body-parser");

const { TweetBot } = require("./tweet-bot");

const app = express();
const port = 5500;

require("dotenv").config();
app.use(express.json());

const tweetBot = new TweetBot({
  consumer_key: "",
  consumer_secret: "",
  acces_token: process.env.TWEET_ACCES_TOKEN,
  acces_token_secret: process.env.TWEET_ACCES_TOKEN_SECRET,
});

// route section
app.get("/adminTweet", async (req, res, next) => {
  const admin = await TweetBot.getAdminUserInfo();
});

app.get("/", (req, res) => {
  res.send("<h1> Welcome To Telkom Menfess </h1>");
});
// end route section

// listen
app.listen(port, () => {
  console.log(`Listening server on port http://localhost:${port}`);
});
// end listen
