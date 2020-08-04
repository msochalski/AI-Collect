const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "heathcliffrare",
    aliases: ["rheath"],
    category: "Anime",
    description: "heathcliff kayaba rare",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rheathcliff = await db.fetch(`rheathcliff_${user.id}`)
    if (rheathcliff === null)rheathcliff ='You dont have this Card';
    if (rheathcliff === 0)rheathcliff ='You dont have this Card';
    if (rheathcliff === 1)rheathcliff =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Heathcliff**')
    .setAuthor('SAO Collection')
    .setColor('fc030b')
    .setImage('https://pa1.narvii.com/6321/4ee1a8c7d8f40654e6e96feedd4e5d48c4b69c1b_00.gif')
    .addField('Owned', `${rheathcliff}`)
    .setFooter('#00029')
    message.channel.send(Fembed)




}}