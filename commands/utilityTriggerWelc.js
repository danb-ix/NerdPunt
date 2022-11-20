const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')
const file = new MessageAttachment('resources/NerdPunt_Payday (1).png')
const userembed = new MessageEmbed()
    .setTitle("A NERD HAS APPEARED!")
    .setFooter({text: `Welcome to NerdPunt :)` })
    .setDescription(`
Hey <@364902391717298181>, Welcome to NerdPunt!

Head on over to the <#973190324652498964> to learn more about what we do here.

Join The NerdPunt Payday - Sponsored by LITE eSports , a 32 team battle to win a share of our $1000 prize pool! Watch live from https://www.twitch.tv/nerdpunt

Stick around, a lot more tournaments to be announced!

FOR THE NERDS, BY THE NERDS!
`)
    .setColor(0xF44F52)
    .setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
	.setName('triggerwelcomemsg')
	.setDescription('Triggers the welcome message, Admin only.'),

    async execute(interaction) {
    const channel = interaction.client.channels.cache.get("967289033006911489");
	console.log(chalk.blue(`${interaction.user.tag} used the command: /triggerwelcomemsg`))
        if (interaction.user.id !== '364902391717298181' && interaction.user.id !== '605044485830868993') return interaction.reply({
            content: 'You are not allowed to use this command',
            ephemeral: true
        })
    channel.send({ embeds: [userembed], content: `<@364902391717298181>`})
    channel.send({ files: [file] })
    
    },
}