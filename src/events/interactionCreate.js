const Discord = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",

    run: async (interaction) => {
        const client = interaction.client;
        const config = require('../../config.json');
           if(interaction.isChatInputCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            if(!cmd) interaction.reply('Erro');
            interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
            cmd.run(client, interaction) 
        }
    }
}
