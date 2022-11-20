const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')
const rand = require('random-pro');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('roll')
	.setDescription('Rolls a number between 1 and 10.')
    .addNumberOption(option =>
		option.setName('num')
			.setDescription('Choose a number to roll between')),

    async execute(interaction) {
    const number = interaction.options.getNumber('num');
	console.log(chalk.blue(`${interaction.user.tag} used the command: /roll`))

    if (!number) {await interaction.reply(rand.generateNumber(0,10).toString())}
    else await interaction.reply(rand.generateNumber(0,number).toString())
    },
}