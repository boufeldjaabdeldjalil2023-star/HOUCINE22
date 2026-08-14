const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ]
});

client.once('ready', () => {
  console.log(`Bot connected as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
const http = require('http');

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('HOUCINE22 Bot is online!');
}).listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
