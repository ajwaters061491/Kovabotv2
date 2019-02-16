//handles forced shutdown command

module.exports = {
    force : function (channel, userstate, client) { 
            if (userstate.username.toLowerCase() === 'xelkova') {
                client.action(channel, `@${userstate.username} acknowlegded. Shutting down.`);
                process.exit();
            }
            else { //case for if the user of the command is anyone other than myself
                client.action(channel, `@${userstate.username} you are not permitted to use that command.`);
            }
    }
}