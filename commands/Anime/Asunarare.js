const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "asunarare",
    aliases: ["rasuna"],
    category: "Anime",
    description: "asuna",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rasuna = await db.fetch(`rasuna_${user.id}`)
    if (rasuna === null)rasuna ='You dont have this Card';
    if (rasuna === 0)rasuna ='You dont have this Card';
    if (rasuna === 1)rasuna =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Asuna**')
    .setAuthor('SAO Collection')
    .setColor('ffd9f7')
    .setImage('https://media.giphy.com/media/7xM9loGcAmqoU/giphy.gif')
    .addField('Owned', `${rasuna}`)
    .setFooter('#00022')
    message.channel.send(Fembed)




}}