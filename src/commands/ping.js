const Discord = require("discord.js")

module.exports = {
	data: new Discord.SlashCommandBuilder()
	    .setName('ping')
		 .setDescription('Veja o ping do Bot.'),

  run: async (client, interaction) => {
    let ping = client.ws.ping;
    interaction.reply(`🏓 **|** ${interaction.user} Pong! \`${ping}ms\``)
  }
}
