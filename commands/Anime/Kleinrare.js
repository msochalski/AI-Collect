const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kleinrare",
    aliases: ["rklein"],
    category: "Anime",
    description: "klein",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rklein = await db.fetch(`rklein_${user.id}`)
    if (rklein === null)rklein ='You dont have this Card';
    if (rklein === 0)rklein ='You dont have this Card';
    if (rklein === 1)rklein =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Klein**')
    .setAuthor('SAO Collection')
    .setColor('f01400')
    .setImage('https://media.tenor.com/images/b9c3609d86dc125c912e2dc101239056/tenor.gif')
    .addField('Owned', `${rklein}`)
    .setFooter('#00025')
    message.channel.send(Fembed)




}}