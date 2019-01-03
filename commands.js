//file to handle commands
const weatherquery = require('./weather.js');
const cleverquery = require('./cleverbot.js');
const users = require('./users.json'); 

module.exports = { 
    read : function (channel, userstate, message, client) {
        //commands go here
        if (message.toLowerCase() === '!hi' || message.toLowerCase() === '!hello') { //!hello
            client.action(channel, `Hello @${userstate.username}, and welcome to the stream!`,); 
        } 
        else if (message.toLowerCase() === '!twitter') {//!twitter
            client.action(channel, `@${userstate.username} ${users.xelkova.twitter}`); 
        }
        else if (message.toLowerCase() === '!github') {//!github
            client.action(channel, `@${userstate.username} ${users.xelkova.github}`);
        }
        else if (message.toLowerCase() === '!ree') {//!ree
            client.action(channel, `@${userstate.username} REEEEEEEEEEEEEEE`);
        }
        else if (message.toLowerCase().startsWith("!weather ")) { //!weather
            let queryString = message.substr(9, (message.length - 9));
            
            weatherquery.weather(queryString, channel, userstate, client);
        }
        else if (message.toLowerCase().startsWith("@kovabotv2 ")) { //@Kovabotv2
            let queryString = message.substr(11, (message.length - 11));

            cleverquery.clever(queryString, channel, userstate, client);
        }
        else if (message.toLowerCase() === '!kovabotv2' || message.toLowerCase() === '!kovabot') {//!kovabot or !Kovabotv2
            client.action(channel, `@${userstate.username} Kovabotv2 is a simple chat bot written with node.js. The project github can be found 
            at https://github.com/ajwaters061491/Kovabotv2`);
        }
        else if (message.toLowerCase() === '!commands') { //!commands
            client.action(channel, `@${userstate.username} current commands are: !hi, !twitter, !github, !ree, !weather and !kovabotv2. You can talk to the bot with @kovabotv2! For usage and definitions, check the bots github page!`);
        } 
    }
}

