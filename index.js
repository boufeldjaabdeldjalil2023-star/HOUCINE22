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

// أوامر البوت
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong! البوت شغال!');
  }

  if (interaction.commandName === 'help') {
    await interaction.reply(
      '🤖 **أوامر HOUCINE22 Bot**\n\n' +
      '🏓 `/ping` — اختبار البوت\n' +
      '📖 `/help` — عرض أوامر البوت'
    );
  }
});

// ترحيب بالأعضاء الجدد
client.on(Events.GuildMemberAdd, async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    channel => channel.name === 'الترحيب'
  );

  if (!welcomeChannel) return;

  await welcomeChannel.send(
    `👋 مرحبًا بك ${member} في **HOUCINE22**! 🎉\nنتمنى لك وقتًا ممتعًا معنا ❤️`
  );
});

client.login(process.env.DISCORD_TOKEN);

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('HOUCINE22 Bot is online!');
}).listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
