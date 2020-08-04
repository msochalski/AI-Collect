const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "rmiyuki",
    category: "Anime",
    description: "Rare Miyuki Shirogane",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rmiyuki = await db.fetch(`rmiyuki_${user.id}`)
    if (rmiyuki === null)rmiyuki ='You dont have this Card';
    if (rmiyuki === 0)rmiyuki ='You dont have this Card';
    if (rmiyuki === 1)rmiyuki =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Miyuki**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740202494969380864/createcard.png')
    .addField('Owned', `${rmiyuki}`)
    message.channel.send(Fembed)




}}