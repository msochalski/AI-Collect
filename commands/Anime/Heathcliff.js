const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "heathcliff",
    aliases: ["heath"],
    category: "Anime",
    description: "heathcliff kayaba",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let heathcliff = await db.fetch(`heathcliff_${user.id}`)
    if (heathcliff === null)heathcliff ='You dont have this Card';
    if (heathcliff === 0)heathcliff ='You dont have this Card';
    if (heathcliff === 1)heathcliff =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Heathcliff**')
    .setAuthor('SAO Collection')
    .setColor('fc030b')
    .setImage('https://cdn.ezcosplay.com/media/catalog/product/cache/88a5a78f5dc8f5fb801e9020fd0d9592/e/w/ewg0962.jpg')
    .addField('Owned', `${heathcliff}`)
    .setFooter('#00028')
    message.channel.send(Fembed)




}}