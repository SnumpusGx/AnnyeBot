const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
	data: new Discord.SlashCommandBuilder()
	    .setName('eval')
		.setDescription('Executa códigos em Javascript')
		.addStringOption(option => option
				.setName('code')
				.setDescription('Código que será executado')
				.setRequired(true))
		.addUserOption(option => option
			.setName('user')
			.setDescription('Menção (Dentro do Código)'))
	    .addAttachmentOption(option => option
			.setName('file')
			.setDescription('Arquivo (Dentro do Código)')),

	async run(client, interaction) {
		if(!client.devs.includes(interaction.user.id)) return interaction.reply({ content: `Apenas meus desenvolvedores podem usar esse comando!` });

    function clean(text) {
      if (typeof text === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    };
      const commandCode = await interaction.options.getString('code')
      const code = commandCode;

	let evaled;
	try { 
	evaled = clean(await eval(code))
	} catch(err) {
         evaled = clean(`[ERRO] ${err}`)
	}
       const type = typeof evaled;
       if(type !== 'string') evaled = require('util').inspect(evaled);
       const attachment = new AttachmentBuilder(Buffer.from(evaled), { name: 'code.js' })
       
       if(evaled.length > 1800) {
	       
         evaled = `${evaled}`.length > 0 ? `${evaled}`.slice(0, 1800) : 'void';
        interaction.reply({ content: '```js\n' + evaled + '\n```', files: [attachment], ephemeral: true })
	    
       } else {
         interaction.reply({ content: '```js\n' + evaled + '\n```', ephemeral: true })
       }
	},
};
