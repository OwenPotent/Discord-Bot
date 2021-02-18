module.exports = {
    name: "clear",
    aliases: "",
    description: "Clears messages in the current channel",
    category: "moderation",
    guildOnly: true,
    cooldown: 2,
    usage: "<command> <number of messages>",
    execute(message, args) {
        message.reply("template command")
    },
};