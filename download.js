const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const axios = require('axios');
const fs = require('fs');

const OAuthHelper = (mediaUrl) => {
    const oauth = OAuth({
        consumer: {
            key: process.env.TWEET_API_KEY,
            secret: process.env.TWEET_API_KEY_SECRET
        },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        }
    })

    const authorization = oauth.authorize({
        url: mediaUrl,
        method: 'GET'
    }, {
        key: process.env.TWEET_ACCES_TOKEN,
        secret: process.env.TWEET_ACCES_TOKEN_SECRET
    });

    return oauth.toHeader(authorization);
};

const downloadMedia = async (mediaUrl, fileName) => {
    try {
        console.log('Download media ...............')
        const authorization = OAuthHelper(mediaUrl);
        const { data } = await axios.get(
            mediaUrl,
            {
                headers: authorization,
                responseType: 'arraybuffer'
            }
        );
        fs.writeFileSync(fileName, data);
        console.log('Media has been successfuly downloaded ......')
        return data;
    } catch (error) {
        throw new Error('error from downloading media.');
    }
};

module.exports = { downloadMedia };