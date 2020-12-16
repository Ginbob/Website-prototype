const instaTouch = require("instatouch");
const dateFormat = require('dateformat');
const NodeCache = require('node-cache');

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
        const cachedContent = myCache.get(instaFeed);
        if (cachedContent) {
            console.log("serving ig feed from cache");
            return cachedContent;
        } else {
            const options = {count: 10, mediaType: 'image'};
            console.log("try fetching ig feed");
            const user = await instaTouch.user('lar_alt', options);
            igPosts.push(...user.collector.map(convertPostData));
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