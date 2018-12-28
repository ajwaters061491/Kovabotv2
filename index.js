const tmi = require("tmi.js");
const info = require('./botinfo.json');
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

client.on("chat", function (channel, userstate, message, self) {
    //ignore chat from the bot itself
    if (self) return;

    //commands go here
    if (message.toLowerCase() === '!hi' || message.toLowerCase() === '!hello') {
        client.action(channel, `Hello ${userstate.username}, and welcome to the stream!`);
    } 
    else if (message.toLowerCase() === '!twitter') {
        client.action(channel, `${userstate.username} my twitter is @Kovapls! Follow for shitposts and unfunny content!`);
    }
    else if (message.toLowerCase() === '!github') {
        client.action(channel, `${userstate.username} my github is ajwaters061491`);
    }
    else if (message.toLowerCase() === '!ree') {
        client.action(channel, 'REEEEEEEEEEEEEEE');
    }
});