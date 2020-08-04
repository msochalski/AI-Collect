const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "darknessshiny",
    aliases: ["sdark"],
    category: "Anime",
    description: "shiny darkness",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let sdarkness = await db.fetch(`sdarkness_${user.id}`)
    if (sdarkness === null)sdarkness ='You dont have this Card';
    if (sdarkness === 0)sdarkness ='You dont have this Card';
    if (sdarkness === 1)sdarkness =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Darkness**')
    .setAuthor('Konosuba Collection')
    .setColor('f5e942')
    .setImage('https://pa1.narvii.com/6662/45f4156f1513b95ab6ea51f06616c8eba2076704_hq.gif')
    .addField('Owned', `${sdarkness}`)
    .setFooter('#00009')
    message.channel.send(Fembed)




}}