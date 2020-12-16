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

function getDateFormatted(date, isTimeStamp = true) {
    if (isTimeStamp) {
        return dateFormat(new Date(date * 1000), 'dd. mmmm yyyy');
    }
    return dateFormat(new Date(date), 'dd. mmmm yyyy');
}

function cutDescription(description) {
    if (description.length > 250) {
        return description.slice(0, 251) + "...";
    }
    return description;
}

const privatePostFilter = '#lp';

module.exports = {
    getDateFormatted,
    cutDescription,
    privatePostFilter
}