const express = require("express");
const { TweetBot } = require("./tweet-bot");
const CronJob = require('cron').CronJob

require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json());

// function
const bot = new TweetBot({
  consumer_key: process.env.TWEET_API_KEY,
  consumer_secret: process.env.TWEET_API_KEY_SECRET,
  access_token: process.env.TWEET_ACCES_TOKEN,
  access_token_secret: process.env.TWEET_ACCES_TOKEN_SECRET,
});

const job = new CronJob(
    '*/1 * * * * *',
    doJob,
    null,
    false
)

async function doJob() {
    const authenticatedProfile = await bot.getAdminUserInfo()
    const dm = await bot.getDirectMessage()

    console.log(dm)
}

// route section
app.get("/adminTweet", async (req, res, next) => {
  const admin = await bot.getAdminUserInfo();
  res.json(admin);
});

app.get('/trigger', async (req, res, next) => {
    job.fireOnTick()
    res.send('triggered')
})

app.get("/", (req, res) => {
  res.send("<h1> Welcome To Telkom Menfess </h1>");
});
// end route section

// listen
app.listen(port, () => {
  console.log(`Listening server on port http://localhost:${port}`);
});
// end listen
