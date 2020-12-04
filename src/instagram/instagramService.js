const igScraper = require('instagram-scraping');
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

module.exports.scrapeLarsProfile = async () => {
    const larsData = await igScraper.scrapeUserPage('lar_alt');
    const igPosts = [];
    let i = 0;
    while (igPosts.length < 5 && i < larsData.medias.length) {
        const post = larsData.medias[i];
        if (!post.text.includes(privatePostFilter)) {
            igPosts.push({
                mediaId: post.media_id,
                shortcode: post.shortcode,
                thumbnail: post.thumbnail,
                text: post.text,
                date: getDateFormatted(post.date)
            });
        }
        i++;
    }
    return igPosts;
}