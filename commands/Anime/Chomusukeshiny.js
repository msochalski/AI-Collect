const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "chomusukeshiny",
    category: "Anime",
    aliases: ["schomu"],
    description: "shiny chomusuke",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let schomusuke = await db.fetch(`schomusuke_${user.id}`)
    if (schomusuke === null)schomusuke ='You dont have this Card';
    if (schomusuke === 0)schomusuke ='You dont have this Card';
    if (schomusuke === 1)srchomusuke =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Chomusuke**')
    .setAuthor('Konosuba Collection')
    .setColor('301909')
    .setImage('https://68.media.tumblr.com/9428bead7dc6b2abb95b3faa631384ca/tumblr_otu9i8FETy1tr842yo1_540.gif')
    .addField('Owned', `${schomusuke}`)
    .setFooter('#00018')
    message.channel.send(Fembed)





}}