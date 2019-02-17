//dynamically handles multiple channel's instagram
const users = require('./users.json');

module.exports = { 
    instagramhandler : function (channel) { 
        if (channel === '#xelkova') {
            return `${users.xelkova.instagram}`; 
        }
        if (channel === '#otherChannelHere') {
            return `${otherChannelHere}`
        }       
    }
} 