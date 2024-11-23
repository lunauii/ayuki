const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sauce')
        .setDescription('Returns the bot profile banner.'),
    async execute(interaction) {
        await interaction.reply('https://i.pximg.net/img-master/img/2022/01/29/21/57/28/95858882_p0_master1200.jpg');
    },
}