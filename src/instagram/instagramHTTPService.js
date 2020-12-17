const axios = require('axios');
// const got = require('got');
const igUtils = require('./instagramUtils');

function convertUserData(user) {
    console.log(user);
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
            // "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36",
            // "Accept": "application/xhtml+xml,application/xml,application/json;q=0.9,image/webp,*/*;q=0.8",
            // "Accept-Encoding": "gzip, deflate, br",
            // "Accept-Language": "en-US,en;q=0.5",
            // "Upgrade-Insecure-Requests": 1,
            // ":authority": "www.instagram.com",
            // ":method": "GET",
            // ":path": "/lar_alt/?__a=1",
            // ":scheme": "https",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "de-DE,de;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": 1,
            "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36",
            "Connection": "keep-alive",
            "Cookie": "XSRF-TOKEN=44C",
            "X-XSRF-TOKEN": "44C"
        }
    };
    // const response = await got(options.url);
    // return convertUserData(JSON.parse(response.body));
    const response = await axios(options);
    console.log(JSON.stringify(response));
    return convertUserData(response.data);
}

module.exports = {
    fetchIGUser
}