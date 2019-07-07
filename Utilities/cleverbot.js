//handles queries to cleverbot
/*const info = require('../botinfo.json');
var cleverbot = require("cleverbot.io");

//cleverbotUser
//cleverbotKey

cleverbot = new cleverbot(info.cleverbotUser, info.cleverbotKey);
cleverbot.setNick("kovabotv2")

cleverbot.create(function (err, session) {
    // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
});

module.exports = {
    clever : function (queryString, channel, userstate, client) {
        cleverbot.ask(queryString, function (err, response) {

            client.action(channel, `@${userstate.username} ${response}`);
            //console.log(response); //This will send a response back to the console.
          });
    }
}*/