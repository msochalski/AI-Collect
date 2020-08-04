const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "kaguyarare",
    aliases: ["rkaguya"],
    category: "Anime",
    description: "better kaguya",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rkaguya = await db.fetch(`rkaguya_${user.id}`)
    if (rkaguya === null)rkaguya ='You dont have this Card';
    if (rkaguya === 0)rkaguya ='You dont have this Card';
    if (rkaguya === 1)rkaguya =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Kaguya**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740194076669902910/createcard.png')
    .addField('Owned', `${rkaguya}`)
    .setFooter('#00035')
    message.channel.send(Fembed)




}}