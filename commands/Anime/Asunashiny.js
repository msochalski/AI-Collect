const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "asunashiny",
    aliases: ["sasuna"],
    category: "Anime",
    description: "asuna",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let sasuna = await db.fetch(`sasuna_${user.id}`)
    if (sasuna === null)sasuna ='You dont have this Card';
    if (sasuna === 0)sasuna ='You dont have this Card';
    if (sasuna === 1)sasuna =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Asuna**')
    .setAuthor('SAO Collection')
    .setColor('ffd9f7')
    .setImage('https://i.imgur.com/VTuHrb8.gif?noredirect')
    .addField('Owned', `${sasuna}`)
    .setFooter('#00023')
    message.channel.send(Fembed)




}}