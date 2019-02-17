//file to handle commands
const weatherquery = require('./Utilities/weather.js');
const cleverquery = require('./Utilities/cleverbot.js');
const wordquery = require('./Utilities/dictionary.js');
const shutdown = require('./Utilities/shutdown.js');
const email = require('./Utilities/email_issue.js');

const twit_Handle = require('./SocialLinks/twitterHandler.js');
const insta_Handle = require('./SocialLinks/instagramHandler.js');
const fb_Handle = require('./SocialLinks/facebookHandler.js');
const git_Handle = require('./SocialLinks/githubHandler.js');

module.exports = { 
    read : function (channel, userstate, message, client) {
        //commands go here
        if (message.toLowerCase() === '!hi' || message.toLowerCase() === '!hello') { //!hello
            client.action(channel, `Hello @${userstate.username}, and welcome to the stream!`,); 
        } 
        else if (message.toLowerCase() === '!twitter') {//!twitter
            client.action(channel, `@${userstate.username} ${twit_Handle.twitterhandler(channel)}`); 
        }
        else if (message.toLowerCase() === '!instagram') {//!instagram
            client.action(channel, `@${userstate.username} ${insta_Handle.instagramhandler(channel)}`);
        }
        else if (message.toLowerCase() === '!facebook') {//!facebook
            client.action(channel, `@${userstate.username} ${fb_Handle.facebookhandler(channel)}`);
        }
        else if (message.toLowerCase() === '!github') {//!github
            client.action(channel, `@${userstate.username} ${git_Handle.githubHandler(channel)}`);
        }
        else if (message.toLowerCase() === '!ree') {//!ree
            client.action(channel, `@${userstate.username} REEEEEEEEEEEEEEE`);
        }
        else if (message.toLowerCase() === '!shutdown') { //!shutdown
            shutdown.force(channel, userstate, client);
        }
        else if (message.toLowerCase() === '!alert') { //!issue
            email.alert(channel, userstate, client);                                 
        }
        else if (message.toLowerCase().startsWith("!weather ")) { //!weather
            let queryString = message.substr(9, (message.length - 9));
            
            weatherquery.weather(queryString, channel, userstate, client);
        }
        else if (message.toLowerCase().startsWith("!define " )) { //!define
            let queryString = message.substr(8, (message.length - 8));

            wordquery.define(queryString, channel, userstate, client);
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

