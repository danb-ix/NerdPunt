const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
	.setName('role')
	.setDescription('Gives you a specified role')
    .addStringOption(option => option.setName('role').setDescription('The role you want')
		.addChoice('Looking For Team', 'Looking For Team')
		.addChoice('Scrims', 'Scrims')
		.setRequired(true)),

    async execute(interaction) {
		console.log(chalk.blue(`${interaction.user.tag} used the command: /role`))

	const role = interaction.options.getString('role');
	const member = interaction.member
	const arole = interaction.guild.roles.cache.find(r => r.name === role)

	if (role !== 'Looking For Team' && role !== 'Scrims') {
		return interaction.reply({ content: 'This is not a valid role!', ephemeral: true });
	}

	if (member.roles.cache.has(arole)) {
		member.roles.remove(arole)
	}

	member.roles.add(arole)

	await interaction.reply(`Gave you the role **${arole.name}**`);
    },
}