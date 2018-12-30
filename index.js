const tmi = require("tmi.js");
const info = require('./botinfo.json');
const commandParse = require('./commands.js')
var chatLimiter = true;

//Kovabotv2


const options = {
    options: {
        debug: true,
        clientId: info.username //TWITCH_CLIENT_ID
    },
    connection: {
        reconnect: true,
        secure: true,
        port: 443
    },
    identity: {
        username: info.username, //username
        password: info.password //auth key
    },
    channels: ["#xelkova"]
};

const client = new tmi.client(options);

//Connect the client to the server..
client.connect();

client.on("chat", function (channel, userstate, message, self) {   //TODO wrap in a timer of around 5 seconds to prevent spamming, add message for on close.
    //ignore chat from the bot itself
    if (!self) {

        if (chatLimiter === true) { //checks for chat status

            commandParse.read(channel, userstate, message, client); //calls the function to handle chat parsing
            
            chatLimiter = false; //sets back to false

            setTimeout(() => { //runs timer to set back to true afterwards
                chatLimiter = true;
            }, 3000);

        } 
    }
});