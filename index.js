const { Client, GatewayIntentBits } = require('discord.js');

// Maak een nieuwe client aan
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Wanneer de bot klaar is, voer deze code uit
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('EU Scrim bot', { type: 'PLAYING' });
});

// Log in bij Discord met de bot token
client.login(process.env.DISCORD_TOKEN);
