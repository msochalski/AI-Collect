const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "heathcliffshiny",
    aliases: ["sheath"],
    category: "Anime",
    description: "heathcliff kayaba shiny",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let sheathcliff = await db.fetch(`sheathcliff_${user.id}`)
    if (sheathcliff === null)sheathcliff ='You dont have this Card';
    if (sheathcliff === 0)sheathcliff ='You dont have this Card';
    if (sheathcliff === 1)sheathcliff =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Heathcliff**')
    .setAuthor('SAO Collection')
    .setColor('fc030b')
    .setImage('https://66.media.tumblr.com/6e572679c48f3e3de19cb06f01ba4b71/tumblr_o6nhkaYKJL1tpri36o1_500.gif')
    .addField('Owned', `${sheathcliff}`)
    .setFooter('#00030')
    message.channel.send(Fembed)




}}