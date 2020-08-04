const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "miyuki",
    category: "Anime",
    description: "Miyuki Shirogane",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let miyuki = await db.fetch(`miyuki_${user.id}`)
    if (miyuki === null)miyuki ='You dont have this Card';
    if (miyuki === 0)miyuki ='You dont have this Card';
    if (miyuki === 1)miyuki =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Miyuki**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740202128567697448/createcard.png')
    .addField('Owned', `${miyuki}`)
    message.channel.send(Fembed)




}}