const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "aquashiny",
    aliases: ["saqua"],
    category: "Anime",
    description: "shiny aqua",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let saqua = await db.fetch(`saqua_${user.id}`)
    if (saqua === null)saqua ='You dont have this Card';
    if (saqua === 0)saqua ='You dont have this Card';
    if (saqua === 1)saqua =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Aqua**')
    .setAuthor('Konosuba Collection')
    .setColor('f5429b')
    .setImage('https://66.media.tumblr.com/68bb2569443f6a3fc24fa8834fafa3ec/b19587c5206e190f-eb/s500x750/058941838e532e0b330a2a7af1949875398a9b81.gif')
    .addField('Owned', `${saqua}`)
    .setFooter('#00006')
    message.channel.send(Fembed)


    }}
