const {
    Client,
    Intents
} = require('discord.js');
const keepAliveServer = require('./keep_alive.js');

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on('guildMemberAdd', (member) => {
    const channelId = '1197950988057845910'; // The Channel ID you just copied
    const welcomeMessage = `Hey <@${member.id}>! Welcome to my server!`;
    member.guild.channels.fetch(channelId).then(channel => {
        channel.send(welcomeMessage)
    });
});

bot.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong!');
    }
});

bot.on('messageCreate', (message) => {
    if (message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('kirixen')) {
        message.channel.send('Hello there!');
    }
});

bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} is logged in!`);
});

bot.login(process.env.token).then(() => {
    bot.user.setPresence({ activities: [{ name: 'Subscribe', type: 'PLAYING' }], status: 'online' });
});
