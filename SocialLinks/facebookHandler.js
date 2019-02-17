//dynamically handles multiple channel's facebooks
const users = require('./users.json');

module.exports = { 
    facebookhandler : function (channel) { 
        if (channel === '#xelkova') {
            return `${users.xelkova.facebook}`; 
        }
        if (channel === '#otherChannelhere') {
            return `${users.otherChannelhere.facebook}`;
        }       
    }
} 