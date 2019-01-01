//file to handle commands
const query = require('./weather.js');
//const users = require('./users.json'); to be used for setup of multi-user system

module.exports = { 
    read : function (channel, userstate, message, client) {
        //commands go here
        if (message.toLowerCase() === '!hi' || message.toLowerCase() === '!hello') { //!hello
            client.action(channel, `Hello @${userstate.username}, and welcome to the stream!`,);
        } 
        else if (message.toLowerCase() === '!twitter') {//!twitter
            client.action(channel, `@${userstate.username} my twitter is @Kovapls! Follow for shitposts and unfunny content!`);
        }
        else if (message.toLowerCase() === '!github') {//!github
            client.action(channel, `@${userstate.username} my github is ajwaters061491`);
        }
        else if (message.toLowerCase() === '!ree') {//!ree
            client.action(channel, `@${userstate.username} REEEEEEEEEEEEEEE`);
        }
        else if (message.toLowerCase().startsWith("!weather ")) { //!weather
            let weatherQuery = message.substr(9, (message.length - 9));
            
            query.weather(weatherQuery, channel, userstate, client)
        }
        else if (message.toLowerCase() === '!kovabotv2' || message.toLowerCase() === '!kovabot') {//!kovabot or !Kovabotv2
            client.action(channel, `@${userstate.username} Kovabotv2 is a simple chat bot written with node.js. The project github can be found 
            at https://github.com/ajwaters061491/Kovabotv2`);
        }
        else if (message.toLowerCase() === '!commands') {
            client.action(channel, `@${userstate.username} current commands are: !hi, !twitter, !github, !ree, !weather. For usage and definitions, check the bots github page!`);
        } 
    }
}

