const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kirito",
    aliases: ['kito'],
    category: "Anime",
    description: "kirito",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let kirito = await db.fetch(`kirito_${user.id}`)
    if (kirito === null)kirito ='You dont have this Card';
    if (kirito === 0)kirito ='You dont have this Card';
    if (kirito === 1)kirito =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Kirito**')
    .setAuthor('SAO Collection')
    .setColor('000000')
    .setImage('https://www.anime-planet.com/images/characters/kirito-30045.jpg')
    .addField('Owned', `${kirito}`)
    .setFooter('#00019')
    message.channel.send(Fembed)




}}