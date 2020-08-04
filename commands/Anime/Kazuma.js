const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kazuma",
    category: "Anime",
    description: "kazuma",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let kazuma = await db.fetch(`kazuma_${user.id}`)
    if (kazuma === null)kazuma ='You dont have this Card';
    if (kazuma === 0)kazuma ='You dont have this Card';
    if (kazuma === 1)kazuma =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Kazuma**')
    .setAuthor('Konosuba Collection')
    .setColor('2a5437')
    .setImage('https://cdn.anisearch.com/images/character/cover/full/55/55426.jpg')
    .addField('Owned', `${kazuma}`)
    .setFooter('#00010')
    message.channel.send(Fembed)




}}