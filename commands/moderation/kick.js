module.exports = {
    name: "kick",
    aliases: "",
    description: "Kicks a member in the current channel",
    category: "moderation",
    guildOnly: true,
    cooldown: 3,
    usage: "<command> <mentioned user | user ID> <reason>",
    execute(message, args) {
        message.reply("template command")
    },
};

