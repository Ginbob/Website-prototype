const NodeCache = require('node-cache');
const igFetchService = require('./instagramRSSService');
// const igFetchService = require('./instagramHTTPService');

const myCache = new NodeCache({
    stdTTL: 3600
});

const instaFeed = 'instaFeed'

module.exports.scrapeLarsProfile = async () => {
    const igPosts = [];
    try {
        const cachedContent = myCache.get(instaFeed);
        if (cachedContent) {
            console.log("serving ig feed from cache");
            return cachedContent;
        } else {
            console.log("try fetching ig feed");
            const fetchedPosts = await igFetchService.fetchIGUser();
            igPosts.push(...fetchedPosts);
            myCache.set(instaFeed, igPosts);
            console.log("fetched ig feed");
            return igPosts;
        }
    } catch (error) {
        console.log("error thrown");
        console.log(error);
        return [];
    }
}

