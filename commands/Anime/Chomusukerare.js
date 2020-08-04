const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "chomusukerare",
    category: "Anime",
    aliases: ["rchomu"],
    description: "chomusuke",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rchomusuke = await db.fetch(`rchomusuke_${user.id}`)
    if (rchomusuke === null)rchomusuke ='You dont have this Card';
    if (rchomusuke === 0)rchomusuke ='You dont have this Card';
    if (rchomusuke === 1)rchomusuke =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Chomusuke**')
    .setAuthor('Konosuba Collection')
    .setColor('301909')
    .setImage('https://media1.tenor.com/images/38d4692cee605f3dc85a80150fd5c9a5/tenor.gif?itemid=7617612')
    .addField('Owned', `${rchomusuke}`)
    .setFooter('#00017')
    message.channel.send(Fembed)





}}