const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "asuna",
    category: "Anime",
    description: "asuna",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let asuna = await db.fetch(`asuna_${user.id}`)
    if (asuna === null)asuna ='You dont have this Card';
    if (asuna === 0)asuna ='You dont have this Card';
    if (asuna === 1)asuna =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Asuna**')
    .setAuthor('SAO Collection')
    .setColor('ffd9f7')
    .setImage('https://vignette.wikia.nocookie.net/sao-abridged/images/8/88/Asuna_SAO.png/revision/latest?cb=20190905123928')
    .addField('Owned', `${asuna}`)
    .setFooter('#00021')
    message.channel.send(Fembed)




}}