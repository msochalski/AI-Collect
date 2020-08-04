const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "smiyuki",
    category: "Anime",
    description: "Shiny Miyuki Shirogane",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let smiyuki = await db.fetch(`smiyuki_${user.id}`)
    if (smiyuki === null)smiyuki ='You dont have this Card';
    if (smiyuki === 0)smiyuki ='You dont have this Card';
    if (smiyuki === 1)smiyuki =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Shiny**')
    .setDescription('**Miyuki**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740202916199006278/createcard.png')
    .addField('Owned', `${smiyuki}`)
    message.channel.send(Fembed)




}}