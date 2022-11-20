
/*
 Packages
*/

const chalk = require('chalk')

const fs = require('node:fs');
const {
    Client,
    Collection,
    Intents,
    MessageEmbed,
    MessageAttachment
} = require('discord.js');
const dotenv = require("dotenv")

dotenv.config()
const {
    GiveawaysManager
} = require('discord-giveaways');


const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL']
});

const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');

const commands = [];

const clientId = '969131770597478401';
const guildId = '960819979492655135';
const guild = client.guilds.cache.get("566596189827629066");

const rest = new REST({
    version: '9'
}).setToken(process.env.TOKEN);

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}



console.log(chalk.red('===================================================================================================='))

/*
Listeners
*/

client.on('messageCreate', async (message) => {
    if (message.channel.type !== 'DM') return
    console.log((chalk.blue(`${message.author.tag} said: ${message.content}`)))
})

client.once('ready', async () => {

    client.user.setActivity("https://discord.gg/cZfw8sWXAf", {
        type: "PLAYING",
    })

    const botver = "1.0.0"; //bot version string
    const serverNumb = client.guilds.cache.size //records how many servers the bot is in
    const botProfile = client.user.tag //records the username and discriminator the bot is logged in as
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const botstarted = month + " " + day + ', ' + year;
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const seconds = dateObj.getSeconds()

    const info = {
        dateStarted: botstarted,
        timeStarted: hours + ":" + minutes + ":" + seconds,
        botver: botver,
        serverNumb: serverNumb,
        botProfile: botProfile,
    }

    const jsonString = JSON.stringify(info, null, 2)

    fs.writeFile('info.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log(chalk.green('Successfully wrote file'))
            console.log(chalk.red('===================================================================================================='))
        }
    })
    
    const guild = client.guilds.cache.get("960819979492655135");
    guild.commands.set([]);


});

/*
Refresh / Commands
*/

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

(async () => {
    try {
        console.log(chalk.yellow('Refreshing / commands'));

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );        
        console.log(chalk.red('===================================================================================================='))
        console.log(chalk.green('All / commands reloaded'));
    } catch (error) {
        console.error(error);
    }
})();

/* 
Giveaway Management
*/

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

/*
Command Handling
*/

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        });
    }
});

/*
Logging in
*/

const release = 0;
console.log(chalk.red('===================================================================================================='))

if (release === 0) console.log(chalk.green(`LOGGING INTO STABLE CLIENT`)), client.login(process.env.TOKEN);