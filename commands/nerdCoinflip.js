const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
	.setName('coinflip')
	.setDescription('Flip a virtual coin!'),

    async execute(interaction) {
		console.log(chalk.blue(`${interaction.user.tag} used the command: /echo`))

	const outcomes = [
		'Heads',
		'Tails'
	]

	await interaction.reply(`:coin: It landed on **${outcomes[Math.floor(Math.random() * outcomes.length)]}**`)
    },
}