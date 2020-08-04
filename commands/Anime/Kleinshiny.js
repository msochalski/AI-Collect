const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kleinshiny",
    aliases: ["sklein"],
    category: "Anime",
    description: "klein",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let sklein = await db.fetch(`sklein_${user.id}`)
    if (sklein === null)sklein ='You dont have this Card';
    if (sklein === 0)sklein ='You dont have this Card';
    if (sklein === 1)sklein =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Klein**')
    .setAuthor('SAO Collection')
    .setColor('f01400')
    .setImage('https://thumbs.gfycat.com/LegalSecondaryHoki-size_restricted.gif')
    .addField('Owned', `${sklein}`)
    .setFooter('#00026')
    message.channel.send(Fembed)

}}