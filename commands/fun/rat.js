const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rat')
        .setDescription('rat.'),
    async execute(interaction) {
        await interaction.reply('https://bigrat.monster/media/bigrat.jpg');
    },
}
