const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "klein",
    category: "Anime",
    description: "klein",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let klein = await db.fetch(`klein_${user.id}`)
    if (klein === null)klein ='You dont have this Card';
    if (klein === 0)klein ='You dont have this Card';
    if (klein === 1)klein =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Klein**')
    .setAuthor('SAO Collection')
    .setColor('f01400')
    .setImage('https://s2.narvii.com/image/fdfibzhyis6yzyycqtmetqpocoqqqcee_00.jpg')
    .addField('Owned', `${klein}`)
    .setFooter('#00024')
    message.channel.send(Fembed)




}}