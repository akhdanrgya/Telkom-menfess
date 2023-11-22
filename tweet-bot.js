const Twit = require("twit");

class TweetBot {
  constructor(props) {
    this.T = new Twit({
      consumer_key: props.consumer_key,
      consumer_secret: props.consumer_secret,
      access_token: props.access_token,
      access_token_secret: props.access_token_secret,
    });
  }

  getAdminUserInfo = () => {
    return new Promise((resolve, reject) => {
      this.T.get("account/verify_credentials", { skip_status: true })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log("error on get admin <<<<<<<<<<<<<<");
          reject(err);
        });
    });
  };

  getDirectMessage = () => {
    return new Promise((resolve, reject) => {
      this.T.get("direct_message/events/list", (error, data) => {
        if (!error) {
          resolve(data);
        } else {
          reject("get message error");
        }
      });
    });
  };
}

module.exports = { TweetBot };
