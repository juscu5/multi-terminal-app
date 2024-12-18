

const titleBuilder = (title) => title.toLowerCase().split(" ").join("-").split(".")[0];

const ipv4Converter = (ipAddress) => ipAddress.startsWith('::ffff:')?ipAddress.substring(7):ipAddress;

module.exports = {titleBuilder, ipv4Converter}