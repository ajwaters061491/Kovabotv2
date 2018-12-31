const info = require('./botinfo.json');
const fetch = require('node-fetch'); //
const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: info.weatherKey
        //units: "imperial" This should be definable, but it seems like its bugged for now
    }
);

//can be tested using console.log(currentWeather);

module.exports = { 
    weather : function (weatherQuery, channel, userstate, client) { 
            if(weatherQuery.length === 5 && Number.parseInt(weatherQuery) + '' === weatherQuery) { //checks length for length of 5, and checks to see if the number value is equal to string value 
                helper.getCurrentWeatherByZipCode(weatherQuery, (err, currentWeather) => { 
                    if(err){
                        console.log(err);
                    }
                    else{
                        let tempFahrenheit = Math.floor(currentWeather.main.temp * (9/5) - 459.67);

                        client.action(channel, `@${userstate.username} the weather in ${currentWeather.name} is ${currentWeather.weather[0].main} with a current temp
                        of ${tempFahrenheit} degrees.`); 
                    }
                }); 
            } else {
                helper.getCurrentWeatherByCityName(weatherQuery, (err, currentWeather) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        let tempFahrenheit = Math.floor(currentWeather.main.temp * (9/5) - 459.67);

                        client.action(channel, `@${userstate.username} the weather in ${currentWeather.name} is ${currentWeather.weather[0].main} with a current temp 
                        of ${tempFahrenheit} degrees.`);
                    }
                });
            }
    }
} 

