const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "darkness",
    category: "Anime",
    description: "darkness",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let darkness = await db.fetch(`darkness_${user.id}`)
    if (darkness === null)darkness ='You dont have this Card';
    if (darkness === 0)darkness ='You dont have this Card';
    if (darkness === 1)darkness =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Darkness**')
    .setAuthor('Konosuba Collection')
    .setColor('f5e942')
    .setImage('https://66.media.tumblr.com/4bd8c527be2fa04f48047d78d207aee7/tumblr_pkx23vbl6J1vfst3g_1280.jpg')
    .addField('Owned', `${darkness}`)
    .setFooter('#00007')
    message.channel.send(Fembed)




}}