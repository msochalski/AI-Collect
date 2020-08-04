const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kiritoshiny",
    aliases: ["skirito"],
    category: "Anime",
    description: "shiny kirito",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let skirito = await db.fetch(`skirito_${user.id}`)
    if (skirito === null)skirito ='You dont have this Card';
    if (skirito === 0)skirito ='You dont have this Card';
    if (skirito === 1)skirito =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Kirito**')
    .setAuthor('SAO Collection')
    .setColor('000000')
    .setImage('https://i.imgur.com/geUqsfL.gif')
    .addField('Owned', `${skirito}`)
    .setFooter('#00020')
    message.channel.send(Fembed)




}}