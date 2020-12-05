const axios = require("axios");
const dateFormat = require('dateformat');
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

const privatePostFilter = '#lp'

function getDateFormatted(timestamp) {
    const date = new Date(timestamp * 1000);
    return dateFormat(date, 'dd. mmmm yyyy');
}

function convertPostData(postNode) {
    return {
        mediaId: postNode.id,
        shortcode: postNode.shortcode,
        thumbnail: postNode.thumbnail_src,
        date: getDateFormatted(postNode.taken_at_timestamp),
        text: postNode.edge_media_to_caption.edges[0].node.text
    };
}

module.exports.scrapeLarsProfile = async () => {
    const userinfo = await axios.get("https://instagram.hanifdwyputra.xyz/?username=lar_alt");

    const igPosts = [];
    try {
        const posts = userinfo.data.graphql.user.edge_owner_to_timeline_media.edges;
        let i = 0;
        while (igPosts.length < 5 && i < posts.length) {
            const post = convertPostData(posts[i].node);
            if (!post.text.includes(privatePostFilter)) {
                igPosts.push(post);
            }
            i++;
        }
        return igPosts;
    } catch(error) {
        console.log(error);
    }
}