const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kazumashiny",
    aliases: ["skazuma"],
    category: "Anime",
    description: "skazuma",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let skazuma = await db.fetch(`skazuma_${user.id}`)
    if (skazuma === null)skazuma ='You dont have this Card';
    if (skazuma === 0)skazuma ='You dont have this Card';
    if (skazuma === 1)skazuma =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Kazuma**')
    .setAuthor('Konosuba Collection')
    .setColor('2a5437')
    .setImage('https://media.giphy.com/media/LZmMH7lmHeNFe/200.gif')
    .addField('Owned', `${skazuma}`)
    .setFooter('#00012')
    message.channel.send(Fembed)




}}