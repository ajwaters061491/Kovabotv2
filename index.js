const tmi = require("tmi.js");
const info = require('./botinfo.json');
const commandParse = require('./commandParse.js')



const options = { //defines connection object to be passed to the tmi.client function
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

//Connects to the client to the server
client.connect();

client.on("chat", function (channel, userstate, message, self) {   //TODO Move our timer function into a seperate js file. 

    commandParse.test(channel, userstate, message, client, self); //calls the chat timer parsing function

});