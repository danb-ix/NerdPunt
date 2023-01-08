const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Changes the status of the bot (DEVELOPER ONLY)')
        .addStringOption(option =>
            option.setName('status')
            .setDescription('What the bot is playing')
            .setRequired(true)),

    async execute(interaction) {
        console.log(chalk.blue(`${interaction.user.tag} used the command: /status`))


        const status = interaction.options.getString('status')

        if (interaction.user.id !== '364902391717298181' && interaction.user.id !== '605044485830868993' && interaction.user.id !== '843971600529227796' && interaction.user.id !== '187073317318950912' && interaction.user.id !== '190385657409961984') return interaction.reply({
            content: 'You are not allowed to use this command',
            ephemeral: true
        })

        if (status === "default") {
            interaction.client.user.setActivity("nerdpunt.net/discord", {
                type: "PLAYING",
            })
            await interaction.reply(`Changed status to \`Playing **nerdpunt.net/discord**\``)
        } else {
            interaction.client.user.setActivity(status, {
                type: "PLAYING",
            })

            await interaction.reply(`Changed status to \`Playing ${status}\``)

        }
    }
}