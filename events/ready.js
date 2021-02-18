//here the event starts
const {prefix} = require('../config.json')
module.exports = client => {
    console.log(`Discord Bot ${client.user.tag} is online!`); //log when ready aka the bot usable
    client.user.setActivity(`All servers | ${prefix}help`, { type: "PLAYING"}) //first parameter, is the status, second is an object with type which can be: "PLAYING", "WATCHING", "LISTENING", "STREAMING" (where you need to add a , and then url: "https://twitch.tv/#")
}