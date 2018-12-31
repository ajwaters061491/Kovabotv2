//file to handle commands
const query = require('./weather.js');

module.exports = { 
    read : function (channel, userstate, message, client) {
        //commands go here
        if (message.toLowerCase() === '!hi' || message.toLowerCase() === '!hello') {
            client.action(channel, `Hello @${userstate.username}, and welcome to the stream!`);
        } 
        else if (message.toLowerCase() === '!twitter') {
            client.action(channel, `@${userstate.username} my twitter is @Kovapls! Follow for shitposts and unfunny content!`);
        }
        else if (message.toLowerCase() === '!github') {
            client.action(channel, `@${userstate.username} my github is ajwaters061491`);
        }
        else if (message.toLowerCase() === '!ree') {
            client.action(channel, `@${userstate.username} REEEEEEEEEEEEEEE`);
        }
        else if (message.toLowerCase().startsWith("!weather ")) { //what am I even doing with my life
            let weatherQuery = message.substr(9, (message.length - 9));
            
            query.weather(weatherQuery, channel, userstate, client)
        } 
    }
}

