const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "kaguyashiny",
    aliases: ["skaguya"],
    category: "Anime",
    description: "shiny kaguya",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let skaguya = await db.fetch(`skaguya_${user.id}`)
    if (skaguya === null)skaguya ='You dont have this Card';
    if (skaguya === 0)skaguya ='You dont have this Card';
    if (skaguya === 1)skaguya =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Kaguya**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740194796966248508/createcard.png')
    .addField('Owned', `${skaguya}`)
    .setFooter('#00036')
    message.channel.send(Fembed)


    }}
