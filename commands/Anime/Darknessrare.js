const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "darknessrare",
    aliases: ["rdark"],
    category: "Anime",
    description: "rare darkness",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rdarkness = await db.fetch(`rdarkness_${user.id}`)
    if (rdarkness === null)rdarkness ='You dont have this Card';
    if (rdarkness === 0)rdarkness ='You dont have this Card';
    if (rdarkness === 1)rdarkness =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Darkness**')
    .setAuthor('Konosuba Collection')
    .setColor('f5e942')
    .setImage('https://i.pinimg.com/originals/97/70/40/9770409f25e4f3e1f860dd28d342be10.gif')
    .addField('Owned', `${rdarkness}`)
    .setFooter('#00008')
    message.channel.send(Fembed)




}}