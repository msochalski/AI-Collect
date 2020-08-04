const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kazumarare",
    aliases: ["rkazuma"],
    category: "Anime",
    description: "rkazuma",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rkazuma = await db.fetch(`rkazuma_${user.id}`)
    if (rkazuma === null)rkazuma ='You dont have this Card';
    if (rkazuma === 0)rkazuma ='You dont have this Card';
    if (rkazuma === 1)rkazuma =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Kazuma**')
    .setAuthor('Konosuba Collection')
    .setColor('2a5437')
    .setImage('https://pa1.narvii.com/7129/9509575c56bc6d70b26baea5a44a95900cb38257r1-300-249_00.gif')
    .addField('Owned', `${rkazuma}`)
    .setFooter('#00011')
    message.channel.send(Fembed)




}}