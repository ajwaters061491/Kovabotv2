//handles queries to wordnik
const request = require('request');
const info = require('../botinfo.json');


module.exports = {
    define : function (queryString, channel, userstate, client) { //we may need to pass these in
        wordnikCall(queryString, channel, userstate, client);
    }
}

function wordnikCall (queryString, channel, userstate, client) {
    var wordquery = `https://api.wordnik.com/v4/word.json/${queryString}/definitions?limit=200&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=${info.wordnikKey}`;

    request(wordquery, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        
        if (body[0] !== undefined) {
            if (body[0].text !== undefined) {
                client.action(channel, `@${userstate.username} '${queryString}' - '${body[0].partOfSpeech}', ${body[0].text}`);
            } else {
                client.action(channel, `@${userstate.username} hmm, there appears to be a problem with that word, try again.`);
            }
        }
        else {
            client.action(channel, `@${userstate.username} hmm, that doesn't seem to be a real word, try again.`);
        }
    });
}