const { Client, GatewayIntentBits, Events } = require('discord.js');
const http = require('http');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ]
});

client.once(Events.ClientReady, (client) => {
  console.log(`Bot connected as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong! البوت شغال!');
  }
});

client.login(process.env.DISCORD_TOKEN);

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('HOUCINE22 Bot is online!');
}).listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
