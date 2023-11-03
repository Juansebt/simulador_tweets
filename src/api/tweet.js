import { v4 as uuidv4 } from "uuid";
import { size, remove } from 'lodash';
import { TWEETS } from '../utils/constants';

export function saveTweetApi(tweet, userName) {
    const tweets = getTweetApi();

    if (size(tweets) === 0) {
        const tweetTemp = [{
            id: uuidv4(),
            tweet,
            userName,
            fechaCreacion: new Date(),
        }];
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
    } else {
        tweets.push({
            d: uuidv4(),
            tweet,
            userName,
            fechaCreacion: new Date(),
        });
        localStorage.setItem(TWEETS, JSON.stringify(tweets));
    }
}

export function getTweetApi() {
    const tweets = localStorage.getItem(TWEETS);

    if (tweets) {
        return JSON.parse(tweets);
    }

    return [];
}

export function deleteTweetApi(idTweet) {
    const tweets = getTweetApi();

    remove(tweets, function(tweet){
        return tweet.id === idTweet;
    });

    localStorage.setItem(TWEETS, JSON.stringify(tweets));
}