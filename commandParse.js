//file to handle chat timer parsing
const commands = require('./commands.js');
var chatLimiter = true; 

module.exports = { 
    test : function (channel, userstate, message, client, self) {
        //Parsing function here 
        if (!self) {

            if (chatLimiter === true) { //checks for chat status
        
                commands.read(channel, userstate, message, client); //calls the function to handle chat parsing
                
                chatLimiter = false; //sets back to false
        
                setTimeout(() => { //runs timer for 3 seconds to set back to true afterwards
                    chatLimiter = true;
                }, 3000);
        
            } 
        } 
    }
}