//handles unforseen circumstances
const info = require('../botinfo.json');
const accountSid = info.twilioSID;
const authToken = info.twilioToken;


  module.exports = {
    alert : function (channel, userstate, client) {
      let channelRaw = channel.slice(1, channel.length);

      const twilio = require('twilio')(accountSid, authToken); //may need to move this into the module body

      twilio.messages
      .create({
        body: `${userstate.username} has reported an issue in ${channelRaw}'s channel. You can click here: "https://www.twitch.tv/${channelRaw} to see whats up.`,
        from: info.twilioNumber,
        to: info.myNumber
      })
      .then(message => client.action(channel, `Thank you, @${userstate.username} I am contacting my creator, he should be here shortly.`));
    }
  }