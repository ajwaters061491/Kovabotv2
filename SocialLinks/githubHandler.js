//dynamically handles multiple channel's githubs
const users = require('./users.json');

module.exports = { 
    githubHandler : function (channel) { 
        if (channel === '#xelkova') {
            return `${users.xelkova.github}`; //${users.xelkova.twitter}
        }
        else {
            return `${defgithub}`;
        }
        
    }
} 