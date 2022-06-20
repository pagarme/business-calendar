var path = require('path');

exports.getDataRoot = getDataRoot;
exports.getCalendar = getCalendar;

function getDataRoot() {
	return path.resolve(path.join(__dirname, 'data'))
}

function getCalendar(country, year) {
    var calendar = getFullPath(country, year);

    return require(calendar);
}

function getPath(country) {
    return path.join(getDataRoot(), country);
}

function getFile(path, year) {
    return path + '/' + year + '.json';
}

function getFullPath(country, year) {
    return getFile(getPath(country), year);
}
