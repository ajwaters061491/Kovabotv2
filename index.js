const tmi = require("tmi.js");
const info = require("./botinfo.json");
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

// Connect the client to the server..
client.connect();
