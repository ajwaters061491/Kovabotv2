//dynamically handles multiple channel's twitters
const users = require('./users.json');

module.exports = { 
    twitterhandler : function (channel) { 
        if (channel === '#xelkova') {
            return `${users.xelkova.twitter}`; 
        }
        if (channel === '#otherChannelHere') {
            return `${users.otherChannelHere.twitter}`
        }       
    }
} 