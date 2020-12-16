const instaTouch = require("instatouch");
const dateFormat = require('dateformat');
const NodeCache = require('node-cache');
const axios = require('axios');

/**
 * Google API calls cost money and it's not really important if the results are stale. There for we want to cache them, in memory should be enough for now.
 */
const myCache = new NodeCache({
    stdTTL: 3600
});

dateFormat.i18n = {
    dayNames: [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa',
        'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
    ],
    monthNames: [
        'Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez',
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};

const privatePostFilter = '#lp';
const instaFeed = 'instaFeed'

function getDateFormatted(timestamp) {
    const date = new Date(timestamp * 1000);
    return dateFormat(date, 'dd. mmmm yyyy');
}

function cutDescription(description) {
    if (description.length > 250) {
        return description.slice(0, 251) + "...";
    }
    return description;
}

function convertPostData(postNode) {

    const description = cutDescription(postNode.description);
    return {
        mediaId: postNode.id,
        shortcode: postNode.shortcode,
        thumbnail: postNode.thumbnail_src,
        date: getDateFormatted(postNode.taken_at_timestamp),
        text: description
    };
}

module.exports.scrapeLarsProfile = async () => {
    const igPosts = [];
    try {
        console.log("----------");
        await this.requestRssFeed();
        console.log("----------");
        const cachedContent = myCache.get(instaFeed);
        if (cachedContent) {
            console.log("serving ig feed from cache");
            return cachedContent;
        } else {
            // const options = {count: 10, mediaType: 'image'};
            console.log("try fetching ig feed");
            // const user = await instaTouch.user('lar_alt', options);
            // const user = await this.requestIgUser();
            // igPosts.push(...convertUserData(user));
            // myCache.set(instaFeed, igPosts);
            // console.log("fetched ig feed");
            return igPosts;
        }
    } catch (error) {
        console.log("error thrown");
        console.log(error);
        return [];
    }
}

function convertUserData(user) {
    const posts = user.graphql.user.edge_owner_to_timeline_media.edges;
    return posts.map(post => {
        const postNode = post.node
        const description = cutDescription(post.node.edge_media_to_caption.edges[0].node.text);
        return {
            mediaId: postNode.id,
            shortcode: postNode.shortcode,
            thumbnail: postNode.thumbnail_src,
            date: getDateFormatted(postNode.taken_at_timestamp),
            text: description,
            isVideo: postNode.is_video,
            videoUrl: postNode.video_url || undefined
        };
    })
}

module.exports.requestIgUser = async () => {
    const options = {
        "url": "https://www.instagram.com/lar_alt/?__a=1",
        "method": "GET",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36",
            "Accept": "application/xhtml+xml,application/xml,application/json;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": 1
        }
    };
    const response = await axios(options);
    return response.data;
}

module.exports.requestRssFeed = async () => {
    const options = {
        "url": "https://rss.app/feeds/qwIw0ptg1iHoH213.xml",
        "method": "GET",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36",
            "Accept": "application/xhtml+xml,application/xml,application/json;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": 1
        }
    };
    const response = await axios(options);
    return console.log(response);
}