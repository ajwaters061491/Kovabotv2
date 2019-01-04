//dynamically handles multiple channel's githubs
const users = require('./users.json');

module.exports = { 
    githubHandler : function (channel) { 
        if (channel === '#xelkova') {
            return `${users.xelkova.github}`; 
        }
        else {
            return `${users.xelkova.defgithub}`;
        }
        
    }
} 