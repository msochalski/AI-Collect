const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "aqua",
    category: "Anime",
    description: "aqua",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let aqua = await db.fetch(`aqua_${user.id}`)
    if (aqua === null)aqua ='You dont have this Card';
    if (aqua === 0)aqua ='You dont have this Card';
    if (aqua === 1)aqua =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Aqua**')
    .setAuthor('Konosuba Collection')
    .setColor('70a7ff')
    .setImage('https://i.pinimg.com/236x/42/3c/8e/423c8e21de42d1f3c1814d55af9aa182--konosuba-aqua-anime.jpg')
    .addField('Owned', `${aqua}`)
    .setFooter('#00004')
    message.channel.send(Fembed)




}}