const express = require("express");

const { TweetBot } = require("./tweet-bot");

const app = express();
const port = 5000;

app.use(express.json());

const tweetBot = new TweetBot({
  consumer_key: "ZQSXNDpbWMhXPDqoNId6La3X8",
  consumer_secret: "QLILdotFeFXruEU4zoQ8p9JTFSoCAts4ru8apBhAbljv0FCdEX",
  acces_token: "1528770397315174400-mtwc2AbbCeti9o5bFOfqo2whp3wmfr",
  acces_token_secret: "7BQ70Ef3gYAfpLZdKmN4W3PqwYYDBxBnqE4cc1RuUh1Qd",
});

// route section
app.get("/adminTweet", async (req, res, next) => {
  const admin = await tweetBot.getAdminUserInfo();
  res.json(admin)
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
