const twit = require('twit')

class TweetBot {
    constructor(props) {
        this.T = new Twit({
            consumer_key: props.consumer_key,
            consumer_secret: props.consumer_secret,
            acces_token: props.acces_token,
            acces_token_secret: props.acces_token_secret
        })
    }

    getAdminUserInfo = () => {
        this.T.get('account/verify_credentials', { skip_status: true })
    }

}