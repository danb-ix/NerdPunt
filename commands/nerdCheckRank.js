const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, MessageEmbed } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const chalk = require('chalk')

module.exports = {
    data: new SlashCommandBuilder()
	    .setName('rank')
	    .setDescription('Get your rank role!')
        .addStringOption(option => 
            option.setName('username')
                .setDescription('Your valorant username')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('hashtag')
                .setDescription('Every character after the hastag. DO NOT INCLUDE THE HASHTAG ITSELF')
                .setRequired(true)),

    async execute(interaction) {
        try {
        await interaction.reply(`Rank command verification has been temporarily disabled. Please use the screenshot verification command in the mean time. Read the pins for instructions on how to do so.`)
        // await interaction.deferReply();    
        // console.log(chalk.blue(`${interaction.user.tag} used the command: /rank`))

        // const username = interaction.options.getString('username').replace(' ', '%20');
        // const discrim = interaction.options.getString('hashtag');
        // const response = await fetch(`https://api.kyroskoh.xyz/valorant/v1/mmr/ap/${username}/${discrim}?show=rankonly&display=0`);
        // const body = await response.text();
        // var msg = ''
        // var msgerror = ''
        // console.log(body)
        // if (body == 'Request failed with status code 404.') {
        //     msg = '**This player does not exist!**'
        // } else if (body == 'Request failed with status code 400.') {
        //     msg = '**This player has not played any ranked matches in their last 20 games!**'
        // } else if (body == 'Request failed with status code 429.') {
        //     msg = '**Too many requests, try again later.**'
        // } else if (body == 'Request failed with status code 500.') {
        //     msg = '**An error has occured, please try again**'
        // } else if (body == 'Request failed with status code 408.') {
        //     msg = '**API took too long to respond, run the command again :)**'
        // } else if (body.includes('html') || body.includes('request failed')) {
        //     msg = '<@!364902391717298181> **An error has occured**'
        // } else if (body.includes('timeout of')) {
        //     msg = '**API is busy, please try again soon!**'
        // } else {
        //     msg = `Your rank is **${body}**`
        // }

        // await wait(7500)
        // await interaction.editReply(msg)

        // if (msgerror !== '') {
        //     interaction.channel.send('<@!364902391717298181>').then(msg => msg.delete())
        // }
      
        // if (interaction.member.roles.cache.has("968713751714988032")) {
        //     interaction.member.roles.remove('968713751714988032')
        // }
        // if (interaction.member.roles.cache.has("964552696596144179")) {
        //     interaction.member.roles.remove('964552696596144179')
        // }

        // if (interaction.member.roles.cache.has("964553107147227176")) {
        //     interaction.member.roles.remove('964553107147227176')
        // }

        // if (interaction.member.roles.cache.has("964552259671322694")) {
        //     interaction.member.roles.remove('964552259671322694')
        // }

        // if (interaction.member.roles.cache.has("964547629591699536")) {
        //     interaction.member.roles.remove('964547629591699536')
        // }

        // if (interaction.member.roles.cache.has("964838965855264849")) {
        //     interaction.member.roles.remove('964838965855264849')
        // }

        // if (interaction.member.roles.cache.has("989812436586627103")) { // ascendant 
        //     interaction.member.roles.remove('989812436586627103')
        // }        



        // if (body.includes('Iron')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Iron')); correct = 1

        // if (body.includes('Bronze')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Bronze')); correct = 1

        // if (body.includes('Silver')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Silver')); correct = 1

        // if (body.includes('Gold')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Gold')); correct = 1

        // if (body.includes('Platinum')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Platinum')); correct = 1

        // if (body.includes('Diamond')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Diamond')); correct = 1

        // if (body.includes('Immortal')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Immortal')); correct = 1

        // if (body.includes('Radiant')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Radiant')); correct = 1

        // if (body.includes('Ascendant')) return interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === 'Ascendant')); correct = 1




        } catch (error) {

            console.log(error)

        }

    },

}