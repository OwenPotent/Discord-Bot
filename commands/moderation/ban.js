module.exports = {
    name: "ban",
    aliases: "",
    description: "Bans a member from the current server",
    category: "moderation",
    guildOnly: true,
    cooldown: 3,
    usage: "<command> <mentioned User | user ID> <reason>",
    run: async (client, args, message) => {
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!target) return message.channel.send("Please provide a valid mention or ID.");
    
        if(!target.bannable) return message.channel.send("I cannot ban this user.");

        let time = parseInt(args[1]);
        let reason = args.slice(time ? 2 : 1).join(" ");
    
        try {
            await target.send(`You have been banned from \`${message.guild.name}\`.\n**Reason:** ${reason || "No reason provided."}`);
        } catch(e) {
            message.channel.send("Warning: Could not send this user a DM informing them of their ban. They likely have messages turned off.");
        }
    }
};