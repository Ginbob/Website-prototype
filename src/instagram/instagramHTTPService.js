const axios = require('axios');
const igUtils = require('./instagramUtils');

function convertUserData(user) {
    const posts = user.graphql.user.edge_owner_to_timeline_media.edges;
    return posts.map(post => {
        const postNode = post.node
        const description = igUtils.cutDescription(post.node.edge_media_to_caption.edges[0].node.text);
        return {
            link: "https://www.instagram.com/p/" + postNode.shortcode,
            thumbnail: postNode.thumbnail_src,
            date: igUtils.getDateFormatted(postNode.taken_at_timestamp),
            text: description,
            isVideo: postNode.is_video,
            videoUrl: postNode.video_url || undefined
        };
    })
}

async function fetchIGUser() {
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
    return convertUserData(response.data);
}

module.exports = {
    fetchIGUser
}