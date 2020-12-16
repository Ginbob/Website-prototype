const igUtils = require('./instagramUtils');
const RssParser = require('rss-parser');
const htmlParser = require('node-html-parser')
const parser = new RssParser();

async function fetchIGUser() {
    const feed = await parser.parseURL(process.env.IG_RSS_FEED);
    return convertFeed(feed);
}

function getImageLink(content) {
    const contentHtml = htmlParser.parse(content);
    return contentHtml.querySelector('img').getAttribute('src');
}

function convertFeed(feed) {
    return feed.items.map(post => {
        const description = igUtils.cutDescription(post.contentSnippet);
        const thumbnail = getImageLink(post.content);
        return {
            link: post.link,
            thumbnail,
            date: igUtils.getDateFormatted(post.isoDate, false),
            text: description,
            isVideo: false,
            videoUrl: undefined
        };
    })
}

module.exports = {
    fetchIGUser
}