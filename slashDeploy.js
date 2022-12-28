const { REST, Routes } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');

module.exports = { 
	deploy: async (client) => {

 const commands = [];
// Grab all the command files from the commands directory you created earlier
 const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	commands.push(command.data.toJSON());
	client.slashCommands.set(command.data.name, command);
}

// Grab the clientId of the bot
const clientId = "" // Put the Application ID 

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// and deploy your commands!

	try {
		client.logging.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		client.logging.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		client.logging.error(error);
	}
}}
