const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client({ intents: 3243773 });
const Logging = require('./assets/handlers/logs.js');
const fs = require('fs');


client.logging = new Logging('./src/logs', 'bot');
client.devs = config.devId;


const commandsFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
commandsFiles.forEach(file => {
  const event = require(`./src/events/${file}`);
  client.on(event.name, event.run);
});

client.login(config.token);

client.slashCommands = new Discord.Collection();
require('./slashDeploy.js').deploy(client);

process.on('unhandledRejection', async (err) => {
    client.logging.error(`${err.stack}`)
  });
  
  process.on('uncaughtException', async (err) => {
    client.logging.error(`${err.stack}`)
  });
