const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kaguya",
    category: "Anime",
    description: "Kaguya Shinomiya",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let kaguya = await db.fetch(`kaguya_${user.id}`)
    if (kaguya === null)kaguya ='You dont have this Card';
    if (kaguya === 0)kaguya ='You dont have this Card';
    if (kaguya === 1)kaguya =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Kaguya**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740193430613000323/createcard.png')
    .addField('Owned', `${kaguya}`)
    .setFooter('#00034')
    message.channel.send(Fembed)




}}