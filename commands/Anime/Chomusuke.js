const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "chomusuke",
    category: "Anime",
    aliases: ["chomu"],
    description: "chomusuke",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let chomusuke = await db.fetch(`chomusuke_${user.id}`)
    if (chomusuke === null)chomusuke ='You dont have this Card';
    if (chomusuke === 0)chomusuke ='You dont have this Card';
    if (chomusuke === 1)chomusuke =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Chomusuke**')
    .setAuthor('Konosuba Collection')
    .setColor('301909')
    .setImage('https://pm1.narvii.com/6792/cec8aa2156d6a177d9e2e7316688d7d2a1d101b8v2_00.jpg')
    .addField('Owned', `${chomusuke}`)
    .setFooter('#00016')
    message.channel.send(Fembed)





}}