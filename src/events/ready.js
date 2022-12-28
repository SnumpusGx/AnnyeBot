const Discord = require('discord.js');

module.exports = {
    name: "ready",

    run: async (client) => {
        client.logging.log(`Fiquei online como ${client.user.tag}!`)
        client.user.setStatus('dnd');
        client.user.setActivity("Estou online!", { type: Discord.ActivityType.Playing })
    }
}
