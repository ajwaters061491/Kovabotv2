const info = require('../botinfo.json');
const nodemailer = require("nodemailer");

module.exports = {
    contact : function (channel, userstate, client) { 
            let channelRaw = channel.slice(1, channel.length);


            //console.log(userstate);
            if (userstate.badges.broadcaster === '1' || userstate.badges.moderator === '1') { //checks to be sure the user of the command is a broadcaster or mod of the channel
                let transporter = nodemailer.createTransport({ //connection to the email account
                    service: "gmail",
                    secure: "false",
                    port: 25,
                    auth: {
                        user: info.gmailUserName, 
                        pass: info.gmailPass
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
            
                let helperOptions = {
                    from: `"kovabot" <${info.gmailUserName}>`, // sender address
                    to: "xelkovaisbad@gmail.com", // list of receivers
                    subject:  `Alert in ${channel}'s channel`, // Subject line
                    html: `<b>${userstate.username} has reported an issue in ${channelRaw}'s channel. You can <a href="https://www.twitch.tv/${channelRaw}">Click Here</a> to find out what happened.</b>`
                }
                transporter.sendMail(helperOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        client.action(channel, `Thank you, @${userstate.username} I am contacting my creator, he should be here shortly.`);
                        console.log(info);
                    }
                })
            }
            else { 
               client.action(channel, `@${userstate.username} I am afraid you do not have access to this command.`);
            }
    }
}


